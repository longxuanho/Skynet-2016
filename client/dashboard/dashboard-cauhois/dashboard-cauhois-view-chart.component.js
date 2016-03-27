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
                        title: {
                            position: "bottom",
                            text: "Share of Internet Population Growth"
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
                        }],
                        tooltip: {
                            visible: true,
                            template: "#= category #: #= value # câu hỏi"
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
                    }
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