// Validating using roles

// Accounts.validateNewUser(function (user) {
//   var loggedInUser = Meteor.user();

//   if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'], 'sky-project')) { 
//     return true;
//   }

//   throw new Meteor.Error(403, "Bạn không có quyền tạo user này!");
// });