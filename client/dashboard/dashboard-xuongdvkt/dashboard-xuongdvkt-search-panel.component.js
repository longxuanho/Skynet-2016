angular.module('angular-skynet').directive('dashboardXuongdvktSearchPanel', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-search-panel.template.html',
        controller: function($scope, $timeout) {

            // ***************************************************
            // INITIALIZE
            // ***************************************************
       
            $scope.pageData = {
                dummy: {
                    suachuas: [
                        {
                            ma_tb: 'NB105',
                            noi_dung_sc: 'Proin vel viverra massa. Aenean suscipit vel nisi at',
                            dvql: 'Vivamus',
                            thoi_gian: 'Ba ngày trước',
                            khu_vuc: 'A02',
                            du_kien: 2.5,
                            trang_thai: 'Đang sửa chữa',
                            color_code: 'red'
                        }, {
                            ma_tb: 'NB109',
                            noi_dung_sc: 'Sed ex nisl, faucibus eu lorem sit amet, tristique pellentesque nisi',
                            dvql: 'Vivamus',
                            thoi_gian: 'Hai ngày trước',
                            khu_vuc: 'B04',
                            du_kien: 3.5,
                            trang_thai: 'Đang sửa chữa',
                            color_code: 'red'
                        }, {
                            ma_tb: 'RM103',
                            noi_dung_sc: 'Cras arcu lacus, lacinia nec ipsum sit amet, molestie posuere ligula',
                            dvql: 'Etiam',
                            thoi_gian: 'Một tuần trước',
                            khu_vuc: 'B01',
                            du_kien: 4.5,
                            trang_thai: 'Chuẩn bị bàn giao',
                            color_code: 'yellow'
                        }, {
                            ma_tb: 'NB207',
                            noi_dung_sc: 'Mauris in ante dictum, venenatis leo eu, accumsan ex',
                            dvql: 'Etiam',
                            thoi_gian: 'Vài phút trước',
                            khu_vuc: 'A05',
                            du_kien: 8.0,
                            trang_thai: 'Sửa chữa xong',
                            color_code: 'green'
                        }, {
                            ma_tb: 'NB134',
                            noi_dung_sc: 'Nunc faucibus, orci a feugiat ultricies, justo turpis bibendum turpis',
                            dvql: 'Vivamus',
                            thoi_gian: 'Hai giờ trước',
                            khu_vuc: 'C07',
                            du_kien: 7.0,
                            trang_thai: 'Sửa chữa xong',
                            color_code: 'green'
                        }, {
                            ma_tb: 'RM005',
                            noi_dung_sc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            dvql: 'Etiam',
                            thoi_gian: 'Năm giờ trước',
                            khu_vuc: 'A04',
                            du_kien: 24,
                            trang_thai: 'Đang sửa chữa',
                            color_code: 'red'
                        }, {
                            ma_tb: 'VB108',
                            noi_dung_sc: 'Donec id justo a ante pellentesque tincidunt eget eget neque',
                            dvql: 'Praesent',
                            thoi_gian: 'Vài phút trước',
                            khu_vuc: 'C07',
                            du_kien: 3,
                            trang_thai: 'Đang sửa chữa',
                            color_code: 'red'
                        }, {
                            ma_tb: 'SC150',
                            noi_dung_sc: 'Etiam tempor est ac massa vehicula, nec hendrerit erat iaculis',
                            dvql: 'Vivamus',
                            thoi_gian: 'Ngày hôm qua',
                            khu_vuc: 'C05',
                            du_kien: 6,
                            trang_thai: 'Đang sửa chữa',
                            color_code: 'red'
                        }, {
                            ma_tb: 'LK301',
                            noi_dung_sc: 'Praesent in varius lacus, eget lacinia tortor',
                            dvql: 'Etiam',
                            thoi_gian: 'Ba ngày trước',
                            khu_vuc: 'A',
                            du_kien: 25,
                            trang_thai: 'Đang sửa chữa',
                            color_code: 'red'
                        }
                    ],
                    statistics: {
                        numOfDangSuaChua: 8,
                        numOfSuaChuaXong: 3,
                        numOfChuanBiBanGiao: 2,
                        totalOfSuaChuas: 9
                    },
                    headerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu libero.'
                }
            }

            $timeout(() => {
                $("#nav_quan_ly_search_panel .scrollable-area").scrollbar({
                    disableBodyScroll: true,
                    scrollx: false,
                    duration: 100
                });
            }, 1000);            

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
            

            // ***************************************************
            // UTILS
            // ***************************************************


            // ***************************************************
            // WATCHERS
            // ***************************************************


        }
    }
});