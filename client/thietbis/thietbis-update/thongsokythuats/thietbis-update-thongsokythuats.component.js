angular.module('angular-skynet').directive('thietbisUpdateThongsokythuats', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/thietbis/thietbis-update/thongsokythuats/thietbis-update-thongsokythuats.template.html',
        controllerAs: 'vm',
        scope: {
            source: '=',
            master: '='
        },
        bindToController: true,
        controller: function($scope, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            vm._helpers.initNewThietBiParams(vm);

            vm.dictionary = angular.copy(skynetDictionary.data.thietbis.thong_so_ky_thuat);

            vm.pageOptions = {
                isGiaTriKieuNumber: true
            }

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            vm.save = () => {

                let err = vm._helpers.validateUser('can_upsert_thiet_bi');
                if (_.isEmpty(err)) {
                    err = vm._helpers.validateThietBiForm(vm.source);
                    if (_.isEmpty(err)) {

                        vm._helpers.buildThietBi(vm.source);
                        ThietBis.update({
                            _id: $rootScope.$stateParams.thietbiId
                        }, {
                            $set: {
                                ma_tb: vm.source.ma_tb,
                                phan_loai: vm.source.phan_loai,
                                ho_so_tb: vm.source.ho_so_tb,
                                status: vm.source.status,
                                mo_ta: vm.source.mo_ta,
                                ghi_chu: vm.source.ghi_chu,
                                dia_ban_hoat_dong: vm.source.dia_ban_hoat_dong,
                                don_vi_quan_ly: vm.source.don_vi_quan_ly,
                                don_vi_so_huu: vm.source.don_vi_so_huu,                        
                                don_vi_field: vm.source.don_vi_field,                        
                                isPublic: vm.source.isPublic,
                                isArchived: vm.source.isArchived,
                                'metadata.ngay_cap_nhat_cuoi': vm.source.metadata.ngay_cap_nhat_cuoi,
                                'metadata.nguoi_cap_nhat_cuoi': vm.source.metadata.nguoi_cap_nhat_cuoi,
                                'metadata.nguoi_cap_nhat_cuoi_field': vm.source.metadata.nguoi_cap_nhat_cuoi_field,
                                'metadata.search_field': vm.source.metadata.search_field
                            }
                        }, (error) => {
                            if (error) {
                                iNotifier.error('Không thể cập nhật thiết bị này. ' + error.message + '.');
                            } else {
                                iNotifier.success('Thiết bị "' + vm.source.ma_tb.ma_tb + '" được cập nhật thành công.');

                                vm.master = ThietBis.findOne({
                                    _id: $rootScope.$stateParams.thietbiId
                                });
                            }
                        });

                    } else {
                        iNotifier.error(err.message);
                    }
                } else {
                    iNotifier.error(err.message);
                }
            };

            vm.reset = () => {
                console.log('vm.source: ', vm.source);
                console.log('vm.master: ', vm.master);
                angular.copy(vm.master, vm.source);
            };

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                accentColor: _.findWhere(vm._data.general.themes, {
                    name: $rootScope.main_theme
                }).color_accent
            };

            // ***************************************************
            // FIX BUGS
            // ***************************************************

            // $timeout(()=>{
            //    $("#phanloai_chungloai_dropdown").data("kendoDropDownList").refresh(); // fix bugs kendo không hiển thị được giá trị tại field chủng loại
            // }, 1000);

            // ***************************************************
            // WATCHERS
            // ***************************************************

            $rootScope.$watch('main_theme', (newVal) => {
                vm.utils.accentColor = _.findWhere(vm._data.general.themes, {
                    name: newVal
                }).color_accent;
            });

            $scope.$watch('vm.source.thong_so_ky_thuat.nhom_thong_so', (newVal) => {
                vm.pageOptions.isGiaTriKieuNumber = (_.contains(["Phân cấp cần trục"], newVal)) ? false : true; 
            });

            
        }
    }
});
