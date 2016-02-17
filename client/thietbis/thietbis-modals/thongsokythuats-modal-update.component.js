angular.module('angular-skynet').directive('thongsokythuatsModalUpdate', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/thietbis/thietbis-modals/thongsokythuats-modal-update.html',
        controllerAs: 'vm',
        scope: {
        	id: '=',
            thietbi: '='
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
            vm.dictionary = angular.copy(skynetDictionary.data.thietbis.thong_so_ky_thuat);

            vm.modalOptions = {
                isGiaTriKieuNumber: true
            }

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                source: () => {
                    vm.master = ThongSoKyThuats.findOne({
                        _id: vm.getReactively('id')
                    });
                    return angular.copy(vm.master);
                }
            });

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                isTrongThoiGianBaoHanh: function() {
                    if ($scope.source)
                        if ($scope.source.ho_so_tb && $scope.source.ho_so_tb.thong_tin_chung && $scope.source.ho_so_tb.thong_tin_chung.bao_hanh && $scope.source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_ket_thuc)
                            return (new Date()) < $scope.source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_ket_thuc;
                    return false;
                },
                isEditable: function() {
                    return _.isEmpty($scope._helpers.validateUser('can_upsert_thiet_bi'));
                },
                goToEditPage: function() {
                    this.closeModal();
                    $timeout(()=>{
                        $state.go('thietbis.update', {thietbiId: $scope.source._id});
                    }, 600);          
                },
                closeModal: function() {
                    let modal = UIkit.modal("#modal_thietbis_details");
                    if (modal.isActive()) {
                        modal.hide();
                    }
                }
            }

            // ***************************************************
            // WATCHERS
            // ***************************************************

            
        }
    }
});
