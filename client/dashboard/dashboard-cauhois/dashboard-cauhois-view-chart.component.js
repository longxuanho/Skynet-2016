angular.module('angular-skynet').directive('dashboardCauhoisViewChart', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-cauhois/dashboard-cauhois-view-chart.template.html',
        controllerAs: 'vm',
        bindToController: true,

        controller: function($scope, $stateParams, $state, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary, skynetLiveOptions, $timeout, variables) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            vm._kOptions = skynetLiveOptions.cauhois.kendo.options.charts.dashboard;
            vm.dictionary = angular.copy(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem);

            // vm.pageOptions.default.color
            vm.pageOptions = {
                default: {
                    colorPalette: ['&#xE7EF;']
                },
                epc: {
                    cauhois_total: {
                        barColor:'#03a9f4',
                        scaleColor: false,
                        trackColor: '#f5f5f5',
                        lineWidth: 5,
                        size: 110,
                        easing: variables.bez_easing_swiftOut
                    },
                    user_status: {
                        barColor:'#607d8b',
                        scaleColor: false,
                        trackColor: '#f5f5f5',
                        lineWidth: 5,
                        size: 110,
                        easing: variables.bez_easing_swiftOut
                    }
                },
                charts: {
                    small_bar_ratio: {
                        theme: "material",
                        seriesDefaults: {
                            type: "column",
                            gap: 4,
                            spacing: 0.8
                        },
                        valueAxis: {
                            labels: {
                                visible:false
                            }
                        },
                        series: [{
                                name: "Thực tế",
                                data: [0.3]
                            }, {
                                name: "Phân bố",
                                data: [1]
                            }]
                    },
                    donut_nhomtbs_countId: {
                        theme: "material",
                        title: {
                            position: "bottom",
                            text: "Biểu đồ phân bố câu hỏi NGB",
                            font: "16px Roboto,Arial,Helvetica,sans-serif"
                        },
                        legend: {
                            visible: true,
                            position: 'top'
                        },
                        seriesDefaults: {
                            type: "donut",
                            startAngle: 0
                        },
                        series: [{
                            name: 'inside',                            
                            holeSize: 60,
                            data: []
                        }, {
                            name: 'outside',
                            data: [],
                            labels: {
                                visible: true,
                                background: "transparent",
                                position: "outsideEnd",
                                template: "#= category #\n#= value # câu hỏi"
                            }
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi (#= kendo.format('{0:P0}', percentage) #)"
                        }
                    },
                    donut_large_nhomtbs_countId: {
                        theme: "material",
                        title: {
                            text: "Theo các nhóm thiết bị",
                            font: "16px Roboto,Arial,Helvetica,sans-serif"
                        },
                        legend: {
                            position: "bottom"
                        },
                        dataSource: kendo.data.DataSource.create({
                            data: []
                        }),
                        seriesDefaults: {
                            type: "donut",
                            startAngle: 0
                        },
                        series: [{
                            field: 'value',
                            categoryField: 'category',
                            colorField: 'color',
                            holeSize: 70,
                            labels: {
                                visible: true,
                                background: "transparent",
                                position: "outsideEnd",
                                template: "#= category #\n#= value # câu hỏi"
                            }
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi (#= kendo.format('{0:P0}', percentage) #)"
                        },
                    },
                    donut_large_nhomcauhois_countId: {
                        theme: "material",
                        title: {
                            text: "Theo các nhóm nội dung",
                            font: "16px Roboto,Arial,Helvetica,sans-serif"
                        },
                        legend: {
                            position: "bottom"
                        },
                        dataSource: kendo.data.DataSource.create({
                            data: []
                        }),
                        seriesDefaults: {
                            type: "donut",
                            startAngle: 0
                        },
                        series: [{
                            field: 'value',
                            categoryField: 'category',
                            colorField: 'color',
                            holeSize: 70,
                            labels: {
                                visible: true,
                                background: "transparent",
                                position: "outsideEnd",
                                template: "#= category #\n#= value # câu hỏi"
                            }
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi (#= kendo.format('{0:P0}', percentage) #)"
                        },
                    },
                    bar_loaitbs_countId: {
                        theme: "material",
                        legend: {
                            visible: false
                        },
                        seriesDefaults: {
                            type: "bar"
                        },
                        dataSource: kendo.data.DataSource.create({
                            data: []
                        }),
                        series: [{
                            categoryField: "category",
                            field: "value",
                            colorField: "color",
                            labels: {
                                visible: true,
                                background: "transparent",
                                position: "outsideEnd",
                                template: "#= value #"
                            }
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi"
                        }
                    },
                    bar_large_loaitbs_countId: {
                        theme: "material",
                        title: {
                            text: "Phân bố câu hỏi theo các bộ đề",
                            font: "16px Roboto,Arial,Helvetica,sans-serif"
                        },
                        legend: {
                            visible: false
                        },
                        seriesDefaults: {
                            type: "bar"
                        },
                        dataSource: kendo.data.DataSource.create({
                            data: []
                        }),
                        series: [{
                            categoryField: "category",
                            field: "value",
                            colorField: "color",
                            labels: {
                                visible: true,
                                background: "transparent",
                                position: "outsideEnd",
                                template: "#= value #"
                            }
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi"
                        }
                    },
                    bar_large_nhomcauhois_countId: {
                        theme: "material",
                        title: {
                            text: "Phân bố câu hỏi theo các bộ đề",
                            font: "16px Roboto,Arial,Helvetica,sans-serif"
                        },
                        legend: {
                            visible: false
                        },
                        seriesDefaults: {
                            type: "bar"
                        },
                        dataSource: kendo.data.DataSource.create({
                            data: []
                        }),
                        series: [{
                            categoryField: "category",
                            field: "value",
                            colorField: "color",
                            labels: {
                                visible: true,
                                background: "transparent",
                                position: "outsideEnd",
                                template: "#= value #"
                            }
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi"
                        }
                    },
                }
            };

            vm.pageData = {
                loai_tbs: {},
                nhom_cau_hois: [],
                statistics: {
                    cauhois: {
                        total: 0,
                        big_total: 0
                    }
                }
            }      

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                processDataSource: {
                    resolve_loaitbs: function() {
                        let rawData = _.groupBy(DataHelpers.find({
                            'subject': 'cauhois',
                            'category': 'loai_tbs'
                        }, {
                            sort: {
                                'container.ref': 1,
                                'container.text': 1
                            }
                        }).fetch(), (item) => {
                            // Nhóm dữ liệu theo nhóm thiết bị
                            return item.container.ref;
                        });
                        let keys = _.keys(rawData);
                        // Với mỗi nhóm thiết bị, thêm giá trị màu sắc tham chiếu cho biểu đồ và đưa vào vm.pageData.loai_tbs
                        _.each(keys, (key, index) => {
                            vm.pageData.loai_tbs[key] = {};
                            vm.pageData.loai_tbs[key]['color'] = vm._kOptions.color.palettes['Vitamin C'][index];
                            vm.pageData.loai_tbs[key]['data'] = rawData[key];
                        });
                        console.log('vm.pageData: ', vm.pageData);
                    },
                    resolve_nhomcauhois: function() {
                        _.each(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem.nhom_cau_hois, (item, index) => {
                            vm.pageData.nhom_cau_hois[item.ten] = {
                                color: vm._kOptions.color.palettes['Blue Mono'][index]
                            };
                        });
                    }
                },
                massageDataSource: {
                    massage: function (dataSource) {
                        // Bước 0: Xử lý dữ liệu cho các thống kê statistics
                        vm.utils.massageDataSource.resolve_statistics(dataSource);
                        // Bước 1: Xử lý dữ liệu cho đồ thị bar_loaitbs_countId
                        vm.utils.massageDataSource.resolve_bar_loaitbs_countId(dataSource);
                        // Bước 2: Xử lý dữ liệu cho đồ thị donut_nhomtbs_countId
                        vm.utils.massageDataSource.resolve_donut_nhomtbs_countId(dataSource);
                    },
                    resolve_statistics: function(dataSource) {
                        // Tổng số câu hỏi thi NGB được trả về từ DB
                        vm.pageData.statistics.cauhois.total = dataSource.aggregates()['_id'].count;
                    },   
                    resolve_bar_loaitbs_countId: function(dataSource) {
                        // Tính toán các số liệu về câu hỏi tương ứng với các bộ đề (chia theo loại thiết bị) - Sử dụng các filters
                        if (!_.isEmpty(vm.pageData.loai_tbs)) {
                            let resolved = [],
                                keys = _.keys(vm.pageData.loai_tbs);
                            // Với mỗi nhóm thiết bị, áp dụng các filter theo nhóm rồi theo loại thiết bị, từ đó tính ra số lượng câu hỏi
                            _.each(keys, (key) => {
                                _.each(vm.pageData.loai_tbs[key].data, (loaitb, index) => {
                                    dataSource.filter({
                                        logic: "and",
                                        filters: [
                                            { field: "phan_loai.nhom_tb.ten", operator: "eq", value: key },
                                            { field: "fields.loai_tb", operator: "contains", value: loaitb.container.text }
                                        ]
                                    });
                                    let count = dataSource.view().length;
                                    if (count) {
                                        // Nếu có câu hỏi trong loại thiết bị này, xuất ra thống kê để hiển trị trên đồ thị
                                        resolved.push({
                                            category: loaitb.container.text,
                                            value: count,
                                            color: vm.pageData.loai_tbs[key] ? vm.pageData.loai_tbs[key]['color'] : vm.pageOptions.default.colorPalette[0]
                                        });
                                    }
                                });                                
                            });

                            // Sau khi thống kê xong, reset filter.
                            dataSource.filter({});

                            // Cập nhật phần thống kê dữ liệu
                            vm.pageData.statistics.cauhois.big_total = 0;
                            _.each(resolved, (item) => {
                                vm.pageData.statistics.cauhois.big_total += item.value;
                            });                            

                            // Feed dữ liệu cho bar_loaitbs_countId và bar_large_loaitbs_countId
                            vm.pageOptions.charts.bar_loaitbs_countId.dataSource.data(resolved);
                            vm.pageOptions.charts.bar_large_loaitbs_countId.dataSource.data(resolved);
                            vm.pageOptions.charts.bar_large_nhomcauhois_countId.dataSource.data(resolved);
                        }
                    },              
                    resolve_donut_nhomtbs_countId: function(dataSource) {
                        // Nhóm dữ liệu theo các nhóm thiết bị và lấy các số liệu thống kê (Tính toán số liệu cho donut vòng trong)                 
                        dataSource.group({ 
                            field: 'phan_loai.nhom_tb.ten',
                            aggregates: [{ field: "_id", aggregate: "count" }],
                        });

                        let resolved = [],
                            views = dataSource.view();
                        
                        _.each(views, (view, index) => {
                            resolved.push({
                                category: view.value,
                                value: view.aggregates._id.count,
                                color: vm.pageData.loai_tbs[view.value] ? vm.pageData.loai_tbs[view.value]['color'] : vm.pageOptions.default.colorPalette[0]
                            });
                        });

                        // Feed dữ liệu cho donut_nhomtbs_countId, donut_large_nhomtbs_countId 
                        vm.pageOptions.charts.donut_nhomtbs_countId.series[1].data = resolved;
                        vm.pageOptions.charts.donut_large_nhomtbs_countId.dataSource.data(resolved);

                        // Tính toán các số liệu cho donut vòng ngoài - theo nhóm nội dung
                        dataSource.group({ 
                            field: 'phan_loai.nhom_cau_hoi.ten',
                            aggregates: [{ field: "_id", aggregate: "count" }],
                        });

                        resolved = [];
                        views = dataSource.view();
                        
                        _.each(views, (view, index) => {
                            resolved.push({
                                category: view.value,
                                value: view.aggregates._id.count,
                                color: vm.pageData.nhom_cau_hois[view.value]['color']
                            });
                        });

                        console.log('test, ', resolved);

                        // Feed dữ liệu cho donut_nhomtbs_countId, donut_large_nhomcauhois_countId 
                        vm.pageOptions.charts.donut_nhomtbs_countId.series[0].data = resolved;
                        vm.pageOptions.charts.donut_large_nhomcauhois_countId.dataSource.data(resolved);

                        // Sau khi thống kê xong, reset group.
                        dataSource.group([]);                        
                    },
                },

            };

            vm.utils.processDataSource.resolve_nhomcauhois();

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                
                statistics: function () {
                    // Tách các loại thiết bị theo nhóm và ấn định các mã màu cho từng nhóm thiết bị, thể hiện trên các biểu đồ
                    vm.utils.processDataSource.resolve_loaitbs();
                    // Sau khi có datahelpers cho loại thiết bị, thực hiện các thống kê cho câu hỏi
                    try {
                        vm._kOptions.dataSource.data(CauHois.find().fetch());
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                    vm.utils.massageDataSource.massage(vm._kOptions.dataSource);
                    return;
                }
                
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            


            

            // ***************************************************
            // WATCHERS
            // ***************************************************

        }
    }
});