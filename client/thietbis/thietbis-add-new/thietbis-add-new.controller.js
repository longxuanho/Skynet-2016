angular.module('angular-skynet').controller('ThietBisAddNewCtrl', function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier) {


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
        nhoms: () => {
            return Nhoms.find({}, {
                sort: {
                    'order': 1
                }
            });
        },
        // nhomSelectedId: null,
        chungloais: () => {
            return ChungLoais.find({
                'nhom.keyId': $scope.getReactively('params.nhomSelectedId')
            }, {
                sort: {
                    'order': 1
                }
            }).fetch();
        },
        // chungloaiSelectedId: null,
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
        // hangsanxuatSelectedId: null,
        modelthietbis: () => {
            return ModelThietBis.find({
                'hang_san_xuat.keyId': $scope.getReactively('params.hangsanxuatSelectedId')
            }, {
                sort: {
                    'ten': 1
                }
            }).fetch();
        },
        isLoggedIn: () => {
            return Meteor.userId() !== null;
        }
    });


    // ***************************************************
    // METHODS
    // ***************************************************            

    $scope.addNewThietBi = () => {
        let err = $scope._helpers.validateUser('can_upsert_thiet_bi');
        if (_.isEmpty(err)) {
            err = $scope._helpers.validateThietBiForm($scope.newThietBi);
            if (_.isEmpty(err)) {

                $scope._helpers.buildNewThietBi($scope.newThietBi);
                ThietBis.insert($scope.newThietBi, (error, result) => {
                    if (error) {
                        iNotifier.error('Không thể tạo mới thiết bị này. ' + error.message + '.');
                    } else {
                        $scope.$apply( () => {
                            $scope._helpers.initNewThietBiParams($scope);
                        });                        
                        iNotifier.success('Thiết bị được tạo mới thành công.');
                    }
                });

            } else {
                iNotifier.error(err.message);
            }
        } else {
            iNotifier.error(err.message);
        }
    };

    $scope.clearNewThietBiForm = () => {
        $scope._helpers.initNewThietBiParams($scope);
    };


    // ***************************************************
    // UTILS
    // ***************************************************

    $scope.utils = {
        // ***************************************************
        // KENDO
        // ***************************************************
        kendoOnChangeRestrictValues: function(e, field) {
            if (e.sender.selectedIndex == -1) {
                if (field === 'nhoms')
                    $scope.newThietBi.phan_loai.nhom.keyId = '';
                if (field === 'chungloais')
                    $scope.newThietBi.phan_loai.chung_loai.keyId = '';
                if (field === 'loais')
                    $scope.newThietBi.phan_loai.loai.keyId = '';
                if (field === 'donvisohuus')
                    $scope.newThietBi.don_vi_so_huu.keyId = '';
                if (field === 'donviquanlies')
                    $scope.newThietBi.don_vi_quan_ly.keyId = '';
                if (field === 'diabans')
                    $scope.newThietBi.dia_ban_hoat_dong.keyId = '';
                if (field === 'quocgias')
                    $scope.newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.keyId = '';
                if (field === 'hangsanxuats')
                    $scope.newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId = '';
                if (field === 'modelthietbis')
                    $scope.newThietBi.ho_so_tb.thong_tin_chung.model_tb.keyId = '';
            }
        },
        kendoOnDateChangeRestrict: function(e, field) {
            let startDate = e.sender._value;

            if (field == 'baohanh_batdau') {
                if ($scope.newThietBi.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh > 0) {
                    let endDate = moment(startDate).add(parseInt($scope.newThietBi.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh), 'M').toDate();
                    $('#baohanh_end').kendoDatePicker().data('kendoDatePicker').value(endDate);
                    $scope.newThietBi.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_ket_thuc = endDate;
                }
            }
        },
        kendoThongsokythuatGridOptions: {
            dataSource: {
                data: $scope.newThietBi.thong_so_ky_thuat,
                schema: {
                    model: {
                        fields: {
                            "loai_thong_so.nhom": {
                                type: "string"
                            },
                            "loai_thong_so.ten": {
                                type: "string"
                            },
                            "gia_tri": {
                                type: "number"
                            },
                            "don_vi": {
                                type: "string"
                            }
                        }
                    }
                },
                pageSize: 10
            },
            editable: true,
            pageable: true,
            sortable: true,
            columns: [{
                field: "loai_thong_so.nhom",
                title: "Nhóm",
                width: "25%"
            }, {
                field: "loai_thong_so.ten",
                title: "Thông số",
                width: "35%"
            }, {
                field: "gia_tri",
                title: "Giá trị",
                width: "20%"
            }, {
                field: "don_vi",
                title: "Đơn vị"
            }]
        },
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

    $scope.$watch('newThietBi.phan_loai.nhom.keyId', (newVal) => {
        $scope.params.nhomSelectedId = newVal;

        if ($scope.newThietBi && $scope.newThietBi.phan_loai && $scope.newThietBi.phan_loai.chung_loai)
            $scope.newThietBi.phan_loai.chung_loai.keyId = '';
    });

    $scope.$watch('newThietBi.phan_loai.chung_loai.keyId', (newVal) => {
        $scope.params.chungloaiSelectedId = newVal;

        if ($scope.newThietBi && $scope.newThietBi.phan_loai && $scope.newThietBi.phan_loai.loai)
            $scope.newThietBi.phan_loai.loai.keyId = '';
    });

    $scope.$watch('newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId', (newVal) => {
        $scope.params.hangsanxuatSelectedId = newVal;

        if ($scope.newThietBi && $scope.newThietBi.ho_so_tb && $scope.newThietBi.ho_so_tb.thong_tin_chung && $scope.newThietBi.ho_so_tb.thong_tin_chung.model_tb)
            $scope.newThietBi.ho_so_tb.thong_tin_chung.model_tb.keyId = '';
    });

    $scope.$watch('newThietBi.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh', (newVal) => {
        if (newVal > 0) {
            if ($scope.newThietBi.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau) {
                let endDate = moment($scope.newThietBi.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau).add(parseInt(newVal), 'M').toDate();
                $('#baohanh_end').kendoDatePicker().data('kendoDatePicker').value(endDate);
            }
        }
    })





});
