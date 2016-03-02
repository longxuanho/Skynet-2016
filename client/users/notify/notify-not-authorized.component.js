angular.module('angular-skynet').directive('notifyNotAuthorized', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/users/notify/notify-not-authorized.html',
        controllerAs: 'vm',
        controller: function($scope, $state, $stateParams, $timeout, skynetHelpers, iNotifier) {


            // ***************************************************
            // INITIALIZE
            // ***************************************************
            $scope.message = '';  

            // ***************************************************
            // METHODS
            // ***************************************************
           

        }
    }
});