// **************************************************
// ALLOW / DENY
// **************************************************

CauHois.allow({
    insert: function(userId, doc) {
        // Check Roles
        var group = Meteor.settings.private.roles['master-group'];
        var rights = Meteor.settings.private.rights['can-insert'].cauhois[group];

        if (Roles.userIsInRole(userId, rights, group)) {
            return userId && doc.metadata.nguoi_tao === userId;
        }
        return false;
    },
    update: function(userId, doc, fields, modifier) {
        // Check Roles
        var group = Meteor.settings.private.roles['master-group'];
        var rights = Meteor.settings.private.rights['can-update'].cauhois[group];

        if (Roles.userIsInRole(userId, rights, group)) {
            return true;
        }
        return false;
    },
    remove: function(userId, doc) {
        // Check Roles
        var group = Meteor.settings.private.roles['master-group'];
        var rights = Meteor.settings.private.rights['can-remove'].cauhois[group];

        if (Roles.userIsInRole(userId, rights, group)) {
            return true;
        }
        return false;
    }
});


// ***************************************************
// COLLECTION HOOKS
// ***************************************************
CauHois.after.insert(function(userId, doc) {
    // Sau khi tạo mới câu hỏi thi -> ghi vào log
    let user = Meteor.users.findOne({_id: userId});
    if (user) {
        let now = new Date,
            new_log = {
                subject: 'cauhois',
                category: 'ky_thuat',
                section: doc.phan_loai.nhom_tb.ten,
                action: 'Tạo mới',
                user: {
                    userId: userId,
                    userName: user.profile ? user.profile.name : 'Vô danh',
                    userEmail: user.emails[0].address
                },
                target: {
                    keyId: doc._id,
                    ref: doc.noi_dung.tieu_de,
                },
                when: {
                    time: now,
                    time_day_str: moment(now).format('YYYY-MM-DD'),
                    time_month_str: moment(now).format('YYYY-MM'),
                    time_year_str: moment(now).format('YYYY')
                }
            }
            SkyLogs.insert(new_log, (error) => {
                if (error) {
                    console.log('SkyLogs - Error: ', error.reason);
                }
            });
    }    
    

});

// ***************************************************
// PUBLISH / SUBSCRIBE
// ***************************************************

Meteor.publish("cauhois", function(options, searchString, searchBy, tags, loaitbs, bacthis) {

    // Check Security...
    let group = Meteor.settings.private.roles['master-group'],
        rights = Meteor.settings.private.rights['can-view'].cauhois[group];

    if (this.userId && Roles.userIsInRole(this.userId, rights, group)) {
        if (searchString == null)
            searchString = '';
        if (searchBy == null)
            searchBy = 'noi_dung.tieu_de';

        var query = {};
        var regex = {
            '$regex': '.*' + searchString || '' + '.*',
            '$options': 'i'
        };

        if (!_.isEmpty(tags)) {
            query['tags'] = {
                $in: tags
            };
        }

        if (!_.isEmpty(loaitbs)) {
            query['phan_loai.loai_tb'] = {
                $in: loaitbs
            };
        }

        if (!_.isEmpty(bacthis)) {
            query['phan_loai.bac_thi'] = {
                $in: bacthis
            };
        }

        query[searchBy] = regex;

        query['$or'] = [{
            '$and': [{
                'isPublic': true
            }, {
                'isPublic': {
                    '$exists': true
                }
            }]
        }, {
            '$and': [{
                'metadata.nguoi_tao': this.userId
            }, {
                'metadata.nguoi_tao': {
                    '$exists': true
                }
            }]
        }];

        Counts.publish(this, 'numberOfCauHois', CauHois.find(query), {
            noReady: true
        });

        return CauHois.find(query, options);
    }
    return;    
});

Meteor.publish("cauhois_statistics", function(section) {
    if (!section)
        section = 'ky_thuat';

    Counts.publish(this, 'numberOfCauHoisTotal', CauHois.find({
    }), {
        noReady: true
    });

    return CauHois.find({
        'lop.ma': section
    }, {
        fields: {
            _id: 1,
            phan_loai: 1,
            fields: 1
        }
    });
});
