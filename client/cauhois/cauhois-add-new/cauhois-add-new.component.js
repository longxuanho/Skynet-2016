angular.module('angular-skynet').directive('cauhoisAddNew', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-add-new/cauhois-add-new.template.html',
        controllerAs: 'vm',
        controller: function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            
            vm._helpers.initNewCauHoiParams(vm);
            vm.dictionary = angular.copy(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem);

            vm.pageOptions = {
                limit: {
                    numOfLuaChonsMax: 6,
                    numOfLuaChonsMin: 2,
                    numOfUrlHinhAnhsMax: 4,
                    numOfUrlHinhAnhsMin: 1
                },
                able: {
                    addNumOfLuaChons: true,
                    decreaseNumOfLuaChons: true,
                    addNumOfUrlHinhAnhs: false,
                    decreaseNumOfUrlHinhAnhs: false
                },
                template: {
                    flags: {
                        isLockSectionPhanLoai: false,
                        isLockSectionTags: false,
                        isLockSectionGhiChu: false
                    },
                    phan_loai: {
                        nhom_cau_hoi: {},
                        muc_do: {},
                        nhom_tb: {},
                        loai_tb: []
                    },
                    tags: [],
                    ghi_chu: {
                        mo_ta: '',
                        ghi_chu: ''
                    }
                },
                props: {
                    isDiffViewLink: true,
                    isDiffViewResult: false,
                    isHasImages: false,
                    lightBoxImageSrc: ''
                },
                input: {
                    diffViewSearch: '',
                    diffViewResult: ''
                }
            };

            vm.pageReactiveData = {
                cauhois: [],
                tags: {
                    data: vm.dictionary.tags,
                    sort: { field: 'ten', dir: 'asc' },
                    group: { field: 'group' }

                }
            }

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                cauhois: () => {
                    vm.pageReactiveData.cauhois = CauHois.find().fetch();
                    // vm.pageReactiveData.dictionary.options.dataSource = CauHois.find().fetch();
                    return CauHois.find();
                }
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            vm.addNewCauHoi = () => {
                let err = vm._helpers.validateUser('can_upsert_cau_hoi');
                if (_.isEmpty(err)) {
                    err = vm._helpers.validateCauHoiForm(vm.newCauHoi);
                    if (_.isEmpty(err)) {

                        vm._helpers.buildNewCauHoi(vm.newCauHoi);
                        console.log('newCauHoi: ', vm.newCauHoi);
                        CauHois.insert(vm.newCauHoi, (error, result) => {
                            if (error) {
                                iNotifier.error('Không thể tạo mới dữ liệu câu hỏi này. ' + error.message + '.');
                            } else {
                                $scope.$apply( () => {
                                    vm._helpers.initNewCauHoiParams(vm);

                                    // Nếu một số trường được kích hoạt khóa
                                    if (vm.pageOptions.template.flags.isLockSectionPhanLoai) {
                                        if (!_.isEmpty(vm.pageOptions.template.phan_loai)) 
                                            vm.newCauHoi.phan_loai = angular.copy(vm.pageOptions.template.phan_loai);
                                    }
                                    if (vm.pageOptions.template.flags.isLockSectionTags) {
                                        if (vm.pageOptions.template.tags.length) 
                                            vm.newCauHoi.tags = angular.copy(vm.pageOptions.template.tags);
                                    }
                                    if (vm.pageOptions.template.flags.isLockSectionGhiChu) {
                                        vm.newCauHoi.ghi_chu = vm.pageOptions.template.ghi_chu.ghi_chu;
                                        vm.newCauHoi.mo_ta = vm.pageOptions.template.ghi_chu.mo_ta;
                                    }
                                });                        
                                iNotifier.success('Dữ liệu câu hỏi được tạo mới thành công.');
                            }
                        });

                    } else {
                        iNotifier.error(err.message);
                    }
                } else {
                    iNotifier.error(err.message);
                }
            };

            vm.clearNewCauHoiForm = () => {
                vm._helpers.initNewCauHoiParams(vm);
            };

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                accentColor: _.findWhere(vm._data.general.themes, {
                    name: $rootScope.main_theme
                }).color_accent,
                setCorrectAnswer: function(index) {
                    if (!vm.newCauHoi.noi_dung.lua_chons[index].isCorrect) {
                        // Nếu hành vi người dùng là switch câu trả lời đúng -> clear rồi switch vị trí đáp án đúng
                        _.each(vm.newCauHoi.noi_dung.lua_chons, (item, i) => {
                            item.isCorrect = (index === i) ? true : false;
                        });  
                    } else { 
                        // Nếu hành vi người dùng là toggle on/off câu trả lời đúng -> toggle
                        vm.newCauHoi.noi_dung.lua_chons[index].isCorrect = false;
                    }                     
                },
                addNumOfLuaChons: function() {
                    if (vm.newCauHoi.noi_dung.lua_chons.length < vm.pageOptions.limit.numOfLuaChonsMax) {
                        vm.newCauHoi.noi_dung.lua_chons.push({isCorrect: false});
                        vm.pageOptions.able.decreaseNumOfLuaChons = true;   // Bây giờ có thể giảm số lựa chọn
                    }
                    else 
                        vm.pageOptions.able.addNumOfLuaChons = false;       // Đã vượt quá giới hạn tối đa số lựa chọn cho phép
                },
                decreaseNumOfLuaChons: function() {
                    if (vm.newCauHoi.noi_dung.lua_chons.length > vm.pageOptions.limit.numOfLuaChonsMin) {
                        vm.newCauHoi.noi_dung.lua_chons.pop();
                        vm.pageOptions.able.addNumOfLuaChons = true;        // Bây giờ có thể thêm số lựa chọn
                    } else
                        vm.pageOptions.able.decreaseNumOfLuaChons = false;  // Đã quá giới hạn tối thiểu số lựa chọn cho phép
                },
                addNumOfHinhAnhs: function() {
                    if (vm.pageOptions.props.isHasImages)
                        if (vm.pageOptions.able.addNumOfUrlHinhAnhs)
                            vm.newCauHoi.noi_dung.url_hinh_anhs.push('');
                },
                decreaseNumOfHinhAnhs: function() {
                    if (vm.pageOptions.props.isHasImages)
                        if (vm.pageOptions.able.decreaseNumOfUrlHinhAnhs)
                            vm.newCauHoi.noi_dung.url_hinh_anhs.pop();
                },
                resetPhanLoaiSection: function() {
                    // Nếu đang ở chế độ khóa, restore lại thời điểm bắt đầu kích hoạt khóa
                    if (vm.pageOptions.template.flags.isLockSectionPhanLoai) {
                        if (!_.isEmpty(vm.pageOptions.template.phan_loai)) 
                            vm.newCauHoi.phan_loai = angular.copy(vm.pageOptions.template.phan_loai);
                    } else {
                        vm.newCauHoi.phan_loai = {
                            kieu_cau_hoi: {
                                ma: 'mot_dap_an_dung',
                                ten: 'Một đáp án đúng'
                            },
                            nhom_tb: {
                                ma: "thiet_bi_nang",
                                ten: "Thiết bị nâng"
                            },
                            loai_tb: [],
                            nhom_cau_hoi: {},
                            nhom_noi_dung: {},
                            bac_thi: [],
                            muc_do: {}
                        }
                    }
                },
                resetTagSection: function() {
                    if (vm.pageOptions.template.flags.isLockSectionTags) {
                        if (vm.pageOptions.template.tags.length) 
                            vm.newCauHoi.tags = angular.copy(vm.pageOptions.template.tags);
                    } else {
                        vm.newCauHoi.tags = [];
                    }       
                },
                resetHinhAnhsSection: function() {
                    for (let i = 0; i < vm.newCauHoi.noi_dung.url_hinh_anhs.length; i++) {
                        vm.newCauHoi.noi_dung.url_hinh_anhs[i] = '';
                    }
                },
                resetGhiChuSection: function() {
                    if (vm.pageOptions.template.flags.isLockSectionGhiChu) {
                        vm.newCauHoi.ghi_chu = vm.pageOptions.template.ghi_chu.ghi_chu;
                        vm.newCauHoi.mo_ta = vm.pageOptions.template.ghi_chu.mo_ta;
                    } else {
                        vm.newCauHoi.ghi_chu = '';
                        vm.newCauHoi.mo_ta = '';
                    }
                },
                toggleLockSectionPhanLoai: function() {
                    vm.pageOptions.template.flags.isLockSectionPhanLoai = !vm.pageOptions.template.flags.isLockSectionPhanLoai;
                    // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Phân Loại
                    if (vm.pageOptions.template.flags.isLockSectionPhanLoai) {
                        vm.pageOptions.template.phan_loai = angular.copy(vm.newCauHoi.phan_loai);
                    }
                },
                toggleLockSectionTags: function() {
                    vm.pageOptions.template.flags.isLockSectionTags = !vm.pageOptions.template.flags.isLockSectionTags;
                    // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Tags
                    if (vm.pageOptions.template.flags.isLockSectionTags) {
                        vm.pageOptions.template.tags = angular.copy(vm.newCauHoi.tags);
                    }
                },
                toggleLockSectionGhiChu: function() {
                    vm.pageOptions.template.flags.isLockSectionGhiChu = !vm.pageOptions.template.flags.isLockSectionGhiChu;
                    // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Ghi Chú
                    if (vm.pageOptions.template.flags.isLockSectionGhiChu) {
                        vm.pageOptions.template.ghi_chu = {
                            mo_ta: vm.newCauHoi.mo_ta,
                            ghi_chu: vm.newCauHoi.ghi_chu
                        };
                    }
                },
                showModalLightBox: function(index) {
                    vm.pageOptions.props.lightBoxImageSrc = vm.newCauHoi.noi_dung.url_hinh_anhs[index];
                    if (vm.pageOptions.props.lightBoxImageSrc)
                        UIkit.modal("#modal_lightbox").show();
                }
            };

            // ***************************************************
            // WATCHERS
            // ***************************************************

            $rootScope.$watch('main_theme', (newVal) => {
                vm.utils.accentColor = _.findWhere(vm._data.general.themes, {
                    name: newVal
                }).color_accent;
            });

            $scope.$watch('vm.pageOptions.props.isHasImages', (newVal, oldVal) => {
                if (oldVal) {
                    // Nếu người dùng tắt chức năng sử dụng url hình ảnh, xóa tất cả các trường ngay lập tức
                    vm.newCauHoi.noi_dung.url_hinh_anhs = ['', ''];
                }                
            });

            $scope.$watch('vm.newCauHoi.noi_dung.url_hinh_anhs.length', (newVal) => {
                if (newVal > vm.pageOptions.limit.numOfUrlHinhAnhsMin && newVal < vm.pageOptions.limit.numOfUrlHinhAnhsMax) {
                    // Nếu số trường url hình ảnh trong giới hạn cho phép, mở khóa các tính năng
                    vm.pageOptions.able.decreaseNumOfUrlHinhAnhs = true;
                    vm.pageOptions.able.addNumOfUrlHinhAnhs = true; 
                }
                if (newVal <= vm.pageOptions.limit.numOfUrlHinhAnhsMin) {
                    // Nếu số trường url hình ảnh ít hơn giới hạn dưới, khóa khả năng decreaseUrlHinhAnh
                    vm.pageOptions.able.decreaseNumOfUrlHinhAnhs = false; 
                }
                if (newVal >= vm.pageOptions.limit.numOfUrlHinhAnhsMax) {
                    // Nếu số trường url hình ảnh ít hơn giới hạn trên, khóa khả năng addUrlHinhAnh
                    vm.pageOptions.able.addNumOfUrlHinhAnhs = false; 
                }

            });

            $scope.$watch('vm.newCauHoi.noi_dung.tieu_de', (newVal) => {
                if (vm.pageOptions.props.isDiffViewLink) {
                    vm.pageOptions.input.diffViewSearch = newVal;
                    $("#pageOptions_diffViewSearch").data("kendoAutoComplete").search(newVal);
                }
            });

        }
    }
});
