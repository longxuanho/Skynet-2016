angular.module('angular-skynet').directive('cauhoisWindow', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-windows/cauhois-window.template.html',
        // Không đặt tên controller là vm được -> gây lỗi
        controllerAs: 'cauhoisWindow',
        bindToController: true,
        controller: function($scope, $rootScope, $reactive, $timeout, skynetHelpers, skynetDictionary, iNotifier) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-cauhoisWindow
            let cauhoisWindow = this;

            cauhoisWindow._helpers = skynetHelpers.helpers;                       
            
            cauhoisWindow._helpers.initNewCauHoiParams(cauhoisWindow);
            cauhoisWindow.dictionary = angular.copy(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem);

            $timeout(() => {
                let mainPanel = UIkit.accordion('#cauhois_window_main_panel', { /*collapse: false*/ });
            }, 1000);

            cauhoisWindow.windowOptions = {
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

            cauhoisWindow.pageReactiveData = {
                cauhois: [],
                tags: kendo.data.DataSource.create({
                        data: [],
                        group: { field: 'container.group' }
                    }),
                loai_tbs: []
            }

            // // ***************************************************
            // // SUBSCRIBE
            // // ***************************************************

            // // ***************************************************
            // // REACTIVE HELPERS
            // // ***************************************************

            cauhoisWindow.helpers({
                loai_tbs: () => {
                    cauhoisWindow.pageReactiveData.loai_tbs = DataHelpers.find({
                        subject: 'cauhois',
                        category: 'loai_tbs'
                    }, {
                        sort: {
                            'container.text': 1
                        }
                    }).fetch();
                    cauhoisWindow.pageReactiveData.tags.data(DataHelpers.find({
                        subject: 'cauhois',
                        category: 'tags'
                    }, {
                        sort: {
                            'container.text': 1
                        }
                    }).fetch());
                    return DataHelpers.find();
                }
            });


            // // ***************************************************
            // // METHODS
            // // ***************************************************

            cauhoisWindow.addNewCauHoi = () => {
                let err = cauhoisWindow._helpers.validateUser('can_upsert_cau_hoi');
                if (_.isEmpty(err)) {
                    err = cauhoisWindow._helpers.validateCauHoiForm(cauhoisWindow.newCauHoi);
                    if (_.isEmpty(err)) {

                        cauhoisWindow._helpers.buildNewCauHoi(cauhoisWindow.newCauHoi);
                        CauHois.insert(cauhoisWindow.newCauHoi, (error, result) => {
                            if (error) {
                                iNotifier.error('Không thể tạo mới dữ liệu câu hỏi này. ' + error.message + '.', 'bottom-center');
                            } else {
                                $scope.$apply( () => {
                                    cauhoisWindow.utils.resetNewCauHoi();
                                });                        
                                iNotifier.success('Dữ liệu câu hỏi được tạo mới thành công.', 'bottom-center');
                            }
                        });

                    } else {
                        iNotifier.error(err.message, 'bottom-center');
                    }
                } else {
                    iNotifier.error(err.message, 'bottom-center');
                }
            };

            cauhoisWindow.clearNewCauHoiForm = () => {
                cauhoisWindow._helpers.initNewCauHoiParams(cauhoisWindow);
            };

            // // ***************************************************
            // // UTILS
            // // ***************************************************

            cauhoisWindow.utils = {
                // accentColor: _.findWhere(cauhoisWindow._data.general.themes, {
                //     name: $rootScope.main_theme
                // }).color_accent,
                setCorrectAnswer: function(luachon) {
                    console.log('Set correct answer, ', luachon);
                    if (!luachon.isCorrect) {
                        // Nếu hành vi người dùng là switch câu trả lời đúng -> clear rồi switch vị trí đáp án đúng
                        _.each(cauhoisWindow.newCauHoi.noi_dung.lua_chons, (item, i) => {
                            item.isCorrect = false;
                        });
                        luachon.isCorrect = true;
                    } else { 
                        // Nếu hành vi người dùng là toggle on/off câu trả lời đúng -> toggle
                        luachon.isCorrect = false;
                    }                     
                    console.log('result: ', luachon)
                },
                addNumOfLuaChons: function() {
                    if (cauhoisWindow.newCauHoi.noi_dung.lua_chons.length < cauhoisWindow.windowOptions.limit.numOfLuaChonsMax) {
                        cauhoisWindow.newCauHoi.noi_dung.lua_chons.push({isCorrect: false, order: cauhoisWindow.newCauHoi.noi_dung.lua_chons.length});
                        cauhoisWindow.windowOptions.able.decreaseNumOfLuaChons = true;   // Bây giờ có thể giảm số lựa chọn
                    }
                    else 
                        cauhoisWindow.windowOptions.able.addNumOfLuaChons = false;       // Đã vượt quá giới hạn tối đa số lựa chọn cho phép
                },
                decreaseNumOfLuaChons: function() {
                    if (cauhoisWindow.newCauHoi.noi_dung.lua_chons.length > cauhoisWindow.windowOptions.limit.numOfLuaChonsMin) {
                        cauhoisWindow.newCauHoi.noi_dung.lua_chons.pop();
                        cauhoisWindow.windowOptions.able.addNumOfLuaChons = true;        // Bây giờ có thể thêm số lựa chọn
                    } else
                        cauhoisWindow.windowOptions.able.decreaseNumOfLuaChons = false;  // Đã quá giới hạn tối thiểu số lựa chọn cho phép
                },
                addNumOfHinhAnhs: function() {
                    if (cauhoisWindow.windowOptions.props.isHasImages)
                        if (cauhoisWindow.windowOptions.able.addNumOfUrlHinhAnhs)
                            cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs.push('');
                },
                decreaseNumOfHinhAnhs: function() {
                    if (cauhoisWindow.windowOptions.props.isHasImages)
                        if (cauhoisWindow.windowOptions.able.decreaseNumOfUrlHinhAnhs)
                            cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs.pop();
                },
                resetPhanLoaiSection: function() {
                    // Nếu đang ở chế độ khóa, restore lại thời điểm bắt đầu kích hoạt khóa
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionPhanLoai) {
                        if (!_.isEmpty(cauhoisWindow.windowOptions.template.phan_loai)) 
                            cauhoisWindow.newCauHoi.phan_loai = angular.copy(cauhoisWindow.windowOptions.template.phan_loai);
                    } else {
                        cauhoisWindow.newCauHoi.phan_loai = {
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
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionTags) {
                        if (cauhoisWindow.windowOptions.template.tags.length) 
                            cauhoisWindow.newCauHoi.tags = angular.copy(cauhoisWindow.windowOptions.template.tags);
                    } else {
                        cauhoisWindow.newCauHoi.tags = [];
                    }       
                },
                resetHinhAnhsSection: function() {
                    for (let i = 0; i < cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs.length; i++) {
                        cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs[i] = '';
                    }
                },
                resetGhiChuSection: function() {
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionGhiChu) {
                        cauhoisWindow.newCauHoi.ghi_chu = cauhoisWindow.windowOptions.template.ghi_chu.ghi_chu;
                        cauhoisWindow.newCauHoi.mo_ta = cauhoisWindow.windowOptions.template.ghi_chu.mo_ta;
                    } else {
                        cauhoisWindow.newCauHoi.ghi_chu = '';
                        cauhoisWindow.newCauHoi.mo_ta = '';
                    }
                },
                toggleLockSectionPhanLoai: function() {
                    cauhoisWindow.windowOptions.template.flags.isLockSectionPhanLoai = !cauhoisWindow.windowOptions.template.flags.isLockSectionPhanLoai;
                    // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Phân Loại
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionPhanLoai) {
                        cauhoisWindow.windowOptions.template.phan_loai = angular.copy(cauhoisWindow.newCauHoi.phan_loai);
                    }
                },
                toggleLockSectionTags: function() {
                    cauhoisWindow.windowOptions.template.flags.isLockSectionTags = !cauhoisWindow.windowOptions.template.flags.isLockSectionTags;
                    // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Tags
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionTags) {
                        cauhoisWindow.windowOptions.template.tags = angular.copy(cauhoisWindow.newCauHoi.tags);
                    }
                },
                toggleLockSectionGhiChu: function() {
                    cauhoisWindow.windowOptions.template.flags.isLockSectionGhiChu = !cauhoisWindow.windowOptions.template.flags.isLockSectionGhiChu;
                    // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Ghi Chú
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionGhiChu) {
                        cauhoisWindow.windowOptions.template.ghi_chu = {
                            mo_ta: cauhoisWindow.newCauHoi.mo_ta,
                            ghi_chu: cauhoisWindow.newCauHoi.ghi_chu
                        };
                    }
                },
                showModalLightBox: function(index) {
                    cauhoisWindow.windowOptions.props.lightBoxImageSrc = cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs[index];
                    if (cauhoisWindow.windowOptions.props.lightBoxImageSrc) {
                        console.log('show');
                        UIkit.modal("#modal_lightbox").show();
                    }
                },
                resetNewCauHoi: function() {
                    cauhoisWindow._helpers.initNewCauHoiParams(cauhoisWindow);

                    // Nếu một số trường được kích hoạt khóa
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionPhanLoai) {
                        if (!_.isEmpty(cauhoisWindow.windowOptions.template.phan_loai)) 
                            cauhoisWindow.newCauHoi.phan_loai = angular.copy(cauhoisWindow.windowOptions.template.phan_loai);
                    }
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionTags) {
                        if (cauhoisWindow.windowOptions.template.tags.length) 
                            cauhoisWindow.newCauHoi.tags = angular.copy(cauhoisWindow.windowOptions.template.tags);
                    }
                    if (cauhoisWindow.windowOptions.template.flags.isLockSectionGhiChu) {
                        cauhoisWindow.newCauHoi.ghi_chu = cauhoisWindow.windowOptions.template.ghi_chu.ghi_chu;
                        cauhoisWindow.newCauHoi.mo_ta = cauhoisWindow.windowOptions.template.ghi_chu.mo_ta;
                    }
                },
                randomizeLuaChonOrder: function() {
                    // Loại bỏ các giá trị falsy khỏi lựa chọn trước khi xáo trộn
                    cauhoisWindow.newCauHoi.noi_dung.lua_chons = _.reject(cauhoisWindow.newCauHoi.noi_dung.lua_chons, (item) => {return !item.tieu_de});
                    let newOrder = _.shuffle( _.range(cauhoisWindow.newCauHoi.noi_dung.lua_chons.length) );
                    
                    // Xáo trộn order các lựa chọn theo thứ tự mới
                    _.each(cauhoisWindow.newCauHoi.noi_dung.lua_chons, (item, i) => {
                        item.order = newOrder[i];
                    });
                    // Sắp xếp lại các lựa chọn theo thứ tự của khóa 'order'
                    cauhoisWindow.newCauHoi.noi_dung.lua_chons = _.sortBy(cauhoisWindow.newCauHoi.noi_dung.lua_chons, 'order');
                },
                makeDiff: function() {
                    // Toggle trạng thái isDiffViewResult
                    cauhoisWindow.windowOptions.props.isDiffViewResult = !cauhoisWindow.windowOptions.props.isDiffViewResult;
                    $('#diff_result').html('');
                    let diffType = 'diffChars',
                        panelA = cauhoisWindow.windowOptions.input.diffViewSearch || '';
                        panelB = cauhoisWindow.newCauHoi.noi_dung.tieu_de || '';
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

            // // ***************************************************
            // // WATCHERS
            // // ***************************************************

            // UIkit.on('toggle.uk.accordion', function(event, active, toggle){
            //     cauhoisWindow.windowOptions.props.currentSection = toggle[0].id || 'accordion_phan_loai';
            // });

            UIkit.on('change.uk.sortable', function(event, sortable_object, dragged_element, action){
                if (action==="moved") {
                    // Đồng bộ: Khi có event sorted, truy nhập các list để trích xuất mảng [data-index] -> [newOrder],
                    // rồi cập nhật lại các order tuân theo thứ tự này                    
                    $scope.$apply(() => {
                        $('#sortable').children('li').each( function(index) {
                            // Để lấy thông tin về data-index: $(this).data('index')
                            _.extend(cauhoisWindow.newCauHoi.noi_dung.lua_chons[$(this).data('index')], {order: index});
                        });
                        // Sắp xếp lại các lựa chọn theo thứ tự của khóa 'order'
                        cauhoisWindow.newCauHoi.noi_dung.lua_chons = _.sortBy(cauhoisWindow.newCauHoi.noi_dung.lua_chons, 'order');
                    });
                }                
            });

            $rootScope.$watch('main_theme', (newVal, oldVal) => {
                // Đổi màu k window khi màu theme thay đổi
                let header = $('div.k-window-titlebar.k-header');
                header.removeClass('color-background-' + oldVal);
                header.addClass('color-background-' + newVal);
            });

            $scope.$watch('cauhoisWindow.windowOptions.props.isHasImages', (newVal, oldVal) => {
                if (oldVal) {
                    // Nếu người dùng tắt chức năng sử dụng url hình ảnh, xóa tất cả các trường ngay lập tức
                    cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs = ['', ''];
                }
            });

            $scope.$watch('cauhoisWindow.newCauHoi.noi_dung.url_hinh_anhs.length', (newVal) => {
                if (newVal > cauhoisWindow.windowOptions.limit.numOfUrlHinhAnhsMin && newVal < cauhoisWindow.windowOptions.limit.numOfUrlHinhAnhsMax) {
                    // Nếu số trường url hình ảnh trong giới hạn cho phép, mở khóa các tính năng
                    cauhoisWindow.windowOptions.able.decreaseNumOfUrlHinhAnhs = true;
                    cauhoisWindow.windowOptions.able.addNumOfUrlHinhAnhs = true; 
                }
                if (newVal <= cauhoisWindow.windowOptions.limit.numOfUrlHinhAnhsMin) {
                    // Nếu số trường url hình ảnh ít hơn giới hạn dưới, khóa khả năng decreaseUrlHinhAnh
                    cauhoisWindow.windowOptions.able.decreaseNumOfUrlHinhAnhs = false; 
                }
                if (newVal >= cauhoisWindow.windowOptions.limit.numOfUrlHinhAnhsMax) {
                    // Nếu số trường url hình ảnh ít hơn giới hạn trên, khóa khả năng addUrlHinhAnh
                    cauhoisWindow.windowOptions.able.addNumOfUrlHinhAnhs = false; 
                }

            });

            $scope.$watch('cauhoisWindow.newCauHoi.noi_dung.tieu_de', (newVal) => {
                if (cauhoisWindow.windowOptions.props.isDiffViewLink) {
                    cauhoisWindow.windowOptions.input.diffViewSearch = newVal;
                    if (cauhoisWindow.windowOptions.props.currentSection==='accordion_so_sanh')
                        $("#windowOptions_diffViewSearch").data("kendoAutoComplete").search(newVal);
                }
            });

        }
    }
});
