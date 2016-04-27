angular.module('angular-skynet').directive('dashboardXuongdvktModalKhuvucsHelper', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-modal-khuvucs-helper.html',
        controller: function($scope) {
        	
        	// ***************************************************
            // INITIALIZE
            // ***************************************************


        	// ***************************************************
            // UTILS
            // ***************************************************
        	$scope.utils = {    
                closeModal: function() {
                    let modal = UIkit.modal("#modal_xuongdvkt_dashboard_khuvucs_helper");
                    if (modal.isActive()) {
                        modal.hide();
                    }
                }
            }
        }
    }
});
