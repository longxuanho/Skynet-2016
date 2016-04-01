angular.module('angular-skynet').directive('dashboardCauhoisViewChart', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-cauhois/dashboard-cauhois-view-chart.template.html',
        controllerAs: 'vm',
        bindToController: true,

        controller: function($scope, $stateParams, $state, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary, skynetLiveOptions, $timeout) {

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

            // vm.pageOptions.charts.donut_nhomtbs_countId.series[0].data
            vm.pageOptions = {
                charts: {
                    donut_nhomtbs_countId: {
                        theme: "material",
                        title: {
                            position: "bottom",
                            text: "Biểu đồ phân bố câu hỏi NGB"
                        },
                        legend: {
                            visible: true,
                            position: 'left'
                        },
                        seriesDefaults: {
                            type: "donut",
                            startAngle: 0
                        },
                        // dataSource: kendo.data.DataSource.create({
                        //     data: []
                        // }),
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
                        },
                        seriesClick: function (e) {
                            console.log('series clicked: ', e);
                        }
                    },
                    bar_loaitbs_countId: {
                        theme: "material",
                        title: {
                            position: "bottom",
                            text: "Phân bố câu hỏi theo loại PT"
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
                        },
                        seriesClick: function (e) {
                            console.log('series clicked: ', e);
                        }
                    }
                }
            };

            vm.pageData = {
                loai_tbs: {},
                nhom_cau_hois: []
            }      

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                massageDataSource: {
                    massage: function (dataSource) {
                        // Bước 1: Xử lý dữ liệu cho đồ thị bar_loaitbs_countId
                        vm.utils.massageDataSource.resolve_bar_loaitbs_countId(dataSource);
                        // Bước 2: Xử lý dữ liệu cho đồ thị donut_nhomtbs_countId
                        vm.utils.massageDataSource.resolve_donut_nhomtbs_countId(dataSource);
                    },
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
                                            color: vm.pageData.loai_tbs[key]['color']
                                        });
                                    }
                                });                                
                            });

                            // Sau khi thống kê xong, reset filter.
                            dataSource.filter({});

                            vm.pageOptions.charts.bar_loaitbs_countId.dataSource.data(resolved);
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
                                color: vm.pageData.loai_tbs[view.value]['color']
                            });
                        });

                        vm.pageOptions.charts.donut_nhomtbs_countId.series[1].data = resolved;

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

                        vm.pageOptions.charts.donut_nhomtbs_countId.series[0].data = resolved;
                        // Sau khi thống kê xong, reset group.
                        dataSource.group([]);                        
                    },
                }
            };

            vm.utils.massageDataSource.resolve_nhomcauhois();

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                
                statistics: function () {
                    // Tách các loại thiết bị theo nhóm và ấn định các mã màu cho từng nhóm thiết bị, thể hiện trên các biểu đồ
                    vm.utils.massageDataSource.resolve_loaitbs();
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