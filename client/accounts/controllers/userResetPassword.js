angular.module('angular-skynet').controller('UserResetPasswordCtrl', function($scope, $rootScope, $stateParams, $state, $meteor, skynetHelpers, $timeout) {

    // ***************************************************
    // INITIALIZE
    // ***************************************************

    $scope._data = skynetHelpers.data;

    $scope.resetState = 'idle';
    $scope.credentials = {
        newPassword: '',
        repeatNewPassword: '',
    }


    // $scope.submitResetPassword = function() {
    //     var error = $scope.helpers.validateResetPasswordForm();
    //     if (_.isEmpty(error)) {
    //         $meteor.resetPassword($stateParams.token, $scope.resetPassword.newPassword).then(function() {
    //             toastr.success('Mật khẩu mới được thiết lập thành công.');
    //             console.log('Reset password success');
    //         }, function(err) {
    //             toastr.success('Có lỗi xảy ra trong quá trình đặt lại mật khẩu. Xin vui lòng liên hệ với quản trị viên.')
    //             console.log('Error resetting password - ', err);
    //         });
    //     } else {
    //         toastr.error(error.message);
    //     }
    // }

    $scope.resetPassword = () => {
        let error = $scope.utils.validateNewPassword();
        if (_.isEmpty(error)) {
            
            $scope.resetState = 'onSendingEmail';
            Accounts.resetPassword($stateParams.token, $scope.credentials.newPassword, (err) => {
                if (err) {
                    $scope.error = err;
                    toastr.error('Có lỗi xảy ra trong quá trình reset mật khẩu của bạn: ' + err.reason + '.');
                    $scope.$apply(() => {
                        $scope.resetState = 'failed';
                    });
                } else {
                    $scope.$apply(() => {
                        $scope.resetState = 'ok';
                        $timeout(() => {
                            $state.go($scope._data.states.master);
                            toastr.success('Reset mật khẩu thành công.');
                        }, 4000);
                    });
                }
            });

        } else {
            toastr.error(error.message);
        }

    }

    // ***************************************************
    // ULTILS
    // ***************************************************
    $scope.utils = {
        validateNewPassword: function() {
            let error = {};
            if (!$scope.credentials.newPassword) {
                error.message = "Xin vui lòng nhập mật khẩu mới của bạn";
                return error;
            }
            if ($scope.credentials.newPassword.length < 8) {
                error.message = "Độ dài mật khẩu mới không được ít hơn 8 ký tự";
                return error;
            }
            if ($scope.credentials.newPassword !== $scope.credentials.repeatNewPassword) {
                error.message = "Mật khẩu xác nhận không khớp. Xin vui lòng thử lại.";
                return error;
            }
            return;
        }
    }

});
