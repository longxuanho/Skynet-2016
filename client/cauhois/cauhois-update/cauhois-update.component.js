angular.module('angular-skynet').directive('cauhoisUpdate', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-update/cauhois-update.template.html',
        controllerAs: 'vm',
        bindToController: true,
        controller: function($scope, skynetHelpers, $rootScope, iNotifier, $timeout, $reactive, skynetDictionary, $stateParams) {

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
                    lightBoxImageSrc: '',
                    currentSection: 'phan_loai',

                },
                input: {
                    diffViewSearch: ''
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
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('cauhois');

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                source: () => {
                    vm.master = CauHois.findOne({
                        _id: $stateParams.cauhoiId
                    });
                    // Cập nhật switchery ở Section Hình ảnh
                    if (!_.isEmpty(vm.master))
                        vm.pageOptions.props.isHasImages = (vm.master.noi_dung.url_hinh_anhs.length) ? true : false;

                    return angular.copy(vm.master);
                },
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            vm.save = () => {

                let err = vm._helpers.validateUser('can_upsert_thiet_bi');
                if (_.isEmpty(err)) {
                    err = vm._helpers.validateThietBiForm(vm.source);
                    if (_.isEmpty(err)) {

                        vm._helpers.buildThietBi(vm.source);
                        ThietBis.update({
                            _id: $rootScope.$stateParams.thietbiId
                        }, {
                            $set: {
                                ma_tb: vm.source.ma_tb,
                                phan_loai: vm.source.phan_loai,
                                ho_so_tb: vm.source.ho_so_tb,
                                status: vm.source.status,
                                mo_ta: vm.source.mo_ta,
                                ghi_chu: vm.source.ghi_chu,
                                dia_ban_hoat_dong: vm.source.dia_ban_hoat_dong,
                                don_vi_quan_ly: vm.source.don_vi_quan_ly,
                                don_vi_so_huu: vm.source.don_vi_so_huu,                        
                                don_vi_field: vm.source.don_vi_field,                        
                                isPublic: vm.source.isPublic,
                                isArchived: vm.source.isArchived,
                                'metadata.ngay_cap_nhat_cuoi': vm.source.metadata.ngay_cap_nhat_cuoi,
                                'metadata.nguoi_cap_nhat_cuoi': vm.source.metadata.nguoi_cap_nhat_cuoi,
                                'metadata.nguoi_cap_nhat_cuoi_field': vm.source.metadata.nguoi_cap_nhat_cuoi_field,
                                'metadata.search_field': vm.source.metadata.search_field
                            }
                        }, (error) => {
                            if (error) {
                                iNotifier.error('Không thể cập nhật thiết bị này. ' + error.message + '.');
                            } else {
                                iNotifier.success('Thiết bị "' + vm.source.ma_tb.ma_tb + '" được cập nhật thành công.');

                                vm.master = ThietBis.findOne({
                                    _id: $rootScope.$stateParams.thietbiId
                                });
                            }
                        });

                    } else {
                        iNotifier.error(err.message);
                    }
                } else {
                    iNotifier.error(err.message);
                }
            };

            vm.reset = () => {
                console.log('vm.source: ', vm.source);
                console.log('vm.master: ', vm.master);
                angular.copy(vm.master, vm.source);
            };

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                accentColor: _.findWhere(vm._data.general.themes, {
                    name: $rootScope.main_theme
                }).color_accent,
                setCorrectAnswer: function(luachon) {
                    if (!luachon.isCorrect) {
                        // Nếu hành vi người dùng là switch câu trả lời đúng -> clear rồi switch vị trí đáp án đúng
                        _.each(vm.newCauHoi.noi_dung.lua_chons, (item, i) => {
                            item.isCorrect = false;
                        });
                        luachon.isCorrect = true;
                    } else { 
                        // Nếu hành vi người dùng là toggle on/off câu trả lời đúng -> toggle
                        luachon.isCorrect = false;
                    }                     
                },
                addNumOfLuaChons: function() {
                    if (vm.newCauHoi.noi_dung.lua_chons.length < vm.pageOptions.limit.numOfLuaChonsMax) {
                        vm.newCauHoi.noi_dung.lua_chons.push({isCorrect: false, order: vm.newCauHoi.noi_dung.lua_chons.length - 1});
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
                },
                resetNewCauHoi: function() {
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
                },
                randomizeLuaChonOrder: function() {
                    // Loại bỏ các giá trị falsy khỏi lựa chọn trước khi xáo trộn
                    vm.newCauHoi.noi_dung.lua_chons = _.reject(vm.newCauHoi.noi_dung.lua_chons, (item) => {return !item.tieu_de});
                    let newOrder = _.shuffle( _.range(vm.newCauHoi.noi_dung.lua_chons.length) );
                    
                    // Xáo trộn order các lựa chọn theo thứ tự mới
                    _.each(vm.newCauHoi.noi_dung.lua_chons, (item, i) => {
                        item.order = newOrder[i];
                    });
                },
                makeDiff: function() {
                    // Toggle trạng thái isDiffViewResult
                    vm.pageOptions.props.isDiffViewResult = !vm.pageOptions.props.isDiffViewResult;
                    $('#diff_result').html('');
                    let diffType = 'diffChars',
                        panelA = vm.pageOptions.input.diffViewSearch || '';
                        panelB = vm.newCauHoi.noi_dung.tieu_de || '';
                        diff = JsDiff[diffType](panelA, panelB);
                    diff.forEach(function(part){
                        let color = part.added ? 'md-color-light-green-600': part.removed ? 'md-color-red-500 uk-text-del' : 'md-color-grey-400';
                        let span = $('<span/>');
                        span
                            .addClass(color)
                            .text(part.value);
                        $('#diff_result').append(span);
                    });                    
                }
            };

            // ***************************************************
            // FIX BUGS
            // ***************************************************

            // $timeout(()=>{
            //    $("#phanloai_chungloai_dropdown").data("kendoDropDownList").refresh(); // fix bugs kendo không hiển thị được giá trị tại field chủng loại
            // }, 1000);

            // ***************************************************
            // WATCHERS
            // ***************************************************

            UIkit.on('toggle.uk.accordion', function(event, active, toggle){
                vm.pageOptions.props.currentSection = toggle[0].id || 'accordion_phan_loai';
            });

            UIkit.on('change.uk.sortable', function(event, sortable_object, dragged_element, action){
                if (action==="moved") {
                    console.log('processing...');                    
                    
                    $scope.$apply(() => {
                        let newOrder = [],
                        clone = [];
                        $('#sortable').children('li').each( function(index) {
                            newOrder.push(vm.newCauHoi.noi_dung.lua_chons[$(this).data('index')]);
                            _.extend(vm.newCauHoi.noi_dung.lua_chons[$(this).data('index')], {order: index});
                        });
                    })
                }                
            });

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
                    if (vm.pageOptions.props.currentSection==='accordion_so_sanh')
                        $("#pageOptions_diffViewSearch").data("kendoAutoComplete").search(newVal);
                }
            });
            
        }
    }
});
