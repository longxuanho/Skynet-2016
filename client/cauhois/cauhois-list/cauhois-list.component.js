angular.module('angular-skynet').directive('cauhoisList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-list/cauhois-list.template.html',
        controllerAs: 'vm',
        controller: function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, skynetKendoGrid, $reactive, skynetDictionary) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            
            vm._kData = skynetKendoGrid.cauhois.data;
            vm._kHelpers = skynetKendoGrid.cauhois.helpers;

            vm.dictionary = angular.copy(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem);
            
            vm.pageOptions = {
                localData: {
                    cauhois_config_data_filter: {}
                },
                isDisplayTopBar: true,
                isDisplayFullWidthGrid: false,
                topBarHeight: 'x1',
                filters: {
                    filterNhomId: '',            
                    nhomsFilterSource: [],
                    nhomsFilterActiveIds: [],
                },
                fabState: _.isEmpty(vm._helpers.validateUser('can_upsert_cau_hoi')) ? 'cauhois_createNew' : '',
                selected: {
                    cauhoi: {}
                },
                localConfigDataName: 'cauhois_config_data_local',
                cloudConfigDataName: 'cauhois_grid_config_data_skynet'
            };

            vm.pageReactiveData = {
                cauhois: [],
                tags: {
                    data: vm.dictionary.tags,
                    sort: { field: 'ten', dir: 'asc' },
                    group: { field: 'group' }

                }
            }

            // LOAD LOCAL DATA
            try {
                let localData = JSON.parse(localStorage.getItem(vm.pageOptions.localConfigDataName));
                if (!_.isEmpty(localData)) {
                    console.log('data preload from cache: ', localData)
            
                    vm.pageOptions.localData = angular.copy(localData);

                    vm.pageOptions.isDisplayTopBar = _.has(localData, 'isDisplayTopBar') ? localData.isDisplayTopBar : true;
                    vm.pageOptions.topBarHeight = (localData.topBarHeight) ? localData.topBarHeight : 'x1';
                    vm.pageOptions.isDisplayFullWidthGrid = _.has(localData, 'isDisplayFullWidthGrid') ? localData.isDisplayFullWidthGrid : true;
                    vm.pageOptions.filters.filterNhomId = (localData.filters.filterNhomId) ? localData.filters.filterNhomId : '';
                    vm.pageOptions.filters.nhomsFilterActiveIds = (localData.filters.nhomsFilterActiveIds) ? angular.copy(localData.filters.nhomsFilterActiveIds) : [];
                }        
            }
            catch(err) {
                iNotifier.error('Có lỗi xảy ra với cấu hình dữ liệu mà bạn đã lưu trên thiết bị này. Vui lòng reset theo các bước sau: Từ Menu > Dữ liệu > Giới hạn dữ liệu > Reset.');
            }

            console.log('data load from cache: ', vm.pageOptions)


            kendo.pdf.defineFont({
                "Roboto": "/assets/fonts/DejaVuSans.ttf",
                "Roboto|Bold": "/assets/fonts/DejaVuSans-Bold.ttf",
                "Roboto|Bold|Italic": "/assets/fonts/DejaVuSans-Oblique.ttf",
                "Roboto|Italic": "/assets/fonts/DejaVuSans-Oblique.ttf"
            });

            vm.gridData = {
                kGrid: {
                    kData: {
                        dataSource: {
                            data: new kendo.data.ObservableObject([]),
                        }
                    },
                    kOptions: angular.copy(vm._kHelpers.initDefaultOptions()),
                    gridOnChange: function(event) {
                        let grid = $("#myGrid").data("kendoGrid");
                        if ((this.kOptions.selectable === 'row' || this.kOptions.selectable === 'cell') && grid.select().length)  {
                            vm.pageOptions.fabState = 'cauhois_viewDetails';
                            vm.pageOptions.selected.cauhoi = grid.dataItem(grid.select());
                        }
                        console.log('selected: ', vm.pageOptions.selected.cauhoi);
                    },
                    gridOnDataBound: function(event) {
                        vm.pageOptions.fabState = _.isEmpty(vm._helpers.validateUser('can_upsert_cau_hoi')) ? 'cauhois_createNew' : '';
                        vm.pageOptions.selected.cauhoi = '';
                    }
                }
            }

            vm._kHelpers.initDefaultDataSource(vm.gridData.kGrid.kData.dataSource);

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                setFilterByNhomId: function(id) {
                    vm.pageOptions.filters.filterNhomId = id;
                },
                buildNhomsFilterSource: function(source, selectedIds) {
                    if (source.length) {
                        if (selectedIds.length) {
                            _.each(source, (item) => {
                                if (_.contains(selectedIds, item._id)) 
                                    item.isActive = true;
                                else {
                                    if (!item.isActive)
                                        item.isActive = false;
                                }
                            });
                        } else {
                            _.each(source, (item) => {
                                item.isActive = true
                            });
                        } 
                        console.log('buildNhomsFilterSource: ', source);
                    }
                }
            }

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                nhomsSource: () => {
                    vm.pageOptions.filters.nhomsFilterSource = Nhoms.find({}, {sort: {order: 1}}).fetch();
                    vm.pageOptions.filters.nhomsFilterSource.unshift({_id: '', ten: "Tất cả"});
                    vm.utils.buildNhomsFilterSource(vm.pageOptions.filters.nhomsFilterSource, vm.pageOptions.filters.nhomsFilterActiveIds);

                    return Nhoms.find({}, {sort: {order: 1}});
                },
                cauhois: () => {
                    vm.gridData.kGrid.kData.dataSource.data = (vm.pageOptions.filters.filterNhomId) ? CauHois.find({
                        'phan_loai.nhom_cau_hoi.ma': vm.pageOptions.filters.filterNhomId
                    }).fetch() : CauHois.find().fetch();
                    return CauHois.find({
                        'phan_loai.nhom_cau_hoi.ma': vm.getReactively('pageOptions.filters.filterNhomId')
                    });
                }
            });


            // ***************************************************
            // METHODS
            // ***************************************************
            

            // ***************************************************
            // WATCHERS
            // ***************************************************

            vm.sSidebar = {
                site_online: true,
                top_bar: true,
                minify_assets: true
            };
            
        }
    }
});
