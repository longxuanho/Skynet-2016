angular.module('angular-skynet').directive('dashboardXuongdvktManage', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-manage.template.html',
        scope: {
            pageOptions: '=',
            pageData: '='
        },
        controller: function($scope, skynetHelpers, skynetDictionary, iNotifier) {

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
            			console.log('action!');
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
                        	thoi_gian: {}
                        };
                        newSuaChua.trang_thai = 'Đang sửa chữa';
                        newSuaChua.isPublic = true;
                        newSuaChua.isArchived = false;
            		}
            	},
            	build: {
            		newSuaChua: function (newSuaChua) {
            			// Tính toán thời gian kết thúc dự kiến
						newSuaChua.thoi_gian.ket_thuc_du_kien = moment(newSuaChua.thoi_gian.bat_dau).add(newSuaChua.thoi_gian.sua_chua_du_kien, 'hours').toDate();

			            // Tính toán các thông số thống kê			            
			            newSuaChua.thong_ke.thoi_gian.ngay_bat_dau = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy-MM-dd", "vi-VN");
			            newSuaChua.thong_ke.thoi_gian.thang_sua_chua = kendo.toString(newSuaChua.thoi_gian.bat_dau, "MM", "vi-VN");
			            newSuaChua.thong_ke.thoi_gian.nam_sua_chua = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy", "vi-VN");

			            // Khởi tạo metadata câu hỏi 
			            newSuaChua.metadata = {};
			            $scope._helpers.buildMetadata('buildNew', newSuaChua.metadata); 
            		}
            	},
                validateForm: function(suachua) {
                    let error = {};                        
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
                }
            }

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
                    },
                    resetSelected: function(id) {
                        $scope.pageData.source.selectedSuaChua = SuaChuas.findOne({ _id: id });
                    }
                }
            }


            // ***************************************************
            // WATCHERS
            // ***************************************************


        }
    }
});