angular.module('angular-skynet').controller('ThietBisDetailsCtrl', function($scope, skynetHelpers, $rootScope, iNotifier, $timeout) {



    // ***************************************************
    // INITIALIZE
    // ***************************************************

    $scope._helpers = skynetHelpers.helpers;
    $scope._helpers.initNewThietBiParams($scope);

    $scope.params = {
        nhomSelectedId: null,
        chungloaiSelectedId: null,
        hangsanxuatSelectedId: null
    };

    // ***************************************************
    // REACTIVE HELPERS
    // ***************************************************

    $scope.helpers({
        source: () => {
            $scope.master = ThietBis.findOne({
                _id: $rootScope.$stateParams.thietbiId
            });
            return angular.copy($scope.master);
        },
        nhoms: () => {
            return Nhoms.find({}, {
                sort: {
                    'order': 1
                }
            });
        },
        chungloais: () => {
            return ChungLoais.find({
                'nhom.keyId': $scope.getReactively('params.nhomSelectedId')
            }, {
                sort: {
                    'order': 1
                }
            }).fetch();
        },
        loais: () => {
            return Loais.find({
                'chung_loai.keyId': $scope.getReactively('params.chungloaiSelectedId')
            }, {
                sort: {
                    'order': 1
                }
            }).fetch();
        },
        donvis: () => {
            return DonVis.find({}, {
                sort: {
                    'ten': 1
                }
            }).fetch();
        },
        diabans: () => {
            return DiaBans.find({}, {
                sort: {
                    'ten': 1
                }
            }).fetch();
        },
        quocgias: () => {
            return QuocGias.find({}, {
                sort: {
                    'ten': 1
                }
            }).fetch();
        },
        hangsanxuats: () => {
            return HangSanXuats.find({}, {
                sort: {
                    'ten': 1
                }
            }).fetch();
        },
        modelthietbis: () => {
            return ModelThietBis.find({
                'hang_san_xuat.keyId': $scope.getReactively('params.hangsanxuatSelectedId')
            }, {
                sort: {
                    'ten': 1
                }
            }).fetch();
        }
    });

    // // ***************************************************
    // // METHODS
    // // ***************************************************

    $scope.save = () => {

        let err = $scope._helpers.validateUser('can_upsert_thiet_bi');
        if (_.isEmpty(err)) {
            err = $scope._helpers.validateThietBiForm($scope.source);
            if (_.isEmpty(err)) {

                $scope._helpers.buildThietBi($scope.source);
                ThietBis.update({
                    _id: $rootScope.$stateParams.thietbiId
                }, {
                    $set: {
                        ma_tb: $scope.source.ma_tb,
                        phan_loai: $scope.source.phan_loai,
                        ho_so_tb: $scope.source.ho_so_tb,
                        status: $scope.source.status,
                        mo_ta: $scope.source.mo_ta,
                        ghi_chu: $scope.source.ghi_chu,
                        dia_ban_hoat_dong: $scope.source.dia_ban_hoat_dong,
                        don_vi_quan_ly: $scope.source.don_vi_quan_ly,
                        don_vi_so_huu: $scope.source.don_vi_so_huu,                        
                        don_vi_field: $scope.source.don_vi_field,                        
                        isPublic: $scope.source.isPublic,
                        isArchived: $scope.source.isArchived,
                        'metadata.ngay_cap_nhat_cuoi': $scope.source.metadata.ngay_cap_nhat_cuoi,
                        'metadata.nguoi_cap_nhat_cuoi': $scope.source.metadata.nguoi_cap_nhat_cuoi,
                        'metadata.nguoi_cap_nhat_cuoi_field': $scope.source.metadata.nguoi_cap_nhat_cuoi_field,
                        'metadata.search_field': $scope.source.metadata.search_field
                    }
                }, (error) => {
                    if (error) {
                        iNotifier.error('Không thể cập nhật thiết bị này. ' + error.message + '.');
                    } else {
                        iNotifier.success('Thiết bị "' + $scope.source.ma_tb.ma_tb + '" được cập nhật thành công.');

                        $scope.master = ThietBis.findOne({
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

    $scope.reset = () => {
        angular.copy($scope.master, $scope.source);
    };


    // ***************************************************
    // UTILS
    // ***************************************************

    $scope.utils = {
        accentColor: _.findWhere($scope._data.general.themes, {
            name: $rootScope.main_theme
        }).color_accent
    };


    // ***************************************************
    // WATCHERS
    // ***************************************************

    $rootScope.$watch('main_theme', (newVal) => {
        $scope.utils.accentColor = _.findWhere($scope._data.general.themes, {
            name: newVal
        }).color_accent;
    });

    $scope.$watch('source.phan_loai.nhom.keyId', (newVal) => {
        
        if ($scope.master && $scope.master.phan_loai) {
            $scope.params.nhomSelectedId = newVal;

            // Reset lại giá trị của chủng loại sau khi chọn keyId của nhóm khác rồi quay về keyId của nhóm lúc đầu, delay 500ms cho quá trình init kendo
            if (newVal === $scope.master.phan_loai.nhom.keyId) {
                $timeout(()=>{
                    $scope.source.phan_loai.chung_loai.keyId = $scope.master.phan_loai.chung_loai.keyId;
                }, 500);            
            }
            else    
                $scope.source.phan_loai.chung_loai.keyId = '';
        }
        
    });

    $scope.$watch('source.phan_loai.chung_loai.keyId', (newVal) => {
        
        if ($scope.master && $scope.master.phan_loai) {
            $scope.params.chungloaiSelectedId = newVal;
            
            // Reset lại giá trị của chủng loại sau khi chọn keyId của chủng loại khác rồi quay về keyId của chủng loại lúc đầu, delay 500ms cho quá trình init kendo
            if (newVal === $scope.master.phan_loai.chung_loai.keyId) {
                $timeout(()=>{
                    $scope.source.phan_loai.loai.keyId = $scope.master.phan_loai.loai.keyId;
                }, 500);
            }
            else    
                $scope.source.phan_loai.loai.keyId = '';
        }
    });

    $scope.$watch('source.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId', (newVal) => {
        
        if ($scope.master && $scope.master.ho_so_tb) {
            $scope.params.hangsanxuatSelectedId = newVal;
            
            if (newVal === $scope.master.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId) {
                $timeout(()=>{
                   $scope.source.ho_so_tb.thong_tin_chung.model_tb.keyId = $scope.master.ho_so_tb.thong_tin_chung.model_tb.keyId;
                }, 500);
            }
            else    
                $scope.source.ho_so_tb.thong_tin_chung.model_tb.keyId = '';
        }
    });

    $scope.$watch('source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh', (newVal) => {
        if (newVal > 0) {
            if ($scope.source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau) {
                let endDate = moment($scope.source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau).add(parseInt(newVal), 'M').toDate();
                $('#baohanh_end').kendoDatePicker().data('kendoDatePicker').value(endDate);
            }
        }
    });

    $scope.$watch('source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau', (newVal) => {
        if (newVal > 0) {
            if ($scope.source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh) {
                let endDate = moment($scope.source.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau).add(parseInt(newVal), 'M').toDate();
                $('#baohanh_end').kendoDatePicker().data('kendoDatePicker').value(endDate);
            }
        }
    });

});
