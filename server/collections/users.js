// ***************************************************
// COLLECTION HOOK
// ***************************************************

Meteor.users.before.insert(function(userId, doc) {
    if (!doc.profile)
        doc.profile = {};
    doc.profile.search_field = doc._id + ' : ' + doc.username + ' : ' + doc.emails[0].address + ' : ' + doc.profile.name;
});

Meteor.users.before.update(function(userId, doc, fieldNames, modifier, options) {
    if (modifier) {
        if (doc.profile && doc.profile.avatar && modifier.$set && _.has(modifier.$set, 'profile.avatar')) {
            console.log('removing old avatar... ', doc.profile.avatar.keyId);
            Images.remove({
                _id: doc.profile.avatar.keyId
            });
        }
    }
});


// ***************************************************
// PUB/SUB
// ***************************************************

Meteor.publish("users", function() {
    return Meteor.users.find({}, {
        fields: {
            emails: 1,
            profile: 1
        }
    });
});

Meteor.publish("users_single", function(id) {
    check(id, String);
    return Meteor.users.find({
        _id: id
    }, {
        fields: {
            emails: 1,
            profile: 1,
            status: 1,
            roles: 1
        }
    });
});

Meteor.publish("userStatus", function(options, searchString, searchBy) {

    if (searchString == null)
        searchString = '';
    if (searchBy == null)
        searchBy = 'profile.search_field';
    options = (options) ? options : {};

    options.fields = {
        emails: 1,
        profile: 1,
        status: 1,
        roles: 1
    }

    var query = {};
    var regex = {
        '$regex': '.*' + searchString || '' + '.*',
        '$options': 'i'
    };

    query[searchBy] = regex;

    Counts.publish(this, 'numberOfUsersTotal', Meteor.users.find({}), {
        noReady: true
    });

    Counts.publish(this, 'numberOfUsers', Meteor.users.find(query), {
        noReady: true
    });

    return Meteor.users.find(query, options);
});


// ***************************************************
// METHODS
// ***************************************************

Meteor.methods({
    /**
     * delete a user from a specific group
     * 
     * @method deleteUser
     * @param {String} targetUserId _id of user to delete
     * @param {String} group Company to update permissions for
     */
    deleteUser: function(targetUserId) {
        var loggedInUser = Meteor.user();

        if (targetUserId === Meteor.userId())
            throw new Meteor.Error(403, "Bạn không thể xóa tài khoản của chính mình!");

        if (Roles.userIsInRole(targetUserId, ['admin'], 'sky-project')) {
            throw new Meteor.Error(403, "Không thể xóa một user với quyền admin!");
        }

        if (!loggedInUser ||
            !Roles.userIsInRole(loggedInUser, ['manage-users', 'support-staff'], 'sky-project')) {
            throw new Meteor.Error(403, "Bạn không đủ quyền hạn để xóa user này!");
        }

        // remove permissions for target group
        var groups = ['sky-project', 'ktvt', 'xncg'];
        _.each(groups, function(group) {
            Roles.setUserRoles(targetUserId, [], group);
        });

        // do other actions required when a user is removed...
        Meteor.users.remove({
            _id: targetUserId
        }, function(error, result) {
            if (error) {
                console.log("Có lỗi khi gỡ bỏ tài khoản người dùng: ", error);
            } else {
                console.log("Số lượng tài khoản bị gỡ bỏ: " + result);
            }
        });
    },

    /**
     * update a user's permissions
     *
     * @param {Object} targetUserId Id of user to update
     * @param {Array} roles User's new permissions
     * @param {String} group Company to update permissions for
     */
    updateRoles: function(targetUserId, roles, group) {
        var loggedInUser = Meteor.user();

        if (_.contains(roles, 'admin'))
            throw new Meteor.Error(403, "Admin không thể thay đổi vai trò của mình cũng như không thể cấp quyền admin cho người khác .");

        if (_.contains(roles, 'super-manager'))
            throw new Meteor.Error(403, "Không thể cấp quyền super-manager cho người khác .");

        if (!loggedInUser ||
            !Roles.userIsInRole(loggedInUser, ['manage-users', 'support-staff'], 'sky-project')) {
            throw new Meteor.Error(403, "Bạn không đủ thẩm quyền cập nhật user này!");
        }

        Roles.setUserRoles(targetUserId, roles, group);

        // do other actions required when a user is updated...
    },

    forceResetUserPassword: function(userId, newPassword) {
        var loggedInUser = Meteor.user();

        if (!loggedInUser)
            throw new Meteor.Error(403, "Người dùng chưa đăng nhập!");

        if (!Roles.userIsInRole(loggedInUser, ['admin'], 'sky-project'))
            throw new Meteor.Error(403, "Bạn không đủ thẩm quyền reset mật khẩu này!");

        Accounts.setPassword(userId, newPassword);
        console.log('Reset mật khẩu thành công.');
    },

    checkPassword: function(digest) {
        if (this.userId) {
            var user = Meteor.user();
            var password = {
                digest: digest,
                algorithm: 'sha-256'
            };
            var result = Accounts._checkPassword(user, password);
            return result.error == null;
        } else {
            return false;
        }
    }
})
