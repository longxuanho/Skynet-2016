Schemas = {};


// ***************************************************
// SKYDICTIONARY
// ***************************************************

Schemas.DataHelperSchema = new SimpleSchema({
    subject: {
        // Các giá trị cho phép: cauhois, suachuas, ...
        type: String,
    },
    category: {
        // Các giá trị cho phép: nhom_tbs, loai_tbs, tags, bac_this, ...
        type: String, 
    },
    container: {
        type: Object
    },
        'container.ref': {
            // Về lĩnh vực tra cứu để thu hẹp phạm vi truy vấn, ví dụ: thiet_bi_nang, xe_may,...
            type: String,
            optional: true
        },
        'container.group': {
            // Nhóm dữ liệu (nếu có)
            type: String,
            optional: true
        },
        'container.order': {
            // Thứ tự ưu tiên (nếu có)
            type: Number,
            optional: true
        },
        'container.text': {
            // Giá trị hiển thị (bắt buộc)
            type: String
        },
        'container.value': {
            // Mã giá trị (tùy chọn)
            type: Number,
            optional: true
        },
    isPublic: {
        type: Boolean,
        defaultValue: true
    },
    isArchived: {
        type: Boolean,
        defaultValue: false
    },
    metadata: {
        // Các giá trị khóa khuyên dùng: ngay_tao, ngay_cap_nhat_cuoi, nguoi_tao, nguoi_tao_name, nguoi_tao_email,
        // nguoi_tao_field, nguoi_cap_nhat_cuoi, nguoi_cap_nhat_cuoi_name, nguoi_cap_nhat_cuoi_email, nguoi_cap_nhat_cuoi_field
        // và search_field
        type: Object,
        blackbox: true
    }
});

DataHelpers.attachSchema(Schemas.DataHelperSchema);

// ***************************************************
// NOTIFIES
// ***************************************************

Schemas.NotifySchema = new SimpleSchema({
    section: {        
        // Các giá trị cho phép: suachuas, cauhois, ...
        type: String
    },
    category: {
        // Các giá trị cho phép: xuongdvkt-dashboard, ...
        type: String
    },
    
    subject: {
        // Các giá trị cho phép: hero-content, ...
        type: String
    },
    content: {
        type: Object
    },
        'content.text': {
            type: String,
            optional: true
        },
        'content.mode': {
            type: String
        }
});

Notifies.attachSchema(Schemas.NotifySchema);

// ***************************************************
// SKYLOGS
// ***************************************************

Schemas.SkyLogSchema = new SimpleSchema({
    subject: {
        // Các giá trị cho phép: cauhois, suachuas, thietbis, ...
        type: String
    },
    category: {
        // Các giá trị cho phép. VD với subject cauhois -> ky_thuat / an_toan / ...
        type: String
    },
    section: {
        // Các giá trị cho phép. VD với section ky_thuat -> Thiết bị nâng / Xe - máy / ...
        type: String
    },
    action: {
        // Các giá trị chp phép: Tạo mới, Cập nhật, Gỡ bỏ, Xóa vĩnh viễn
        type: String
    },
    user: {
        type: Object
    },
        'user.userId': {
            type: String
        },
        'user.userName': {
            type: String,
            optional: true
        },
        'user.userEmail': {
            type: String
        },
    target: {
        type: Object,
        optional: true
    },
        'target.keyId': {
            type: String,
            optional: true
        },
        'target.field': {
            type: String,
            optional: true
        },
        'target.desc': {
            type: String,
            optional: true
        },
        'target.ref': {
            type: String,
            optional: true
        },
        'target.from': {
            type: String,
            optional: true
        },
        'target.to': {
            type: String,
            optional: true
        },
    when: {
        type: Object
    },
        'when.time': {
            type: Date,
            defaultValue: new Date()
        },
        'when.time_day_str': {
            // Giá trị String của thời gian. VD. 2015-03-01
            type: String,
            optional: true
        },
        'when.time_month_str': {
            // Giá trị String của tháng. VD. 2015-03
            type: String,
            optional: true
        },
        'when.time_year_str': {
            // Giá trị String của năm. VD. 2015
            type: String,
            optional: true
        }
});

SkyLogs.attachSchema(Schemas.SkyLogSchema);

//==================================
// USERS Collection

Schemas.UserProfile = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    phone: {
        type: String,
        optional: true
    },
    email_work: {
        type: String,
        optional: true
    },
    avatar: {
        type: Object,
        optional: true,
        blackbox: true
    },
        // 'avatar.keyId': {
        //     type: String,
        //     optional: true
        // },
        // 'avatar.url': {
        //     type: String,
        //     optional: true
        // },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        optional: true
    },
    department: {
        type: String,
        optional: true
    },
    organization: {
        type: String,
        optional: true
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    search_field: {
        type: String,
        optional: true
    }
});

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        // regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    status: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schemas.User);

//==================================
// CAUHOIs Collection

Schemas.CauHoiSchema = new SimpleSchema({
    // Tra cứu thông tin tại Dictionary
    lop: {
        type: Object
    },
        'lop.ten': {
            type: String
        },
        'lop.ma': {
            type: String
        },
    phan_lop: {
        type: Object
    },
        'phan_lop.ten': {
            type: String
        },
        'phan_lop.ma': {
            type: String
        },
    phan_loai: {
        type: Object
    },
        'phan_loai.kieu_cau_hoi': {
            type: Object
        },
            'phan_loai.kieu_cau_hoi.ten': {
                type: String
            },
            'phan_loai.kieu_cau_hoi.ma': {
                type: String
            },
        'phan_loai.nhom_tb': {
            type: Object
        },
            'phan_loai.nhom_tb.ten': {
                type: String
            },
            'phan_loai.nhom_tb.ma': {
                type: String
            },
        'phan_loai.loai_tb': {
            type: [String]
        },
        'phan_loai.nhom_cau_hoi': {
            type: Object
        },
            'phan_loai.nhom_cau_hoi.ten': {
                type: String
            },
            'phan_loai.nhom_cau_hoi.ma': {
                type: String
            },
            'phan_loai.nhom_cau_hoi.ten_ngan': {
                type: String
            },
            'phan_loai.nhom_cau_hoi.mo_ta': {
                type: String,
                optional: true
            },
        'phan_loai.muc_do': {
            type: Object,
            optional: true
        },
            'phan_loai.muc_do.ten': {
                type: String,
                optional: true
            },
            'phan_loai.muc_do.ma': {
                type: String,
                optional: true
            },
        'phan_loai.bac_thi': {
            type: [String],
            optional: true
        },          
    noi_dung: {
        type: Object
    },
        'noi_dung.tieu_de': {
            type: String,
        },
        'noi_dung.lua_chons': {
            type: [Object]
        },
            'noi_dung.lua_chons.$.tieu_de': {
                type: String
            },
            'noi_dung.lua_chons.$.isCorrect': {
                type: Boolean
            },
            'noi_dung.lua_chons.$.order': {
                type: Number,
                optional: true
            },
        'noi_dung.isHasImages': {
            type: Boolean,
            defaultValue: false
        },
        'noi_dung.url_hinh_anhs': {
            type: [String],
            optional: true
        },
        'noi_dung.thong_ke': {
            type: Object
        },
            'noi_dung.thong_ke.numOfLuaChons': {
                type: Number
            },
            'noi_dung.thong_ke.numOfCorrectAnswers': {
                type: Number
            },
            'noi_dung.thong_ke.numOfUrlHinhAnhs': {
                type: Number
            },
    tags: {
        type: [String],
        optional: true
    },
    fields: {
        type: Object,
        optional: true
    },
        'fields.tags': {
            type: String,
            optional: true   
        },
        'fields.loai_tb': {
            type: String,
            optional: true   
        },
        'fields.bac_thi': {
            type: String,
            optional: true   
        },
        'fields.correctAnswer': {
            type: String,
            optional: true
        },
        'fields.lua_chons': {
            type: Object,
            optional: true,
            blackbox: true
        },
        'fields.thoi_gians': {
            type: Object,
            optional: true,
            blackbox: true
        },
    mo_ta: {
        type: String,
        optional: true
    },
    ghi_chu: {
        type: String,
        optional: true
    },
    metadata: {
        type: Object,
        optional: true,
        label: "Metadata"
    },
        'metadata.ngay_tao': {
            type: Date,
            label: "Ngày tạo"
        },
        'metadata.ngay_cap_nhat_cuoi': {
            type: Date,
            label: "Ngày cập nhật cuối",
            optional: true
        },
        'metadata.nguoi_tao': {
            type: String,
            label: "Người tạo"
        },
        'metadata.nguoi_tao_name': {
            type: String,
            optional: true
        },
        'metadata.nguoi_tao_email': {
            type: String,
            optional: true
        },
        'metadata.nguoi_tao_field': {
            type: String,
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi': {
            type: String,
            label: "Người cập nhật cuối",
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi_name': {
            type: String,
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi_email': {
            type: String,
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi_field': {
            type: String,
            optional: true
        },
        'metadata.search_field': {
            type: String,
            optional: true
        },
    isPublic: {
        type: Boolean,
        defaultValue: true
    },
    isArchived: {
        type: Boolean,
        defaultValue: false
    },
    isReserveOrder: {
        type: Boolean,
        defaultValue: false
    },
    // Các trạng thái của phương tiện: Bản thảo và Hoàn thành.
    status: {
        type: String,
        allowedValues: ['Draft', 'Active'],
    }
});

CauHois.attachSchema(Schemas.CauHoiSchema);

//==================================
// USERS Custom Settings

Schemas.UserSettingSchema = new SimpleSchema({
    ten: {
        type: String,
        label: "Tên Cấu Hình"
    },
    phan_loai: {
        type: String,
        allowedValues: ['uigrid_state', 'thietbis_template', 'kendo_grid', 'thietbis_grid_config_data_skynet', 'thongsokythuats_grid_config_data_skynet', 'cauhois_grid_config_data_skynet', 'suachuas_grid_config_data_skynet'],
        label: "Phân Loại"
    },
    user: {
        type: Object
    },
        'user.keyId': {
            type: String
        },
        'user.email': {
            type: String
        },
        'user.profileName': {
            type: String,
            optional: true
        },
    mo_ta: {
        type: String,
        optional: true,
        label: "Mô tả"
    },
    gia_tri: {
        type: String,   // Sử dụng toJSON để tuyến tính giá trị này
        label: "Giá trị"
    },
    order: {
        type: Number,
        optional: true,
        label: "Mức ưu tiên"
    },
    ghi_chu: {
        type: String,
        optional: true,
        label: "Ghi chú"
    },
    icon: {
        type: String,
        label: "Icon",
        optional: true
    },
    metadata: {
        type: Object,
        label: "Metadata",
        blackbox: true
    },
    isPublic: {
        type: Boolean,
        label: "Công khai",
        defaultValue: false
    }
});

UserSettings.attachSchema(Schemas.UserSettingSchema);


//==================================
// SUACHUAs Collections

Schemas.SuaChuaSchema = new SimpleSchema({
    phan_loai: {
        type: Object
    },
        // Nhóm thiết bị: 'Thiết bị nâng', 'Xe - Máy'
        'phan_loai.nhom_tb': {
            type: String
        },
        'phan_loai.loai_tb': {
            type: String
        },
        // Loại sửa chữa: 'Sửa chữa nhỏ, Sửa chữa lớn, Sửa chữa cụm, Đại tu, Kiểm tra'
        'phan_loai.loai_sua_chua': {
            type: String
        },
    ma_tb: {
        type: Object
    },
        'ma_tb.ma_tb': {
            type: String
        },
        'ma_tb.dvql': {
            type: String
        },
    dia_diem: {
        type: Object
    },
        // Địa điểm: 'Xưởng DVKT'
        'dia_diem.dia_diem': {
            type: String
        },
        // Khu vực: 'Khu A, B, C.. E'
        'dia_diem.khu_vuc': {
            type: String
        },
        // Vị trí: A01, A02,...
        'dia_diem.vi_tri': {
            type: String
        },
    noi_dung: {
        type: String
    },
    thoi_gian: {
        type: Object
    },
        'thoi_gian.bat_dau': {
            type: Date
        },
        'thoi_gian.ket_thuc': {
            type: Date,
            optional: true
        },
        'thoi_gian.sua_chua_du_kien': {
            type: Number,
            decimal: true
        },
        'thoi_gian.ket_thuc_du_kien': {
            type: Date,
            optional: true
        },
    thong_ke: {
        type: Object,
        optional: true
    },
        'thong_ke.thoi_gian': {
            type: Object,
            optional: true
        },
            'thong_ke.thoi_gian.sua_chua': {
                type: Object,
                optional: true
            },
                'thong_ke.thoi_gian.sua_chua.du_kien': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
                'thong_ke.thoi_gian.sua_chua.thuc_te': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
                'thong_ke.thoi_gian.sua_chua.phut': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
                'thong_ke.thoi_gian.sua_chua.gio': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
                'thong_ke.thoi_gian.sua_chua.ngay': {
                    type: Number,
                    decimal: true,
                    optional: true
                },
            'thong_ke.thoi_gian.bat_dau': {
                type: Object,
                optional: true
            },
                'thong_ke.thoi_gian.bat_dau.gio': {
                    type: String,
                    optional: true
                },
                'thong_ke.thoi_gian.bat_dau.ngay': {
                    type: String,
                    optional: true
                },
                'thong_ke.thoi_gian.bat_dau.thang': {
                    type: String,
                    optional: true
                },
                'thong_ke.thoi_gian.bat_dau.nam': {
                    type: String,
                    optional: true
                },
            'thong_ke.thoi_gian.ket_thuc': {
                type: Object,
                optional: true
            },
                'thong_ke.thoi_gian.ket_thuc.gio': {
                    type: String,
                    optional: true
                },
                'thong_ke.thoi_gian.ket_thuc.ngay': {
                    type: String,
                    optional: true
                },
                'thong_ke.thoi_gian.ket_thuc.thang': {
                    type: String,
                    optional: true
                },
                'thong_ke.thoi_gian.ket_thuc.nam': {
                    type: String,
                    optional: true
                },
    trang_thai: {
        type: String
    },
    mo_ta: {
        type: String,
        optional: true
    },
    ghi_chu: {
        type: String,
        optional: true
    },
    metadata: {
        type: Object,
        optional: true,
        label: "Metadata"
    },
        'metadata.ngay_tao': {
            type: Date,
            label: "Ngày tạo"
        },
        'metadata.ngay_cap_nhat_cuoi': {
            type: Date,
            label: "Ngày cập nhật cuối",
            optional: true
        },
        'metadata.nguoi_tao': {
            type: String,
            label: "Người tạo"
        },
        'metadata.nguoi_tao_name': {
            type: String,
            optional: true
        },
        'metadata.nguoi_tao_email': {
            type: String,
            optional: true
        },
        'metadata.nguoi_tao_field': {
            type: String,
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi': {
            type: String,
            label: "Người cập nhật cuối",
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi_name': {
            type: String,
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi_email': {
            type: String,
            optional: true
        },
        'metadata.nguoi_cap_nhat_cuoi_field': {
            type: String,
            optional: true
        },
        'metadata.search_field': {
            type: String,
            optional: true
        },
    isPublic: {
        type: Boolean,
        label: "Công khai",
        defaultValue: false
    },
    isArchived: {
        type: Boolean,
        label: "isArchived",
        defaultValue: false
    }    
});

SuaChuas.attachSchema(Schemas.SuaChuaSchema);

//==================================
// SUACHUALOGs Collections

Schemas.SuaChuaLogSchema = new SimpleSchema({
    action: {
        type: String,
        allowedValues: ['insert', 'update', 'remove']
    },
    doc: {
        type: Object,
        blackbox: true
    },
    user: {
        type: Object
    },
        'user.userId': {
            type: String
        },
        'user.userName': {
            type: String,
            optional: true
        },
        'user.userEmail': {
            type: String,
            optional: true
        },
    createdAt: {
        type: Date,
        defaultValue: new Date()
    }
});

SuaChuaLogs.attachSchema(Schemas.SuaChuaLogSchema);