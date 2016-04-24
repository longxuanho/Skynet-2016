angular.module('angular-skynet').directive('dashboardXuongdvktViewList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-view-list.template.html',
        controllerAs: 'vm',
        bindToController: true,

        controller: function($scope, $rootScope, iNotifier, $reactive, $interval, skynetDictionary) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._dictionary = angular.copy(skynetDictionary.data.xuongdvkt);

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
                },
                charts: {
                	colorPalettes: {
                		'Vitamin C': ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400', '#004358', '#1F8A70'],
                        'Ad Majora - Aspirin C': ['#225378', '#1595A3', '#ACF0F2', '#F2FFE3', '#EB7F00'],
                        'Blue Mono': ['#B0DAFC', '#7B98B0', '#325B7D', '#4681B0', '#455663', '#B0DAFC'],
                        'backup': ['#D7D780', '#FEAB63', '#F95146', '#B2E6C6', '#FE9396', '#91DAA4']
                	}
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
                	}                	
                },
                kendoOptions: {
                    dataSource: {
                        vi_tris: {
                            isInUse: {},
                            isAvailable: {}
                        },
                        curr_ma_tbs: []
                    },
                    charts: {
                        donut_thong_ke_luot_suachuas: {
                            theme: "material",
                            chartArea: {
							    background: "transparent"
							},
                            title: {
                                position: "bottom",
                                text: "Phân loại sửa chữa",
                                font: "16px Roboto,Arial,Helvetica,sans-serif",
                                color: "#F05A28"
                            },
                            legend: {
                                visible: true,
                                position: 'top',
                                labels: {
      								color: "#757575",
      								font: "12px Roboto,Arial,Helvetica,sans-serif"
    							}
                            },
                            seriesDefaults: {
                                type: "donut",
                                startAngle: 0
                            },
                            series: [{
                                name: 'inside',                            
                                holeSize: 54,
                                data: []
                            }, {
                                name: 'outside',
                                data: [],
                                labels: {
                                    visible: true,
                                    background: "transparent",
                                    position: "outsideEnd",
                                    template: "#= category #\n#= value # lượt",
                                    color: "#757575",
      								font: "12px Roboto,Arial,Helvetica,sans-serif"
                                }
                            }],
                            tooltip: {
                                visible: true,
                                template: "#= category #: #= value # lượt (#= kendo.format('{0:P0}', percentage) #)"
                            }
                        },
                        polar_phan_loai_luot_suachuas: {
                            theme: "material",
                            chartArea: {
                                background: "transparent"
                            },
                            title: {
                                position: "bottom",
                                text: "Tổng quan theo khu vực",
                                font: "16px Roboto,Arial,Helvetica,sans-serif",
                                color: "#F05A28"
                            },
                            legend: {
                                visible: true,
                                position: 'top',
                                labels: {
                                    color: "#757575",
                                    font: "12px Roboto,Arial,Helvetica,sans-serif"
                                }
                            },
                            seriesDefaults: {
                                type: "radarLine",
                                style: "smooth"
                            },
                            tooltip: {
                                visible: true,
                                template: "#= category #: #= value # lượt #= series.name.toLowerCase() #."
                            },
                            dataSource: kendo.data.DataSource.create({
                                data: []
                            }),
                            categoryAxis: {
                                field: "khu_vuc",
                                labels: {
                                	color: "#757575",
                                    font: "12px Roboto,Arial,Helvetica,sans-serif"
                                },
							    majorGridLines: {
							      	color: "#757575"
							    }
                            },
                            valueAxis: {
                                labels: {
                                    color: "#757575",
                                    font: "12px Roboto,Arial,Helvetica,sans-serif"
                                },
                                majorGridLines: {
							      	color: "#757575"
							    },
							    majorUnit: 1,
							    majorTicks: {
      								color: "#757575"
    							}
                            },
                            series: [{
                                name: "Đang sửa chữa",
                                field: "dang_sua_chua",
                                color: "#F05A28"
                            }, {
                                name: "Chuẩn bị bàn giao",
                                field: "chuan_bi_ban_giao",
                                color: "#FFB400"
                            }, {
                                name: "Sửa chữa xong",
                                field: "sua_chua_xong",
                                color: "#9BBF17"
                            }],
                        }
                    }
                }
            }

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                getDataView: {
                    massageRawData: function() {
                        if (vm.pageData.suachuas.raw.length) {
                            _.each(vm.pageData.suachuas.raw, (item) => {
                                item.thoi_gian_bat_dau_resolved = moment(item.thoi_gian.bat_dau).fromNow();
                            });
                        }
                    },
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
                resolveKendo: {
                    dataSource: {
                        resolveAll: function () {
                            this.get_curr_ma_tbs_list();
                            this.get_curr_vitris();
                        },
                        get_curr_ma_tbs_list: function() {
                            vm.pageData.kendoOptions.dataSource.curr_ma_tbs = _.map(vm.pageData.suachuas.raw, (suachua) => {
                                return suachua.ma_tb.ma_tb
                            });                           
                        },
                        get_curr_vitris: function() {
                        	// Khởi tạo
                        	let arr_keys = [],
                        		arr_VitrisAll_flatten = [],
                        		arr_CurrSuaChua = [], 
                        		arr_CurrVitrisInUse_flatten = [], arr_CurrVitrisIsAvailable_flatten = []
                        	
                        	// Tìm tất cả các khu vực trong nhà xưởng
                        	arr_keys = _.keys(vm._dictionary.vi_tris);

                        	// Khởi tạo lại các mảng output theo arr_keys
                        	_.each(arr_keys, (key) => {
                        		vm.pageData.kendoOptions.dataSource.vi_tris.isInUse[key] = [];
                        		vm.pageData.kendoOptions.dataSource.vi_tris.isAvailable[key] = [];
                        	});

                        	// Tìm tất cả các vị trí trong nhà xưởng
                        	 _.each(vm._dictionary.vi_tris, (value, key) => {
                        	 	arr_VitrisAll_flatten.push(value);
                        	});
                        	arr_VitrisAll_flatten = _.flatten(arr_VitrisAll_flatten);

                        	// Tìm tất cả các vị trí trong nhà xưởng đang được sử dụng
                        	arr_CurrSuaChua = _.filter(vm.pageData.suachuas.raw, (suachua) => {
                        		return suachua.trang_thai !== 'Sửa chữa xong';
                        	});
                        	arr_CurrVitrisInUse_flatten = _.uniq(
                        		_.map(arr_CurrSuaChua, (suachua) => {
                        			return suachua.dia_diem.vi_tri;
                        		})
                        	);

                        	// So sánh lấy diff của Tất cả vị trí và các vị trí đang được sử dụng để có các Vị trí còn trống
                        	arr_CurrVitrisIsAvailable_flatten = _.uniq(
                        		_.difference(arr_VitrisAll_flatten, arr_CurrVitrisInUse_flatten)
                        	);

							// Nhóm theo khu vực để có các dataSource tương ứng:
							_.each(arr_CurrVitrisInUse_flatten, (vitri) => {
								vm.pageData.kendoOptions.dataSource.vi_tris.isInUse[vitri.charAt(0)].push(vitri);
							});

							_.each(arr_CurrVitrisIsAvailable_flatten, (vitri) => {
								vm.pageData.kendoOptions.dataSource.vi_tris.isAvailable[vitri.charAt(0)].push(vitri);
							});
                        }
                    },
                    charts: {
                    	resolveAll: function() {
                    		this.donut_thong_ke_luot_suachuas();
                    		this.polar_phan_loai_luot_suachuas();
                    	},
                        donut_thong_ke_luot_suachuas: function() {
                        	// Khởi tạo
                        	let views = [], arr_serie_inside = [], arr_serie_outside = [];

                        	// Thống kê số liệu cho serie vòng trong: Loại phương tiện
                            vm.pageData.suachuas.dataSource.group({ field: "phan_loai.loai_tb" });
                            views = vm.pageData.suachuas.dataSource.view();
                            _.each(views, (view, index) => {
                            	arr_serie_inside.push({
                            		category: view.value,
                            		value: view.items.length,
                            		color: vm.pageOptions.charts.colorPalettes['Ad Majora - Aspirin C'][index]
                            	});
                            });

                        	// Thống kê số liệu cho serie vòng ngoài: Loại sửa chữa
                            vm.pageData.suachuas.dataSource.group({ field: "phan_loai.loai_sua_chua" });
                            views = vm.pageData.suachuas.dataSource.view();
                            _.each(views, (view, index) => {
                            	arr_serie_outside.push({
                            		category: view.value,
                            		value: view.items.length,
                            		color: vm.pageOptions.charts.colorPalettes['Vitamin C'][index]
                            	});
                            });

                            // Reset group
                            vm.pageData.suachuas.dataSource.group([]);

                            // Thiết đặt các giá trị cho chart options
                            vm.pageData.kendoOptions.charts.donut_thong_ke_luot_suachuas.series[0].data = arr_serie_inside;
                            vm.pageData.kendoOptions.charts.donut_thong_ke_luot_suachuas.series[1].data = arr_serie_outside;

                        },
                        polar_phan_loai_luot_suachuas: function() {
                            // Khởi tạo
                            let views = [], arr_data = [], arr_khuvucs = [],
                                arr_trangthais = ['Đang sửa chữa', 'Chuẩn bị bàn giao', 'Sửa chữa xong'],
                                arr_keymap = {
                                    'Đang sửa chữa': 'dang_sua_chua',
                                    'Chuẩn bị bàn giao': 'chuan_bi_ban_giao',
                                    'Sửa chữa xong': 'sua_chua_xong'
                                };
                            // Tìm tất cả các khu vực trong nhà xưởng
                        	arr_khuvucs = _.keys(vm._dictionary.vi_tris);
                            // Thống kê số liệu cho dataSource: Vị trí và Trạng thái sửa chữa (ứng với mỗi vị trí là số liệu thống kê về số lượt đang/đã/chuẩn bị sc xong.)
                            vm.pageData.suachuas.dataSource.group([
                                { field: "dia_diem.khu_vuc.ten" },
                                { field: "trang_thai" }
                            ]);
                            views = vm.pageData.suachuas.dataSource.view();
                        	_.each(views, (khuvuc) => {
                                let item = {
                                    'khu_vuc': khuvuc.value
                                };
                                // Khởi tạo các giá trị ban đầu
                                _.each(arr_trangthais, (key) => {
                                    item[arr_keymap[key]] = 0;
                                });
                                if (khuvuc.items.length) {
                                	_.each(khuvuc.items, (trangthai) => {
	                                	item[arr_keymap[trangthai.value]] = trangthai.items.length;
	                                });
                                }            
                                // Lưu lại item vào mảng arr_data
                                arr_data.push(item);
                            });
                            // Thiết đặt các giá trị này cho dataSource của chart options
                            vm.pageData.kendoOptions.charts.polar_phan_loai_luot_suachuas.dataSource.data(arr_data);
                        }
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
                    vm.utils.resolveKendo.dataSource.resolveAll();
                    vm.utils.resolveKendo.charts.resolveAll();
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
                        // Cập nhật tất cả các stamp thời gian lúc bắt đầu để hiển thị trên bảng tin
                        vm.utils.getDataView.massageRawData();
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