angular.module('angular-skynet').directive('dashboardXuongdvktManage', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-manage.template.html',
        scope: {
            pageOptions: '=',
            pageData: '='
        },
        controller: function($scope, skynetHelpers, skynetDictionary, $timeout, iNotifier) {

            // ***************************************************
            // INITIALIZE
            // ***************************************************
            $scope._helpers = skynetHelpers.helpers;
            $scope._dictionary = angular.copy(skynetDictionary.data.xuongdvkt);

            // ***************************************************
            // UTILS
            // ***************************************************
            $scope.utils = {
            	reset: {
            		newSuaChua: function(newSuaChua) {
            			newSuaChua.phan_loai = {
                            nhom_tb: "Xe - máy",
                            loai_tb: '',
                            loai_sua_chua: ''
                        };
                        newSuaChua.ma_tb = {
                        	ma_tb: '',
	                        dvql: ''
                        };
                        newSuaChua.dia_diem = {
                            dia_diem: 'Xưởng DVKT',
                            khu_vuc: {
                                ten: '',
                                ma: ''
                            },
                            vi_tri: ''
                        };
						newSuaChua.noi_dung = '';
                        newSuaChua.thoi_gian = {
                        	bat_dau: new Date()
                        };
                        newSuaChua.thong_ke = {
                        	thoi_gian: {
                        		bat_dau: {},
                        		sua_chua: {},                        		
                        		ket_thuc: {}
                        	}
                        };
                        newSuaChua.trang_thai = 'Đang sửa chữa';
                        newSuaChua.isArchived = false;
            		}
            	},
            	build: {
            		newSuaChua: function (newSuaChua) {
            			// Tính toán thời gian kết thúc dự kiến
						newSuaChua.thoi_gian.ket_thuc_du_kien = moment(newSuaChua.thoi_gian.bat_dau).add(newSuaChua.thoi_gian.sua_chua_du_kien, 'hours').toDate();

			            // Tính toán các thông số thống kê	
			            newSuaChua.thong_ke.thoi_gian.bat_dau.gio = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy-MM-dd HH:mm", "vi-VN")	            
			            newSuaChua.thong_ke.thoi_gian.bat_dau.ngay = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy-MM-dd", "vi-VN");
			            newSuaChua.thong_ke.thoi_gian.bat_dau.thang = kendo.toString(newSuaChua.thoi_gian.bat_dau, "MM", "vi-VN");
			            newSuaChua.thong_ke.thoi_gian.bat_dau.nam = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy", "vi-VN");

			            // Bắt buộc có trường thông tin này để liên kết các trường trong grid
			            newSuaChua.thong_ke.thoi_gian.sua_chua.du_kien = newSuaChua.thoi_gian.sua_chua_du_kien;

			            // Bắt buộc có trường thông tin này để liên kết các trường trong grid
			            newSuaChua.thong_ke.thoi_gian.ket_thuc.nam = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy", "vi-VN");

			            // Khởi tạo metadata câu hỏi 
			            newSuaChua.metadata = {};
			            $scope._helpers.buildMetadata('buildNew', newSuaChua.metadata); 
            		},
                    sourceSuaChua: function(suachua) {
                    	// Tính toán thời gian kết thúc dự kiến và thực tế nếu có
						suachua.thoi_gian.ket_thuc_du_kien = moment(suachua.thoi_gian.bat_dau).add(suachua.thoi_gian.sua_chua_du_kien, 'hours').toDate();
						// Tính toán các thông số thống kê
						suachua.thong_ke.thoi_gian.sua_chua.du_kien = suachua.thoi_gian.sua_chua_du_kien;

						if (suachua.trang_thai === 'Sửa chữa xong') {
							suachua.thoi_gian.ket_thuc = new Date();

							// Tính toán các thông số thống kê
							suachua.thong_ke.thoi_gian.sua_chua.thuc_te =  moment.duration(moment(suachua.thoi_gian.ket_thuc).diff(moment(suachua.thoi_gian.bat_dau))).asHours();
							suachua.thong_ke.thoi_gian.sua_chua.phut = moment(suachua.thoi_gian.ket_thuc).diff(suachua.thoi_gian.bat_dau, 'minutes');
							suachua.thong_ke.thoi_gian.sua_chua.gio = moment(suachua.thoi_gian.ket_thuc).diff(suachua.thoi_gian.bat_dau, 'hours');
							suachua.thong_ke.thoi_gian.sua_chua.ngay = moment(suachua.thoi_gian.ket_thuc).diff(suachua.thoi_gian.bat_dau, 'days');

							suachua.thong_ke.thoi_gian.ket_thuc.gio = kendo.toString(suachua.thoi_gian.ket_thuc, "yyyy-MM-dd HH:mm", "vi-VN")	            
				            suachua.thong_ke.thoi_gian.ket_thuc.ngay = kendo.toString(suachua.thoi_gian.ket_thuc, "yyyy-MM-dd", "vi-VN");
				            suachua.thong_ke.thoi_gian.ket_thuc.thang = kendo.toString(suachua.thoi_gian.ket_thuc, "MM", "vi-VN");
				            suachua.thong_ke.thoi_gian.ket_thuc.nam = kendo.toString(suachua.thoi_gian.ket_thuc, "yyyy", "vi-VN");
						}
						// Khởi tạo metadata
						if (!suachua.metadata)
							suachua.metadata = {};
						$scope._helpers.buildMetadata('build', suachua.metadata);
                    }
            	},
                validateForm: function(suachua) {
                    let error = {};    
                    if (!suachua._id && $scope.pageOptions.displayMode.current_manage_mode==='update') {
                        error.message = "Vui lòng chọn một lượt sửa chữa trong danh sách để thực hiện cập nhật";
                        return error;
                    }                    
                    if (!suachua.phan_loai.nhom_tb) {
                        error.message = "Chưa có thông tin về nhóm phương tiện.";
                        return error;
                    }
                    if (!suachua.phan_loai.loai_sua_chua) {
                        error.message = "Chưa có thông tin về phân loại sửa chữa.";
                        return error;
                    }
                    if (!suachua.phan_loai.loai_tb) {
                        error.message = "Chưa có thông tin về loại phương tiện.";
                        return error;
                    }
                    if (!suachua.ma_tb.ma_tb) {
                        error.message = "Chưa có thông tin về mã phương tiện.";
                        return error;
                    }                        
                    if (!suachua.dia_diem.dia_diem) {
                        error.message = "Chưa có thông tin về địa điểm sửa chữa.";
                        return error;
                    }
                    if (!suachua.dia_diem.khu_vuc.ma) {
                        error.message = "Chưa có thông tin về khu vực sửa chữa.";
                        return error;
                    }
                    if (!suachua.dia_diem.vi_tri) {
                        error.message = "Chưa có thông tin về vị trí sửa chữa.";
                        return error;
                    }
                    if (!suachua.noi_dung) {
                        error.message = "Chưa có thông tin về nội dung sửa chữa.";
                        return error;
                    }
                    if (!suachua.thoi_gian.bat_dau) {
                        error.message = "Chưa có thông tin về thời gian bắt đầu sửa chữa.";
                        return error;
                    }
                    if (!suachua.thoi_gian.sua_chua_du_kien) {
                        error.message = "Chưa có thông tin về thời gian sửa chữa theo dự kiến.";
                        return error;
                    }
                    if (!suachua.trang_thai) {
                        error.message = "Chưa có thông tin trạng thái sửa chữa.";
                        return error;
                    }
                    return;
                },
                heroContent: {
                    current: {
                        text: '',
                        mode: 'default'
                    },
                    update: function(text, mode, timeoutStop) {
                        if (!mode)
                            mode = 'default';
                        if (!timeoutStop)
                        	timeoutStop = 38000;

                        if ($scope.pageOptions.ui.heroContent._id) {
                            Notifies.update({
                                _id: $scope.pageOptions.ui.heroContent._id
                            }, {
                                $set: {
                                    'content': {
                                        text: text,
                                        mode: mode
                                    }
                                }
                            }, (error) => {
                                if (!error) {
									this.current.text = text;
									this.current.mode = mode;
									$timeout(() => {
			                        	// Nếu sau 38s không có thông báo khác xen vào thì reset
			                        	if (this.current.text === $scope.pageOptions.ui.heroContent.content.text)
											this.reset();
			                        }, timeoutStop);
                                }
                            });
                        }
                    },
                    reset: function() {
                        // $scope.utils.heroContent.update()
                        this.update('', 'default');
                    }
                }
            }

            $scope.utils.reset.newSuaChua($scope.pageData.source.newSuaChua);

            // Collection Hooks - Nếu có lượt phương tiện được tạo mới thì phát sinh tông báo
            SuaChuas.after.insert(function(userId, doc) {
            	text = 'Phương tiện ' + $scope.pageData.source.newSuaChua.ma_tb.ma_tb + ' đã được đưa vào ' + $scope.pageData.source.newSuaChua.phan_loai.loai_sua_chua.toLowerCase() + ' tại khu vực ' + $scope.pageData.source.newSuaChua.dia_diem.vi_tri + '. Thời gian nằm xưởng dự kiến: ' + kendo.toString($scope.pageData.source.newSuaChua.thoi_gian.sua_chua_du_kien, 'n2') + ' giờ.';
                mode = 'success';

                $scope.utils.heroContent.update(text, mode, 38000);
            }); 

            // Collection Hooks - Nếu có thay đổi về trạng thái và trạng thái đó là một trong hai dạng 'Chuẩn bị bàn giao' hoặc 'Sửa chữa xong' thì phát sinh thông báo
            SuaChuas.after.update(function(userId, doc) {
            	if (doc.trang_thai !== this.previous) {
	        		let text = '', mode = 'default';

	        		if (doc.trang_thai == 'Chuẩn bị bàn giao') {            			
	        			text = 'Phương tiện ' + doc.ma_tb.ma_tb + ' dự kiến được bàn giao trong 15 phút tới. Yêu cầu khách hàng tới khu vực ' + doc.dia_diem.vi_tri + ' để chuẩn bị các thủ tục giấy tờ bàn giao.';
	        			mode = 'warning';

	        			$scope.utils.heroContent.update(text, mode, 38000);
	        		}
	        		if (doc.trang_thai == 'Sửa chữa xong') {
	        			text = 'Phương tiện ' + doc.ma_tb.ma_tb + ' tại khu vực ' + doc.dia_diem.vi_tri + ' đã được ' + doc.phan_loai.loai_sua_chua.toLowerCase() + ' và bàn giao. Thời gian nằm xưởng: ' + kendo.toString(doc.thong_ke.thoi_gian.sua_chua.gio, 'n2') + ' giờ.';
	        			mode = 'success';

	        			$scope.utils.heroContent.update(text, mode, 38000);
            		}
            	}
            }); 

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            $scope.helpers({
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            
            $scope.methods = {
                manage: {
                    insert: function () {
                        let error = {}
                        if (!Meteor.userId()) {
                            error.message = 'Bạn cần đăng nhập để sử dụng chức năng này.';
                            iNotifier.error(error.message);
                        } else {
                            if (!Roles.userIsInRole(Meteor.userId(), $scope.pageData.rights['can_upsert_sua_chua'], 'sky-project')) {
                                error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                                iNotifier.error(error.message);
                            } else {
                            	error = $scope.utils.validateForm($scope.pageData.source.newSuaChua);
                            	if (_.isEmpty(error)) {
                            		$scope.utils.build.newSuaChua($scope.pageData.source.newSuaChua);
                            		SuaChuas.insert($scope.pageData.source.newSuaChua, (err, result) => {
                                        if (err) {
                                            iNotifier.error('Không thể tạo mới dữ liệu về lượt sửa chữa này. ' + err.message + '.');
                                        } else {
                                            $scope.$apply( () => {
                                            	iNotifier.success('Dữ liệu về lượt sửa chữa được tạo mới thành công.');
                                                $scope.utils.reset.newSuaChua($scope.pageData.source.newSuaChua);
                                            });
                                        }
                                    });
								} else {
									iNotifier.error(error.message);
								}
                            }
                        }
                    },
                    update: function () {
                        let error = {}
                        if (!Meteor.userId()) {
                            error.message = 'Bạn cần đăng nhập để sử dụng chức năng này.';
                            iNotifier.error(error.message);
                        } else {
                            if (!Roles.userIsInRole(Meteor.userId(), $scope.pageData.rights['can_upsert_sua_chua'], 'sky-project')) {
                                error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                                iNotifier.error(error.message);
                            } else {
                                error = $scope.utils.validateForm($scope.pageData.source.selectedSuaChua);
                                if (!_.isEmpty(error)) {
                                    iNotifier.error(error.message);
                                } else {
                                    $scope.utils.build.sourceSuaChua($scope.pageData.source.selectedSuaChua);
                                    SuaChuas.update({
	                                    _id: $scope.pageData.source.selectedSuaChua._id
	                                }, {
	                                    $set: {
	                                    	'noi_dung': $scope.pageData.source.selectedSuaChua.noi_dung,
	                                        'trang_thai': $scope.pageData.source.selectedSuaChua.trang_thai,
	                                        'thoi_gian': $scope.pageData.source.selectedSuaChua.thoi_gian,
	                                        'thong_ke': $scope.pageData.source.selectedSuaChua.thong_ke,
	                                        'ghi_chu': $scope.pageData.source.selectedSuaChua.ghi_chu,
	                                        'metadata.ngay_cap_nhat_cuoi': $scope.pageData.source.selectedSuaChua.metadata.ngay_cap_nhat_cuoi,
	                                        'metadata.nguoi_cap_nhat_cuoi': $scope.pageData.source.selectedSuaChua.metadata.nguoi_cap_nhat_cuoi,
	                                        'metadata.nguoi_cap_nhat_cuoi_name': $scope.pageData.source.selectedSuaChua.metadata.nguoi_cap_nhat_cuoi_name,
	                                        'metadata.nguoi_cap_nhat_cuoi_email': $scope.pageData.source.selectedSuaChua.metadata.nguoi_cap_nhat_cuoi_email,
	                                        'metadata.nguoi_cap_nhat_cuoi_field': $scope.pageData.source.selectedSuaChua.metadata.nguoi_cap_nhat_cuoi_field
	                                    }
	                                }, (error) => {
	                                    if (error) {
	                                        iNotifier.error('Không thể cập nhật lượt sửa chữa này. ' + error.message + '.');
	                                    } else {
	                                        iNotifier.success('Lượt sửa chữa được cập nhật thành công.');	                                        
	                                        $scope.$apply(() => {
	                                        	// $scope.pageData.source.master = SuaChuas.findOne({_id: $scope.pageData.source.selectedSuaChua._id});
                        						$scope.pageData.source.selectedSuaChua = angular.copy($scope.pageData.source.master);
	                                        });
	                                    }
	                                });
                                }
                            }
                        }
                    },
                    resetSelected: function(id) {
                        $scope.pageData.source.selectedSuaChua = angular.copy($scope.pageData.source.master);
                    }
                }
            }


            // ***************************************************
            // WATCHERS
            // ***************************************************


        }
    }
});