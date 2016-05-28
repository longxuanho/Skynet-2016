// Chú ý event 'routeChangeError và ẩn mainSidebar ở một số phần

angular.module('angular-skynet').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        // DATAHELPERS
        .state('datahelpers', {
            url: '/datahelpers',
            template: '<datahelpers-main></datahelpers-main>'
        })
        .state('datahelpers.list', {
            url: '/thong-ke',
            template: '<datahelpers-list></datahelpers-list>'
        })
        // DASHBOARD
        .state('dashboard', {
            url: '/bang-tin',
            template: '<dashboard-main></dashboard-main>'
        })
        .state('dashboard.suachuas', {
            url: '/sua-chua-thiet-bi',
            template: '<dashboard-suachuas-main></dashboard-suachuas-main>',
            resolve: {
                meteorUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else if (!Meteor.user().emails[0].verified) {
                        return $q.reject('AUTH_NOT_VERIFIED');
                    } if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-suachuas', 'xem-suachuas', 'support-suachuas'], 'sky-project')) {
                        // Không đủ quyền xem nội dung câu hỏi
                        return $q.reject('AUTH_NOT_AUTHORIZED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('dashboard.cauhois', {
            url: '/ngan-hang-cau-hoi',
            template: '<dashboard-cauhois-main></dashboard-cauhois-main>',
            resolve: {
                meteorUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else if (!Meteor.user().emails[0].verified) {
                        return $q.reject('AUTH_NOT_VERIFIED');
                    } if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-cauhois', 'xem-cauhois', 'support-cauhois'], 'sky-project')) {
                        // Không đủ quyền xem nội dung câu hỏi
                        return $q.reject('AUTH_NOT_AUTHORIZED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('dashboard.xuongdvkt', {
            url: '/xuong-dvkt',
            template: '<dashboard-xuongdvkt-main></dashboard-xuongdvkt-main>',
            resolve: {
                meteorUser: ($q, $rootScope) => {
                    if (Meteor.userId() == null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else if (!Meteor.user().emails[0].verified) {
                        return $q.reject('AUTH_NOT_VERIFIED');
                    } if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-suachuas', 'support-suachuas', 'xem-suachuas'], 'sky-project')) {
                        // Không đủ quyền xem nội dung câu hỏi
                        return $q.reject('AUTH_NOT_AUTHORIZED');
                    } else {
                        // Ẩn sidebar trước khi vào route
                        $rootScope.primarySidebarOpen = false;
                        $rootScope.primarySidebarActive = false;
                        $rootScope.primarySidebarHiding = false;
                        $rootScope.hide_content_sidebar = false;
                        // Ẩn top header trước khi vào route
                        $rootScope.hideMainHeader = true;
                        // Ẩn style switcher trước khi vào route
                        $rootScope.hideStyleSwitcher = true;
                        
                        return $q.resolve();
                    }
                }
            }
        })
        // CAUHOIS
        .state('cauhois', {
            url: '/quan-ly/ngan-hang-cau-hoi',
            template: '<cauhois-main></cauhois-main>',
            resolve: {
                meteorUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else if (!Meteor.user().emails[0].verified) {
                        return $q.reject('AUTH_NOT_VERIFIED');
                    } if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-cauhois', 'xem-cauhois'], 'sky-project')) {
                        // Không đủ quyền xem nội dung câu hỏi
                        return $q.reject('AUTH_NOT_AUTHORIZED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('cauhois.addNew', {
            url: '/tao-moi',
            template: '<cauhois-add-new></cauhois-add-new>'
        })
        .state('cauhois.list', {
            url: '/thong-ke',
            template: '<cauhois-list></cauhois-list>'
        })
        .state('cauhois.update', {
            url: '/cap-nhat/:cauhoiId',
            template: '<cauhois-update></cauhois-update>'
        })
        // ADMIN
        .state('admin', {
            url: '/admin/quan-ly',
            template: '<admin-main></admin-main>',
            resolve: {
                meteorUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else if (!Meteor.user().emails[0].verified) {
                        return $q.reject('AUTH_NOT_VERIFIED');
                    } if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager'], 'sky-project')) {
                        // Không đủ quyền xem nội dung câu hỏi
                        return $q.reject('AUTH_NOT_AUTHORIZED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('admin.users_list', {
            url: '/users',
            template: '<admin-users-list></admin-users-list>',
        })
        // SUACHUAS
        .state('suachuas', {
            url: '/quan-ly/sua-chua-thiet-bi',
            template: '<suachuas-main></suachuas-main>',
            resolve: {
                meteorUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else if (!Meteor.user().emails[0].verified) {
                        return $q.reject('AUTH_NOT_VERIFIED');
                    } if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-manager', 'quanly-suachuas', 'xem-suachuas', 'support-suachuas'], 'sky-project')) {
                        // Không đủ quyền xem nội dung câu hỏi
                        return $q.reject('AUTH_NOT_AUTHORIZED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('suachuas.addNew', {
            url: '/tao-moi',
            template: '<suachuas-add-new></suachuas-add-new>'
        })
        .state('suachuas.list', {
            url: '/thong-ke',
            template: '<suachuas-list></suachuas-list>'
        })
        .state('suachuas.update', {
            url: '/cap-nhat/:suachuaId',
            template: '<suachuas-update></suachuas-update>'
        })

        .state('settings', {
            url: '/nguoi-dung/thiet-lap',
            template: '<settings-list></settings-list>'
        })

        .state('manage_users', {
            url: '/quan-ly/users',
            templateUrl: 'client/users/views/users-list.html',
            controller: 'UsersListCtrl',
            resolve: {
                "meteorUser": ["$meteor", function($meteor) {
                    return $meteor.waitForUser();
                }]
            }
        })
        .state('manage_usersDetails', {
            url: '/quan-ly/users/:userId',
            templateUrl: 'client/users/views/user-details.html',
            controller: 'UserDetailsCtrl',
            resolve: {
                "meteorUser": ["$meteor", function($meteor) {
                    return $meteor.waitForUser();
                }]
            }
        })
        // .state('user_profile', {
        //     url: '/user/profile',
        //     templateUrl: 'client/accounts/views/user-profile.html',
        //     controller: 'UserProfileCtrl',
        //     resolve: {
        //         "meteorUser": ["$meteor", function($meteor) {
        //             return $meteor.waitForUser(); // Must fully resolve user
        //         }]
        //     }
        // })
        .state('user_settings', {
            url: '/user/settings',
            templateUrl: 'client/users/views/user-settings.html',
            controller: 'UserSettingsCtrl',
            resolve: {}
        })
        .state('notify_verifyEmail', {
            url: '/xac-nhan-email/:token',
            template: '<notify-verify-email></notify-verify-email>'
        })
        .state('notify_checkEmail', {
            url: '/notify/kiem-tra-email',
            template: '<notify-check-email></notify-check-email>'
        })
        .state('notify_resetMatKhau', {
            url: '/notify/reset-mat-khau',
            template: '<notify-reset-mat-khau></notify-reset-mat-khau>'
        })
        .state('notify_notAuthorized', {
            url: '/notify/noi-dung-bi-han-che',
            template: '<notify-not-authorized></notify-not-authorized>'
        })
        .state('users_resetPassword', {
            url: '/reset-mat-khau/:token',
            template: '<users-reset-password></users-reset-password>'
        })
        .state('users_profile', {
            url: '/users/profile/:userId',
            template: '<users-profile></users-profile>'
        })
        .state('login', {
            url: '/login',
            template: '<login></login>'
        });

    $urlRouterProvider.otherwise("/login");
});


angular.module('angular-skynet')
    .run(function($rootScope, $state, $stateParams, $http, $window, $timeout, variables) {

        // Load custom style (User profile)
        if (!localStorage.getItem("notification_style"))
            localStorage.setItem("notification_style", 'uikit');
        $rootScope.notificationStyle = localStorage.getItem("notification_style");

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go('login');
            }
            if (error === 'AUTH_NOT_VERIFIED') {
                $state.go('notify_checkEmail');
            }
            if (error === 'AUTH_NOT_AUTHORIZED') {
                $state.go('notify_notAuthorized');
            }
            
        });

        $rootScope.$on('$stateChangeSuccess', function() {
           // // scroll view to top
           //  $("html, body").animate({
           //      scrollTop: 0
           //  }, 200);

            $timeout(function() {
                $rootScope.pageLoading = false;
                $($window).resize();
            }, 300);

            $timeout(function() {
                $rootScope.pageLoaded = true;
                $rootScope.appInitialized = true;
            }, 600);
        });

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            // Chỉ sử dụng darktheme cho quản lý xưởng DVKT
            $("body").removeClass("skynet-dark-theme-background");

            // Chú ý: chế độ mặc định luôn hiển thị mainSidebar và mainHeader
            $rootScope.hideMainSidebar = false;
            $rootScope.hideMainHeader = false;
            $rootScope.hideStyleSwitcher = false;

            // main search
            $rootScope.mainSearchActive = false;
            // single card
            $rootScope.headerDoubleHeightActive = false;
            // top bar
            $rootScope.toBarActive = false;
            // page heading
            $rootScope.pageHeadingActive = false;
            // top menu
            $rootScope.topMenuActive = false;
            // full header
            $rootScope.fullHeaderActive = false;
            // full height
            $rootScope.page_full_height = false;
            // secondary sidebar
            $rootScope.sidebar_secondary = false;
            $rootScope.secondarySidebarHiddenLarge = false;

            if ($($window).width() < 1220) {
                // hide primary sidebar
                $rootScope.primarySidebarActive = false;
                $rootScope.hide_content_sidebar = false;
            }
            if (!toParams.hasOwnProperty('hidePreloader')) {
                $rootScope.pageLoading = true;
                $rootScope.pageLoaded = false;
            }

        });

        // fastclick (eliminate the 300ms delay between a physical tap and the firing of a click event on mobile browsers)
            FastClick.attach(document.body);

            // get version from package.json
            $http.get('./package.json').success(function(response) {
                $rootScope.appVer = response.version;
            });

            // modernizr
            $rootScope.Modernizr = Modernizr;

            // get window width
            var w = angular.element($window);
            $rootScope.largeScreen = w.width() >= 1220;

            w.on('resize', function() {
                return $rootScope.largeScreen = w.width() >= 1220;
            });

            // show/hide main menu on page load
            $rootScope.primarySidebarOpen = ($rootScope.largeScreen) ? true : false;

            $rootScope.pageLoading = true;

            // // wave effects
            // $window.Waves.init();
    })
    .run([
        'PrintToConsole',
        function(PrintToConsole) {
            // app debug
            PrintToConsole.active = false;
        }
    ])
    // Cấu hình angular-moment tiếng việt
    .run(function(amMoment) {
        amMoment.changeLocale('vi');
    });
