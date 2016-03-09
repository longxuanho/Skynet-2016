// **************************************************
// ALLOW / DENY
// **************************************************

SuaChuas.allow({
    insert: function(userId, doc) {
        // Check Roles
        var group = Meteor.settings.private.roles['master-group'];
        var rights = Meteor.settings.private.rights['can-insert'].suachuas[group];

        if (Roles.userIsInRole(userId, rights, group)) {
            return userId && doc.metadata.nguoi_tao === userId;
        }
        return false;
    },
    update: function(userId, doc, fields, modifier) {
        // Check Roles
        var group = Meteor.settings.private.roles['master-group'];
        var rights = Meteor.settings.private.rights['can-update'].suachuas[group];

        if (Roles.userIsInRole(userId, rights, group)) {
            return true;
        }
        return false;
    },
    remove: function(userId, doc) {
        // Check Roles
        var group = Meteor.settings.private.roles['master-group'];
        var rights = Meteor.settings.private.rights['can-remove'].suachuas[group];

        if (Roles.userIsInRole(userId, rights, group)) {
            return true;
        }
        return false;
    }
});

// ***************************************************
// COLLECTION HOOKS
// ***************************************************

SuaChuas.after.insert(function (userId, doc) {
    ddpEvents.emit('suachuasChageEvent', { 
        action: 'insert',
        data: doc
    });
});

SuaChuas.after.update(function (userId, doc) {
    if (this.previous.trang_thai.ma !== doc.trang_thai.ma) {
        ddpEvents.emit('suachuasChageEvent', { 
            action: 'update',
            data: doc
        });
    }
});

// ***************************************************
// PUBLISH / SUBSCRIBE
// ***************************************************

Meteor.publish("suachuas", function(options, searchString, searchBy, tags) {

    if (searchString == null)
        searchString = '';
    if (searchBy == null)
        searchBy = 'noi_dung.noi_dung';

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

    Counts.publish(this, 'numberOfSuaChuasTotal', SuaChuas.find({
        '$or': query['$or']
    }), {
        noReady: true
    });


    Counts.publish(this, 'numberOfSuaChuas', SuaChuas.find(query), {
        noReady: true
    });

    return SuaChuas.find(query, options);
});

Meteor.publish("suachualogs", function(options) {
    return SuaChuaLogs.find();
});
