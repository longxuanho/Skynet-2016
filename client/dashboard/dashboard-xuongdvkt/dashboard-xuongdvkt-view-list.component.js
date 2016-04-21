angular.module('angular-skynet').directive('dashboardXuongdvktViewList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-view-list.template.html',
        controllerAs: 'vm',
        bindToController: true,

        controller: function($scope, $rootScope, iNotifier, $reactive, $interval) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            // vm._data = skynetHelpers.data;
            // vm._helpers = skynetHelpers.helpers;
            $rootScope.hideMainHeader = true;
            $rootScope.primarySidebarOpen = false;
            $rootScope.hideStyleSwitcher = true;

            vm.pageOptions = {
                ui: {
                    perPage: 4,
                    page: 1,
                    totalItems: 0,
                    maxNumOfPage: 1,
                    sort: '',
                    // Nhấp nháy dấu hai chấm trên giao diện đồng hồ
                    clock: {
                    	isTicking: true,
                    	time: '',
                    	date: ''
                    }
                },
                displayMode: {
                    hero_content: {
                        text: '',
                        mode: 'default'
                    },
                    current_nav_tab: '',
                    isDisplaySearchPanel: false,
                    current_manage_mode: 'createNew'
                }                        
            };

            vm.pageData = {
                rights: {
                    'can_upsert_sua_chua': ["admin", "super-manager", "quanly-suachuas"]
                },
                source: {
                    newSuaChua: {
                    },
                    selectedSuaChua: {
                    } 
                },
                suachuas: {
                    raw: [],
                    view: [],
                    dataSource: kendo.data.DataSource.create({
                        data: []
                    })
                },
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

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                getDataView: {
                    suachuas: function() {
                    	// Tính lại tổng số trang
                    	vm.pageOptions.ui.maxNumOfPage = Math.ceil(vm.pageOptions.ui.totalItems / vm.pageOptions.ui.perPage);
                        
                        let fromIndex = vm.pageOptions.ui.perPage * (vm.pageOptions.ui.page - 1);
                        if (vm.pageOptions.ui.page < vm.pageOptions.ui.maxNumOfPage) {                            
                            let endIndex = fromIndex + vm.pageOptions.ui.perPage;
                            vm.pageData.suachuas.view = vm.pageData.suachuas.raw.slice(fromIndex, endIndex);
                        } else {
                            vm.pageData.suachuas.view = vm.pageData.suachuas.raw.slice(fromIndex);
                        }
                    }
                },
                dummy: {
                    dashboard: {
                        cycleOrder: function(where) {
                            let options = [];
                            switch (where) {                                
                                case 'khu_vuc':
                                    options = ['dia_diem.vi_tri', '-dia_diem.vi_tri', '', 'dia_diem.vi_tri'];
                                    vm.pageOptions.ui.sort = options[_.indexOf(options, vm.pageOptions.ui.sort) + 1];
                                    break;
                                case 'ma_tb':
                                    options = ['ma_tb', '-ma_tb', '', 'ma_tb'];
                                    vm.pageOptions.ui.sort = options[_.indexOf(options, vm.pageOptions.ui.sort) + 1];
                                    break;
                                case 'dvql':
                                    options = ['dvql', '-dvql', '', 'dvql'];
                                    vm.pageOptions.ui.sort = options[_.indexOf(options, vm.pageOptions.ui.sort) + 1];
                                    break;
                                case 'noi_dung_sc':
                                    options = ['noi_dung_sc', '-noi_dung_sc', '', 'noi_dung_sc'];
                                    vm.pageOptions.ui.sort = options[_.indexOf(options, vm.pageOptions.ui.sort) + 1];
                                    break;
                                case 'thoi_gian':
                                    options = ['thoi_gian', '-thoi_gian', '', 'thoi_gian'];
                                    vm.pageOptions.ui.sort = options[_.indexOf(options, vm.pageOptions.ui.sort) + 1];
                                    break;
                                case 'du_kien':
                                    options = ['du_kien', '-du_kien', '', 'du_kien'];
                                    vm.pageOptions.ui.sort = options[_.indexOf(options, vm.pageOptions.ui.sort) + 1];
                                    break;
                            }
                        }
                    },
                    pageChanged: function(newPage) {
                        vm.pageOptions.ui.page = newPage;
                    }
                }
            };

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                suachuas: () => {
                    vm.pageData.suachuas.raw = SuaChuas.find().fetch();
                    vm.pageData.suachuas.dataSource.data(vm.pageData.suachuas.raw);
                    
                    vm.pageOptions.ui.totalItems = vm.pageData.suachuas.raw.length;
                    
                    // Cập nhật list view cho lần đầu tiên khởi tạo
                    // if (!vm.pageData.suachuas.raw.length)
                        vm.utils.getDataView.suachuas();
                    return;
                }
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            
            autoPaging = $interval(() => {
                // Chỉ chuyển trang khi maxPage > 1
            	if (vm.pageOptions.ui.maxNumOfPage > 1) {
                    // Chỉ chuyển trang khi đang ở bảng tin
                    if (vm.pageOptions.displayMode.current_nav_tab === 'Bảng tin') {
                        // Tự động lật trang sau 3s
                        if (vm.pageOptions.ui.page < vm.pageOptions.ui.maxNumOfPage)
                            vm.pageOptions.ui.page++;
                        else
                            vm.pageOptions.ui.page = 1;
                    }                      
                }                
            }, 12000);           
            

            // ***************************************************
            // WATCHERS
            // ***************************************************
            $scope.$on('$destroy', function() {
                // Make sure that the interval is destroyed too
                $interval.cancel(autoPaging);
            });

            UIkit.on('change.uk.tab', function(event, active_item) {
                if (active_item) {
                    vm.pageOptions.displayMode.current_nav_tab = active_item.text();
                    vm.pageOptions.displayMode.isDisplaySearchPanel = (vm.pageOptions.displayMode.current_nav_tab === 'Quản lý') ? true : false;    
                }                
            });

            $rootScope.$watch('hideMainHeader', (newVal) => {
                if (newVal) {
                    $("body").addClass("uk-padding-top-remove");
                } else {
                    $("body").removeClass("uk-padding-top-remove");
                }
            });

			$scope.$watch('vm.pageOptions.displayMode.hero_content.text.length', (newVal) => {
				vm.pageOptions.ui.perPage = (newVal) ? 4 : 5;
				vm.utils.getDataView.suachuas();
			});

			$scope.$watch('vm.pageOptions.ui.page', (newVal) => {
				vm.utils.getDataView.suachuas();
			});
        }
    }
});