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

            vm.pageOptions = {
                ui: {
                    perPage: 4,
                    page: 1,
                    totalItems: 0,
                    maxNumOfPage: 1,
                    // Nhấp nháy dấu hai chấm trên giao diện đồng hồ
                    clock: {
                    	isTicking: true,
                    	time: '',
                    	date: ''
                    },
                    sort : {
                    	by: '',
                    	mode: '',
                    	criteria: {'metadata.ngay_tao': -1},
                    	keys: ['asc', 'desc', 'none'],
                    	collection: {
                    		'khu_vuc': {
                    			asc: {'dia_diem.vi_tri': 1}, 
                            	desc: {'dia_diem.vi_tri': -1},
                            	none: {'metadata.ngay_tao': -1}
                    		},
                    		'ma_tb': {
                    			asc: {'ma_tb.ma_tb': 1}, 
                            	desc: {'ma_tb.ma_tb': -1},
                            	none: {'metadata.ngay_tao': -1}
                    		},
                    		'dvql': {
                    			asc: {'ma_tb.dvql': 1}, 
                            	desc: {'ma_tb.dvql': -1},
                            	none: {'metadata.ngay_tao': -1}
                    		},
                    		'noi_dung': {
                    			asc: {'noi_dung': 1}, 
                            	desc: {'noi_dung': -1},
                            	none: {'metadata.ngay_tao': -1}
                    		},
                    		'thoi_gian': {
                    			asc: {'thoi_gian.bat_dau': 1}, 
                            	desc: {'thoi_gian.bat_dau': -1},
                            	none: {'metadata.ngay_tao': -1}
                    		},
                    		'du_kien': {
                    			asc: {'thoi_gian.ket_thuc_du_kien': 1}, 
                            	desc: {'thoi_gian.ket_thuc_du_kien': -1},
                            	none: {'metadata.ngay_tao': -1}
                    		}
                    	}
                    },
                    heroContent: {
                        content: {}
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
                    newSuaChua: {},
                    selectedSuaChua: {},
                    selectedSuaChuaId: '',
                    master: {}
                },
                suachuas: {
                    raw: [],
                    view: [],
                    dataSource: kendo.data.DataSource.create({
                        data: [],
                        aggregate: [
							{ field: "_id", aggregate: "count" }
						]
                    })
                },
                statistics: {
                	count_panel: {
                		'Đang sửa chữa': 0,
	                    'Sửa chữa xong': 0,
	                    'Chuẩn bị bàn giao': 0,
	                    totalOfSuaChuas: 9
                	},
                	
                },
                dummy: {
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
                    },
                    sortBy: function(where) {
                    	if (vm.pageOptions.ui.sort.by != where) {
                        	vm.pageOptions.ui.sort.by = where;
                        	vm.pageOptions.ui.sort.mode = 'asc';
                        } else {
                        	vm.pageOptions.ui.sort.mode = vm.pageOptions.ui.sort.keys[_.indexOf(vm.pageOptions.ui.sort.keys, vm.pageOptions.ui.sort.mode) + 1];
                        	if (vm.pageOptions.ui.sort.mode == 'none')
                        		vm.pageOptions.ui.sort.by = '';
                        }
                        vm.pageOptions.ui.sort.criteria = vm.pageOptions.ui.sort.collection[vm.pageOptions.ui.sort.by][vm.pageOptions.ui.sort.mode];	
                    },
                    cycleSortOrder: function(where) {
                    	if (vm.pageOptions.ui.sort.by != where) {
                        	vm.pageOptions.ui.sort.by = where;
                        	vm.pageOptions.ui.sort.mode = 'asc';
                        } else {
                        	vm.pageOptions.ui.sort.mode = vm.pageOptions.ui.sort.keys[_.indexOf(vm.pageOptions.ui.sort.keys, vm.pageOptions.ui.sort.mode) + 1];
                        	if (vm.pageOptions.ui.sort.mode == 'none')
                        		vm.pageOptions.ui.sort.by = '';
                        }
                        if (vm.pageOptions.ui.sort.by)
                        	vm.pageOptions.ui.sort.criteria = vm.pageOptions.ui.sort.collection[vm.pageOptions.ui.sort.by][vm.pageOptions.ui.sort.mode];
                    }
                },
                getStatistics: {
                	countPanel: function() {
                		vm.pageData.statistics.count_panel.totalOfSuaChuas = vm.pageData.suachuas.raw.length;
                        // Reset các giá trị bộ đếm về 0
                        vm.pageData.statistics.count_panel['Đang sửa chữa'] = 0;
                        vm.pageData.statistics.count_panel['Sửa chữa xong'] = 0;
                        vm.pageData.statistics.count_panel['Chuẩn bị bàn giao'] = 0;

                        // Nếu có sửa chữa tại thời điểm hiện tại -> Thực hiện các thống kê
                        if (vm.pageData.statistics.count_panel.totalOfSuaChuas) {
                            
                            vm.pageData.suachuas.dataSource.group({ 
                                field: 'trang_thai',
                                aggregates: [
                                    { field: "_id", aggregate: "count" }
                                ] 
                            });

                            _.each(vm.pageData.suachuas.dataSource.view(), (view) => {
                                vm.pageData.statistics.count_panel[view.value] = view.items.length;
                            });
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
                skyNotify: () => {
                    vm.pageOptions.ui.heroContent = Notifies.findOne();
                    return;
                },
                suachuas: () => {
                    vm.pageData.suachuas.raw = SuaChuas.find({}, {sort: vm.getReactively('pageOptions.ui.sort.criteria')}).fetch();
                    vm.pageData.suachuas.dataSource.data(vm.pageData.suachuas.raw);
                    
                    vm.pageOptions.ui.totalItems = vm.pageData.suachuas.raw.length;
                    
                    // Cập nhật list view cho lần đầu tiên khởi tạo
                    // if (!vm.pageData.suachuas.raw.length)
                    vm.utils.getDataView.suachuas();
                    vm.utils.getStatistics.countPanel();
                    return;
                },
                selectedSuaChua: () => {
                	vm.pageData.source.master = SuaChuas.findOne( {_id: vm.getReactively('pageData.source.selectedSuaChuaId')} );
                	vm.pageData.source.selectedSuaChua = angular.copy(vm.pageData.source.master);
                	return;
                }
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            
            autoPaging = $interval(() => {
                // Chỉ chuyển trang khi maxPage >= 1
            	if (vm.pageOptions.ui.maxNumOfPage >= 1) {
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

			$scope.$watch('vm.pageOptions.ui.heroContent.content.text', (newVal) => {
				vm.pageOptions.ui.perPage = (newVal) ? 4 : 5;
				vm.utils.getDataView.suachuas();
			});

			$scope.$watch('vm.pageOptions.ui.page', (newVal) => {
				vm.utils.getDataView.suachuas();
			});
        }
    }
});