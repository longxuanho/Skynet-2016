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
            err = $scope._helpers.validateLoaiForm($scope.source);
            if (_.isEmpty(err)) {

                $scope._helpers.buildThietBi($scope.source);
                ThietBis.update({
                    _id: $rootScope.$stateParams.thietbiId
                }, {
                    $set: {
                        ten: $scope.source.ten,
                        nhom: $scope.source.nhom,
                        chung_loai: $scope.source.chung_loai,
                        ma: $scope.source.ma,
                        mo_ta: $scope.source.mo_ta,
                        ghi_chu: $scope.source.ghi_chu,
                        icon: $scope.source.icon,
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
                        iNotifier.success('Thiết bị "' + $scope.source.ten + '" được cập nhật thành công.');

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
        $scope.params.nhomSelectedId = newVal;

        // Reset lại giá trị của chủng loại sau khi chọn keyId của nhóm khác rồi quay về keyId của nhóm lúc đầu, delay 200ms cho quá trình init kendo
        if (newVal === $scope.master.phan_loai.nhom.keyId) {
            $timeout(()=>{
                $scope.source.phan_loai.chung_loai.keyId = $scope.master.phan_loai.chung_loai.keyId;
            }, 200);            
        }
        else    
            $scope.source.phan_loai.chung_loai.keyId = '';
    });

    $scope.$watch('source.phan_loai.chung_loai.keyId', (newVal) => {
        $scope.params.chungloaiSelectedId = newVal;
        
        // Reset lại giá trị của chủng loại sau khi chọn keyId của chủng loại khác rồi quay về keyId của chủng loại lúc đầu, delay 200ms cho quá trình init kendo
        if (newVal === $scope.master.phan_loai.chung_loai.keyId) {
            $timeout(()=>{
                $scope.source.phan_loai.loai.keyId = $scope.master.phan_loai.loai.keyId;
            }, 200);
        }
        else    
            $scope.source.phan_loai.loai.keyId = '';
    });

    $scope.$watch('source.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId', (newVal) => {
        $scope.params.hangsanxuatSelectedId = newVal;
        
        if (newVal === $scope.master.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId) {
            $timeout(()=>{
               $scope.source.ho_so_tb.thong_tin_chung.model_tb.keyId = $scope.master.ho_so_tb.thong_tin_chung.model_tb.keyId;
            }, 200);
        }
        else    
            $scope.source.ho_so_tb.thong_tin_chung.model_tb.keyId = '';
    });

});
