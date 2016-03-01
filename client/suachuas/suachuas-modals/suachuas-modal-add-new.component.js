angular.module('angular-skynet').directive('suachuasModalAddNew', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/suachuas/suachuas-modals/suachuas-modal-add-new.html',
        controllerAs: 'vm',
        scope: {
        	source: '='
        },
        bindToController: true,
        controller: function($scope, $rootScope, skynetHelpers, $state, $timeout, $reactive, skynetDictionary) {
            
            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._helpers = skynetHelpers.helpers;
            vm.dictionary = angular.copy(skynetDictionary.data.suachuas);

            vm.utils = {
                isEditable: function() {
                    return _.isEmpty($scope._helpers.validateUser('can_upsert_cau_hoi'));
                },
                goToEditPage: function() {
                    this.closeModal();
                    $timeout(()=>{
                        $state.go('cauhois.update', {cauhoiId: $scope.source._id});
                    }, 600);          
                },
                closeModal: function() {
                    let modal = UIkit.modal("#modal_suachuas_add_new");
                    if (modal.isActive()) {
                        modal.hide();
                    }
                }
            }
        }
    }
});
