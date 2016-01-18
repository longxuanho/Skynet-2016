angular.module('angular-skynet').controller('UsersListCtrl', function($scope, $rootScope, $meteor, Skynet) {

    // ***************************************************
    // INITIALIZE
    // ***************************************************
    $scope._helpers = Skynet.helpers;
    $scope._ui = Skynet.settings.users.ui.list;
    $scope._utils = Skynet.settings.users.utils;


    // ***************************************************
    // SUBSCRIBE
    // ***************************************************
    $meteor.autorun($scope, function() {
        $meteor.subscribe('userStatus', {
            sort: $scope.getReactively('_ui.search.sort')
        }, $scope.getReactively('_ui.search.search'), $scope.getReactively('_ui.search.searchBy')).then(function() {
            $scope.usersCount = $meteor.object(Counts, 'numberOfUsers', false);
            $scope.usersTotalCount = $meteor.object(Counts, 'numberOfUsersTotal', false);
        });

        $scope.users = $meteor.collection(function() {
            return Meteor.users.find({}, {
                sort: $scope.getReactively('_ui.search.sort')
            });
        });
    });

    
    // ***************************************************
    // METHODS
    // ***************************************************
    $scope.createNewQuocGia = function(quocgia) {
        var err = $scope._helpers.validateUser('can_upsert_quoc_gia');
        if (_.isEmpty(err)) {
            err = $scope.helpers.validateForm();
            if (_.isEmpty(err)) {

                $scope.helpers.buildNewQuocGia();


            } else {
                toastr.error(err.message);
            } 
        } else {
            toastr.error(err.message);
        }
    }

    $scope.removeQuocGia = function(quocgia) {

        var err = $scope._helpers.validateUser('can_delete_quoc_gia');
        if (_.isEmpty(err)) {

            

        } else {
            toastr.error(err.message);
        }
    }

    $scope.removeQuocGiaAll = function() {
        var err = $scope._helpers.validateUser('can_delete_quoc_gia');
        if (_.isEmpty(err)) {

        } else {
            toastr.error(err.message);
        }
    }


    // ***************************************************
    // HELPERS
    // ***************************************************
    $scope.helpers = {
        validateForm: function() {
            
        },
        buildNewQuocGia: function() {

        }
    }


    // ***************************************************
    // ULTILS
    // ***************************************************
    $scope.utils = {
        isCanBeRemoved: function(chungloai) {

        },
        userLastLogin: function(user) {
            var message = '';
            if (!user.status)
                message = "Chưa có hoạt động được ghi nhận";
            else if (user.status.online)
                message = user.status.idle ? "idle" : "online";
            else
                message = user.status.lastLogin ? moment(user.status.lastLogin.date).fromNow() : "Chưa có hoạt động được ghi nhận";               

            return message;
        }
    }


    // ***************************************************
    // WATCHERS
    // ***************************************************
    $scope.$watch('_ui.search.orderProperty', function() {
        if ($scope._ui.search.orderProperty)
            $scope._ui.search.sort = {
                ten: parseInt($scope._ui.search.orderProperty)
            };
    });
});
