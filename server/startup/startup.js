Meteor.startup(function() {

    if (Meteor.users.find().count() === 0) {
        let users = [
        	// Password sẽ được admin thay đổi trong lần đăng nhập đầu tiên
            { name: "Long Hồ", email: "longxuanho@gmail.com", password: "defaultadminpasswordforskynet", roles: ['admin'] }
        ];

        _.each(users, (user) => {
            let id;

            id = Accounts.createUser({
                email: user.email,
                password: user.password,
                profile: { name: user.name }
            });

            if (user.roles.length > 0) {
            	// Need _id of existing user record so this call must come
    			// after `Accounts.createUser` or `Accounts.onCreate`
    			Roles.addUsersToRoles(id, user.roles, 'sky-project');
            }

        });

    }

});
