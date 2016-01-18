angular.module('angular-skynet').directive('thietbisKendoGridMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/directives/thietbis/kendoGridMenu/thietbis_kGridMenu.html',
        scope: {
            gridData: '=',
            pageOptions: '='
        },
        controllerAs: 'vm',

        controller: function($scope, $rootScope, iNotifier, skynetKendoGrid, $auth) {

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            $scope._kData = skynetKendoGrid.thietbis.data;
            $scope._kHelpers = skynetKendoGrid.thietbis.helpers;

            $scope.columnStatus = [];
            $scope.UserConfigSettings = [];
            $scope.SkynetConfigSettings = [];

            $scope.pageable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.pageable);
            $scope.sortable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.sortable);
            $scope.filterable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.filterable);
            $scope.selectable_master = $scope.gridData.thietbisGrid.kOptions.selectable;
            $scope.allowCopy_master = angular.copy($scope.gridData.thietbisGrid.kOptions.allowCopy);
            $scope.groupable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.groupable);
            $scope.scrollable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.scrollable);

            $scope.menuOptions = {
                isPageable: $scope.gridData.thietbisGrid.kOptions.pageable ? true : false,
                isSelectable: $scope.gridData.thietbisGrid.kOptions.selectable ? true : false,
                isAllowCopy: $scope.gridData.thietbisGrid.kOptions.allowCopy ? true : false,
                isSortable: $scope.gridData.thietbisGrid.kOptions.sortable ? true : false,
                isSortable_MultipleMode: false,
                isFilterable: $scope.gridData.thietbisGrid.kOptions.filterable ? true : false,
                isFilterable_mode: $scope.gridData.thietbisGrid.kOptions.filterable.mode,
                isGroupable: $scope.gridData.thietbisGrid.kOptions.filterable ? true : false,
                isScrollable: $scope.gridData.thietbisGrid.kOptions.scrollable ? true : false,
                newConfig: {},
                currentConfig: {},
                isSaveDataLimitToLocalDevice: false,
            };

            $scope.currentUser = Meteor.user();

            $scope.kendoMenu = {
                // CAUTION: NHỚ CẬP NHẬT LẠI HÀM UTILS.updateMenuOnUserConfigs() TRƯỚC KHI ĐỔI VỊ TRÍ CÁC MỤC TRONG MENU!
                dataSource: [{
                    text: "Dữ liệu",
                    items: [{
                        text: "Thiết lập chung",
                        encoded: false
                    }, {
                        text: "Giới hạn dữ liệu",
                    }, {
                        text: "Xuất dữ liệu Excel",
                    }, {
                        text: "Xuất dữ liệu PDF"
                    }]
                }, {
                    text: "Hiển thị",
                    items: [{
                        text: "Các cột dữ liệu",
                    }, {
                        text: "Phân trang",
                    }, {
                        text: "Lọc và sắp xếp"
                    }, {
                        // text: "<span ng-hide='gridData.thietbisGrid.kOptions.toolbar'>Hiện Toolbar</span><span ng-show='gridData.thietbisGrid.kOptions.toolbar'>Ẩn Toolbar</span>",
                        text: "Thanh Toolbar <span ng-show='gridData.thietbisGrid.kOptions.toolbar' class='k-icon k-si-tick'></span>",
                        encoded: false
                    }]
                }, {
                    text: "Cấu hình",
                    items: [{
                        text: "Chọn cấu hình",
                        items: [{
                            text: "Đã lưu",
                        }, {
                            text: "Từ Skynet...",
                        }]
                    }, {
                        text: "Quản lý cấu hình",
                    }, {
                        text: "Lưu cấu hình hiện tại"
                    }, {
                        text: "Trở về mặc định"
                    }]
                }]
            };


            // ***************************************************
            // METHODS
            // ***************************************************
            $scope.onSelect = function(e) {
                let textContent = e.item.textContent;

                switch (textContent) {
                    case "Thiết lập chung":
                        UIkit.modal("#modal_menu_data_generalSettings").show();
                        break;
                    case "Xuất dữ liệu Excel":
                        UIkit.modal("#modal_menu_data_saveAsExcel").show();
                        break;
                    case "Xuất dữ liệu PDF":
                        UIkit.modal("#modal_menu_data_saveAsPdf").show();
                        break;
                    case "Các cột dữ liệu":
                        UIkit.modal("#modal_menu_display_columns").show();
                        break;
                    case "Phân trang":
                        UIkit.modal("#modal_menu_display_paging").show();
                        break;
                    case "Lọc và sắp xếp":
                        UIkit.modal("#modal_menu_display_filterAndSort").show();
                        break;
                    case "Thanh Toolbar ":
                        $scope.utils.toggleToolbar();
                        break;
                    case "Lưu cấu hình hiện tại":
                        UIkit.modal("#modal_menu_configs_saveCurrent").show();
                        break;
                    case "Quản lý cấu hình":
                        UIkit.modal("#modal_menu_configs_manage").show();
                        break;
                    case "Trở về mặc định":
                        $scope.utils.resetToDefaultConfig();
                        break;
                    case "Giới hạn dữ liệu":
                        console.log('Fired!!');
                        UIkit.modal("#modal_menu_data_limitDataRange").show();                        
                        break;        
                }
                console.log("Selected: ", e);
            }


            // ***************************************************
            // UTILS
            // ***************************************************
            $scope.utils = {
                menu_display_columns: function() {},
                initColumnStatus: function() {
                    let activeColumnFields = _.pluck($scope.gridData.thietbisGrid.kOptions.columns, 'field');

                    $scope.columnStatus = _.map($scope._kData.config.availableColumns, (item) => {
                        item.isActive = _.contains(activeColumnFields, item.field);
                        return item;
                    });
                },
                updateColumnStatus: function() {
                    let activeColumns = _.pluck(_.filter($scope.columnStatus, (item) => {
                        return item.isActive;
                    }), 'field');

                    $scope.gridData.thietbisGrid.kOptions.columns = $scope._kHelpers.buildGridColumns(activeColumns);
                    $scope.gridData.thietbisGrid.kData.dataSource.schema.model = $scope._kHelpers.buildGridSchemaModel(activeColumns);
                },
                updateMenuOnUserConfigs: function(settings) {
                    
                    let newUserConfigItems = [],
                        newSkynetConfigItems = [];

                    if (settings.length) {
                        let userSettings = _.where(settings, {'isPublic': false}),
                        skynetSettings = _.where(settings, {'isPublic': true});
                        
                        if (userSettings.length) {
                            $scope.UserConfigSettings = _.map(userSettings, (item) => {
                                return {
                                    _id: item._id,
                                    ten: item.ten,
                                    order: item.order,
                                    gia_tri: JSON.parse(item.gia_tri)
                                }
                            });
                            console.log('Parsed UserSettings: ', $scope.UserConfigSettings);
                            let newUserConfigItems = _.map($scope.UserConfigSettings, (item) => {
                                return {
                                    text: '<span ng-click="utils.loadUserConfig(\'' + item._id + '\')">' + item.ten + '</span> <span ng-show="menuOptions.currentConfig._id===\'' + item._id + '\'"><span class="k-icon k-si-tick"></span></span>',
                                    encoded: false
                                }
                            });
                            
                            // NEED MODIFY HERE!!!
                            $scope.kendoMenu.dataSource[2].items[0].items[0].items = newUserConfigItems;

                        } else {
                            $scope.UserConfigSettings = [];
                            $scope.kendoMenu.dataSource[2].items[0].items[0].items = null;
                        }
                        if (skynetSettings.length) {
                            $scope.SkynetConfigSettings = _.map(skynetSettings, (item) => {
                                return {
                                    _id: item._id,
                                    ten: item.ten,
                                    order: item.order,
                                    gia_tri: JSON.parse(item.gia_tri)
                                }
                            });
                            console.log('Parsed SkynetSettings: ', $scope.SkynetConfigSettings);
                            let newSkynetConfigItems = _.map($scope.SkynetConfigSettings, (item) => {
                                return {
                                    text: '<span ng-click="utils.loadUserConfig(\'' + item._id + '\', \'skynet\')">' + item.ten + '</span> <span ng-show="menuOptions.currentConfig._id===\'' + item._id + '\'"><span class="k-icon k-si-tick"></span></span>',
                                    encoded: false
                                }
                            });

                            // NEED MODIFY HERE!!!
                            $scope.kendoMenu.dataSource[2].items[0].items[1].items = newSkynetConfigItems;

                        }  else {
                            $scope.SkynetConfigSettings = [];
                            $scope.kendoMenu.dataSource[2].items[0].items[1].items = null;
                        }                      
                    }
                    
                    
                    
                    
                },
                loadUserConfig: function(id, from) {
                    let config = {};
                    
                    if (from == 'skynet')
                        config = _.findWhere($scope.SkynetConfigSettings, {_id: id});
                    else 
                        config = _.findWhere($scope.UserConfigSettings, {_id: id});
                    
                    if (!_.isEmpty(config)) {
                        $scope.menuOptions.currentConfig = angular.copy(config);
                        $scope.gridData.thietbisGrid.kOptions = angular.copy($scope.menuOptions.currentConfig.gia_tri.kGridOptions);
                        this.loadUserConfigOnDataSource($scope.menuOptions.currentConfig.gia_tri.kDataSource);
                    }
                },
                loadUserConfigOnDataSource: function(config) {
                    $scope.gridData.thietbisGrid.kData.dataSource.aggregate = angular.copy(config.aggregate);
                    $scope.gridData.thietbisGrid.kData.dataSource.batch = config.batch;
                    $scope.gridData.thietbisGrid.kData.dataSource.filter = angular.copy(config.filter);
                    $scope.gridData.thietbisGrid.kData.dataSource.group = angular.copy(config.group);
                    $scope.gridData.thietbisGrid.kData.dataSource.pageSize = config.pageSize;
                    $scope.gridData.thietbisGrid.kData.dataSource.schema =  angular.copy(config.schema);
                    $scope.gridData.thietbisGrid.kData.dataSource.sort = angular.copy(config.sort);
                },
                saveAsExcel: function() {
                    if (!$scope.gridData.thietbisGrid.kOptions.excel.fileName)
                        $scope.gridData.thietbisGrid.kOptions.excel.fileName = 'From Sky with Love.xlsx';
                    let grid = $("#myGrid").data("kendoGrid");
                    grid.bind("excelExport", function(e) {
                        iNotifier.success('Dữ liệu được trích xuất theo định dạng Excel.');
                    });
                    grid.saveAsExcel();
                },
                saveAsPdf: function() {
                    if (!$scope.gridData.thietbisGrid.kOptions.pdf.fileName)
                        $scope.gridData.thietbisGrid.kOptions.pdf.fileName = 'From Sky with Love.pdf';
                    let grid = $("#myGrid").data("kendoGrid");
                    grid.bind("pdfExport", function(e) {
                        e.promise
                            .progress(function(e) {
                                console.log(kendo.format("{0:P} complete", e.progress));
                            })
                            .done(function() {
                                console.log("Trích xuất dữ liệu thành công!");
                            });
                    });
                    grid.saveAsPDF();
                },
                toggleToolbar: function() {
                    if (!$scope.gridData.thietbisGrid.kOptions.toolbar)
                        $scope.gridData.thietbisGrid.kOptions.toolbar = ["excel", "pdf"];
                    else
                        $scope.gridData.thietbisGrid.kOptions.toolbar = false;
                },
                initNewKendoGridConfig: function(config) {
                    config.ten = '',
                        config.order = 10,
                        config.user = {},
                        config.phan_loai = 'kendo_grid_thietbis',
                        config.isPublic = false,
                        config.metadata = {}
                },
                validateKendoGridConfig: function(config) {
                    let error = {};
                    if (!Meteor.userId())
                        error.message = "Bạn cần đăng nhập để sử dụng chức năng này.";
                    if (!config.ten)
                        error.message = "Bạn cần nhập tên cấu hình mới trước khi lưu.";
                    return error;
                },
                buildKendoGridConfig: function(config) {
                    let user = Meteor.user();
                    config.user = {
                        keyId: user._id,
                        email: user.emails[0].address,
                        profileName: user.profile.name
                    };
                    config.phan_loai = 'kendo_grid_thietbis';
                    config.metadata = {
                        ngay_tao: new Date()
                    }

                    if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                        config.isPublic = false;

                    let options = $("#myGrid").data("kendoGrid").getOptions();
                    config.gia_tri = JSON.stringify({
                        kGridOptions: _.omit(options, 'dataSource'),
                        kDataSource: _.omit(options.dataSource, 'data')
                    });
                },
                saveKendoGridConfig: function() {
                    let err = this.validateKendoGridConfig($scope.menuOptions.newConfig);
                    if (_.isEmpty(err)) {
                        this.buildKendoGridConfig($scope.menuOptions.newConfig);
                        console.log('build: ', $scope.menuOptions.newConfig);
                        UserSettings.insert($scope.menuOptions.newConfig, (err, result) => {
                            if (err) {
                                iNotifier.error('Không thể tạo mới cấu hình này. ' + err.message + '.');
                            } else {
                                this.initNewKendoGridConfig($scope.menuOptions.newConfig);
                                iNotifier.success('Cấu hình của bạn đã được lưu trữ thành công.');
                            }
                        });
                    } else {
                        iNotifier.error(err.message);
                    }
                },
                manageUserConfig: {
                    isOnEditMode: false,
                    selectedConfig: {},
                    removeConfig: function(id) {
                        UserSettings.remove({_id: id});
                        // let settings = UserSettings.find({
                        //     $or: [{
                        //        $and: [{
                        //             'user.keyId': Meteor.userId()
                        //         }, {
                        //             phan_loai: 'kendo_grid_thietbis'
                        //         }] 
                        //     }, {
                        //         $and: [{
                        //             'isPublic': true
                        //         }, {
                        //             phan_loai: 'kendo_grid_thietbis'
                        //         }]
                        //     }]                        
                        // }, {
                        //     sort: {
                        //         'order': 1
                        //     }
                        // }).fetch();
                        // $scope.utils.updateMenuOnUserConfigs(settings);
                    },
                    editConfig: function(id) {
                        this.isOnEditMode = true;
                        this.selectedConfig = UserSettings.findOne({_id: id});
                    },
                    saveConfig: function(id) {
                        if (id === this.selectedConfig._id) {
                            let setObj = {
                                ten: this.selectedConfig.ten,
                                order: this.selectedConfig.order,
                                'metadata.ngay_cap_nhat_cuoi': new Date()
                            };

                            if (Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                                setObj.isPublic = this.selectedConfig.isPublic;

                            UserSettings.update({
                                _id: id
                            }, {
                                $set: setObj
                            }, (error) => {
                                if (error) {
                                    iNotifier.error('Không thể cập nhật cấu hình này. ' + error.message + '.');
                                } else {
                                    $scope.$apply(() => {
                                        this.isOnEditMode = false;
                                        this.selectedConfig = {}; 
                                    });                                    
                                }
                            });
                        }                            
                    },
                },
                setFilterNhomId: function(e) {
                    $scope.pageOptions.filters.filterNhomId = e.sender._old;
                },
                resetToDefaultConfig: function() {
                    $scope.gridData.thietbisGrid.kOptions = angular.copy($scope._kHelpers.initDefaultOptions());
                    $scope._kHelpers.initDefaultDataSource($scope.gridData.thietbisGrid.kData.dataSource);
                    $scope.menuOptions.currentConfig = {};
                },
                saveDataConfigToLocalDevice: function() {
                    $scope.pageOptions.filters.nhomsFilterActiveIds = [];
                    _.each($scope.pageOptions.filters.nhomsFilterSource, (item) => {
                        if (item.isActive)
                            $scope.pageOptions.filters.nhomsFilterActiveIds.push(item._id);
                    }); 
                    let thietbis_config_data_range = {
                        isDisplayTopBar: $scope.pageOptions.isDisplayTopBar,
                        isDisplayFullWidthGrid: $scope.pageOptions.isDisplayFullWidthGrid,
                        topBarHeight: $scope.pageOptions.topBarHeight,
                        filters: {
                            filterNhomId: $scope.pageOptions.filters.filterNhomId,
                            nhomsFilterActiveIds: $scope.pageOptions.filters.nhomsFilterActiveIds
                        }                        
                    }
                    console.log('local data to save: ', thietbis_config_data_range);
                    localStorage.setItem('thietbis_config_data_filter', JSON.stringify(thietbis_config_data_range));                    
                    iNotifier.success('Thiết lập về truy vấn dữ liệu đã được lưu lại trên thiết bị của bạn.');
                    
                    // TO SET DATA: localStorage.setItem('thietbis_config_data_filter', JSON.stringify(thietbis_config_data_range));
                    // TO REMOVE DATA: localStorage.removeItem('notification_style')
                    // TO GET DATA: $scope.notificationStyle = localStorage.getItem("notification_style");

                    $scope.menuOptions.isSaveDataLimitToLocalDevice = false;
                },
                resetDataConfigToLocalDevice: function() {
                    localStorage.removeItem('thietbis_config_data_filter');
                    _.each($scope.pageOptions.filters.nhomsFilterSource, (item) => {
                        item.isActive = true;
                    });
                    $scope.pageOptions.filters.filterNhomId = '';
                    $scope.pageOptions.isDisplayTopBar = true;
                    $scope.pageOptions.topBarHeight = 'x1';
                    iNotifier.info('Các thiết lập về truy vấn dữ liệu trên thiết bị của bạn đã được đưa về mặc định.');
                }
            }

            $scope.utils.initColumnStatus();
            $scope.utils.initNewKendoGridConfig($scope.menuOptions.newConfig);


            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************
            $scope.helpers({
                userSettings: () => {
                    let settings = UserSettings.find({
                        $or: [{
                           $and: [{
                                'user.keyId': Meteor.userId()
                            }, {
                                phan_loai: 'kendo_grid_thietbis'
                            }] 
                        }, {
                            $and: [{
                                'isPublic': true
                            }, {
                                phan_loai: 'kendo_grid_thietbis'
                            }]
                        }]                        
                    }, {
                        sort: {
                            'order': 1
                        }
                    }).fetch();
                    if (!_.isEmpty(settings)) {
                        $scope.utils.updateMenuOnUserConfigs(settings);
                    }
                    return UserSettings.find();
                },
                isAdmin: () => {
                    return Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project');
                }
            });


            // ***************************************************
            // WATCHERS
            // ***************************************************

            $scope.$watch('menuOptions.isPageable', (newVal) => {
                if (newVal == false) {
                    $scope.pageable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.pageable);
                    console.log('master, ', $scope.pageable_master)
                    $scope.gridData.thietbisGrid.kOptions.pageable = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.pageable = angular.copy($scope.pageable_master);
                    console.log('resolve, ', $scope.gridData.thietbisGrid.kOptions.pageable)
                }
            });

            $scope.$watch('menuOptions.isSortable', (newVal) => {
                if (newVal == false) {
                    $scope.sortable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.sortable);
                    $scope.gridData.thietbisGrid.kOptions.sortable = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.sortable = angular.copy($scope.sortable_master);
                }
            });

            $scope.$watch('menuOptions.isSortable_MultipleMode', (newVal) => {
                if ($scope.menuOptions.isSortable)
                    $scope.gridData.thietbisGrid.kOptions.sortable.mode = (newVal) ? "multiple" : "single";
            });

            $scope.$watch('menuOptions.isFilterable', (newVal) => {
                if (newVal == false) {
                    $scope.filterable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.filterable);
                    $scope.gridData.thietbisGrid.kOptions.filterable = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.filterable = angular.copy($scope.filterable_master);
                }
            });

            $scope.$watch('menuOptions.isSelectable', (newVal) => {
                if (newVal == false) {
                    $scope.selectable_master = $scope.gridData.thietbisGrid.kOptions.selectable;
                    $scope.gridData.thietbisGrid.kOptions.selectable = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.selectable = $scope.selectable_master;
                }
            });

            $scope.$watch('menuOptions.isAllowCopy', (newVal) => {
                if (newVal == false) {
                    $scope.allowCopy_master = angular.copy($scope.gridData.thietbisGrid.kOptions.allowCopy);
                    $scope.gridData.thietbisGrid.kOptions.allowCopy = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.allowCopy = angular.copy($scope.allowCopy_master);
                }
            });

            $scope.$watch('menuOptions.isGroupable', (newVal) => {
                if (newVal == false) {
                    $scope.groupable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.groupable);
                    $scope.gridData.thietbisGrid.kOptions.groupable = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.groupable = angular.copy($scope.groupable_master);
                }
            });

            $scope.$watch('menuOptions.isScrollable', (newVal) => {
                if (newVal == false) {
                    $scope.scrollable_master = angular.copy($scope.gridData.thietbisGrid.kOptions.scrollable);
                    $scope.gridData.thietbisGrid.kOptions.scrollable = false;
                } else {
                    $scope.gridData.thietbisGrid.kOptions.scrollable = angular.copy($scope.scrollable_master);
                }
            });


        }
    }
});
