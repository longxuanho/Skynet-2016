angular.module('angular-skynet').controller('NhanSusAddNewCtrl', function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, data_nhansus) {


    // ***************************************************
    // INITIALIZE
    // ***************************************************

    $scope._helpers = skynetHelpers.helpers;
    $scope._helpers.initNewNhanSuParams($scope);
    $scope.resource = angular.copy(data_nhansus);
    $scope.kOptions = {
        don_vi: $scope.resource.don_vi,
        departments: [],
        subdepartments: [],
        isVisible_queQuan: false,
    }

    // ***************************************************
    // REACTIVE HELPERS
    // ***************************************************

    $scope.helpers({
        donvis: () => {
            return DonVis.find({}, {
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

    $scope.addNewNhanSu = () => {
        let err = $scope._helpers.validateUser('can_upsert_nhan_su');
        if (_.isEmpty(err)) {
            err = $scope._helpers.validateNhanSuForm($scope.newNhanSu);
            if (_.isEmpty(err)) {

                $scope._helpers.buildNewNhanSu($scope.newNhanSu);
                NhanSus.insert($scope.newNhanSu, (error, result) => {
                    if (error) {
                        iNotifier.error('Không thể tạo mới nhân sự này. ' + error.message + '.');
                    } else {
                        $scope._helpers.initNewNhanSuParams($scope);
                        iNotifier.success('Nhân sự được tạo mới thành công.');
                    }
                });

            } else {
                iNotifier.error(err.message);
            }
        } else {
            iNotifier.error(err.message);
        }
    };

    $scope.clearNewNhanSuForm = () => {
        $scope._helpers.initNewNhanSuParams($scope);
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
                if (field === 'don_vi')
                    $scope.newNhanSu.don_vi = '';
                if (field === 'to_chuc')
                    $scope.newNhanSu.to_chuc = '';
                // if (field === 'loais')
                //     $scope.newNhanSu.phan_loai.loai.keyId = '';
                // if (field === 'donvisohuus')
                //     $scope.newNhanSu.don_vi_so_huu.keyId = '';
                // if (field === 'donviquanlies')
                //     $scope.newNhanSu.don_vi_quan_ly.keyId = '';
                // if (field === 'diabans')
                //     $scope.newNhanSu.dia_ban_hoat_dong.keyId = '';
                // if (field === 'quocgias')
                //     $scope.newNhanSu.ho_so_tb.thong_tin_chung.xuat_xu.keyId = '';
                // if (field === 'hangsanxuats')
                //     $scope.newNhanSu.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId = '';
                // if (field === 'modelthietbis')
                //     $scope.newNhanSu.ho_so_tb.thong_tin_chung.model_tb.keyId = '';
            }

        },
        kendoOnDateChangeRestrict: function(e, field) {
            let startDate = e.sender._value;

            if (field == 'baohanh_batdau') {
                if ($scope.newNhanSu.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh > 0) {
                    let endDate = moment(startDate).add(parseInt($scope.newNhanSu.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh), 'M').toDate();
                    $('#baohanh_end').kendoDatePicker().data('kendoDatePicker').value(endDate);
                    $scope.newNhanSu.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_ket_thuc = endDate;
                }
            }
        },
        kendoThongsokythuatGridOptions: {
            dataSource: {
                data: $scope.newNhanSu.thong_so_ky_thuat,
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

    $scope.$watch('newNhanSu.phan_loai.nhom.keyId', (newVal) => {
        $scope.nhomSelectedId = newVal;

        if ($scope.newNhanSu && $scope.newNhanSu.phan_loai && $scope.newNhanSu.phan_loai.chung_loai)
            $scope.newNhanSu.phan_loai.chung_loai.keyId = '';
    });

    $scope.$watch('newNhanSu.phan_loai.chung_loai.keyId', (newVal) => {
        $scope.chungloaiSelectedId = newVal;

        if ($scope.newNhanSu && $scope.newNhanSu.phan_loai && $scope.newNhanSu.phan_loai.loai)
            $scope.newNhanSu.phan_loai.loai.keyId = '';
    });

    $scope.$watch('newNhanSu.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId', (newVal) => {
        $scope.hangsanxuatSelectedId = newVal;

        if ($scope.newNhanSu && $scope.newNhanSu.ho_so_tb && $scope.newNhanSu.ho_so_tb.thong_tin_chung && $scope.newNhanSu.ho_so_tb.thong_tin_chung.model_tb)
            $scope.newNhanSu.ho_so_tb.thong_tin_chung.model_tb.keyId = '';
    });

    $scope.$watch('newNhanSu.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bao_hanh', (newVal) => {
        if (newVal > 0) {
            if ($scope.newNhanSu.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau) {
                let endDate = moment($scope.newNhanSu.ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau).add(parseInt(newVal), 'M').toDate();
                $('#baohanh_end').kendoDatePicker().data('kendoDatePicker').value(endDate);
            }
        }
    })

    $scope.$watch('newNhanSu.tieu_su.isNhapNgu', (newVal, oldVal) => {
        if (oldVal && !newVal) {
            $scope.newNhanSu.tieu_su.ngay_nhap_ngu = ''; 
        }
    });

    $scope.$watch('newNhanSu.don_vi', (newVal) => {
        $scope.newNhanSu.cong_viec.to_chuc_bien_che.department = '';
        $scope.kOptions.departments =  $scope.resource.departments[newVal.ma] || [];
    });

    $scope.$watch('newNhanSu.cong_viec.to_chuc_bien_che.department', (newVal) => {
        $scope.newNhanSu.cong_viec.to_chuc_bien_che.subdepartment = '';
        if ($scope.newNhanSu.don_vi.ma)
            $scope.kOptions.subdepartments =  $scope.resource.subdepartments[$scope.newNhanSu.don_vi.ma][newVal.ma] || [];
        console.log($scope.newNhanSu.don_vi.ma, "; ", newVal);
        console.log($scope.kOptions.subdepartments);
    });



});
