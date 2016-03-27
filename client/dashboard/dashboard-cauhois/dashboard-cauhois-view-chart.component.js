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

            vm.pageOptions = {
                charts: {
                    donut_nhomtbs_countId: {
                        theme: "material",
                        title: {
                            position: "bottom",
                            text: "Biểu đồ phân bố câu hỏi NGB"
                        },
                        legend: {
                            visible: false
                        },
                        seriesDefaults: {
                            type: "donut",
                            startAngle: 150
                        },
                        dataSource: vm._kOptions.resolvedDataSources.donut_nhomtbs_countId,
                        series: [{
                            categoryField: "category",
                            field: "value",
                            colorField: "color",
                            holeSize: 60,
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
                        dataSource: vm._kOptions.resolvedDataSources.bar_loaitbs_countId,
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
                        vm.utils.massageDataSource.resolve_donut_nhomtbs_countId(dataSource);
                        vm.utils.massageDataSource.resolve_bar_loaitbs_countId(dataSource);
                    },
                    resolve_donut_nhomtbs_countId: function(dataSource) {
                        // Trích xuất dữ liệu cho donut chart - Phân bố câu hỏi theo ngành thi
                        dataSource.group({ 
                            field: 'phan_loai.nhom_tb.ten',
                            aggregates: [{ field: "_id", aggregate: "count" }],
                        });

                        let views = dataSource.view(),
                            resolved = [];
                        
                        _.each(views, (view, index) => {
                            resolved.push({
                                category: view.value,
                                value: view.aggregates._id.count,
                                color: vm._kOptions.colorPalette.donut_nhomtbs_countId[index]
                            });
                        });

                        vm._kOptions.resolvedDataSources.donut_nhomtbs_countId.data(resolved);
                    },
                    resolve_bar_loaitbs_countId: function(dataSource) {
                        // Liệt kê tất cả các loại thiết bị khả dụng từ DataHelpers
                        let loai_tbs = DataHelpers.find({
                            'subject': 'cauhois',
                            'category': 'loai_tbs'
                        }, {
                            sort: {
                                'container.ref': 1,
                                'container.text': 1
                            }
                        }).fetch();

                        let resolved = [];
                        _.each(loai_tbs, (loai_tb, index) => {
                            dataSource.filter({ field: "fields.loai_tb", operator: "contains", value: loai_tb.container.text });
                            let view = dataSource.view()[0];
                            if (view && view.aggregates._id.count)
                                resolved.push({
                                    category: loai_tb.container.text,
                                    value: view.aggregates._id.count,
                                    color: vm._kOptions.colorPalette.bar_loaitbs_countId[0]
                                });
                        });
                        vm._kOptions.resolvedDataSources.bar_loaitbs_countId.data(resolved);
                    },
                }
            };

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                cauhois: function cauhois() {
                    try {
                        vm._kOptions.dataSource.data(CauHois.find().fetch());
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                    vm.utils.massageDataSource.massage(vm._kOptions.dataSource);
                    return CauHois.find({
                    });
                },
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