angular.module('angular-skynet').directive('dashboardXuongdvktViewList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-view-list.template.html',
        controllerAs: '$scope',
        bindToController: true,

        controller: function($scope, $rootScope, iNotifier, $reactive, $interval, skynetDictionary) {

            // $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-$scope
            // let $scope = this;

            $scope._dictionary = angular.copy(skynetDictionary.data.xuongdvkt);

            $scope.pageOptions = {
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
                    },
                    selectOptions: {
                        ma_tbs: {}  // Cần khởi tạo các giá trị này
                    }
                },
                displayMode: {
                    hero_content: {
                        text: '',
                        mode: 'default'
                    },
                    current_nav_tab: 'Bảng tin',
                    isDisplaySearchPanel: false,
                    current_manage_mode: 'createNew'
                },
                charts: {
                	colorPalettes: {
                		'Vitamin C': ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400', '#004358', '#1F8A70'],
                        'Ad Majora - Aspirin C': ['#225378', '#1595A3', '#ACF0F2', '#F2FFE3', '#EB7F00', '#225378', '#1595A3'],
                        'Blue Mono': ['#B0DAFC', '#7B98B0', '#325B7D', '#4681B0', '#455663', '#B0DAFC'],
                        'backup': ['#D7D780', '#FEAB63', '#F95146', '#B2E6C6', '#FE9396', '#91DAA4']
                	}
                }
            };

            $scope.pageData = {
                rights: {
                    'can_upsert_sua_chua': ["admin", "super-manager", "quanly-suachuas", "support-suachuas"]
                },
                source: {
                    newMatb: {},
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
                        stacked_bar_luot_sua_chua: {
                        	theme: "material",
                        	chartArea: {
							    background: "transparent"
							},
                        	title: {
	                            text: "Hiệu suất nhà xưởng",
	                            font: "16px Roboto,Arial,Helvetica,sans-serif",
	                            position: "bottom",
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
	                            type: "bar",
	                            stack: {
	                                type: "100%"
	                            },
	                            gap: 2.5
	                        },
	                        series: [],
	                        valueAxis: {
	                        	labels: {
                                    color: "#757575",
                                    font: "12px Roboto,Arial,Helvetica,sans-serif"
                                },
	                            line: {
	                                visible: false
	                            },
	                            minorGridLines: {
	                                visible: false
	                            },
	                            majorGridLines: {
	                                color: "#555"
	                            }
	                        },
	                        categoryAxis: {
	                            categories: [],
	                            labels: {
	                                color: "#757575",
                                    font: "12px Roboto,Arial,Helvetica,sans-serif"
	                            },
	                            line: {
	                                color: "#555"
	                            },
	                            majorGridLines: {
	                                visible: false
	                            }
	                        },
	                        tooltip: {
	                            visible: true,
	                            template: "#= series.name #: #= value # ô (#= kendo.format('{0:P0}', percentage) #)"
	                        }
                        },
                        radar_phan_loai_luot_suachuas: {
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
                            series: [{
                                color: "#F05A28",
                                name: "Đang sửa chữa",
                                data: [1, 0, 0, 0, 0, 0]
                            }, {
                                color: "#FFB400",
                                name: "Chuẩn bị bàn giao",
                                data: [1, 1, 1, 0, 0, 0]
                            }, {
                                color: "#9BBF17",
                                name: "Sửa chữa xong",
                                data: [0, 0, 0, 0, 0, 1]
                            }],
                            categoryAxis: {
                                categories: ["Khu A", "Khu B", "Khu C", "Khu D",
                                    "Khu E", "Khu Z"],
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
                                    font: "12px Roboto,Arial,Helvetica,sans-serif",
                                    step: 2
                                },
                                line: {
                                    visible: false
                                },
                                minorGridLines: {
                                    visible: false
                                },
                                // majorUnit: 1,
                                majorGridLines: {
                                    color: "#555"
                                }
                            },
                            tooltip: {
                                visible: true,
                                template: "#= category #: #= value # lượt #= series.name.toLowerCase() #."
                            }
                        },
                    }
                }
            }

            // ***************************************************
            // UTILS
            // ***************************************************

            $scope.utils = {
                getDataView: {
                    massageRawData: function() {
                        if ($scope.pageData.suachuas.raw.length) {
                            _.each($scope.pageData.suachuas.raw, (item) => {
                                item.thoi_gian_bat_dau_resolved = moment(item.thoi_gian.bat_dau).fromNow();
                            });
                        }
                    },
                    suachuas: function() {
                    	// Tính lại tổng số trang
                    	$scope.pageOptions.ui.maxNumOfPage = Math.ceil($scope.pageOptions.ui.totalItems / $scope.pageOptions.ui.perPage);

                        // Cập nhật tất cả các stamp thời gian lúc bắt đầu để hiển thị trên bảng tin
                        $scope.utils.getDataView.massageRawData();
                        
                        let fromIndex = $scope.pageOptions.ui.perPage * ($scope.pageOptions.ui.page - 1);
                        if ($scope.pageOptions.ui.page < $scope.pageOptions.ui.maxNumOfPage) {
                            let endIndex = fromIndex + $scope.pageOptions.ui.perPage;
                            $scope.pageData.suachuas.view = $scope.pageData.suachuas.raw.slice(fromIndex, endIndex);
                        } else {
                            $scope.pageData.suachuas.view = $scope.pageData.suachuas.raw.slice(fromIndex);
                        }
                    },
                    sortBy: function(where) {
                    	if ($scope.pageOptions.ui.sort.by != where) {
                        	$scope.pageOptions.ui.sort.by = where;
                        	$scope.pageOptions.ui.sort.mode = 'asc';
                        } else {
                        	$scope.pageOptions.ui.sort.mode = $scope.pageOptions.ui.sort.keys[_.indexOf($scope.pageOptions.ui.sort.keys, $scope.pageOptions.ui.sort.mode) + 1];
                        	if ($scope.pageOptions.ui.sort.mode == 'none')
                        		$scope.pageOptions.ui.sort.by = '';
                        }
                        $scope.pageOptions.ui.sort.criteria = $scope.pageOptions.ui.sort.collection[$scope.pageOptions.ui.sort.by][$scope.pageOptions.ui.sort.mode];	
                    },
                    cycleSortOrder: function(where) {
                    	if ($scope.pageOptions.ui.sort.by != where) {
                        	$scope.pageOptions.ui.sort.by = where;
                        	$scope.pageOptions.ui.sort.mode = 'asc';
                        } else {
                        	$scope.pageOptions.ui.sort.mode = $scope.pageOptions.ui.sort.keys[_.indexOf($scope.pageOptions.ui.sort.keys, $scope.pageOptions.ui.sort.mode) + 1];
                        	if ($scope.pageOptions.ui.sort.mode == 'none')
                        		$scope.pageOptions.ui.sort.by = '';
                        }
                        if ($scope.pageOptions.ui.sort.by)
                        	$scope.pageOptions.ui.sort.criteria = $scope.pageOptions.ui.sort.collection[$scope.pageOptions.ui.sort.by][$scope.pageOptions.ui.sort.mode];
                    }
                },
                getStatistics: {
                	countPanel: function() {
                		$scope.pageData.statistics.count_panel.totalOfSuaChuas = $scope.pageData.suachuas.raw.length;
                        // Reset các giá trị bộ đếm về 0
                        $scope.pageData.statistics.count_panel['Đang sửa chữa'] = 0;
                        $scope.pageData.statistics.count_panel['Sửa chữa xong'] = 0;
                        $scope.pageData.statistics.count_panel['Chuẩn bị bàn giao'] = 0;

                        // Nếu có sửa chữa tại thời điểm hiện tại -> Thực hiện các thống kê
                        if ($scope.pageData.statistics.count_panel.totalOfSuaChuas) {
                            
                            $scope.pageData.suachuas.dataSource.group({ 
                                field: 'trang_thai',
                                aggregates: [
                                    { field: "_id", aggregate: "count" }
                                ] 
                            });

                            _.each($scope.pageData.suachuas.dataSource.view(), (view) => {
                                $scope.pageData.statistics.count_panel[view.value] = view.items.length;
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
                            $scope.pageData.kendoOptions.dataSource.curr_ma_tbs = _.map($scope.pageData.suachuas.raw, (suachua) => {
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
                        	arr_keys = _.keys($scope._dictionary.vi_tris);

                        	// Khởi tạo lại các mảng output theo arr_keys
                        	_.each(arr_keys, (key) => {
                        		$scope.pageData.kendoOptions.dataSource.vi_tris.isInUse[key] = [];
                        		$scope.pageData.kendoOptions.dataSource.vi_tris.isAvailable[key] = [];
                        	});

                        	// Tìm tất cả các vị trí trong nhà xưởng
                        	 _.each($scope._dictionary.vi_tris, (value, key) => {
                        	 	arr_VitrisAll_flatten.push(value);
                        	});
                        	arr_VitrisAll_flatten = _.flatten(arr_VitrisAll_flatten);

                        	// Tìm tất cả các vị trí trong nhà xưởng đang được sử dụng
                        	arr_CurrSuaChua = _.filter($scope.pageData.suachuas.raw, (suachua) => {
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
								$scope.pageData.kendoOptions.dataSource.vi_tris.isInUse[('Khu ' + vitri.charAt(0))].push(vitri);
							});

							_.each(arr_CurrVitrisIsAvailable_flatten, (vitri) => {
								$scope.pageData.kendoOptions.dataSource.vi_tris.isAvailable[('Khu ' + vitri.charAt(0))].push(vitri);
							});
                        }
                    },
                    charts: {
                    	resolveAll: function() {
                    		this.donut_thong_ke_luot_suachuas();
                            this.stacked_bar_luot_sua_chua();
                            this.radar_phan_loai_luot_suachuas();
                    		// this.polar_phan_loai_luot_suachuas();                    		
                    	},
                        donut_thong_ke_luot_suachuas: function() {
                        	// Khởi tạo
                        	let views = [], arr_serie_inside = [], arr_serie_outside = [];

                        	// Thống kê số liệu cho serie vòng trong: Loại phương tiện
                            $scope.pageData.suachuas.dataSource.group({ field: "phan_loai.loai_tb" });
                            views = $scope.pageData.suachuas.dataSource.view();
                            _.each(views, (view, index) => {
                            	arr_serie_inside.push({
                            		category: view.value,
                            		value: view.items.length,
                            		color: $scope.pageOptions.charts.colorPalettes['Ad Majora - Aspirin C'][index]
                            	});
                            });

                        	// Thống kê số liệu cho serie vòng ngoài: Loại sửa chữa
                            $scope.pageData.suachuas.dataSource.group({ field: "phan_loai.loai_sua_chua" });
                            views = $scope.pageData.suachuas.dataSource.view();
                            _.each(views, (view, index) => {
                            	arr_serie_outside.push({
                            		category: view.value,
                            		value: view.items.length,
                            		color: $scope.pageOptions.charts.colorPalettes['Vitamin C'][index]
                            	});
                            });

                            // Reset group
                            $scope.pageData.suachuas.dataSource.group([]);

                            // Thiết đặt các giá trị cho chart options
                            $scope.pageData.kendoOptions.charts.donut_thong_ke_luot_suachuas.series[0].data = arr_serie_inside;
                            $scope.pageData.kendoOptions.charts.donut_thong_ke_luot_suachuas.series[1].data = arr_serie_outside;
                        },
                        stacked_bar_luot_sua_chua: function() {
                            // Khởi tạo
                            let views = [], arr_series_inUse = [], arr_series_empty = [], arr_category = [], obj_statistics = {};
                            // Tìm tất cả các khu vực trong nhà xưởng
                            arr_category = _.keys($scope._dictionary.vi_tris);                                                      
                            // Khởi tạo lại các giá trị thống kê về vị trí ban đầu: tất cả đều chưa sửa dụng và còn trống.
                            _.each(arr_category, (khuvuc) => {
                                arr_series_inUse.push(0);
                                arr_series_empty.push($scope._dictionary.vi_tris[khuvuc].length);
                            });
                            if ($scope.pageData.suachuas.dataSource.view().length) {
                                // Loại bỏ các sửa chữa đã thực hiện xong
                                $scope.pageData.suachuas.dataSource.filter({ field: "trang_thai", operator: "neq", value: "Sửa chữa xong" });
                                // Thống kê theo từng khu vực
                                $scope.pageData.suachuas.dataSource.group({ field: "dia_diem.khu_vuc" });
                                views = $scope.pageData.suachuas.dataSource.view();
                                _.each(views, (khuvuc) => {
                                    obj_statistics[khuvuc.value] = khuvuc.items.length;
                                });
                                // Cập nhật các series:
                                _.each(_.keys(obj_statistics), (khuvuc) => {
                                    // Tìm index của Khu vực này trong arr_category rồi cập nhật các mảng arr_series_inUse và arr_series_empty
                                    let index = _.indexOf(arr_category, khuvuc);
                                    if (index >= 0) {
                                        arr_series_inUse[index] = obj_statistics[khuvuc];
                                        arr_series_empty[index] = $scope._dictionary.vi_tris[khuvuc].length - obj_statistics[khuvuc];
                                    }
                                });
                                // Thiết đặt các giá trị này cho options của chart
                                $scope.pageData.kendoOptions.charts.stacked_bar_luot_sua_chua.categoryAxis.categories = arr_category;
                                $scope.pageData.kendoOptions.charts.stacked_bar_luot_sua_chua.series = [{
                                        name: 'Đang sử dụng',
                                        data: arr_series_inUse,
                                        color: $scope.pageOptions.charts.colorPalettes['Blue Mono'][1]  
                                    }, {
                                        name: 'Còn trống',
                                        data: arr_series_empty,
                                        color: $scope.pageOptions.charts.colorPalettes['Blue Mono'][2]  
                                    }];
                                // Reset groups and filters
                                $scope.pageData.suachuas.dataSource.filter({});
                                $scope.pageData.suachuas.dataSource.group([]);
                            }
                            
                        },
                        radar_phan_loai_luot_suachuas: function() {
                            // Khởi tạo
                            let views = [], arr_data = [], arr_khuvucs = [], arr_trangthais = [], obj_series = {}, arr_series = [];
                            let colorRef = {
                            	'Đang sửa chữa': '#F05A28',
                            	'Chuẩn bị bàn giao': '#FFB400',
                            	'Sửa chữa xong': '#9BBF17' 
                            };
                            
                            arr_trangthais = ['Đang sửa chữa', 'Chuẩn bị bàn giao', 'Sửa chữa xong'];
                            // Tìm tất cả các khu vực trong nhà xưởng
                            arr_khuvucs = _.keys($scope._dictionary.vi_tris);

                            // Khởi tạo mảng output ban đầu
                            _.each(arr_trangthais, (trangthai) => {
                            	obj_series[trangthai] = {};
                               	_.each(arr_khuvucs, (khuvuc) => {
                                	obj_series[trangthai][khuvuc] = 0;
                            	}); 
                            });
                            // Thống kê số liệu cho dataSource: Vị trí và Trạng thái sửa chữa (ứng với mỗi vị trí là số liệu thống kê về số lượt đang/đã/chuẩn bị sc xong.)
                            $scope.pageData.suachuas.dataSource.group([
                                { field: "trang_thai" },
                                { field: "dia_diem.khu_vuc" }
                            ]);
                            views = $scope.pageData.suachuas.dataSource.view();
                            _.each(views, (trangthai) => {
                                _.each(trangthai.items, (khuvuc) => {
                                	obj_series[trangthai.value][khuvuc.value] = khuvuc.items.length;
                                });         
                                // Lưu lại item vào mảng arr_data
                            });
                            
                            _.each(_.keys(obj_series), (key, index) => {
                            	let item = {
                            		color: colorRef[key],
                            		name: key,
                            		data: []
                            	};
                            	_.each(arr_khuvucs, (khuvuc) => {
                            		item.data.push(obj_series[key][khuvuc])
                            	});
                            	// Nếu item.data là một vector [0] -> Bỏ qua!
                            	let validator = _.uniq(item.data);
                            	if (!(validator.length == 1 && validator[0] == 0))
                            		arr_series.push(item);                            	
                            });

                            // Thiết đặt các giá trị này cho dataSource của chart options
                            $scope.pageData.kendoOptions.charts.radar_phan_loai_luot_suachuas.series = arr_series;
                            $scope.pageData.kendoOptions.charts.radar_phan_loai_luot_suachuas.categoryAxis.categories = arr_khuvucs;
                            // Reset group
                            $scope.pageData.suachuas.dataSource.group([]);
                        }
                    }
                }
            };

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            $scope.helpers({
                skyNotify: () => {
                    $scope.pageOptions.ui.heroContent = Notifies.findOne();
                    return;
                },
                suachuas: () => {
                    $scope.pageData.suachuas.raw = SuaChuas.find({}, {sort: $scope.getReactively('pageOptions.ui.sort.criteria')}).fetch();
                    $scope.pageData.suachuas.dataSource.data($scope.pageData.suachuas.raw);
                    
                    $scope.pageOptions.ui.totalItems = $scope.pageData.suachuas.raw.length;
                    
                    // Cập nhật list view cho lần đầu tiên khởi tạo
                    // if (!$scope.pageData.suachuas.raw.length)
                    $scope.utils.getDataView.suachuas();
                    $scope.utils.getStatistics.countPanel();
                    $scope.utils.resolveKendo.dataSource.resolveAll();
                    $scope.utils.resolveKendo.charts.resolveAll();
                    return;
                },
                selectedSuaChua: () => {
                	$scope.pageData.source.master = SuaChuas.findOne( {_id: $scope.getReactively('pageData.source.selectedSuaChuaId')} );
                	$scope.pageData.source.selectedSuaChua = angular.copy($scope.pageData.source.master);
                	return;
                }
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            
            autoPaging = $interval(() => {
                // Cập nhật tất cả các stamp thời gian lúc bắt đầu để hiển thị trên bảng tin
                $scope.utils.getDataView.massageRawData();

                // Chỉ chuyển trang khi maxPage >= 1
            	if ($scope.pageOptions.ui.maxNumOfPage >= 1) {
                    console.log('maxNumOfPage', $scope.pageOptions.ui.maxNumOfPage);

                    // Chỉ chuyển trang khi đang ở bảng tin
                    if ($scope.pageOptions.displayMode.current_nav_tab === 'Bảng tin' || $scope.pageOptions.displayMode.current_nav_tab === 'Thông tin' ) {
                        
                        // Tự động lật trang sau 3s
                        if ($scope.pageOptions.ui.page < $scope.pageOptions.ui.maxNumOfPage)
                            $scope.pageOptions.ui.page++;
                        else
                            $scope.pageOptions.ui.page = 1;

                        console.log('page', $scope.pageOptions.ui.page);
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
                    $scope.pageOptions.displayMode.current_nav_tab = active_item.text();
                    $scope.pageOptions.displayMode.isDisplaySearchPanel = ($scope.pageOptions.displayMode.current_nav_tab === 'Quản lý') ? true : false;    
                }                
            });

            $rootScope.$watch('hideMainHeader', (newVal) => {
                if (newVal) {
                    $("body").addClass("uk-padding-top-remove");
                } else {
                    $("body").removeClass("uk-padding-top-remove");
                }
            });

			$scope.$watch('pageOptions.ui.heroContent.content.text', (newVal) => {
				$scope.pageOptions.ui.perPage = (newVal) ? 4 : 5;
				$scope.utils.getDataView.suachuas();
			});

			$scope.$watch('pageOptions.ui.page', (newVal) => {
				$scope.utils.getDataView.suachuas();
			});
        }
    }
});