angular.module('angular-skynet').controller('UserProfileCtrl', function($scope, $rootScope, $state, $meteor, Skynet) {

    // ***************************************************
    // INITIALIZE
    // ***************************************************
    $scope._helpers = Skynet.helpers;
    $scope._utils = Skynet.settings.accounts.utils;


    // ***************************************************
    // SUBSCRIBE
    // ***************************************************    
    // $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
    $scope.$meteorSubscribe('users_single', $rootScope.currentUser._id);
    $scope.user = $meteor.object(Meteor.users, $rootScope.currentUser._id, false);

    // ***************************************************
    // METHODS
    // ***************************************************
    $scope.updateProfile = function() {
        err = $scope.helpers.validateUserProfileForm();
        if (_.isEmpty(err)) {

            $scope.helpers.buildProfile();
            $scope.user.save().then(function(numberOfDocs) {
                toastr.success('Hồ sơ cá nhân của bạn đã được cập nhật thành công.');
                console.log('lưu trữ thành công ', numberOfDocs);
            }, function(error) {
                toastr.error('Không thể cập nhật hồ sơ của bạn vào lúc này. Error: ' + error.message + '.');
                console.log('có lỗi xảy ra trong quá trình lưu dữ liệu ', error);
            });

        } else {
            toastr.error(err.message);
        }
    };

    $scope.changePassword = function() {
        err = $scope.helpers.validateChangePasswordForm();
        if (_.isEmpty(err)) {

            $meteor.changePassword($scope.password.current, $scope.password.new).then(function() {
                console.log('Cập nhật mật khẩu mới thành công');
                toastr.success('Cập nhật  mật khẩu mới thành công!');
            }, function(err) {
                console.log('Có lỗi khi cập nhật mật khẩu - ', err);
                toastr.error('Mật khẩu đang dùng không khớp. Xin vui lòng thử lại.')
            });

            // var digest = Package.sha.SHA256($scope.password.current);
            // Meteor.call('checkPassword', digest, function(err, result) {
            //     if (result) {
            //         console.log('the current passwords match!');
            //     } else {
            //         console.log('not match');
            //     }
            // });

        } else {
            toastr.error(err.message);
        }
    }


    // ***************************************************
    // HELPERS
    // ***************************************************
    $scope.helpers = {
        validateUserProfileForm: function() {

        },
        validateChangePasswordForm: function() {

        },
        buildProfile: function() {

        }
    }

    // ***************************************************
    // ULTILS
    // ***************************************************
    $scope.utils = {}

});
