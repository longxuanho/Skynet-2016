angular.module('angular-skynet').controller('UserLoginCtrl', function($scope, $rootScope, $stateParams, $state, $meteor, Skynet) {

    if ($rootScope.currentUser)
        $state.go('thietbis');
    
    // ***************************************************
    // INITIALIZE
    // ***************************************************
    $scope._helpers = Skynet.helpers;
    $scope._utils = Skynet.settings.accounts.utils;

    $scope._utils.initParams($scope);


    // ***************************************************
    // SUBSCRIBE
    // ***************************************************    
    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

    // ***************************************************
    // METHODS
    // ***************************************************
    $scope.loginWithPassword = function() {
        var error = $scope.helpers.validateLoginForm();
        if (_.isEmpty(error)) {

            $meteor.loginWithPassword($scope.login.email, $scope.login.password).then(function() {
                toastr.success("Đăng nhập thành công.");
                $state.go('thietbis');
            }, function(err) {
                toastr.error("Tên đăng nhập hoặc mật khẩu không chính xác.");
            });

        } else {
            toastr.error(error.message);
        }
    };

    $scope.register = function() {
        var error = $scope.helpers.validateSignUpForm();
        if (_.isEmpty(error)) {

            $meteor.createUser({
                username: $scope.signup.username,
                email: $scope.signup.email,
                password: $scope.signup.password,
                profile: {
                    name: $scope.signup.name,
                    firstName: $scope.signup.firstName,
                    lastName: $scope.signup.lastName,
                    birthday: $scope.signup.birthday,
                    gender: $scope.signup.genger
                }
            }).then(function() {
                toastr.success('Khởi tạo người dùng thành công. Xin vui lòng kiểm tra email của bạn để kích hoạt tài khoản.');
                console.log('Đăng ký thành công!');
                $state.go('thietbis');
            }, function(err) {
                toastr.error('Không thể khởi tạo người dùng. Xin vui lòng thử lại sau.');
                console.log('Register error - ', err);
            });

        } else {
            toastr.error(error.message);
        }
    }

    $scope.requestResetPassword = function() {
        var error = $scope.helpers.validateForgetPasswordForm();
        if (_.isEmpty(error)) {

            $meteor.forgotPassword({
                email: $scope.forgetPassword.email
            }).then(function() {
                toastr.info('Một email chứa thông tin reset mật khẩu đã được gửi tới địa chỉ mail của bạn. Xin vui lòng kiểm tra hộp thư đến.');
                console.log('Gửi email reset mật khẩu thành công.');
            }, function(err) {
                toastr.error('Email người dùng không tồn tại trong hệ thống. Xin hãy thử lại.')
                console.log('Có lỗi khi gửi đi email reset mật khẩu người dùng - ', err);
            });

        } else {
            toastr.error(error.message);
        }
    };

    // ***************************************************
    // HELPERS
    // ***************************************************
    $scope.helpers = {
        validateLoginForm: function() {

        },
        validateSignUpForm: function() {

        },
        validateForgetPasswordForm: function() {

        },
        buildQuocGia: function() {

            $scope.quocgia.metadata.ngay_cap_nhat_cuoi = new Date();
            $scope.quocgia.metadata.nguoi_cap_nhat_cuoi = $rootScope.currentUser._id;
            if ($rootScope.currentUser.profile)
                if ($rootScope.currentUser.profile.name)
                    $scope.quocgia.metadata.nguoi_cap_nhat_cuoi_profile_name = $rootScope.currentUser.profile.name;
            $scope.quocgia.metadata.nguoi_cap_nhat_cuoi_email = $rootScope.currentUser.emails[0].address;

        }
    }

    // ***************************************************
    // ULTILS
    // ***************************************************
    $scope.utils = {}

});
