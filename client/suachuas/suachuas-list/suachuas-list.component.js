angular.module('angular-skynet').directive('suachuasList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/suachuas/suachuas-list/suachuas-list.template.html',
        controllerAs: 'vm',
        bindToController: true,
        controller: function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, skynetKendoGrid, $reactive, skynetDictionary) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            
            vm._kData = skynetKendoGrid.suachuas.data;
            vm._kHelpers = skynetKendoGrid.suachuas.helpers;

            vm.dictionary = angular.copy(skynetDictionary.data.suachuas);

            vm.pageOptions = {
                localData: {
                    suachuas_config_data_filter: {}
                },
                isDisplayTopBar: true,
                isDisplayFullWidthGrid: false,
                topBarHeight: 'x1',
                filters: {
                    filterNhomId: '',            
                    nhomsFilterSource: [],
                    nhomsFilterActiveIds: [],
                },
                fabState: _.isEmpty(vm._helpers.validateUser('can_upsert_sua_chua')) ? 'suachuas_createNew' : '',
                selected: {
                    suachua: {
                        tags: []
                    }
                },
                localConfigDataName: 'suachuas_config_data_local',
                cloudConfigDataName: 'suachuas_grid_config_data_skynet'
            };

            

            vm.pageReactiveData = {
                suachuas: [],
                // tags: {
                //     data: vm.dictionary.tags,
                //     sort: { field: 'ten', dir: 'asc' },
                //     group: { field: 'group' }

                // },
                searchTags: [],
                searchLoaitbs: [],
                searchBacthis: []
            };

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
                    kOptions: angular.copy(vm._kHelpers.initDefaultOptions()),
                    kData: {
                        dataSource: new kendo.data.DataSource(vm._kHelpers.initDefaultDataSource())
                    },
                    gridOnChange: function(event) {
                        let grid = $("#myGrid").data("kendoGrid");

                        if (grid.select().length) {
                            if (this.kOptions.selectable === 'row') {

                                let selected = grid.dataItem(grid.select());
                                
                                if (vm.pageOptions.selected.suachua._id === selected._id) {
                                    // Nếu click lại một lần nữa vào hàng đã chọn -> bỏ chọn
                                    vm.pageOptions.selected.suachua = {};
                                    vm.pageOptions.fabState = 'suachuas_createNew';                                                                       

                                    try {
                                        grid.clearSelection();    
                                    } catch (err) {
                                        // ERROR CLEAR SELECTION???
                                        console.log('Error clearing selection: ', err.message);
                                    }
                                } else {
                                    vm.pageOptions.fabState = 'suachuas_viewDetails';
                                    vm.pageOptions.selected.suachua = grid.dataItem(grid.select());
                                }
                            }
                        }
                    },                                        
                    gridOnDataBound: function(event) {
                        vm.pageOptions.fabState = _.isEmpty(vm._helpers.validateUser('can_upsert_sua_chua')) ? 'suachuas_createNew' : '';
                        vm.pageOptions.selected.suachua = '';
                    }
                }
            }

            

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                openModal: function(modal_selector) {
                    let modal = UIkit.modal(modal_selector);
                    if (!modal.isActive()) {
                        modal.show();
                    }
                },
                setFilterByNhomId: function(id) {
                    // Nếu người dùng click vào đúng filter item đã chọn -> bỏ chọn, ngược lại, set filter item
                    vm.pageOptions.filters.filterNhomId = (vm.pageOptions.filters.filterNhomId === id) ? '' : id;
                },
                buildNhomsFilterSource: function() {
                    vm.pageOptions.filters.nhomsFilterSource = angular.copy(vm.dictionary.trang_thais);
                    vm.pageOptions.filters.nhomsFilterSource.unshift({ma: '', ten: "Tất cả"});

                    // Hiển thị tất cả các item trên Top Bar
                    _.each(vm.pageOptions.filters.nhomsFilterSource, (item) => {
                        item.isActive = true
                    })

                    console.log('buildNhomsFilterSource: ', vm.pageOptions.filters.nhomsFilterSource);
                }
            }

            vm.utils.buildNhomsFilterSource();

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('suachuas', () => {
                return [{
                        limit: parseInt($scope.getReactively('perPage')),
                        skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage'))
                    },
                    $rootScope.getReactively('searchText'),
                    $rootScope.getReactively('searchBy'),
                    $scope.getReactively('vm.pageReactiveData.searchTags'),
                    $scope.getReactively('vm.pageReactiveData.searchLoaitbs'),
                    $scope.getReactively('vm.pageReactiveData.searchBacthis')
                ]
            });

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                suachuas: () => {
                    let data = vm.pageOptions.filters.filterNhomId ? SuaChuas.find({'trang_thai.ma': vm.pageOptions.filters.filterNhomId}).fetch() : SuaChuas.find({}).fetch();
                    try {
                        vm.gridData.kGrid.kData.dataSource.data(data);
                    } catch (error) {
                        console.log("Error: ", error);
                    }
                    return SuaChuas.find({
                        'trang_thai.ma': vm.getReactively('pageOptions.filters.filterNhomId')
                    });
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
