angular.module('angular-skynet').directive('usersProfile', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/users/users-profile/users-profile.html',
        controllerAs: 'UsersProfile',
        controller: function($scope, $stateParams, $state, $timeout, skynetHelpers) {


            // ***************************************************
            // INITIALIZE
            // ***************************************************

            $scope._data = skynetHelpers.data;

            $scope.states = {
                profileState: 'profile_about_view',
                profileSubState: ''
            };

            $scope.credentials = {
                oldPassword: '',
                newPassword: '',
                repeatNewPassword: ''
            }

            $('#user_profile_tabs').on('change.uk.tab', function(event, activeTab, prevItem) {
                if (activeTab.length > 0) {
                    if (activeTab[0].id === 'user_profile_general') {
                        console.log('profile triggered!');
                        $scope.states.profileState = 'profile_about_view';
                        $scope.states.profileSubState = '';
                    }
                    if (activeTab[0].id === 'user_profile_settings') {
                        console.log('settings triggered!');
                        $scope.states.profileState = 'profile_settings_view';
                        $scope.states.profileSubState = '';
                    }
                    if (activeTab[0].id === 'user_profile_mics') {
                        console.log('mics triggered!');
                        $scope.states.profileState = 'profile_mics_view';
                        $scope.states.profileSubState = '';
                    }
                }
            });

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('users');

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            $scope.helpers({
                user: () => {
                    $scope.master = Meteor.users.findOne({
                        _id: $stateParams.userId
                    });
                    return angular.copy($scope.master);
                },
                isLoggedIn: () => {
                    return Meteor.userId() !== null;
                }
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            $scope.resetEditProfile = () => {
                angular.copy($scope.master, $scope.user);
            };

            // ***************************************************
            // ULTILS
            // ***************************************************
            $scope.utils = {
                validateUserProfileForm: function() {

                },
                validateUser: function() {
                    let error = {};
                    if ($scope.user._id !== Meteor.userId())
                        error.message = "Bạn không đủ quyền hạn thực hiện cập nhật này.";
                    return error;
                },
                validateChangePasswordForm: function() {

                },
                buildUserProfile: function() {

                },
                buildUserAvatar: function() {
                    if (!_.isEmpty($scope.userAvatar)) {
                        $scope.user.profile.avatar = {};
                        $scope.user.profile.avatar.keyId = $scope.userAvatar._id;
                        $scope.user.profile.avatar.url = $scope.userAvatar.url();
                    }
                },
                toggleEditAvatar: function() {
                    if ($scope.states.profileState === 'profile_about_edit')
                        $scope.states.profileSubState = ($scope.states.profileSubState !== 'profile_about_edit_avatar') ? 'profile_about_edit_avatar' : '';
                }
            }

        }
    }
});
