angular.module('angular-skynet').directive('cauhoisList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-list/cauhois-list.template.html',
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

            console.log('nhom: ', vm.pageOptions.filters.nhomsFilterSource)

            vm.pageReactiveData = {
                cauhois: [],
                tags: {
                    data: vm.dictionary.tags,
                    sort: { field: 'ten', dir: 'asc' },
                    group: { field: 'group' }

                },
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
                    kOptions: vm._kHelpers.initDefaultOptions()
                }
            }

            // Quản lý các sự kiện events với kOptions
            // Khi người dùng click chọn một item, nếu item chưa được chọn -> chọn, nếu item đã được chọn trước đó -> bỏ chọn.
            vm.gridData.kGrid.kOptions.change = function(e) {
                let grid = $("#myGrid").data("kendoGrid");
                if (grid.select().length) {
                    if (vm.gridData.kGrid.kOptions.selectable === 'row') {

                        let selected = grid.dataItem(grid.select());
                        
                        if (vm.pageOptions.selected.cauhoi._id === selected._id) {
                            // Nếu click lại một lần nữa vào hàng đã chọn -> bỏ chọn
                            vm.pageOptions.selected.cauhoi = {};
                            vm.pageOptions.fabState = 'cauhois_createNew';                                                                       
                            grid.clearSelection();    
                        } else {
                            vm.pageOptions.fabState = 'cauhois_viewDetails';
                            vm.pageOptions.selected.cauhoi = grid.dataItem(grid.select());
                        }
                    }
                }
            };
            // Security: Chỉ cho phép tạo câu hỏi mới nếu người dùng có đủ thẩm quyền.
            vm.gridData.kGrid.kOptions.dataBound = function(e) {
                vm.pageOptions.fabState = _.isEmpty(vm._helpers.validateUser('can_upsert_cau_hoi')) ? 'cauhois_createNew' : '';
                // vm.pageOptions.selected.cauhoi = {};
            };

            

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                setFilterByNhomId: function(id) {
                    // Nếu người dùng click vào đúng filter item đã chọn -> bỏ chọn, ngược lại, set filter item
                    vm.pageOptions.filters.filterNhomId = (vm.pageOptions.filters.filterNhomId === id) ? '' : id;
                },
                buildNhomsFilterSource: function() {
                    
                    vm.pageOptions.filters.nhomsFilterSource = _.sortBy(vm.dictionary.nhom_cau_hois, (item) => {
                        return item.order;
                    });
                    // Thêm filter 'Tất cả
                    vm.pageOptions.filters.nhomsFilterSource.unshift({ma: '', ten_ngan: "Tất cả"});

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

            $scope.subscribe('cauhois', () => {
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
                cauhois: () => {
                    let data = vm.pageOptions.filters.filterNhomId ? CauHois.find({'phan_loai.nhom_cau_hoi.ma': vm.pageOptions.filters.filterNhomId}).fetch() : CauHois.find({}).fetch();
                    try {
                        vm.gridData.kGrid.kOptions.dataSource.data(data);
                    } catch (error) {
                        console.log("Error: ", error);
                    }
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
            
            
        }
    }
});
