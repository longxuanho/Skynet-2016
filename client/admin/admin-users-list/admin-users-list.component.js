angular.module('angular-skynet').directive('adminUsersList', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/admin/admin-users-list/admin-users-list.template.html',
        controller: function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, skynetKendoGrid, $reactive) {

            // $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            $scope._data = skynetHelpers.data;
            $scope._helpers = skynetHelpers.helpers;
            
            $scope._kData = skynetKendoGrid.cauhois.data;
            $scope._kHelpers = skynetKendoGrid.cauhois.helpers;

            $rootScope.page_full_height = true;
            $rootScope.headerDoubleHeightActive = true;

            $rootScope.searchText = '';
            $rootScope.searchBy = 'profile.search_field';
            $rootScope.orderProperty = '1';

            $scope.perPage = 0;
            $scope.page = 1;
            $scope.orderProperty = '1';
            $scope.sort = {
                'order': 1
            };

            $scope.pageOptions = {
                //Các chế độ xem cơ bản: blank, view và action
                mode: 'blank',
                userSelected: {}
            };

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('userStatus');

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            $scope.helpers({
                myUsers: () => {
                    return Meteor.users.find({
                        'profile.search_field': {
                            '$regex': '.*' + $rootScope.getReactively('searchText') || '' + '.*',
                            '$options': 'i'
                        }
                    },{
                        sort : { 
                            'status.online' : -1,
                            'profile.name': 1
                        } 
                    });
                }
            });

            // ***************************************************
            // UTILS
            // ***************************************************
            
            $scope.utils = {
                selectUser: (user) => {
                    // Chọn user
                    $scope.pageOptions.userSelected = user;
                    // Chuyển đến section xem thông tin người dùng
                    $scope.pageOptions.mode = 'view';
                },
                printRoles: (user) => {
                    if (!_.isEmpty(user)) {
                        let roles = '';
                        _.each(user.roles, (item, key) => {
                            roles += key + ': [' + item.join(', ') + '] '
                        });
                        return roles;
                    }
                    return;
                }
            }

            // ***************************************************
            // WATCHERS
            // ***************************************************

            // $scope.chat_users = [
            //     {
            //         "id": 0,
            //         "name": "Lue Feest",
            //         "description": "Lorem ipsum dolor sit amet.",
            //         "avatar": "assets/img/avatars/avatar_11_tn.png",
            //         "status": "online"

            //     },
            //     {
            //         "id": 1,
            //         "name": "Roosevelt Stoltenberg",
            //         "description": "Lorem ipsum dolor sit amet.",
            //         "avatar": "assets/img/avatars/avatar_03_tn.png",
            //         "status": "online"

            //     },
            //     {
            //         "id": 2,
            //         "name": "Casimer Smitham",
            //         "description": "Et quis eligendi ex.",
            //         "avatar": "assets/img/avatars/avatar_05_tn.png",
            //         "status": "afk"
            //     },
            //     {
            //         "id": 3,
            //         "name": "Katarina Fadel",
            //         "description": "Facere laboriosam molestiae doloribus culpa.",
            //         "avatar": "assets/img/avatars/avatar_08_tn.png",
            //         "status": "online"
            //     },
            //     {
            //         "id": 4,
            //         "name": "Caterina Homenick",
            //         "description": "Corporis doloribus aut voluptate ut aut.",
            //         "avatar": "assets/img/avatars/avatar_06_tn.png",
            //         "status": "offline"
            //     },
            //     {
            //         "id": 5,
            //         "name": "Mark Leffler",
            //         "description": "Nihil et ea.",
            //         "avatar": "assets/img/avatars/avatar_07_tn.png",
            //         "status": "online"
            //     }
            // ];

            // $scope.chat_messages = [
            //     {
            //         "user_id": 0,
            //         "content": [
            //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
            //             "Lorem ipsum dolor sit amet."
            //         ],
            //         "date": "13:38"
            //     },
            //     {
            //         "user_id": 1,
            //         "content": [
            //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus distinctio dolor earum est hic id impedit ipsum minima mollitia natus nulla perspiciatis quae quasi, quis recusandae, saepe, sunt totam."
            //         ],
            //         "date": "13:34"
            //     },
            //     {
            //         "user_id": 0,
            //         "content": [
            //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea mollitia pariatur porro quae sed sequi sint tenetur ut veritatis."
            //         ],
            //         "date": "23 JUN 1:10AM"
            //     },
            //     {
            //         "user_id": 1,
            //         "content": [
            //             "Lorem ipsum dolor sit amet, consectetur.",
            //             "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            //         ],
            //         "date": "FRIDAY 13:34"
            //     }
            // ];

            // // colors
            // $scope.chat_colors = 'chat_box_colors_a';

            // $scope.changeColor = function($event,colors) {
            //     $event.preventDefault();
            //     $scope.chat_colors = colors;
            //     $($event.currentTarget)
            //         .closest('li').addClass('uk-active')
            //         .siblings('li').removeClass('uk-active');
            // };
           

            // // ***************************************************
            // // UTILS
            // // ***************************************************

            

            // // ***************************************************
            // // SUBSCRIBE
            // // ***************************************************

            
            // // ***************************************************
            // // REACTIVE HELPERS
            // // ***************************************************

            // $scope.helpers({
            //     
            // });


            // ***************************************************
            // METHODS
            // ***************************************************
            

            // ***************************************************
            // WATCHERS
            // ***************************************************
            
            
        }
    }
});
