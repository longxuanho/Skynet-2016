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

            vm._helpers.initNewThongSoKyThuatParams(vm, vm.master);

            vm.gridData = {
                thongsokythuatsGrid: {
                    kData: {
                        dataSource: {
                            data: new kendo.data.ObservableObject([]),
                            pageSize: 8
                        },
                    },
                    kOptions: {
                        columns: [{
                            field: "nhom_thong_so",
                            title: "Nhóm",
                            type: "string",
                            width: "100px"
                        }, {
                            field: "ten",
                            title: "Thông số",
                            type: "string",
                            width: "150px"
                        }, {
                            field: "gia_tri",
                            title: "Giá trị",
                            type: "number",
                            width: "100px"
                        }, {
                            field: "don_vi",
                            title: "Đơn vị",
                            type: "string",
                            width: "50px"
                        }, {
                            field: "gia_tri_text",
                            title: "Giá trị*",
                            type: "string",
                            width: "60px"
                        }],
                        selectable: "row",
                        sortable: {
                            mode: "single",
                            allowUnsort: true
                        },
                        pageable: {
                            refresh: false,
                            pageSizes: false,
                            info: true,
                            buttonCount: 3,
                            numeric: false,
                            input: true,
                            previousNext: true
                        },
                        filterable: {
                            mode: 'menu',
                            extra: false
                        },
                        groupable: {
                            enabled: true,
                            showFooter: false,
                        },
                        reorderable: true,
                        scrollable: {
                            virtual: false
                        },
                        resizable: true,
                        columnMenu: false
                    },
                    gridOnChange: function(event) {
                    },
                    gridOnDataBound: function(event) {
                    }
                }
            }

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('thongsokythuats');

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                thongsokythuats: () => {
                    vm.gridData.thongsokythuatsGrid.kData.dataSource.data = ThongSoKyThuats.find({
                        'thiet_bi.keyId': vm.master._id
                    }).fetch();
                    return ThongSoKyThuats.find({
                        'thiet_bi.keyId': vm.master._id
                    });
                }
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            vm.addNewThongSoKyThuat = () => {
                let err = vm._helpers.validateUser('can_upsert_thong_so_ky_thuat');
                if (_.isEmpty(err)) {
                    err = vm._helpers.validateThongSoKyThuatForm(vm.newThongSoKyThuat);
                    if (_.isEmpty(err)) {

                        vm._helpers.buildNewThongSoKyThuat(vm.newThongSoKyThuat);
                        ThongSoKyThuats.insert(vm.newThongSoKyThuat, (error, result) => {
                            if (error) {
                                iNotifier.error('Không thể tạo mới thông số kỹ thuật này. ' + error.message + '.');
                            } else {
                                $scope.$apply( () => {
                                    vm._helpers.initNewThongSoKyThuatParams(vm, vm.master);
                                });                        
                                iNotifier.success('Thông số kỹ thuật của thiết bị được cập nhật thành công.');
                            }
                        });

                    } else {
                        iNotifier.error(err.message);
                    }
                } else {
                    iNotifier.error(err.message);
                }
            };

            vm.save = () => {

                let err = vm._helpers.validateUser('can_upsert_thong_so_ky_thuat');
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

            $scope.$watch('vm.newThongSoKyThuat.nhom_thong_so', (newVal) => {
                vm.pageOptions.isGiaTriKieuNumber = (_.contains(["Phân cấp cần trục"], newVal)) ? false : true; 
            });

            
        }
    }
});
