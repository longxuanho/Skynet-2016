angular.module('angular-skynet').factory('skynetHelpers', function($meteor, $rootScope) {
    var factory = {};

    
    // ***************************************************
    // DATA
    // ***************************************************
    
    factory.data = {
        states: {
            master: 'nhoms',
            login: 'login',
            notifyCheckEmail: 'notify_checkEmail',
            notifyResetMatKhau: 'notify_resetMatKhau'
        },
        ui: {
            searchFields: {
                nhoms: [{
                    value: 'ten',
                    name: 'Tên nhóm'
                }, {
                    value: 'ma',
                    name: 'Mã nhóm'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                chungloais: [{
                    value: 'ten',
                    name: 'Tên chủng loại'
                }, {
                    value: 'ma',
                    name: 'Mã chủng loại'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                loais: [{
                    value: 'ten',
                    name: 'Tên loại'
                }, {
                    value: 'ma',
                    name: 'Mã loại'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                quocgias: [{
                    value: 'ten',
                    name: 'Tên quốc gia'
                }, {
                    value: 'ma',
                    name: 'Mã quốc gia'
                }, {
                    value: 'name',
                    name: 'Country name'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                hangsanxuats: [{
                    value: 'ten',
                    name: 'Hãng sản xuất'
                }, {
                    value: 'ma',
                    name: 'Mã hãng sản xuất'
                }, {
                    value: 'quoc_gia.ten',
                    name: 'Quốc gia'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                modelthietbis: [{
                    value: 'ten',
                    name: 'Tên model'
                }, {
                    value: 'ma',
                    name: 'Mã model'
                }, {
                    value: 'hang_san_xuat.ten',
                    name: 'Hãng sản xuất'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                donvis: [{
                    value: 'ten',
                    name: 'Tên đơn vị'
                }, {
                    value: 'ten_quoc_te',
                    name: 'Tên đơn vị (Eng)'
                }, {
                    value: 'ma',
                    name: 'Mã đơn vị'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                loaithongsokythuats: [{
                    value: 'ten',
                    name: 'Tên Thông Số'
                }, {
                    value: 'don_vi',
                    name: 'Đơn vị tính'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                diabans: [{
                    value: 'ten',
                    name: 'Tên địa bàn'
                }, {
                    value: 'ma',
                    name: 'Mã địa bàn'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                suachuas: [{
                    value: 'ten',
                    name: 'Nội dung'
                }, {
                    value: 'thiet_bi.ma_tb_field',
                    name: 'Mã thiết bị'
                }, {
                    value: 'thiet_bi.phan_loai_field',
                    name: 'Phân loại'
                }, {
                    value: 'trang_thai',
                    name: 'Trạng thái'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'metadata.nguoi_tao_field',
                    name: 'Người tạo'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                thietbis: [{
                    value: 'ma_tb.ma_tb_field',
                    name: 'Mã Thiết Bị'
                }, {
                    value: 'ho_so_tb.thong_tin_chung.ho_so_field',
                    name: 'Dòng Thiết Bị'
                }, {
                    value: 'don_vi_field',
                    name: 'Quản lý/Sở hữu'
                }, {
                    value: 'dia_ban_hoat_dong_field',
                    name: 'Địa bàn hoạt động'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }],
                hosoluutrus: [{
                    value: 'ten',
                    name: 'Tiêu Đề'
                }, {
                    value: 'noi_dung',
                    name: 'Nội Dung'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'metadata.search_field',
                    name: 'Tất cả'
                }]
            },
            display: {
                diabans: {
                    details: {
                        states: {
                            tinh_thanh: false,
                            dia_phuong: false,
                        },
                        setState: function(target, value) {
                            if (_.isString(target))
                                this.states[target] = value;
                            if (_.isArray(target))
                                _.each(target, (item) => {
                                    this.states[item] = value;
                                });
                        },
                        toggleState: function(target) {
                            if (_.isString(target))
                                this.states[target] = !this.states[target];
                            if (_.isArray(target))
                                _.each(target, (item) => {
                                    this.states[item] = !this.states[item];
                                });
                        }
                    }
                },
                thietbis: {
                    add_new: {
                        count: {
                            numOfNewLyLichThietBis: 0,
                            numOfNewRefImgs: 0,
                            numOfNewThongSoKyThuats: 0,
                            numOfNewDonViQuanLies: 1,
                            numOfNewDonViSoHuus: 1,
                        },
                        array: {
                            numOfNewLyLichThietBisArray: [],
                            numOfNewRefImgsArray: [],
                            numOfNewThongSoKyThuatsArray: [],
                            numOfNewDonViQuanLiesArray: [],
                            numOfNewDonViSoHuusArray: []
                        },
                        limit: {
                            max: {
                                numOfLyLichThietBis: 5,
                                numOfRefImgs: 5,
                                numOfThongSoKyThuats: 30,
                                numOfDonViQuanLies: 3,
                                numOfDonViSoHuus: 3
                            },
                            min: {
                                numOfLyLichThietBis: 0,
                                numOfRefImgs: 0,
                                numOfThongSoKyThuats: 0,
                                numOfDonViQuanLies: 1,
                                numOfDonViSoHuus: 1
                            }
                        },
                        resolveDataArray: function() {
                            this.array.numOfNewLyLichThietBisArray = _.range(this.count.numOfNewLyLichThietBis);
                            this.array.numOfNewRefImgsArray = _.range(this.count.numOfNewRefImgs);
                            this.array.numOfNewThongSoKyThuatsArray = _.range(this.count.numOfNewThongSoKyThuats);
                            this.array.numOfNewDonViQuanLiesArray = _.range(this.count.numOfNewDonViQuanLies);
                            this.array.numOfNewDonViSoHuusArray = _.range(this.count.numOfNewDonViSoHuus);
                        },
                        resetDataCount: function() {
                            this.count.numOfNewLyLichThietBis = 0;
                            this.count.numOfNewRefImgs = 0;
                            this.count.numOfNewThongSoKyThuats = 0;
                            this.count.numOfNewDonViQuanLies = 1;
                            this.count.numOfNewDonViSoHuus = 1;
                        },
                        initNewUiParams: function() {
                            this.resetDataCount();
                            this.resolveDataArray();
                        },
                        isUseTemplate: false,
                    },
                    details: {
                        isOnSaving: false,
                        limit: {
                            max: {
                                numOfLyLichThietBis: 5,
                                numOfRefImgs: 5,
                                numOfThongSoKyThuats: 30,
                                numOfDonViQuanLies: 3,
                                numOfDonViSoHuus: 3
                            },
                            min: {
                                numOfLyLichThietBis: 0,
                                numOfRefImgs: 0,
                                numOfThongSoKyThuats: 0,
                                numOfDonViQuanLies: 1,
                                numOfDonViSoHuus: 1
                            }
                        },
                    }
                }
            }
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
                source.nguoi_cap_nhat_cuoi_field = '';
                if (Meteor.user().profile && Meteor.user().profile.name)
                    source.nguoi_cap_nhat_cuoi_field += Meteor.user().profile.name;
                source.nguoi_cap_nhat_cuoi_field += ':' + Meteor.user().emails[0].address;
            }
            if (buildType === 'buildNew') {
                source.ngay_tao = new Date();
                source.nguoi_tao = Meteor.userId();
                source.nguoi_tao_field = '';
                if (Meteor.user().profile && Meteor.user().profile.name)
                    source.nguoi_tao_field += Meteor.user().profile.name;
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
        // HELPERS - NHOMS
        // ***************************************************
        initNewNhomParams: function(scope) {
            scope.newNhom = {
                isPublic: true,
                isArchived: false,
                metadata: {}
            };
        },
        validateNhomForm: function(nhom) {
            let error = {};
            if (!nhom.ten) {
                error.message = "Chưa có thông tin về tên nhóm thiết bị.";
                return error;
            }
            if (!nhom.ma) {
                error.message = "Chưa có thông tin về mã nhóm.";
                return error;
            }
            return;
        },
        buildNhom: function(nhom) {
            if (!nhom.metadata)
                nhom.metadata = {};
            this.buildMetadata('build', nhom.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao_field']];
            nhom.metadata.search_field = this.resolveField(search_fields, nhom);
        },
        buildNewNhom: function(newNhom) {
            if (!newNhom.metadata)
                newNhom.metadata = {};
            this.buildMetadata('buildNew', newNhom.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao_field']];
            newNhom.metadata.search_field = this.resolveField(search_fields, newNhom);
        },

        // ***************************************************
        // HELPERS - CHUNGLOAIS
        // ***************************************************
        initNewChungLoaiParams: function(scope) {
            scope.newChungLoai = {
                isPublic: true,
                isArchived: false,
                nhom: {},
                metadata: {}
            };
        },
        validateChungLoaiForm: function(chungloai) {
            let error = {};
            if (!chungloai.ten) {
                error.message = "Chưa có thông tin về tên chủng loại.";
                return error;
            }
            if (!chungloai.nhom.keyId) {
                error.message = "Chưa có thông tin về nhóm thiết bị.";
                return error;
            }
            if (!chungloai.ma) {
                error.message = "Chưa có thông tin về mã chủng loại.";
                return error;
            }
            return;
        },
        buildChungLoai: function(chungloai) {
            if (!chungloai.metadata)
                chungloai.metadata = {};
            this.buildMetadata('build', chungloai.metadata);
            if (chungloai.nhom.keyId) {
                let item = Nhoms.findOne({
                    _id: chungloai.nhom.keyId
                });
                if (item) {
                    chungloai.nhom.ten = item.ten;
                    chungloai.nhom.ma = item.ma;
                    chungloai.nhom.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['nhom', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            chungloai.metadata.search_field = this.resolveField(search_fields, chungloai);
        },
        buildNewChungLoai: function(newChungLoai) {
            if (!newChungLoai.metadata)
                newChungLoai.metadata = {};
            this.buildMetadata('buildNew', newChungLoai.metadata);
            if (newChungLoai.nhom.keyId) {
                let item = Nhoms.findOne({
                    _id: newChungLoai.nhom.keyId
                });
                if (item) {
                    newChungLoai.nhom.ten = item.ten;
                    newChungLoai.nhom.ma = item.ma;
                    newChungLoai.nhom.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['nhom', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newChungLoai.metadata.search_field = this.resolveField(search_fields, newChungLoai);
        },

        // ***************************************************
        // HELPERS - LOAIS
        // ***************************************************
        initNewLoaiParams: function(scope) {
            scope.newLoai = {
                isPublic: true,
                isArchived: false,
                nhom: {},
                chung_loai: {},
                metadata: {}
            };
        },
        validateLoaiForm: function(loai) {
            let error = {};
            if (!loai.ten) {
                error.message = "Chưa có thông tin về tên loại thiết bị.";
                return error;
            }
            if (!loai.nhom.keyId) {
                error.message = "Chưa có thông tin về Nhóm thiết bị.";
                return error;
            }
            if (!loai.chung_loai.keyId) {
                error.message = "Chưa có thông tin về chủng loại thiết bị.";
                return error;
            }
            
            if (!loai.ma) {
                error.message = "Chưa có thông tin về mã loại thiết bị.";
                return error;
            }
            return;
        },
        buildLoai: function(loai) {
            if (!loai.metadata)
                loai.metadata = {};
            this.buildMetadata('build', loai.metadata);
            if (loai.nhom.keyId) {
                let item = Nhoms.findOne({
                    _id: loai.nhom.keyId
                });
                if (item) {
                    loai.nhom.ten = item.ten;
                    loai.nhom.ma = item.ma;
                    loai.nhom.icon = item.icon;
                }
            }
            if (loai.chung_loai.keyId) {
                let item = ChungLoais.findOne({
                    _id: loai.chung_loai.keyId
                });
                if (item) {
                    loai.chung_loai.ten = item.ten;
                    loai.chung_loai.ma = item.ma;
                    loai.chung_loai.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['nhom', 'ten'],
                ['chung_loai', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            loai.metadata.search_field = this.resolveField(search_fields, loai);
        },
        buildNewLoai: function(newLoai) {
            if (!newLoai.metadata)
                newLoai.metadata = {};
            this.buildMetadata('buildNew', newLoai.metadata);
            if (newLoai.nhom.keyId) {
                let item = Nhoms.findOne({
                    _id: newLoai.nhom.keyId
                });
                if (item) {
                    newLoai.nhom.ten = item.ten;
                    newLoai.nhom.ma = item.ma;
                    newLoai.nhom.icon = item.icon;
                }
            }
            if (newLoai.chung_loai.keyId) {
                let item = ChungLoais.findOne({
                    _id: newLoai.chung_loai.keyId
                });
                if (item) {
                    newLoai.chung_loai.ten = item.ten;
                    newLoai.chung_loai.ma = item.ma;
                    newLoai.chung_loai.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['nhom', 'ten'],
                ['chung_loai', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newLoai.metadata.search_field = this.resolveField(search_fields, newLoai);
        },

        // ***************************************************
        // HELPERS - QUOCGIAS
        // ***************************************************
        initNewQuocGiaParams: function(scope) {
            scope.newQuocGia = {
                isPublic: true,
                isArchived: false,
                metadata: {}
            };
        },
        validateQuocGiaForm: function(quocgia) {
            let error = {};
            if (!quocgia.ten) {
                error.message = "Chưa có thông tin về tên quốc gia.";
                return error;
            }
            if (!quocgia.name) {
                error.message = "Chưa có thông tin về tên quốc gia (English).";
                return error;
            }
            if (!quocgia.ma) {
                error.message = "Chưa có thông tin về mã quốc gia.";
                return error;
            }
            return;
        },
        buildQuocGia: function(quocgia) {
            if (!quocgia.metadata)
                quocgia.metadata = {};
            this.buildMetadata('build', quocgia.metadata);
            let search_fields = ['_id', 'ten', 'name', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            quocgia.metadata.search_field = this.resolveField(search_fields, quocgia);
        },
        buildNewQuocGia: function(newQuocGia) {
            if (!newQuocGia.metadata)
                newQuocGia.metadata = {};
            this.buildMetadata('buildNew', newQuocGia.metadata);
            let search_fields = ['_id', 'ten', 'name', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newQuocGia.metadata.search_field = this.resolveField(search_fields, newQuocGia);
        },

        // ***************************************************
        // HELPERS - HANGSANXUATS
        // ***************************************************
        initNewHangSanXuatParams: function(scope) {
            scope.newHangSanXuat = {
                isPublic: true,
                isArchived: false,
                quoc_gia: {},
                metadata: {}
            };
        },
        validateHangSanXuatForm: function(hangsanxuat) {
            let error = {};
            if (!hangsanxuat.ten) {
                error.message = "Chưa có thông tin về tên hãng sản xuất.";
                return error;
            }
            if (!hangsanxuat.quoc_gia.keyId) {
                error.message = "Chưa có thông tin về quốc gia.";
                return error;
            }            
            if (!hangsanxuat.ma) {
                error.message = "Chưa có thông tin về mã hãng sản xuất.";
                return error;
            }
            return;
        },
        buildHangSanXuat: function(hangsanxuat) {
            if (!hangsanxuat.metadata)
                hangsanxuat.metadata = {};
            this.buildMetadata('build', hangsanxuat.metadata);
            if (hangsanxuat.quoc_gia.keyId) {
                let item = QuocGias.findOne({
                    _id: hangsanxuat.quoc_gia.keyId
                });
                if (item) {
                    hangsanxuat.quoc_gia.ten = item.ten;
                    hangsanxuat.quoc_gia.name = item.name;
                    hangsanxuat.quoc_gia.ma = item.ma;
                    hangsanxuat.quoc_gia.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['quoc_gia', 'ten'],
                ['quoc_gia', 'name'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            hangsanxuat.metadata.search_field = this.resolveField(search_fields, hangsanxuat);
        },
        buildNewHangSanXuat: function(newHangSanXuat) {
            if (!newHangSanXuat.metadata)
                newHangSanXuat.metadata = {};
            this.buildMetadata('buildNew', newHangSanXuat.metadata);
            if (newHangSanXuat.quoc_gia.keyId) {
                let item = QuocGias.findOne({
                    _id: newHangSanXuat.quoc_gia.keyId
                });
                if (item) {
                    newHangSanXuat.quoc_gia.ten = item.ten;
                    newHangSanXuat.quoc_gia.name = item.name;
                    newHangSanXuat.quoc_gia.ma = item.ma;
                    newHangSanXuat.quoc_gia.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['quoc_gia', 'ten'],
                ['quoc_gia', 'name'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newHangSanXuat.metadata.search_field = this.resolveField(search_fields, newHangSanXuat);
        },

        // ***************************************************
        // HELPERS - MODELTHIETBIS
        // ***************************************************
        initNewModelThietBiParams: function(scope) {
            scope.newModelThietBi = {
                isPublic: true,
                isArchived: false,
                hang_san_xuat: {},
                metadata: {}
            };
        },
        validateModelThietBiForm: function(modelthietbi) {
            let error = {};
            if (!modelthietbi.ten) {
                error.message = "Chưa có thông tin về tên model thiết bị.";
                return error;
            }
            if (!modelthietbi.hang_san_xuat.keyId) {
                error.message = "Chưa có thông tin về hãng sản xuất.";
                return error;
            }
            if (!modelthietbi.ma) {
                error.message = "Chưa có thông tin về mã model thiết bị.";
                return error;
            }
            return;
        },
        buildModelThietBi: function(modelthietbi) {
            if (!modelthietbi.metadata)
                modelthietbi.metadata = {};
            this.buildMetadata('build', modelthietbi.metadata);
            if (modelthietbi.hang_san_xuat.keyId) {
                let item = HangSanXuats.findOne({
                    _id: modelthietbi.hang_san_xuat.keyId
                });
                if (item) {
                    modelthietbi.hang_san_xuat.ten = item.ten;
                    modelthietbi.hang_san_xuat.ma = item.ma;
                    modelthietbi.hang_san_xuat.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['hang_san_xuat', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            modelthietbi.metadata.search_field = this.resolveField(search_fields, modelthietbi);
        },
        buildNewModelThietBi: function(newModelThietBi) {
            if (!newModelThietBi.metadata)
                newModelThietBi.metadata = {};
            this.buildMetadata('buildNew', newModelThietBi.metadata);
            if (newModelThietBi.hang_san_xuat.keyId) {
                let item = HangSanXuats.findOne({
                    _id: newModelThietBi.hang_san_xuat.keyId
                });
                if (item) {
                    newModelThietBi.hang_san_xuat.ten = item.ten;
                    newModelThietBi.hang_san_xuat.ma = item.ma;
                    newModelThietBi.hang_san_xuat.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['hang_san_xuat', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newModelThietBi.metadata.search_field = this.resolveField(search_fields, newModelThietBi);
        },

        // ***************************************************
        // HELPERS - DONVIS
        // ***************************************************
        initNewDonViParams: function(scope) {
            scope.newDonVi = {
                isPublic: true,
                isArchived: false,
                metadata: {}
            };
        },
        validateDonViForm: function(donvi) {
            let error = {};
            if (!donvi.ten) {
                error.message = "Chưa có thông tin về tên đơn vị.";
                return error;
            }
            if (!donvi.phan_loai) {
                error.message = "Đơn vị mới cần được phân loại.";
                return error;
            }
            if (!donvi.ma) {
                error.message = "Chưa có thông tin về mã đơn vị.";
                return error;
            }            
            return;
        },
        buildDonVi: function(donvi) {
            if (!donvi.metadata)
                donvi.metadata = {};
            this.buildMetadata('build', donvi.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'ten_quoc_te', 'ten_viet_tat', 'mo_ta', ['metadata', 'nguoi_tao_field']];
            donvi.metadata.search_field = this.resolveField(search_fields, donvi);
        },
        buildNewDonVi: function(newDonVi) {
            if (!newDonVi.metadata)
                newDonVi.metadata = {};
            this.buildMetadata('buildNew', newDonVi.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'ten_quoc_te', 'ten_viet_tat', 'mo_ta', ['metadata', 'nguoi_tao_field']];
            newDonVi.metadata.search_field = this.resolveField(search_fields, newDonVi);
        },

        // ***************************************************
        // HELPERS - LOAITHONGSOKYTHUATS
        // ***************************************************
        initNewLoaiThongSoKyThuatParams: function(scope) {
            scope.newLoaiThongSoKyThuat = {
                isPublic: true,
                isArchived: false,
                chung_loai: {},
                metadata: {}
            };
        },
        validateLoaiThongSoKyThuatForm: function(loaithongsokythuat) {
            let error = {};
            if (!loaithongsokythuat.ten) {
                error.message = "Chưa có thông tin về tên thông số kỹ thuật.";
                return error;
            }
            if (!loaithongsokythuat.chung_loai.keyId) {
                error.message = "Chưa có thông tin về chủng loại thiết bị.";
                return error;
            }
            if (!loaithongsokythuat.ma) {
                error.message = "Chưa có thông tin về mã thông số kỹ thuật.";
                return error;
            }
            return;
        },
        buildLoaiThongSoKyThuat: function(loaithongsokythuat) {
            if (!loaithongsokythuat.metadata)
                loaithongsokythuat.metadata = {};
            this.buildMetadata('build', loaithongsokythuat.metadata);
            if (loaithongsokythuat.chung_loai.keyId) {
                let item = ChungLoais.findOne({
                    _id: loaithongsokythuat.chung_loai.keyId
                });
                if (item) {
                    loaithongsokythuat.chung_loai.ten = item.ten;
                    loaithongsokythuat.chung_loai.ma = item.ma;
                    loaithongsokythuat.chung_loai.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['chung_loai', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            loaithongsokythuat.metadata.search_field = this.resolveField(search_fields, loaithongsokythuat);
        },
        buildNewLoaiThongSoKyThuat: function(newLoaiThongSoKyThuat) {
            if (!newLoaiThongSoKyThuat.metadata)
                newLoaiThongSoKyThuat.metadata = {};
            this.buildMetadata('buildNew', newLoaiThongSoKyThuat.metadata);
            if (newLoaiThongSoKyThuat.chung_loai.keyId) {
                let item = ChungLoais.findOne({
                    _id: newLoaiThongSoKyThuat.chung_loai.keyId
                });
                if (item) {
                    newLoaiThongSoKyThuat.chung_loai.ten = item.ten;
                    newLoaiThongSoKyThuat.chung_loai.ma = item.ma;
                    newLoaiThongSoKyThuat.chung_loai.icon = item.icon;
                }
            }
            let search_fields = ['_id', ['chung_loai', 'ten'], 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newLoaiThongSoKyThuat.metadata.search_field = this.resolveField(search_fields, newLoaiThongSoKyThuat);
        },

        // ***************************************************
        // HELPERS - DIABANS
        // ***************************************************
        initNewDiaBanParams: function(scope) {
            scope.newDiaBan = {
                isPublic: true,
                isArchived: false,
                map_data: {
                    location: {},
                    subdepartment: {},
                    department: {}
                },
                metadata: {}
            };
        },
        validateDiaBanForm: function(diaban) {
            let error = {};
            if (!diaban.ten) {
                error.message = "Chưa có thông tin về tên địa bàn hoạt động.";
                return error;
            }
            if (!diaban.mien) {
                error.message = "Chưa có thông tin vùng miền hoạt động.";
                return error;
            }            
            if (!diaban.ma) {
                error.message = "Chưa có thông tin về mã địa bàn.";
                return error;
            }            
            return;
        },
        buildDiaBan: function(diaban) {
            if (!diaban.metadata)
                diaban.metadata = {};
            this.buildMetadata('build', diaban.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'mo_ta', ['map_data', 'location', 'ten'],
                ['map_data', 'subdepartment', 'ten'],
                ['map_data', 'department', 'ten'],
                ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            diaban.metadata.search_field = this.resolveField(search_fields, diaban);
        },
        buildNewDiaBan: function(newDiaBan) {
            if (!newDiaBan.metadata)
                newDiaBan.metadata = {};
            this.buildMetadata('buildNew', newDiaBan.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'mo_ta', ['map_data', 'location', 'ten'],
                ['map_data', 'subdepartment', 'ten'],
                ['map_data', 'department', 'ten'],
                ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newDiaBan.metadata.search_field = this.resolveField(search_fields, newDiaBan);
        },

        // ***************************************************
        // HELPERS - SUACHUAS
        // ***************************************************
        initNewLichSuaChuaParams: function(scope) {
            scope.newLichSuaChua = {
                isPublic: true,
                isArchived: false,
                trang_thai: 'ke_hoach',
                thiet_bi: {
                    ma_tb: {}
                },
                thoi_gian: {},
                metadata: {}
            };
        },
        initUICalendar: function(scope) {
            scope.viewMode = 'calendar';
            scope.setViewMode = function(target) {
                if (target === 'grid') {
                    this.viewMode = 'grid';
                } else {
                    this.viewMode = 'calendar';
                }
            };
            scope.calendar = {
                changeTo: 'Tiếng Việt',
                changeLang: function() {
                    if (this.changeTo === 'Tiếng Việt') {
                        this.config.dayNames = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
                        this.config.dayNamesShort = ["CN", "Th.2", "Th.3", "Th.4", "Th.5", "Th.6", "Th.7"];
                        this.config.lang = 'vi';
                        this.config.buttonText = {
                            today: 'hôm nay',
                            month: 'tháng',
                            week: 'tuần',
                            day: 'ngày'
                        };
                        this.changeTo = 'English';
                    } else {
                        this.config.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        this.config.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        this.config.lang = 'en';
                        this.config.buttonText = {
                            today: 'today',
                            month: 'month',
                            week: 'week',
                            day: 'day'
                        };
                        this.changeTo = 'Tiếng Việt';
                    }
                },
                localEvents: [],
                eventSources: [],
                syncLocalEvents: function(source) {
                    let suachuas = LichSuaChuas.find().fetch();
                    this.localEvents = _.map(suachuas, function(item, key) {
                        return {
                            _id: key + 1,
                            keyId: item._id,
                            title: item.thiet_bi.ma_tb.ma_tb + ': ' + item.ten,
                            start: item.thoi_gian.ngay_bat_dau,
                            allDay: true
                        }
                    });
                    this.eventSources[0] = this.localEvents;
                },
                handleEventClicks: {
                    onEventClick: function(delta, jsEvent, view) {
                        console.log('event: ', delta);
                    },
                    onDrop: function(event, delta, revertFunc, jsEvent, ui, view) {},
                    onResize: function(event, delta, revertFunc, jsEvent, ui, view) {},
                    onChangeView: function(view, calendar) {},
                    onRenderCalendar: function(calendar) {},
                    onRenderEvent: function(event, element, view) {}
                },
                config: {
                    defaultView: 'month',
                    height: 550,
                    editable: false,
                    header: {
                        left: 'prev,next,today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    firstDay: 1,
                    weekNumbers: true,
                    weekNumberCalculation: "ISO",
                    businessHours: {
                        start: '07:00',
                        end: '18:00',
                    },
                    lang: 'en',
                    timeFormat: 'H(:mm)',
                    timezone: 'local',
                    buttonText: {
                        today: 'today',
                        month: 'month',
                        week: 'week',
                        day: 'day'
                    },
                    selectable: true,
                    handleWindowResize: true,
                    eventLimit: true,
                    allDayDefault: true,
                    // eventClick: this.handleEventClicks.onEventClick,
                    // eventDrop: this.handleEventClicks.onDrop,
                    // eventResize: this.handleEventClicks.onResize,
                    // eventRender: this.handleEventClicks.onRenderEvent
                }
            };
            scope.calendar.config.eventClick = scope.calendar.handleEventClicks.onEventClick;
        },
        validateLichSuaChuaForm: function(suachua) {
            let error = {};

            if (!suachua.ten) {
                error.message = "Chưa có thông tin về nội dung sửa chữa.";
                return error;
            }
            if (!suachua.thiet_bi.keyId) {
                error.message = "Chưa có thông tin về mã thiết bị.";
                return error;
            }
            if (!suachua.loai_sua_chua) {
                error.message = "Chưa có thông tin về loại sửa chữa.";
                return error;
            }            
            if (!suachua.thoi_gian.bat_dau) {
                error.message = "Chưa có thông tin về thời gian bắt đầu sửa chữa.";
                return error;
            }
            if (!suachua.trang_thai) {
                error.message = "Chưa có thông tin về trạng thái sửa chữa.";
                return error;
            }
            return;
        },
        buildLichSuaChua: function(lichsuachua) {
            if (!lichsuachua.metadata)
                lichsuachua.metadata = {};
            this.buildMetadata('build', lichsuachua.metadata);
            if (lichsuachua.thiet_bi.keyId) {
                let item = ThietBis.findOne({
                    _id: lichsuachua.thiet_bi.keyId
                });
                if (item) {
                    lichsuachua.thiet_bi.ma_tb = item.ma_tb;

                    let ma_tb_fields = ['ma_tb', 'ma_topx', 'ma_maximo', 'ma_topovn'];
                    newSuaChua.thiet_bi.ma_tb_field = this.resolveField(ma_tb_fields, newSuaChua.thiet_bi.ma_tb);
                }
            }
            let search_fields = ['_id', ['thiet_bi', 'ma_tb_field'], 'ten', 'mo_ta', 'loai_sua_chua', 'trang_thai', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            lichsuachua.metadata.search_field = this.resolveField(search_fields, lichsuachua);
        },
        buildNewLichSuaChua: function(newLichSuaChua) {
            if (!newLichSuaChua.metadata)
                newLichSuaChua.metadata = {};
            this.buildMetadata('buildNew', newLichSuaChua.metadata);
            if (newLichSuaChua.thiet_bi.keyId) {
                let item = ThietBis.findOne({
                    _id: newLichSuaChua.thiet_bi.keyId
                });
                if (item) {
                    newLichSuaChua.thiet_bi.ma_tb = item.ma_tb;

                    let ma_tb_fields = ['ma_tb', 'ma_topx', 'ma_maximo', 'ma_topovn'];
                    newLichSuaChua.thiet_bi.ma_tb_field = this.resolveField(ma_tb_fields, newLichSuaChua.thiet_bi.ma_tb);
                }
            }
            let search_fields = ['_id', ['thiet_bi', 'ma_tb_field'], 'ten', 'mo_ta', 'loai_sua_chua', 'trang_thai', ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newLichSuaChua.metadata.search_field = this.resolveField(search_fields, newLichSuaChua);
        },


        // ***************************************************
        // HELPERS - THIETBIS
        // ***************************************************

        initNewThietBisTemplate: function(scope, isUseTemplate) {
            scope.newThietBisTemplate = {
                ten: Meteor.userId() + '_thietbis_template',
                phan_loai: 'thietbis_template',
                gia_tri: {
                    template: {
                        ma_tb: {},
                        phan_loai: {
                            nhom: {},
                            chung_loai: {},
                            loai: {}
                        },
                        ho_so_tb: {
                            thong_tin_chung: {
                                xuat_xu: {},
                                bao_hanh: {},
                                hang_san_xuat: {},
                                model_tb: {}
                            }
                        },
                        don_vi_quan_ly: {},
                        don_vi_so_huu: {},
                        dia_ban_hoat_dong: {},
                        metadata: {},
                        isPublic: true,
                        isArchived: false,
                        status: 'active'
                    },
                    isUseTemplate: false
                },
                metadata: {}
            };
        },

        initNewThietBiParams: function(scope, template) {
            if (template) {
                scope.newThietBi = angular.copy(template);
            } else {
                scope.newThietBi = {
                    ma_tb: {},
                    phan_loai: {
                        nhom: {},
                        chung_loai: {},
                        loai: {}
                    },
                    ho_so_tb: {
                        thong_tin_chung: {
                            xuat_xu: {},
                            bao_hanh: {},
                            hang_san_xuat: {},
                            model_tb: {}
                        }
                    },
                    don_vi_quan_ly: {},
                    don_vi_so_huu: {},
                    dia_ban_hoat_dong: {},
                    metadata: {},
                    isPublic: true,
                    isArchived: false,
                    status: 'active'
                };
            }
        },
        validateThietBiForm: function(thietbi) {
            let error = {};
            if (!thietbi.ma_tb.ma_tb) {
                error.message = "Chưa có thông tin về mã thiết bị.";
                return error;
            }
            if (!thietbi.phan_loai.nhom.keyId) {
                error.message = "Chưa có thông tin về nhóm thiết bị.";
                return error;
            }
            if (!thietbi.phan_loai.chung_loai.keyId) {
                error.message = "Chưa có thông tin về chủng loại thiết bị.";
                return error;
            }
            if (!thietbi.phan_loai.loai.keyId) {
                error.message = "Chưa có thông tin về loại thiết bị.";
                return error;
            }
            if (!thietbi.don_vi_so_huu.keyId) {
                error.message = "Chưa có thông tin về đơn vị sở hữu.";
                return error;
            }
            if (!thietbi.don_vi_quan_ly.keyId) {
                error.message = "Chưa có thông tin về đơn vị quản lý.";
                return error;
            }            
            if (!thietbi.dia_ban_hoat_dong.keyId) {
                error.message = "Chưa có thông tin về địa bàn hoạt động.";
                return error;
            }
            if (!thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId) {
                error.message = "Chưa có thông tin về tên hãng sản xuất.";
                return error;
            }
            
            return;
        },
        buildThietBi: function(thietbi) {
            if (!thietbi.metadata)
                thietbi.metadata = {};
            this.buildMetadata('build', thietbi.metadata);
            if (thietbi.phan_loai.nhom.keyId) {
                let item = Nhoms.findOne({
                    _id: thietbi.phan_loai.nhom.keyId
                });
                if (item) {
                    thietbi.phan_loai.nhom.ten = item.ten;
                    thietbi.phan_loai.nhom.ma = item.ma;
                    thietbi.phan_loai.nhom.icon = item.icon;
                }
            }
            if (thietbi.phan_loai.chung_loai.keyId) {
                var item = ChungLoais.findOne({
                    _id: thietbi.phan_loai.chung_loai.keyId
                });
                if (item) {
                    thietbi.phan_loai.chung_loai.ten = item.ten;
                    thietbi.phan_loai.chung_loai.ma = item.ma;
                    thietbi.phan_loai.chung_loai.icon = item.icon;
                }
            }
            if (thietbi.phan_loai.loai.keyId) {
                var item = Loais.findOne({
                    _id: thietbi.phan_loai.loai.keyId
                });
                if (item) {
                    thietbi.phan_loai.loai.ten = item.ten;
                    thietbi.phan_loai.loai.ma = item.ma;
                    thietbi.phan_loai.loai.icon = item.icon;
                }
            }
            if (thietbi.ho_so_tb.thong_tin_chung.xuat_xu.keyId) {
                var item = QuocGias.findOne({
                    _id: thietbi.ho_so_tb.thong_tin_chung.xuat_xu.keyId
                });
                if (item) {
                    thietbi.ho_so_tb.thong_tin_chung.xuat_xu.ten = item.ten;
                    thietbi.ho_so_tb.thong_tin_chung.xuat_xu.name = item.name;
                    thietbi.ho_so_tb.thong_tin_chung.xuat_xu.ma = item.ma;
                    thietbi.ho_so_tb.thong_tin_chung.xuat_xu.icon = item.icon;
                }
            }
            if (thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId) {
                var item = HangSanXuats.findOne({
                    _id: thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId
                });
                if (item) {
                    thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.ten = item.ten;
                    thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.ma = item.ma;
                    thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.icon = item.icon;
                    thietbi.ho_so_tb.thong_tin_chung.hang_san_xuat.quoc_gia = {
                        keyId: item.quoc_gia.keyId,
                        ten: item.quoc_gia.ten,
                        name: item.quoc_gia.name,
                        ma: item.quoc_gia.ma,
                        icon: item.quoc_gia.icon
                    };
                }
            }
            if (thietbi.ho_so_tb.thong_tin_chung.model_tb.keyId) {
                var item = ModelThietBis.findOne({
                    _id: thietbi.ho_so_tb.thong_tin_chung.model_tb.keyId
                });
                if (item) {
                    thietbi.ho_so_tb.thong_tin_chung.model_tb.ten = item.ten;
                    thietbi.ho_so_tb.thong_tin_chung.model_tb.ma = item.ma;
                    thietbi.ho_so_tb.thong_tin_chung.model_tb.icon = item.icon;
                }
            }
            if (thietbi.dia_ban_hoat_dong.keyId) {
                var item = DiaBans.findOne({
                    _id: thietbi.dia_ban_hoat_dong.keyId
                });
                if (item) {
                    thietbi.dia_ban_hoat_dong.ten = item.ten;
                    thietbi.dia_ban_hoat_dong.ma = item.ma;
                    thietbi.dia_ban_hoat_dong.dia_phuong = item.dia_phuong;
                    thietbi.dia_ban_hoat_dong.tinh_thanh = item.tinh_thanh;
                    thietbi.dia_ban_hoat_dong.mien = item.mien;
                }
            }
            // if (thietbi.ho_so_tb.ly_lich_tb.length > 0) {
            //     _.each(thietbi.ho_so_tb.ly_lich_tb, function(item) {
            //         if (!item.loai_ho_so) {
            //             thietbi.ho_so_tb.ly_lich_tb = _.without(thietbi.ho_so_tb.ly_lich_tb, item);
            //         }
            //     });
            //     thietbi.ho_so_tb.ly_lich_tb = _.sortBy(thietbi.ho_so_tb.ly_lich_tb, 'loai_ho_so');
            // }
            // if (thietbi.thong_so_ky_thuat.length > 0) {
            //     _.each(thietbi.thong_so_ky_thuat, function(item) {
            //         if (!item.loai_thong_so) {
            //             thietbi.thong_so_ky_thuat = _.without(thietbi.thong_so_ky_thuat, item);
            //         } else {
            //             var tmp = LoaiThongSoKyThuats.findOne({
            //                 _id: item.loai_thong_so.keyId
            //             });
            //             if (tmp) {
            //                 item.loai_thong_so.ten = tmp.ten;
            //                 item.loai_thong_so.ma = tmp.ma;
            //                 item.loai_thong_so.don_vi = tmp.don_vi;
            //                 item.loai_thong_so.mo_ta = tmp.mo_ta;
            //                 item.loai_thong_so.icon = tmp.icon;
            //             }
            //         }
            //     });
            //     thietbi.thong_so_ky_thuat = _.sortBy(thietbi.thong_so_ky_thuat, function(item) {
            //         return item.loai_thong_so.ten;
            //     });
            // }
            // if (thietbi.ho_so_tb.ref_img.length > 0) {
            //     _.each(thietbi.ho_so_tb.ref_img, (item) => {
            //         if (!(item.file_url || item.file_path)) {
            //             thietbi.ho_so_tb.ref_img = _.without(thietbi.ho_so_tb.ref_img, item);
            //         } else {
            //             var tmp = "";
            //             if (item.isLocal)
            //                 tmp = item.file_path;
            //             else
            //                 tmp = item.file_url;
            //             item.filename_original = this.getOriginalFilename(tmp);
            //             item.filename = this.getFilename(tmp);
            //             item.filename_extension = this.getFilenameExtension(tmp);
            //         }
            //     });
            // }
            if (thietbi.don_vi_quan_ly.keyId) {
                let item = DonVis.findOne({
                    _id: thietbi.don_vi_quan_ly.keyId
                });
                if (item) {
                    thietbi.don_vi_quan_ly.ten = item.ten;
                    thietbi.don_vi_quan_ly.ma = item.ma;
                    thietbi.don_vi_quan_ly.ten_viet_tat = item.ten_viet_tat;
                    thietbi.don_vi_quan_ly.ten_quoc_te = item.ten_quoc_te;
                    thietbi.don_vi_quan_ly.phan_loai = item.phan_loai;
                    thietbi.don_vi_quan_ly.icon = item.icon;
                }
            }
            if (thietbi.don_vi_so_huu.keyId) {
                let item = DonVis.findOne({
                    _id: thietbi.don_vi_so_huu.keyId
                });
                if (item) {
                    thietbi.don_vi_so_huu.ten = item.ten;
                    thietbi.don_vi_so_huu.ma = item.ma;
                    thietbi.don_vi_so_huu.ten_viet_tat = item.ten_viet_tat;
                    thietbi.don_vi_so_huu.ten_quoc_te = item.ten_quoc_te;
                    thietbi.don_vi_so_huu.phan_loai = item.phan_loai;
                    thietbi.don_vi_so_huu.icon = item.icon;
                }
            }

            let ma_tb_fields = ['ma_tb', 'ma_topx', 'ma_maximo', 'ma_topovn'];
            thietbi.ma_tb.ma_tb_field = this.resolveField(ma_tb_fields, thietbi.ma_tb);

            let phan_loai_fields = [
                ['nhom', 'keyId'],
                ['nhom', 'ten'],
                ['chung_loai', 'keyId'],
                ['chung_loai', 'ten'],
                ['loai', 'keyId'],
                ['loai', 'ten']
            ];
            thietbi.phan_loai.phan_loai_field = this.resolveField(phan_loai_fields, thietbi.phan_loai);

            let ho_so_tb_fields = ['nam_sx', 'nam_sd', 'so_khung', 'so_may', 'so_giay_dang_ky', 'so_giay_dang_kiem', ['hang_san_xuat', 'ten'],
                ['model_tb', 'ten']
            ];
            thietbi.ho_so_tb.thong_tin_chung.ho_so_tb_field = this.resolveField(ho_so_tb_fields, thietbi.ho_so_tb.thong_tin_chung);

            let dia_ban_hoat_dong_fields = ['ten', 'ma'];
            thietbi.dia_ban_hoat_dong.dia_ban_hoat_dong_field = this.resolveField(dia_ban_hoat_dong_fields, thietbi.dia_ban_hoat_dong);

            let don_vi_fields = [
                ['don_vi_so_huu', 'ten'],
                ['don_vi_so_huu', 'ma'],
                ['don_vi_quan_ly', 'ten'],
                ['don_vi_quan_ly', 'ma']
            ];
            thietbi.don_vi_field = this.resolveField(don_vi_fields, thietbi);

            let search_fields = ['_id', ['ma_tb', 'ma_tb_field'],
                ['ho_so_tb', 'thong_tin_chung', 'ho_so_field'],
                ['dia_ban_hoat_dong', 'dia_ban_hoat_dong_field'],
                ['don_vi_field'],
                ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            thietbi.metadata.search_field = this.resolveField(search_fields, thietbi);
        },
        buildNewThietBi: function(newThietBi) {
            if (!newThietBi.metadata)
                newThietBi.metadata = {};
            this.buildMetadata('buildNew', newThietBi.metadata);

            if (newThietBi.phan_loai.nhom.keyId) {
                let item = Nhoms.findOne({
                    _id: newThietBi.phan_loai.nhom.keyId
                });
                if (item) {
                    newThietBi.phan_loai.nhom.ten = item.ten;
                    newThietBi.phan_loai.nhom.ma = item.ma;
                    newThietBi.phan_loai.nhom.icon = item.icon;
                }
            }
            if (newThietBi.phan_loai.chung_loai.keyId) {
                var item = ChungLoais.findOne({
                    _id: newThietBi.phan_loai.chung_loai.keyId
                });
                if (item) {
                    newThietBi.phan_loai.chung_loai.ten = item.ten;
                    newThietBi.phan_loai.chung_loai.ma = item.ma;
                    newThietBi.phan_loai.chung_loai.icon = item.icon;
                }
            }
            if (newThietBi.phan_loai.loai.keyId) {
                let item = Loais.findOne({
                    _id: newThietBi.phan_loai.loai.keyId
                });
                if (item) {
                    newThietBi.phan_loai.loai.ten = item.ten;
                    newThietBi.phan_loai.loai.ma = item.ma;
                    newThietBi.phan_loai.loai.icon = item.icon;
                }
            }
            if (newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.keyId) {
                let item = QuocGias.findOne({
                    _id: newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.keyId
                });
                if (item) {
                    newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.ten = item.ten;
                    newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.name = item.name;
                    newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.ma = item.ma;
                    newThietBi.ho_so_tb.thong_tin_chung.xuat_xu.icon = item.icon;
                }
            }
            if (newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId) {
                let item = HangSanXuats.findOne({
                    _id: newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.keyId
                });
                if (item) {
                    newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.ten = item.ten;
                    newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.ma = item.ma;
                    newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.icon = item.icon;
                    newThietBi.ho_so_tb.thong_tin_chung.hang_san_xuat.quoc_gia = {
                        keyId: item.quoc_gia.keyId,
                        ten: item.quoc_gia.ten,
                        name: item.quoc_gia.name,
                        ma: item.quoc_gia.ma,
                        icon: item.quoc_gia.icon
                    };
                }
            }
            if (newThietBi.ho_so_tb.thong_tin_chung.model_tb.keyId) {
                let item = ModelThietBis.findOne({
                    _id: newThietBi.ho_so_tb.thong_tin_chung.model_tb.keyId
                });
                if (item) {
                    newThietBi.ho_so_tb.thong_tin_chung.model_tb.ten = item.ten;
                    newThietBi.ho_so_tb.thong_tin_chung.model_tb.ma = item.ma;
                    newThietBi.ho_so_tb.thong_tin_chung.model_tb.icon = item.icon;
                }
            }
            if (newThietBi.dia_ban_hoat_dong.keyId) {
                let item = DiaBans.findOne({
                    _id: newThietBi.dia_ban_hoat_dong.keyId
                });
                if (item) {
                    newThietBi.dia_ban_hoat_dong.ten = item.ten;
                    newThietBi.dia_ban_hoat_dong.ma = item.ma;
                    newThietBi.dia_ban_hoat_dong.dia_phuong = item.dia_phuong;
                    newThietBi.dia_ban_hoat_dong.tinh_thanh = item.tinh_thanh;
                    newThietBi.dia_ban_hoat_dong.mien = item.mien;
                }
            }
            if (newThietBi.don_vi_quan_ly.keyId) {
                let item = DonVis.findOne({
                    _id: newThietBi.don_vi_quan_ly.keyId
                });
                if (item) {
                    newThietBi.don_vi_quan_ly.ten = item.ten;
                    newThietBi.don_vi_quan_ly.ma = item.ma;
                    newThietBi.don_vi_quan_ly.ten_viet_tat = item.ten_viet_tat;
                    newThietBi.don_vi_quan_ly.ten_quoc_te = item.ten_quoc_te;
                    newThietBi.don_vi_quan_ly.phan_loai = item.phan_loai;
                    newThietBi.don_vi_quan_ly.icon = item.icon;
                }
            }
            if (newThietBi.don_vi_so_huu.keyId) {
                let item = DonVis.findOne({
                    _id: newThietBi.don_vi_so_huu.keyId
                });
                if (item) {
                    newThietBi.don_vi_so_huu.ten = item.ten;
                    newThietBi.don_vi_so_huu.ma = item.ma;
                    newThietBi.don_vi_so_huu.ten_viet_tat = item.ten_viet_tat;
                    newThietBi.don_vi_so_huu.ten_quoc_te = item.ten_quoc_te;
                    newThietBi.don_vi_so_huu.phan_loai = item.phan_loai;
                    newThietBi.don_vi_so_huu.icon = item.icon;
                }
            }

            let ma_tb_fields = ['ma_tb', 'ma_topx', 'ma_maximo', 'ma_topovn'];
            newThietBi.ma_tb.ma_tb_field = this.resolveField(ma_tb_fields, newThietBi.ma_tb);

            let phan_loai_fields = [
                ['nhom', 'keyId'],
                ['nhom', 'ten'],
                ['chung_loai', 'keyId'],
                ['chung_loai', 'ten'],
                ['loai', 'keyId'],
                ['loai', 'ten']
            ];
            newThietBi.phan_loai.phan_loai_field = this.resolveField(phan_loai_fields, newThietBi.phan_loai);

            let ho_so_tb_fields = ['nam_sx', 'nam_sd', 'so_khung', 'so_may', 'so_giay_dang_ky', 'so_giay_dang_kiem', ['hang_san_xuat', 'ten'],
                ['model_tb', 'ten']
            ];
            newThietBi.ho_so_tb.thong_tin_chung.ho_so_tb_field = this.resolveField(ho_so_tb_fields, newThietBi.ho_so_tb.thong_tin_chung);

            let dia_ban_hoat_dong_fields = ['ten', 'ma'];
            newThietBi.dia_ban_hoat_dong.dia_ban_hoat_dong_field = this.resolveField(dia_ban_hoat_dong_fields, newThietBi.dia_ban_hoat_dong);

            let don_vi_fields = [
                ['don_vi_so_huu', 'ten'],
                ['don_vi_so_huu', 'ma'],
                ['don_vi_quan_ly', 'ten'],
                ['don_vi_quan_ly', 'ma']
            ];
            newThietBi.don_vi_field = this.resolveField(don_vi_fields, newThietBi);

            let search_fields = ['_id', ['ma_tb', 'ma_tb_field'],
                ['ho_so_tb', 'thong_tin_chung', 'ho_so_field'],
                ['dia_ban_hoat_dong', 'dia_ban_hoat_dong_field'],
                ['don_vi_field'],
                ['metadata', 'nguoi_tao'],
                ['metadata', 'nguoi_tao_field']
            ];
            newThietBi.metadata.search_field = this.resolveField(search_fields, newThietBi);
        },


        // ***************************************************
        // HELPERS - HOSOLUUTRUs
        // ***************************************************

        initNewHoSoLuuTruParams: function(scope) {
            scope.newHoSoLuuTru = {
                file_dinh_kem: [],
                tags: [],
                ngon_ngu: 'tieng_viet',
                don_vi_phat_hanh: 'ky_thuat_vat_tu',
                nguoi_ky: [],
                trang_thai: 'hieu_luc',
                isPublic: true,
                isArchived: false,
                metadata: {}
            };
        },
        validateHoSoLuuTruForm: function(hosoluutru) {
            let error = {};
            if (!hosoluutru.ten) {
                error.message = "Chưa có thông tin về tên hồ sơ lưu trữ.";
                return error;
            }
            if (!hosoluutru.ma) {
                error.message = "Chưa có thông tin về mã hồ sơ lưu trữ.";
                return error;
            }
            if (!hosoluutru.phan_loai) {
                error.message = "Chưa có thông tin phân loại hồ sơ lưu trữ.";
                return error;
            }
            if (!hosoluutru.loai) {
                error.message = "Chưa có thông tin về loại hồ sơ lưu trữ.";
                return error;
            }
            if (!hosoluutru.don_vi_phat_hanh) {
                error.message = "Chưa có thông tin về đơn vị phát hành.";
                return error;
            }
            if (!hosoluutru.ngon_ngu) {
                error.message = "Chưa chọn ngôn ngữ cho hồ sơ lưu.";
                return error;
            }
            return;
        },
        buildHoSoLuuTru: function(hosoluutru) {
            if (!hosoluutru.metadata)
                hosoluutru.metadata = {};
            this.buildMetadata('build', hosoluutru.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao_field']];
            hosoluutru.metadata.search_field = this.resolveField(search_fields, hosoluutru);
        },
        buildNewHoSoLuuTru: function(newHoSoLuuTru) {
            if (!newHoSoLuuTru.metadata)
                newHoSoLuuTru.metadata = {};
            this.buildMetadata('buildNew', newHoSoLuuTru.metadata);
            let search_fields = ['_id', 'ten', 'ma', 'mo_ta', ['metadata', 'nguoi_tao_field']];
            newHoSoLuuTru.metadata.search_field = this.resolveField(search_fields, newHoSoLuuTru);
        },

        // ***************************************************
        // HELPERS - NHANSUS
        // ***************************************************
        initNewNhanSuParams: function(scope) {
            scope.newNhanSu = {
                isPublic: true,
                isArchived: false,
                don_vi: {},
                tieu_su: {
                    que_quan: {},
                    thuong_tru: {},
                    cmnd: {},
                    quoc_tich: "Việt Nam"
                },
                thanh_phan_gia_dinh: [
                    {}
                ],
                hoc_van: {
                    ngoai_ngu: []
                },
                cong_viec: {
                    trang_thai: 'Đang làm việc',
                    to_chuc_bien_che: {},
                    ho_so: {}
                },
                bang_cap: {
                    bang_lai_xe: {},
                    giay_phep_lai_xe_quan_su: {},
                    chung_chi_cau_khung: {}
                },
                thong_tin_lien_he: {
                    nguoi_bao_tin: {},
                    nguoi_bao_lanh: {}
                },
                metadata: {}
            };
        },
        validateNhanSuForm: function(nhansu) {
            let error = {};
            if (!nhansu.ma_nv) {
                error.message = "Chưa có thông tin về mã nhân viên.";
                return error;
            }
            if (!nhansu.tieu_su.ho_ten_dem) {
                error.message = "Chưa có thông tin về họ tên đệm của nhân viên.";
                return error;
            }
            if (!nhansu.tieu_su.ten) {
                error.message = "Chưa có thông tin về tên nhân viên.";
                return error;
            }
            if (!nhansu.tieu_su.gioi_tinh) {
                error.message = "Chưa có thông tin về giới tính.";
                return error;
            }
            if (!nhansu.tieu_su.quoc_tich) {
                error.message = "Chưa có thông tin về quốc tịch.";
                return error;
            }
            if (!nhansu.don_vi.ma) {
                error.message = "Chưa có thông tin về đơn vị quản lý.";
                return error;
            }
            if (!nhansu.cong_viec.trang_thai) {
                error.message = "Chưa có thông tin về trạng thái công việc hiện tại.";
                return error;
            }
            return;
        },
        buildNhanSu: function(nhansu) {
            if (!nhansu.metadata)
                nhansu.metadata = {};
            this.buildMetadata('build', nhansu.metadata);

            if (nhansu.don_vi.keyId) {
                let item = DonVis.findOne({
                    _id: nhansu.don_vi.keyId
                });
                if (item) {
                    nhansu.don_vi.ten = item.ten;
                    nhansu.don_vi.ma = item.ma;
                }
            }

            nhansu.tieu_su.ho_ten = nhansu.tieu_su.ho_ten_dem + ' ' + nhansu.tieu_su.ten;

            if (!_.isEmpty(nhansu.tieu_su.que_quan)) {
                let str = '';
                if (nhansu.tieu_su.que_quan.phuong_xa)
                    str += nhansu.tieu_su.que_quan.phuong_xa + ', ';
                if (nhansu.tieu_su.que_quan.quan_huyen)
                    str += nhansu.tieu_su.que_quan.quan_huyen + ', ';
                if (nhansu.tieu_su.que_quan.tinh_thanh)
                    str += nhansu.tieu_su.que_quan.tinh_thanh + '.';
                nhansu.tieu_su.que_quan.summary = str;
            }

            if (!_.isEmpty(nhansu.tieu_su.thuong_tru)) {
                let str = '';
                if (nhansu.tieu_su.thuong_tru.dia_chi)
                    str += nhansu.tieu_su.thuong_tru.dia_chi + ', ';
                if (nhansu.tieu_su.thuong_tru.phuong_xa)
                    str += nhansu.tieu_su.thuong_tru.phuong_xa + ', ';
                if (nhansu.tieu_su.thuong_tru.quan_huyen)
                    str += nhansu.tieu_su.thuong_tru.quan_huyen + ', ';
                if (nhansu.tieu_su.thuong_tru.tinh_thanh)
                    str += nhansu.tieu_su.thuong_tru.tinh_thanh + '.';
                nhansu.tieu_su.thuong_tru.summary = str;
            }

            nhansu.metadata.search_field = nhansu._id + ' : ' +  nhansu.ma_nv + ' : ' + nhansu.don_vi.ma  + ' : ' + nhansu.tieu_su.ho_ten + ' : ' + latinize(nhansu.tieu_su.ho_ten);
            // + ' : ' + factory.data.utils.latinize(nhansu.tieu_su.ho_ten);
        },
        buildNewNhanSu: function(newNhanSu) {
            if (!newNhanSu.metadata)
                newNhanSu.metadata = {};
            this.buildMetadata('buildNew', newNhanSu.metadata);

            if (newNhanSu.don_vi.keyId) {
                let item = DonVis.findOne({
                    _id: newNhanSu.don_vi.keyId
                });
                if (item) {
                    newNhanSu.don_vi.ten = item.ten;
                    newNhanSu.don_vi.ma = item.ma;
                }
            }

            newNhanSu.tieu_su.ho_ten = newNhanSu.tieu_su.ho_ten_dem + ' ' + newNhanSu.tieu_su.ten;

            if (!_.isEmpty(newNhanSu.tieu_su.que_quan)) {
                let str = '';
                if (newNhanSu.tieu_su.que_quan.phuong_xa)
                    str += newNhanSu.tieu_su.que_quan.phuong_xa + ', ';
                if (newNhanSu.tieu_su.que_quan.quan_huyen)
                    str += newNhanSu.tieu_su.que_quan.quan_huyen + ', ';
                if (newNhanSu.tieu_su.que_quan.tinh_thanh)
                    str += newNhanSu.tieu_su.que_quan.tinh_thanh + '.';
                newNhanSu.tieu_su.que_quan.summary = str;
            }

            if (!_.isEmpty(newNhanSu.tieu_su.thuong_tru)) {
                let str = '';
                if (newNhanSu.tieu_su.thuong_tru.dia_chi)
                    str += newNhanSu.tieu_su.thuong_tru.dia_chi + ', ';
                if (newNhanSu.tieu_su.thuong_tru.phuong_xa)
                    str += newNhanSu.tieu_su.thuong_tru.phuong_xa + ', ';
                if (newNhanSu.tieu_su.thuong_tru.quan_huyen)
                    str += newNhanSu.tieu_su.thuong_tru.quan_huyen + ', ';
                if (newNhanSu.tieu_su.thuong_tru.tinh_thanh)
                    str += newNhanSu.tieu_su.thuong_tru.tinh_thanh + '.';
                newNhanSu.tieu_su.thuong_tru.summary = str;
            }

            newNhanSu.metadata.search_field = newNhanSu.ma_nv + ' : ' +  newNhanSu.don_vi.ma  + ' : ' + newNhanSu.tieu_su.ho_ten + ' : ' + latinize(newNhanSu.tieu_su.ho_ten);
            // + ' : ' + factory.data.utils.latinize(newNhanSu.tieu_su.ho_ten);
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
                    case 'can_upsert_nhom':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_nhom':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_chung_loai':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_chung_loai':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_loai':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_loai':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_quoc_gia':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_quoc_gia':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_phan_loai':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_phan_loai':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_loai_thong_so_ky_thuat':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_loai_thong_so_ky_thuat':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_hang_san_xuat':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_hang_san_xuat':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_model_thiet_bi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_model_thiet_bi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_don_vi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_don_vi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_dia_ban':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_dia_ban':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_thiet_bi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_thiet_bi':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_nhan_su':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'support-staff'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_nhan_su':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'support-staff'], 'sky-project') || !Roles.userIsInRole(Meteor.userId(), ['support-staff'], 'xncg'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_lich_sua_chua':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'manager-xemay', 'manager-tbn', 'manager-tau', 'manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_lich_sua_chua':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'manager-xemay', 'manager-tbn', 'manager-tau', 'manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_ho_so_luu_tru':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'manager-xemay', 'manager-tbn', 'manager-tau', 'manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_ho_so_luu_tru':
                        if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'manager-xemay', 'manager-tbn', 'manager-tau', 'manager'], 'sky-project'))
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
