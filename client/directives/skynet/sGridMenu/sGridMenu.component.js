angular.module('angular-skynet').directive('sGridMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/directives/skynet/sGridMenu/sGridMenu.html',
        scope: {
            gridData: '=',
            pageOptions: '=',
            kGridDataSource: '=',
            kData: '=',
            kHelpers: '=',
            localConfigDataName: '=',
            cloudConfigDataName: '=' 
        },
        controllerAs: 'vm',
        // bindToController: true,

        controller: function($scope, $rootScope, iNotifier, skynetKendoGrid, $auth, $reactive) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

             // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;
            
            // $scope.kData = skynetKendoGrid.thietbis.data;
            // $scope.kHelpers = skynetKendoGrid.thietbis.helpers;

            vm.data = {
                selector: '#myGrid',
                kGrid: {},
                sMenu: {
                    status: {
                        columns: {
                            master: [],
                            current: []
                        },
                        excel: {
                            current: {}
                        },
                        filterable: {
                            current: {}
                        },
                        groupable: {
                            current: {}
                        },
                        pageable: {
                            pageSize: 5,
                            current: {}
                        },
                        pdf: {
                            current: {}
                        },
                        reorderable: {
                            current: true
                        },
                        resizable: {
                            current: true
                        },                        
                        scrollable: {
                            current: {}
                        },
                        selectable: {
                            current: 'row'
                        },                       
                        sortable: {
                            current: {}
                        },
                        toolbar: {
                            isDisplayToolbar: true,
                            current: {}
                        }
                    }                    
                },                
            }

            $scope.columnStatus = [];
            $scope.UserConfigSettings = [];
            $scope.SkynetConfigSettings = [];

            $scope.pageable_master = angular.copy($scope.gridData.kGrid.kOptions.pageable);
            $scope.sortable_master = angular.copy($scope.gridData.kGrid.kOptions.sortable);
            $scope.filterable_master = angular.copy($scope.gridData.kGrid.kOptions.filterable);
            $scope.selectable_master = $scope.gridData.kGrid.kOptions.selectable;
            $scope.allowCopy_master = angular.copy($scope.gridData.kGrid.kOptions.allowCopy);
            $scope.groupable_master = angular.copy($scope.gridData.kGrid.kOptions.groupable);
            $scope.scrollable_master = angular.copy($scope.gridData.kGrid.kOptions.scrollable);

            $scope.menuOptions = {
                isPageable: $scope.gridData.kGrid.kOptions.pageable ? true : false,
                isSelectable: $scope.gridData.kGrid.kOptions.selectable ? true : false,
                isAllowCopy: $scope.gridData.kGrid.kOptions.allowCopy ? true : false,
                isSortable: $scope.gridData.kGrid.kOptions.sortable ? true : false,
                isSortable_MultipleMode: false,
                isFilterable: $scope.gridData.kGrid.kOptions.filterable ? true : false,
                isFilterable_mode: $scope.gridData.kGrid.kOptions.filterable.mode,
                isGroupable: $scope.gridData.kGrid.kOptions.groupable ? true : false,
                isScrollable: $scope.gridData.kGrid.kOptions.scrollable ? true : false,
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
                        text: "Các cột dữ liệu",
                    }, {
                        text: "Giới hạn dữ liệu",
                    }, {
                        text: "Xuất dữ liệu Excel",
                    }, {
                        text: "Xuất dữ liệu PDF"
                    }]
                }, {
                    text: "Chức năng",
                    items: [{
                        text: "Phân trang",
                    }, {
                        text: "Lọc và sắp xếp"
                    }, {
                        text: "Thao tác dữ liệu"
                    }, {
                        // text: "<span ng-hide='gridData.kGrid.kOptions.toolbar'>Hiện Toolbar</span><span ng-show='gridData.kGrid.kOptions.toolbar'>Ẩn Toolbar</span>",
                        text: "Thanh Toolbar <span ng-show='vm.data.sMenu.status.toolbar.isDisplayToolbar' class='k-icon k-si-tick'></span>",
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
                vm.data.kGrid = $(vm.data.selector).data("kendoGrid");

                switch (textContent) {
                    case "Xuất dữ liệu Excel":
                        vm.utils.menu_data_saveAsExcel.readStatus();
                        UIkit.modal("#modal_menu_data_saveAsExcel").show();
                        break;
                    case "Xuất dữ liệu PDF":
                        vm.utils.menu_data_saveAsPdf.readStatus();
                        UIkit.modal("#modal_menu_data_saveAsPdf").show();
                        break;
                    case "Các cột dữ liệu":
                        vm.utils.menu_data_columns.readStatus();                      
                        UIkit.modal("#modal_menu_data_columns").show();
                        break;
                    case "Phân trang":
                        vm.utils.menu_features_paging.readStatus();
                        UIkit.modal("#modal_menu_features_paging").show();
                        break;
                    case "Lọc và sắp xếp":
                        vm.utils.menu_features_filterAndSort.readStatus();
                        UIkit.modal("#modal_menu_features_filterAndSort").show();
                        break;
                    case "Thao tác dữ liệu":
                        vm.utils.menu_features_generalSettings.readStatus();
                        UIkit.modal("#modal_menu_features_generalSettings").show();
                        break;
                    case "Thanh Toolbar ":
                        vm.utils.menu_features_toolbar.readStatus();
                        vm.utils.menu_features_toolbar.toggleToolbar();
                        // $scope.utils.toggleToolbar();
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
            vm.utils = {
                // Menu: Dữ liệu -> Các cột dữ liệu
                menu_data_columns: {
                    readStatus: () => {
                        // Tạo bản sao lưu dữ liệu để đối chiếu                
                        vm.data.sMenu.status.columns.master = _.map(vm.data.kGrid.getOptions().columns, (item) => {
                            return {
                                field: item.field,
                                title: item.title,
                                isActive: !item.hidden,
                                locked: item.locked
                            }
                        });
                        vm.data.sMenu.status.columns.current = angular.copy(vm.data.sMenu.status.columns.master);
                    },
                    updateStatus: () => {
                        _.each(vm.data.sMenu.status.columns.current, (item, index) => {
                            if (item.isActive !== vm.data.sMenu.status.columns.master[index].isActive) {
                                // Nếu giá trị từ true -> false: Ẩn cột và ngược lại
                                if (item.isActive)
                                    vm.data.kGrid.showColumn(item.field)
                                else
                                    vm.data.kGrid.hideColumn(item.field)
                            }
                        });
                        vm.utils.menu_data_columns.readStatus();
                    }   
                },
                
                // Menu: Dữ liệu -> Xuất dữ liệu Excel
                menu_data_saveAsExcel: {
                    readStatus: () => {
                        vm.data.sMenu.status.excel.current = vm.data.kGrid.getOptions().excel;
                    },
                    saveAsExcel: () => {
                        vm.data.sMenu.status.excel.current.fileName = vm.data.sMenu.status.excel.current.fileName ? vm.data.sMenu.status.excel.current.fileName : 'From Sky with Love.xlsx';
                        
                        vm.data.kGrid.setOptions({
                            excel: vm.data.sMenu.status.excel.current
                        });
                        vm.data.kGrid.saveAsExcel();
                    }
                },

                // Menu: Dữ liệu -> Xuất dữ liệu Pdf
                menu_data_saveAsPdf: {
                    readStatus: () => {
                        vm.data.sMenu.status.pdf.current = vm.data.kGrid.getOptions().pdf;
                    },
                    saveAsPdf: () => {
                        vm.data.sMenu.status.pdf.current.fileName = vm.data.sMenu.status.pdf.current.fileName ? vm.data.sMenu.status.pdf.current.fileName : 'From Sky with Love.pdf';
                        
                        vm.data.kGrid.setOptions({
                            pdf: vm.data.sMenu.status.pdf.current
                        });
                        vm.data.kGrid.saveAsPDF();
                    }
                },

                // Menu: Chức năng -> Phân trang
                menu_features_paging: {
                    readStatus: () => {
                        vm.data.sMenu.status.pageable.current = vm.data.kGrid.getOptions().pageable;
                        vm.data.sMenu.status.pageable.pageSize = $scope.kGridDataSource.pageSize();
                    },
                    updateStatus: () => {
                        vm.data.kGrid.setOptions({
                            pageable: vm.data.sMenu.status.pageable.current
                        });
                        // Nếu người dùng thay đổi số mục hiển thị mỗi trang -> cập nhật thay đổi này
                        if (vm.data.sMenu.status.pageable.pageSize !== $scope.kGridDataSource.pageSize())
                            $scope.kGridDataSource.pageSize(vm.data.sMenu.status.pageable.pageSize);
                        
                        vm.utils.menu_features_paging.readStatus();
                    },
                },

                // Menu: Chức năng -> Lọc và sắp xếp
                menu_features_filterAndSort: {
                    readStatus: () => {
                        vm.data.sMenu.status.filterable.current = vm.data.kGrid.getOptions().filterable;
                        vm.data.sMenu.status.sortable.current = vm.data.kGrid.getOptions().sortable;
                    },
                    updateStatus: () => {
                        vm.data.kGrid.setOptions({
                            filterable: vm.data.sMenu.status.filterable.current,
                            sortable: vm.data.sMenu.status.sortable.current
                        });
                        vm.utils.menu_features_filterAndSort.readStatus();
                    }
                },

                // Menu: Chức năng -> Thao tác dữ liệu
                menu_features_generalSettings: {
                    readStatus: () => {
                        let options = vm.data.kGrid.getOptions();
                        
                        vm.data.sMenu.status.selectable.current = options.selectable;                        
                        vm.data.sMenu.status.groupable.current = options.groupable;                      
                        vm.data.sMenu.status.resizable.current = options.resizable;
                        vm.data.sMenu.status.reorderable.current = options.reorderable;
                        vm.data.sMenu.status.scrollable.current = options.scrollable;
                    },
                    updateStatus: () => {
                        vm.data.kGrid.setOptions({
                            selectable: vm.data.sMenu.status.selectable.current,
                            groupable: vm.data.sMenu.status.groupable.current,
                            resizable: vm.data.sMenu.status.resizable.current,
                            reorderable: vm.data.sMenu.status.reorderable.current,
                            scrollable: vm.data.sMenu.status.scrollable.current
                        });
                        vm.utils.menu_features_generalSettings.readStatus();
                    }
                },

                // Menu: Chức năng -> Thanh Toolbar
                menu_features_toolbar: {
                    readStatus: () => {
                        vm.data.sMenu.status.toolbar.current = vm.data.kGrid.getOptions().toolbar;
                        vm.data.sMenu.status.toolbar.isDisplayToolbar = vm.data.sMenu.status.toolbar.current ? true : false;
                    },
                    toggleToolbar: () => {
                        // Nếu từ trạng thái hidden -> show và ngược lại
                        if (!vm.data.sMenu.status.toolbar.isDisplayToolbar) {
                            vm.data.kGrid.setOptions({
                                toolbar: ["excel", "pdf"]
                            });
                        } else {
                            vm.data.kGrid.setOptions({
                                toolbar: false
                            });
                        }
                        // Cập nhật trạng thái isDisplayToolbar
                        vm.data.sMenu.status.toolbar.isDisplayToolbar = !vm.data.sMenu.status.toolbar.isDisplayToolbar;
                    }
                }
            }
            $scope.utils = {
                menu_data_columns: function() {},
                initColumnStatus: function() {
                    let activeColumnFields = _.pluck($scope.gridData.kGrid.kOptions.columns, 'field');

                    $scope.columnStatus = _.map($scope.kData.config.availableColumns, (item) => {
                        item.isActive = _.contains(activeColumnFields, item.field);
                        return item;
                    });
                },
                updateStatus: function() {

                    let activeColumns = _.pluck(_.filter($scope.columnStatus, (item) => {
                        return item.isActive;
                    }), 'field');

                    $scope.gridData.kGrid.kOptions.columns = $scope.kHelpers.buildGridColumns(activeColumns);
                    $scope.gridData.kGrid.kData.dataSource.schema.model = $scope.kHelpers.buildGridSchemaModel(activeColumns);
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
                        $scope.gridData.kGrid.kOptions = angular.copy($scope.menuOptions.currentConfig.gia_tri.kGridOptions);
                        this.loadUserConfigOnDataSource($scope.menuOptions.currentConfig.gia_tri.kDataSource);
                    }
                },
                loadUserConfigOnDataSource: function(config) {
                    $scope.gridData.kGrid.kData.dataSource.aggregate = angular.copy(config.aggregate);
                    $scope.gridData.kGrid.kData.dataSource.batch = config.batch;
                    $scope.gridData.kGrid.kData.dataSource.filter = angular.copy(config.filter);
                    $scope.gridData.kGrid.kData.dataSource.group = angular.copy(config.group);
                    $scope.gridData.kGrid.kData.dataSource.pageSize = config.pageSize;
                    $scope.gridData.kGrid.kData.dataSource.schema =  angular.copy(config.schema);
                    $scope.gridData.kGrid.kData.dataSource.sort = angular.copy(config.sort);
                },
                saveAsExcel: function() {
                    if (!$scope.gridData.kGrid.kOptions.excel.fileName)
                        $scope.gridData.kGrid.kOptions.excel.fileName = 'From Sky with Love.xlsx';
                    let grid = $("#myGrid").data("kendoGrid");
                    // grid.bind("excelExport", function(e) {
                    //     iNotifier.success('Dữ liệu được trích xuất theo định dạng Excel.');
                    // });
                    grid.saveAsExcel();
                },
                saveAsPdf: function() {
                    if (!$scope.gridData.kGrid.kOptions.pdf.fileName)
                        $scope.gridData.kGrid.kOptions.pdf.fileName = 'From Sky with Love.pdf';
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
                    if (!$scope.gridData.kGrid.kOptions.toolbar)
                        $scope.gridData.kGrid.kOptions.toolbar = ["excel", "pdf"];
                    else
                        $scope.gridData.kGrid.kOptions.toolbar = false;
                },
                initNewKendoGridConfig: function(config) {
                    config.ten = '',
                        config.order = 10,
                        config.user = {},
                        config.phan_loai = $scope.cloudConfigDataName,
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
                    config.phan_loai = $scope.cloudConfigDataName;
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
                        //             phan_loai: $scope.cloudConfigDataName
                        //         }] 
                        //     }, {
                        //         $and: [{
                        //             'isPublic': true
                        //         }, {
                        //             phan_loai: $scope.cloudConfigDataName
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
                    $scope.gridData.kGrid.kOptions = angular.copy($scope.kHelpers.initDefaultOptions());
                    $scope.kHelpers.initDefaultDataSource($scope.gridData.kGrid.kData.dataSource);
                    $scope.menuOptions.currentConfig = {};
                },
                saveDataConfigToLocalDevice: function() {
                    $scope.pageOptions.filters.nhomsFilterActiveIds = [];
                    _.each($scope.pageOptions.filters.nhomsFilterSource, (item) => {
                        if (item.isActive)
                            $scope.pageOptions.filters.nhomsFilterActiveIds.push(item._id);
                    }); 
                    let config_data_range = {
                        isDisplayTopBar: $scope.pageOptions.isDisplayTopBar,
                        isDisplayFullWidthGrid: $scope.pageOptions.isDisplayFullWidthGrid,
                        topBarHeight: $scope.pageOptions.topBarHeight,
                        filters: {
                            filterNhomId: $scope.pageOptions.filters.filterNhomId,
                            nhomsFilterActiveIds: $scope.pageOptions.filters.nhomsFilterActiveIds
                        }                        
                    }
                    console.log('local data to save: ', config_data_range);
                    localStorage.setItem($scope.localConfigDataName, JSON.stringify(config_data_range));                    
                    iNotifier.success('Thiết lập về truy vấn dữ liệu đã được lưu lại trên thiết bị của bạn.');
                    
                    // TO SET DATA: localStorage.setItem(fileNamToSaveLocal, JSON.stringify(config_data_range));
                    // TO REMOVE DATA: localStorage.removeItem('notification_style')
                    // TO GET DATA: $scope.notificationStyle = localStorage.getItem("notification_style");

                    $scope.menuOptions.isSaveDataLimitToLocalDevice = false;
                },
                resetDataConfigToLocalDevice: function() {
                    localStorage.removeItem($scope.localConfigDataName);
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
                                phan_loai: $scope.cloudConfigDataName
                            }] 
                        }, {
                            $and: [{
                                'isPublic': true
                            }, {
                                phan_loai: $scope.cloudConfigDataName
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
                    $scope.pageable_master = angular.copy($scope.gridData.kGrid.kOptions.pageable);
                    console.log('master, ', $scope.pageable_master)
                    $scope.gridData.kGrid.kOptions.pageable = false;
                } else {
                    $scope.gridData.kGrid.kOptions.pageable = angular.copy($scope.pageable_master);
                    console.log('resolve, ', $scope.gridData.kGrid.kOptions.pageable)
                }
            });

            $scope.$watch('menuOptions.isSortable', (newVal) => {
                if (newVal == false) {
                    $scope.sortable_master = angular.copy($scope.gridData.kGrid.kOptions.sortable);
                    $scope.gridData.kGrid.kOptions.sortable = false;
                } else {
                    $scope.gridData.kGrid.kOptions.sortable = angular.copy($scope.sortable_master);
                }
            });

            $scope.$watch('menuOptions.isSortable_MultipleMode', (newVal) => {
                if ($scope.menuOptions.isSortable)
                    $scope.gridData.kGrid.kOptions.sortable.mode = (newVal) ? "multiple" : "single";
            });

            $scope.$watch('menuOptions.isFilterable', (newVal) => {
                if (newVal == false) {
                    $scope.filterable_master = angular.copy($scope.gridData.kGrid.kOptions.filterable);
                    $scope.gridData.kGrid.kOptions.filterable = false;
                } else {
                    $scope.gridData.kGrid.kOptions.filterable = angular.copy($scope.filterable_master);
                }
            });

            $scope.$watch('menuOptions.isSelectable', (newVal) => {
                if (newVal == false) {
                    $scope.selectable_master = $scope.gridData.kGrid.kOptions.selectable;
                    $scope.gridData.kGrid.kOptions.selectable = false;
                } else {
                    $scope.gridData.kGrid.kOptions.selectable = $scope.selectable_master;
                }
            });

            $scope.$watch('menuOptions.isAllowCopy', (newVal) => {
                if (newVal == false) {
                    $scope.allowCopy_master = angular.copy($scope.gridData.kGrid.kOptions.allowCopy);
                    $scope.gridData.kGrid.kOptions.allowCopy = false;
                } else {
                    $scope.gridData.kGrid.kOptions.allowCopy = angular.copy($scope.allowCopy_master);
                }
            });

            $scope.$watch('menuOptions.isGroupable', (newVal) => {
                if (newVal == false) {
                    $scope.groupable_master = angular.copy($scope.gridData.kGrid.kOptions.groupable);
                    $scope.gridData.kGrid.kOptions.groupable = false;
                } else {
                    $scope.gridData.kGrid.kOptions.groupable = angular.copy($scope.groupable_master);
                }
            });

            $scope.$watch('menuOptions.isScrollable', (newVal) => {
                if (newVal == false) {
                    $scope.scrollable_master = angular.copy($scope.gridData.kGrid.kOptions.scrollable);
                    $scope.gridData.kGrid.kOptions.scrollable = false;
                } else {
                    $scope.gridData.kGrid.kOptions.scrollable = angular.copy($scope.scrollable_master);
                }
            });


        }
    }
});
