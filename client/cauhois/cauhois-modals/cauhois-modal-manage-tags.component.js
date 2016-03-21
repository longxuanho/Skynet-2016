angular.module('angular-skynet').directive('cauhoisModalManageTags', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-modals/cauhois-modal-manage-tags.html',
        controllerAs: 'vm',
        scope: {
             
        },
        bindToController: true,
        controller: function($scope, $reactive, skynetHelpers, iNotifier) {
        	
        	$reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._helpers = skynetHelpers.helpers;
            vm.modalOptions = {
            	modalSelector: '#modal_cauhois_manage_tags',
            	gridSelector: '#kGridManageTags',
            	isModalActive : false,
            	mode: '',
            	selectedItem: {},
            	newItem: {
            		subject: 'cauhois',
            		category: 'tags',
            		container: {},
            		isPublic: true,
            		isArchived: false,
            		metadata: {}
            	}
            };
        	// vm._kHelpers = skynetKendoGrid.cauhois.helpers;

        	// ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
            	create_new: {
            		init: function(item) {
            			item.subject = 'cauhois';
            			item.category = 'tags'
            			item.container = {};                       

                        // Mọi người đều có thể truy cập bảng tags
                        item.isPublic = true;
                        item.isArchived = false;
                        item.metadata = {}
                    },
                    validate: function(item) {
                        let error = {};
                        if (!Meteor.userId())
                            error.message = "Bạn cần đăng nhập để sử dụng chức năng này.";
                        // if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                        //      error.message = "Bạn không đủ quyền hạn để sử dụng chức năng này.";
                        
                        if (!item.subject)
                            error.message = "Chưa có thông tin về trường Subject.";
                        if (!item.category)
                            error.message = "Chưa có thông tin về trường Category.";
                        if (!item.container.text)
                            error.message = "Chưa có thông tin về tên thẻ dấu.";
                        if (!item.container.group)
                            error.message = "Thẻ dấu mới chưa được phân loại.";
                        return error;
                    },
                    build: function(item) {
                        // Build metadata
                        vm._helpers.buildMetadata('buildNew', item.metadata);
                    },
                    cancel: function() {
                    	vm.modalOptions.mode = '';
                    	vm.utils.manage.clearSelection();
                    },
                    insert: function() {
                        let err = this.validate(vm.modalOptions.newItem);
                        if (_.isEmpty(err)) {
                            this.build(vm.modalOptions.newItem);
                            console.log('build: (new)', vm.modalOptions.newItem);
                            DataHelpers.insert(vm.modalOptions.newItem, (err, result) => {
                                if (err) {
                                    iNotifier.error('Không thể tạo mới dữ liệu này. ' + err.message + '.');
                                } else {
                                	$scope.$apply(() => {
                                		vm.utils.create_new.init(vm.modalOptions.newItem);
                                	});                                    
                                    iNotifier.success('Dữ liệu người dùng đã được lưu trữ thành công.');
                                }
                            });
                        } else {
                            iNotifier.error(err.message);
                        }
                    }
            	},
            	update: {
            		validate: function(source) {
            		},
            		build: function(source) {
                    },
                    cancel: function() {
                        vm.modalOptions.mode = '';
                        vm.utils.manage.clearSelection();
                    },
                    update: function() {
                        let err = this.validate(vm.modalOptions.selectedItem);
                        if (_.isEmpty(err)) {
                            this.build(vm.modalOptions.selectedItem);
                            console.log('build before update: (new)', vm.modalOptions.selectedItem);
                            DataHelpers.update({
                                _id: vm.modalOptions.selectedItem._id
                            }, {
                                $set: {
                                	'container': vm.modalOptions.selectedItem.container,
                                    'metadata.ngay_cap_nhat_cuoi': vm.modalOptions.selectedItem.metadata.ngay_cap_nhat_cuoi,
                                    'metadata.nguoi_cap_nhat_cuoi': vm.modalOptions.selectedItem.metadata.nguoi_cap_nhat_cuoi,
                                    'metadata.nguoi_cap_nhat_cuoi_name': vm.modalOptions.selectedItem.metadata.nguoi_cap_nhat_cuoi_name,
                                    'metadata.nguoi_cap_nhat_cuoi_email': vm.modalOptions.selectedItem.metadata.nguoi_cap_nhat_cuoi_email,
                                }
                            }, (error) => {
                                if (error) {
                                    iNotifier.error('Có lỗi xảy ra khi cập nhật dữ liệu này này. ' + error.message + '.');
                                } else {
                                    iNotifier.success('Dữ liệu ngưòi dùng được cập nhật thành công.');

                                    $scope.$apply(() => {
                                        vm.modalOptions.mode = '';
                                        vm.utils.manage.clearSelection();
                                    });                                    
                                }
                            });
                        } else {
                            iNotifier.error(err.message);
                        }
                    }
            	},
            	manage: {
            		kGridOptions: {
	                    dataSource: kendo.data.DataSource.create({
	                        data: [],
	                        schema: {
	                            model: {
	                                fields: {
	                                    'container.ref': {
	                                        type: 'string'
	                                    },
	                                    'container.group': {
	                                        type: 'string'
	                                    },
	                                    'container.text': {
	                                        type: 'string'
	                                    }
	                                }
	                            }
	                        }
	                    }),
	                    // Có thể dùng template ở đây hoặc dùng columns.template
                        // rowTemplate: '<tr data-uid="#= uid #"><td>#: ten #</td><td style="text-align: right;">#: order #</td><td>#: kendo.toString(metadata.ngay_tao, "yyyy-MM-dd") #</td></tr>',
                        sortable: true,
                        pageable: false,
                        selectable: 'row',
                        change: function(e) {
                            let selected = this.dataItem(this.select()[0]);
                            // Khi người dùng chọn một hàng mới -> load vào selectedItem
                            if (selected) {
                                if (_.isEmpty(vm.modalOptions.selectedItem)) {
                                	vm.utils.setMode('selected');
                                    vm.modalOptions.selectedItem = angular.copy(selected);
                                } else {
                                    // Trường hợp người dùng click lại một lần nữa để bỏ chọn và thoát chế độ update nếu có
                                    if (vm.modalOptions.selectedItem._id === selected._id) {
                                        this.clearSelection();
                                        vm.modalOptions.selectedItem = {};
                                        vm.utils.setMode('');
                                    }
                                    else
                                        vm.modalOptions.selectedItem = angular.copy(selected);
                                }
                            }
                        },
                        columns: [{
                            field: 'container.ref',
                            title: "Nhóm tham chiếu",
                            width: "100px",
                            // template: "<span ng-class=\"{'color-primary': #: user.keyId # === vm.currentUser._id}\">#: ten #</span>"
                        }, {
                            field: 'container.group',
                            title: "Nhóm nội dung",
                            width: "100px"
                        }, {
                            field: 'container.text',
                            title: "Thẻ dấu",
                            width: "120px"
                        }]
                    },
                    clearSelection: function() {
                    	vm.modalOptions.selectedItem = {};
                        $(vm.modalOptions.gridSelector).data("kendoGrid").clearSelection();
                    }
            	},
            	remove: {
            		cancel: function() {
                        vm.modalOptions.mode = '';
                        // Bỏ chọn cấu hình hiện tại
                        vm.utils.manage.clearSelection();
                    },
                    remove: function(id) {
                        // Viết lại code phần remove
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = "Bạn không đủ quyền hạn để sử dụng chức năng này.";
                        else {
                        	if (id) {
                        		let text = vm.modalOptions.selectedItem.container.text;
                        		DataHelpers.remove({
	                                _id: id
	                            }, (error) => {
	                                if (!error)
	                                    iNotifier.info('Dữ liệu về tag "' + text + '" đã được xóa khỏi hệ thống.');
	                                else
	                                    iNotifier.error(error.message);
	                            });
                        	}
	                        // Thoát khỏi chế độ remove
	                        this.cancel();
                        }
                        
                    },
            	},
            	closeModal: () => {
                    let modal = UIkit.modal(vm.modalOptions.modalSelector);
                    if (modal.isActive()) {
                        // Reset các giá trị về mặc định
                        vm.modalOptions.mode = '';
                        modal.hide();
                    }
                },
                setMode: function(mode) {
                    vm.modalOptions.mode = mode;
                }
            };

            // ***************************************************
            // HELPERS
            // ***************************************************
            vm.helpers({
                datahelpers: () => {
                	let data = DataHelpers.find({
                		subject: 'cauhois',
                		category: 'tags'
                	}, {
                		sort: {
                			'data.text': 1
                		}
                	}).fetch();
                	console.log('fetch data: ', data);
                	if (data.length)
                		vm.utils.manage.kGridOptions.dataSource.data(data);
                	return DataHelpers.find()
                }
            });

        }
    }
});
