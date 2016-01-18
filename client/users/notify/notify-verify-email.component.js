angular.module('angular-skynet').directive('notifyVerifyEmail', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/users/notify/notify-verify-email.html',
        controllerAs: 'NotifyVerifyEmail',
        controller: function($scope, $state, $stateParams, $timeout, skynetHelpers) {


            // ***************************************************
            // INITIALIZE
            // ***************************************************
            $scope._data = skynetHelpers.data;
            $scope.message = '';
            $scope.verifyState = 'ongoing';  

            // ***************************************************
            // METHODS
            // ***************************************************
            $scope.verifyEmail = function() {
                Accounts.verifyEmail($stateParams.token, (err) => {
                    if (err) {
                        $scope.$apply(() => {
                            $scope.verifyState = 'failed';
                            $scope.message = err.reason;
                        });
                        toastr.error('Không thể xác thực địa chỉ email này. Xin vui lòng thử lại sau.');
                        console.log('Error verifying password - ', err);
                    } else {
                        $scope.$apply(() => {
                            $scope.verifyState = 'ok';
                            $timeout(() => {
                                $state.go($scope._data.states.master);
                                toastr.success('Địa chỉ email của bạn đã được kích hoạt thành công!');
                            }, 5000);
                        });                        
                        console.log('Success verifying email');
                    }
                });
            };

            $timeout(() => {
                $scope.verifyEmail();
            }, 3000);

        }
    }
});