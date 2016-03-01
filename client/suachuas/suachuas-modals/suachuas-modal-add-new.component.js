angular.module('angular-skynet').directive('suachuasModalAddNew', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/suachuas/suachuas-modals/suachuas-modal-add-new.html',
        controllerAs: 'vm',
        scope: {
        	source: '='
        },
        bindToController: true,
        controller: function($scope, $rootScope, skynetHelpers, $state, $timeout, $reactive, skynetDictionary, iNotifier, $timeout) {
            
            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._helpers = skynetHelpers.helpers;
            vm.dictionary = angular.copy(skynetDictionary.data.suachuas);

            vm._helpers.initNewSuaChuaParams(vm);
            vm.modalOptions = {
                errorMessage: 'This is an error'
            }

            let myAlert = $('.suachua_alert');
            myAlert.hide();

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            vm.utils = {
                resetSuaChua: function() {
                    vm._helpers.initNewSuaChuaParams(vm);
                },
                showModalAlert: function(message) {
                    vm.modalOptions.errorMessage = message;
                    myAlert.slideDown();
                    $timeout(() => {
                        myAlert.slideUp();
                    }, 3000);
                },
                addNewSuaChua: function() {
                    let err = vm._helpers.validateUser('can_upsert_sua_chua');
                    if (_.isEmpty(err)) {
                        err = vm._helpers.validateSuaChuaForm(vm.newSuaChua);
                        if (_.isEmpty(err)) {

                            vm._helpers.buildNewSuaChua(vm.newSuaChua);
                            SuaChuas.insert(vm.newSuaChua, (error, result) => {
                                if (error) {
                                    // iNotifier.error('Không thể tạo mới dữ liệu về lượt sửa chữa này. ' + error.message + '.');
                                    this.showModalAlert('Không thể tạo mới dữ liệu về lượt sửa chữa này. ' + error.message + '.');
                                } else {
                                    $scope.$apply( () => {
                                        vm.utils.resetSuaChua();
                                        this.showModalAlert('Dữ liệu về lượt sửa chữa được tạo mới thành công.');
                                    });
                                    // iNotifier.success('Dữ liệu về lượt sửa chữa được tạo mới thành công.');
                                }
                            });

                        } else {
                            // iNotifier.error(err.message);
                            this.showModalAlert(err.message);
                        }
                    } else {
                        // iNotifier.error(err.message);
                        this.showModalAlert(err.message);
                    }
                },
                resetCascadeDropdown: function(selector) {
                    $(selector).data("kendoDropDownList").value({});
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
