angular.module('angular-skynet').directive('dashboardXuongdvktManage', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-manage.template.html',
        scope: {
            pageOptions: '='
        },
        controller: function($scope, skynetHelpers, skynetDictionary) {

            // ***************************************************
            // INITIALIZE
            // ***************************************************
            $scope._helpers = skynetHelpers.helpers;
            $scope.newSuaChua = {
                phan_loai: {
                    nhom_tb: "Xe - máy",
                    loai_tb: '',
                    loai_sua_chua: ''
                },
                ma_tb: {
                    ma_tb: '',
                    dvql: ''
                },
                dia_diem: {
                    dia_diem: 'Nhà xưởng sửa chữa',
                    khu_vuc: {
                        ma: ''
                    },
                    vi_tri: ''
                },
                noi_dung: {
                    noi_dung: ''
                },
                thoi_gian: {
                    bat_dau: new Date()
                },
                thong_ke: {
                    thoi_gian: {}
                },
                tags: [],
                trang_thai: 'Đang sửa chữa',
                isPublic: true,
                isArchived: false
            };
            $scope._dictionary = angular.copy(skynetDictionary.data.xuongdvkt);


            // ***************************************************
            // UTILS
            // ***************************************************
            $scope.utils = {
                
            }

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            $scope.helpers({
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            
            $scope.methods = {
                manage: {
                    createNew: {

                    },
                    update: {

                    }
                }
            }


            // ***************************************************
            // WATCHERS
            // ***************************************************


        }
    }
});