angular.module('angular-skynet').factory('skynetValidator', function($meteor, $rootScope) {
    var factory = {

        // ***************************************************
        // HELPERS - DATAHELPERS
        // ***************************************************

        validateDataHelperForm: function(datahelper) {
            let error = {};
            if (!datahelper.subject) {
                error.message = "Chưa có thông tin về trường Subject.";
                return error;
            }
            if (!datahelper.category) {
                error.message = "Chưa có thông tin về trường Category.";
                return error;
            }
            if (!datahelper.container.ref) {
                error.message = "Chưa có thông tin về trường Container-ref.";
                return error;
            }
            if (!datahelper.container.text && !datahelper.container.value && !datahelper.container.order) {
                error.message = "Cần có thông tin ít nhất một trong các trường: Container-(text/value/order).";
                return error;
            }
            
            return;
        },


        // ***************************************************
        // HELPERS - SUACHUAS
        // ***************************************************

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

        // ***************************************************
        // USER RIGHTS
        // ***************************************************

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

    };

    return factory;

});
