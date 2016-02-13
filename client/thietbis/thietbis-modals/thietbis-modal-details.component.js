angular.module('angular-skynet').directive('thietbisModalDetails', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/thietbis/thietbis-modals/thietbis-modal-details.html',
        controllerAs: 'thietbisModalDetails',
        scope: {
        	source: '='
        },
        controller: function($scope, $rootScope) {
        }
    }
});
