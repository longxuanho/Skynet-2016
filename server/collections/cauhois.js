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

        return CauHois.find(query, options);
    }
    return;    
});
