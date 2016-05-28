angular.module('angular-skynet').factory('skynetHelpers', function($meteor, $rootScope) {
    var factory = {};

    
    // ***************************************************
    // DATA
    // ***************************************************
    
    factory.data = {
        states: {
            master: 'cauhois.list',
            login: 'login',
            notifyCheckEmail: 'notify_checkEmail',
            notifyResetMatKhau: 'notify_resetMatKhau'
        },
        general: {
            themes: [{
                name: 'default_theme',
                color: '#2196f3',
                color_light: '#e3f2fd',
                color_dark: '#1976d2',
                color_accent: '#7cb342',
                color_description: 'blue/green'
            }, {
                name: 'app_theme_a',
                color: '#3f51b5',
                color_light: '#e8eaf6',
                color_dark: '#303f9f',
                color_accent: '#ff4081',
                color_description: 'indigo/pink'
            }, {
                name: 'app_theme_b',
                color: '#673ab7',
                color_light: '#ede7f6',
                color_dark: '#512da8',
                color_accent: '#00bcd4',
                color_description: 'deep-purple/cyan'
            }, {
                name: 'app_theme_c',
                color: '#795548',
                color_light: '#efebe9',
                color_dark: '#5d4037',
                color_accent: '#448aff',
                color_description: 'brown/blue'
            }, {
                name: 'app_theme_d',
                color: '#00bcd4',
                color_light: '#e0f7fa',
                color_dark: '#0097a7',
                color_accent: '#7c4dff',
                color_description: 'cyan/deep-purple'
            }, {
                name: 'app_theme_e',
                color: '#607d8b',
                color_light: '#ffebee',
                color_dark: '#455a64',
                color_accent: '#e53935',
                color_description: 'blue-grey/red*'
            }, {
                name: 'app_theme_f',
                color: '#424242',
                color_light: '#f1f8e9',
                color_dark: '#212121',
                color_accent: '#7cb342',
                color_description: 'grey/light-green*'
            }, {
                name: 'app_theme_g',
                color: '#8e24aa',
                color_light: '#f3e5f5',
                color_dark: '#7b1fa2',
                color_accent: '#4caf50',
                color_description: 'purple/green*'
            }]
        }
    }


    // ***************************************************
    // HELPERS
    // ***************************************************

    factory.helpers = {

        // ***************************************************
        // MICS
        // ***************************************************
        resolveField: function(fields, source) {
            let target = '';
            _.each(fields, (item) => {
                if (_.isString(item))
                    target += '>' + item + ' ' + source[item] + ' :';
                if (_.isArray(item)) {
                    if (item.length === 2) {
                        if (_.isArray(source[item[0]])) {
                            _.each(source[item[0]], (tmp) => {
                                target += '>' + item[0] + ' ' + tmp[item[1]] + ' :';
                            });
                        } else
                            target += '>' + item[0] + ' ' + source[item[0]][item[1]] + ' :';
                    }
                    if (item.length === 3)
                        target += '>' + item[0] + ' ' + source[item[0]][item[1]][item[2]] + ' :';
                }
            });
            return target;
        },
        buildMetadata: function(buildType, source) {
            if (buildType === 'build') {
                source.ngay_cap_nhat_cuoi = new Date();
                source.nguoi_cap_nhat_cuoi = Meteor.userId();
                source.nguoi_cap_nhat_cuoi_email = Meteor.user().emails[0].address;
                source.nguoi_cap_nhat_cuoi_field = '';
                if (Meteor.user().profile && Meteor.user().profile.name) {
                    source.nguoi_cap_nhat_cuoi_name = Meteor.user().profile.name;
                    source.nguoi_cap_nhat_cuoi_field += Meteor.user().profile.name;
                }
                source.nguoi_cap_nhat_cuoi_field += ':' + Meteor.user().emails[0].address;
            }
            if (buildType === 'buildNew') {
                source.ngay_tao = new Date();
                source.nguoi_tao = Meteor.userId();
                source.nguoi_tao_email = Meteor.user().emails[0].address;
                source.nguoi_tao_field = '';
                if (Meteor.user().profile && Meteor.user().profile.name) {
                    source.nguoi_tao_name = Meteor.user().profile.name;
                    source.nguoi_tao_field += Meteor.user().profile.name;
                }
                source.nguoi_tao_field += ':' + Meteor.user().emails[0].address;
            }
        },
        getFilename: function(url) {
            if (url) {
                return url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
            }
            return "";
        },
        getOriginalFilename: function(url) {
            if (url) {
                return url.substring(url.lastIndexOf("/") + 1);
            }
            return "";
        },
        getFilenameExtension: function(url) {
            if (url) {
                return url.substring(url.lastIndexOf(".") + 1);
            }
            return "";
        },
        goToPageSection: function(page) {
            if (_.contains(['nhoms_add_new', 'nhoms_view_content', 'nhoms_blank', 'nhoms_details']), page)
                $rootScope.pageSection = page;
        },

        // ***************************************************
        // HELPERS - CAUHOIS
        // ***************************************************

        initNewCauHoiParams: function(scope) {
            scope.newCauHoi = {
                lop: {
                    ten: 'Kỹ thuật',
                    ma: 'ky_thuat'
                },
                phan_lop: {
                    ten: 'Trắc nghiệm',
                    ma: 'trac_nghiem'
                },
                phan_loai: {
                    kieu_cau_hoi: {
                        ma: 'mot_dap_an_dung',
                        ten: 'Một đáp án đúng'
                    },
                    nhom_tb: {
                    },
                    loai_tb: [],
                    nhom_cau_hoi: {},
                    nhom_noi_dung: {},
                    bac_thi: [],
                    muc_do: {}
                },
                noi_dung: {
                    thong_ke: {
                        numOfLuaChons: 4,           // Bằng số phần tử của 'lua_chons'
                        numOfCorrectAnswers: 1,
                        numOfUrlHinhAnhs: 0
                    },
                    lua_chons: [{isCorrect: false, order: 0}, {isCorrect: false, order: 1}, {isCorrect: false, order: 2}, {isCorrect: false, order: 3}],    // Bằng giá trị của 'thong_ke.numOfLuaChons'
                    isHasImages: false,
                    url_hinh_anhs: ['', ''],
                },
                tags: [],
                fields: {},
                metadata: {},
                isPublic: true,
                isArchived: false,
                isReserveOrder: false,
                status: 'Active'
            };
        },

        validateCauHoiForm: function(cauhoi) {
            let error = {};
            if (!cauhoi.lop.ten) {
                error.message = "Chưa có thông tin về lớp câu hỏi.";
                return error;
            }
            if (!cauhoi.phan_lop.ten) {
                error.message = "Chưa có thông tin về phân lớp câu hỏi.";
                return error;
            }
            if (!cauhoi.phan_loai.kieu_cau_hoi.ten) {
                error.message = "Chưa có thông tin về kiểu câu hỏi.";
                return error;
            }
            if (!cauhoi.phan_loai.nhom_cau_hoi.ma) {
                error.message = "Chưa có thông tin về nhóm câu hỏi.";
                return error;
            } 
            if (!cauhoi.phan_loai.nhom_tb.ma) {
                error.message = "Chưa có thông tin về nhóm thiết bị.";
                return error;
            }
            if (!cauhoi.phan_loai.loai_tb || !cauhoi.phan_loai.loai_tb.length) {
                error.message = "Chưa có thông tin về loại thiết bị.";
                return error;
            }
            if (!cauhoi.noi_dung.tieu_de) {
                error.message = "Chưa có thông tin về tiêu đề câu hỏi.";
                return error;
            }
            if (!cauhoi.noi_dung.lua_chons.length) {
                error.message = "Chưa có các lựa chọn đối với câu hỏi trắc nghiệm.";
                return error;
            }
            
            // Kiểm tra liệu có ít nhất một đáp án đúng
            let luachons_without_null = _.filter(cauhoi.noi_dung.lua_chons, (item) => {
                return item.tieu_de;
            });
            if (!(_.findWhere(luachons_without_null, {isCorrect: true}))) {
                error.message = "Câu hỏi của bạn cần ít nhất một đáp án đúng.";
                return error;
            }

            return;
        },

        buildCauHoi: function(cauhoi) {
            // Fix lỗi tương thích dữ liệu trong các trường hợp trước
            // cauhoi.isReserveOrder = cauhoi.isReserveOrder ? true : false;

            // Loại bỏ các lựa chọn không có nội dung
            cauhoi.noi_dung.lua_chons = _.filter(cauhoi.noi_dung.lua_chons, (item) => {
                return item.tieu_de;
            });

            // Loại bỏ các url hình ảnh không có nội dung
            cauhoi.noi_dung.url_hinh_anhs = _.without(cauhoi.noi_dung.url_hinh_anhs, '');
            cauhoi.noi_dung.isHasImages = (cauhoi.noi_dung.url_hinh_anhs.length) ? true : false;

            // Tính toán lại các chỉ số thống kê
            cauhoi.noi_dung.thong_ke.numOfLuaChons = cauhoi.noi_dung.lua_chons.length; 
            cauhoi.noi_dung.thong_ke.numOfCorrectAnswers = _.where(cauhoi.noi_dung.lua_chons, {isCorrect: true}).length;
            cauhoi.noi_dung.thong_ke.numOfUrlHinhAnhs = cauhoi.noi_dung.url_hinh_anhs.length;

            // Cập nhật các trường thông tin 
            if (cauhoi.tags && cauhoi.tags.length)
                cauhoi.fields.tags = cauhoi.tags.join(", ");
            if (cauhoi.phan_loai.loai_tb && cauhoi.phan_loai.loai_tb.length)
                cauhoi.fields.loai_tb = cauhoi.phan_loai.loai_tb.join(", ");
            if (cauhoi.phan_loai.bac_thi && cauhoi.phan_loai.bac_thi.length)
                cauhoi.fields.bac_thi = cauhoi.phan_loai.bac_thi.join(", ");

            let correct_answers = [],
                alphabelts = ['A', 'B', 'C', 'D', 'E', 'F'];

            _.each(_.where(cauhoi.noi_dung.lua_chons, { isCorrect: true }), (item) => {
                correct_answers.push(alphabelts[item.order]);
            });

            cauhoi.fields.correctAnswer = correct_answers.join(", ");

            // Cập nhật các trường mới hỗ trợ xuất thông tin từ Excel - Đáp án A, B, C bố trí theo chiều ngang.
            cauhoi.fields.lua_chons = {};
            _.each(cauhoi.noi_dung.lua_chons, (item, index) => {
                cauhoi.fields.lua_chons[alphabelts[index]] = item.tieu_de;
            });

            // Khởi tạo metadata câu hỏi 
            if (!cauhoi.metadata)
                cauhoi.metadata = {};
            this.buildMetadata('build', cauhoi.metadata);

            // Cập nhật các trường ghi chú về thời gian từ dạng Date về dạng String, hỗ trợ nhóm dữ liệu trong Grid
            cauhoi.fields.thoi_gians = {},
            cauhoi.fields.thoi_gians.ngay_tao_string = kendo.toString(cauhoi.metadata.ngay_tao, 'yyyy-MM-dd');
            cauhoi.fields.thoi_gians.ngay_cap_nhat_cuoi_string = kendo.toString(cauhoi.metadata.ngay_cap_nhat_cuoi, 'yyyy-MM-dd');
        },

        buildNewCauHoi: function(newCauHoi) {
            // Loại bỏ các lựa chọn không có nội dung
            newCauHoi.noi_dung.lua_chons = _.filter(newCauHoi.noi_dung.lua_chons, (item) => {
                return item.tieu_de;
            });

            // Loại bỏ các url hình ảnh không có nội dung
            newCauHoi.noi_dung.url_hinh_anhs = _.without(newCauHoi.noi_dung.url_hinh_anhs, '');
            newCauHoi.noi_dung.isHasImages = (newCauHoi.noi_dung.url_hinh_anhs.length) ? true : false;

            // Tính toán lại các chỉ số thống kê
            newCauHoi.noi_dung.thong_ke.numOfLuaChons = newCauHoi.noi_dung.lua_chons.length; 
            newCauHoi.noi_dung.thong_ke.numOfCorrectAnswers = _.where(newCauHoi.noi_dung.lua_chons, {isCorrect: true}).length;
            newCauHoi.noi_dung.thong_ke.numOfUrlHinhAnhs = newCauHoi.noi_dung.url_hinh_anhs.length;

            // Cập nhật các trường thông tin
            if (newCauHoi.tags && newCauHoi.tags.length)
                newCauHoi.fields.tags = newCauHoi.tags.join(", ");
            if (newCauHoi.phan_loai.loai_tb && newCauHoi.phan_loai.loai_tb.length)
                newCauHoi.fields.loai_tb = newCauHoi.phan_loai.loai_tb.join(", ");
            if (newCauHoi.phan_loai.bac_thi && newCauHoi.phan_loai.bac_thi.length)
                newCauHoi.fields.bac_thi = newCauHoi.phan_loai.bac_thi.join(", ");

            let correct_answers = [],
                alphabelts = ['A', 'B', 'C', 'D', 'E', 'F'];

            _.each(_.where(newCauHoi.noi_dung.lua_chons, { isCorrect: true }), (item) => {
                correct_answers.push(alphabelts[item.order]);
            });

            newCauHoi.fields.correctAnswer = correct_answers.join(", ");

            // Tạo các trường mới hỗ trợ xuất thông tin từ Excel - Đáp án A, B, C bố trí theo chiều ngang.
            newCauHoi.fields.lua_chons = {};
            _.each(newCauHoi.noi_dung.lua_chons, (item, index) => {
                newCauHoi.fields.lua_chons[alphabelts[index]] = item.tieu_de;
            });

            // Khởi tạo metadata câu hỏi 
            if (!newCauHoi.metadata)
                newCauHoi.metadata = {};
            this.buildMetadata('buildNew', newCauHoi.metadata);

            // Tạo các trường mới ghi chú về thời gian từ dạng Date về dạng String, hỗ trợ nhóm dữ liệu trong Grid
            newCauHoi.fields.thoi_gians = {},
            newCauHoi.fields.thoi_gians.ngay_tao_string = kendo.toString(newCauHoi.metadata.ngay_tao, 'yyyy-MM-dd');            
        },

        // ***************************************************
        // HELPERS - DATAHELPERS
        // ***************************************************

        initNewDataHelperParams: function(scope, section, field, subject) {
            if (section === 'cauhois') {
                scope.newDataHelper = {
                    // Các giá trị cho phép: cauhois, suachuas, ...
                    section: 'cauhois',
                    // Các giá trị cho phép: nhom_tbs, loai_tbs, tags, bac_this, ...
                    field: field,
                    data: {
                        // Các giá trị cho phép: thiet_bi_nang, xe_may, tau_thuyen, tram_nguon, tat_ca
                        subject: subject,
                        group: 'Nội dung',
                        text: ''
                    }
                };
            }            
        },

        validateDataHelperForm: function(datahelper, section) {
            let error = {};
            if (!datahelper.section) {
                error.message = "Chưa có thông tin về phân lớp section.";
                return error;
            }
            if (!datahelper.field) {
                error.message = "Chưa có thông tin về phân lớp field.";
                return error;
            }
            if (!datahelper.data.subject) {
                error.message = "Chưa có thông tin về data subject.";
                return error;
            }
            if (section==='cauhois') {
                if (!datahelper.data.value.group) {
                    error.message = "Xin hãy chắc rằng giá trị bạn nhập vào hợp lệ. Chưa có thông tin về trường group.";
                    return error;
                }
                if (!datahelper.data.value.text) {
                    error.message = "Xin hãy chắc rằng giá trị bạn nhập vào hợp lệ. Chưa có thông tin về trường text.";
                    return error;
                }
            }          

            return;
        },

        buildDataHelper: function() {
        },

        buildNewDataHelper: function() {    
        },

        // ***************************************************
        // HELPERS - SUACHUAS
        // ***************************************************

        initNewSuaChuaParams: function(scope) {
            scope.newSuaChua = {
                phan_loai: {
                    nhom_tb: {
                        ten: "Xe - máy",
                        ma: "xe_may"
                    },
                    loai_tb: {
                        ma: ''
                    },
                    loai_sua_chua: {
                        ma: ''
                    }
                },
                ma_tb: {
                    ma_tb: ''
                },
                dia_diem: {
                    dia_diem: 'Nhà xưởng sửa chữa',
                    khu_vuc: {
                        ma: ''
                    },
                    vi_tri: {
                        ma: ''
                    }
                },
                noi_dung: {
                    noi_dung: ''
                },
                thoi_gian: {
                    bat_dau: new Date()
                },
                thong_ke: {
                    thoi_gian: {}
                },
                tags: [],
                trang_thai: {
                    ten: 'Đang sửa chữa',
                    ma: 'dang_sua_chua'
                },
                isPublic: true,
                isArchived: false
            };
        },

        validateSuaChuaForm: function(suachua) {
            let error = {};
            if (!suachua.phan_loai.nhom_tb.ten) {
                error.message = "Chưa có thông tin về phân nhóm phương tiện.";
                return error;
            }
            if (!suachua.phan_loai.loai_tb.ten) {
                error.message = "Chưa có thông tin về phân loại phương tiện.";
                return error;
            }
            if (!suachua.ma_tb.ma_tb) {
                error.message = "Chưa có thông tin về mã phương tiện.";
                return error;
            } 
            if (!suachua.phan_loai.loai_sua_chua.ten) {
                error.message = "Chưa có thông tin về phân loại sửa chữa.";
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
            if (!suachua.noi_dung.noi_dung) {
                error.message = "Chưa có thông tin về nội dung sửa chữa.";
                return error;
            }
            if (!suachua.thoi_gian.bat_dau) {
                error.message = "Chưa có thông tin về thời gian bắt đầu sửa chữa.";
                return error;
            }
            if (!suachua.thoi_gian.sua_chua_du_kien) {
                error.message = "Chưa có thông tin về thời gian kết thúc theo dự kiến.";
                return error;
            }
            if (!suachua.trang_thai.ma) {
                error.message = "Chưa có thông tin trạng thái sửa chữa.";
                return error;
            }
            return;
        },

        buildSuaChua: function(suachua) {
            
            // Tính toán các thông số thống kê
            suachua.thong_ke.tags_field = suachua.tags.join(", ");
            suachua.thong_ke.thoi_gian.ngay_ket_thuc = kendo.toString(suachua.thoi_gian.bat_dau, "yyyy-MM-dd", "vi-VN");
            suachua.thong_ke.thoi_gian.thoi_gian_sua_chua = moment.duration(moment(suachua.thoi_gian.ket_thuc).diff(moment(suachua.thoi_gian.bat_dau))).asHours(); 

            // Khởi tạo metadata câu hỏi 
            if (!suachua.metadata)
                suachua.metadata = {};
            this.buildMetadata('build', suachua.metadata);
        },

        buildNewSuaChua: function(newSuaChua) {            
            // Tính toán thời gian kết thúc dự kiến
            newSuaChua.thoi_gian.ket_thuc_du_kien = moment(newSuaChua.thoi_gian.bat_dau).add(newSuaChua.thoi_gian.sua_chua_du_kien, 'hours').toDate();

            // Tính toán các thông số thống kê
            
            newSuaChua.thong_ke.thoi_gian.ngay_bat_dau = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy-MM-dd", "vi-VN");
            newSuaChua.thong_ke.thoi_gian.thang_sua_chua = kendo.toString(newSuaChua.thoi_gian.bat_dau, "MM", "vi-VN");
            newSuaChua.thong_ke.thoi_gian.nam_sua_chua = kendo.toString(newSuaChua.thoi_gian.bat_dau, "yyyy", "vi-VN");
            newSuaChua.thong_ke.tags_field = newSuaChua.tags.join(", ");

            // Khởi tạo metadata câu hỏi 
            if (!newSuaChua.metadata)
                newSuaChua.metadata = {};
            this.buildMetadata('buildNew', newSuaChua.metadata);           
        },       

        resolveUser: function(userId) {
            if (!userId) {
                return '';
            }
            let user = Meteor.users.findOne(userId);
            if (!user) {
                return '[Vô danh]';
            }
            if (Meteor.userId() !== null && user._id === Meteor.userId()) {
                return 'Tôi';
            }
            return user;
        },
        getUserById: (id) => {
            let user = Meteor.users.findOne(id);
            if (!!user)
                return user;
            return;
        },
        validateUser: (condition) => {
            let error = {};
            if (Meteor.userId()) {
                switch (condition) {
                    case 'can_update_admin_users':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_admin_users':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_datahelpers':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_datahelpers':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_view_cau_hoi':
                        if (!Roles.userIsInRole(Meteor.userId(), ["admin", "super-manager", "quanly-cauhois", "xem-cauhois"], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_cau_hoi':
                        if (!Roles.userIsInRole(Meteor.userId(), ["admin", "super-manager", "quanly-cauhois"], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_cau_hoi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-cauhois'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_view_sua_chua':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-suachuas', 'xem-suachuas'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_sua_chua':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-suachuas', 'support-suachuas'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_sua_chua':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-suachuas'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_uigrid_state':
                        if (!Meteor.user())
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_uigrid_state':
                        if (!Meteor.user())
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_update_role':
                        if (!Roles.userIsInRole(Meteor.userId(), ['manage-users', 'support-staff'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_force_reset_password':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_user':
                        if (!Roles.userIsInRole(Meteor.userId(), ['manage-users', 'support-staff'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    default:
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                }
            } else
                error.message = 'Bạn cần đăng nhập để thực hiện chức năng này.';

            return error;
        }
    }

    return factory;

});
