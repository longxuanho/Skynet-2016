angular.module('angular-skynet').directive('dashboardXuongdvktSettings', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-settings.template.html',
        scope: {
            pageOptions: '=',
            pageData: '='
        },
        controller: function($scope, $rootScope, iNotifier) {

            // ***************************************************
            // INITIALIZE
            // ***************************************************
            
            $scope.heroContent = {
                content: {
                    text: '',
                    mode: 'default'
                }
            }

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            $scope.helpers({
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            $scope.methods = {
                thong_bao: {
                    setText: function() {
                        if (!$scope.heroContent.content.text) {
                            iNotifier.error('Bạn cần nhập nội dung cho thông báo cần hiển thị.');
                        } else {
                            console.log('about: ', $scope.pageOptions.ui.heroContent._id, $scope.heroContent.content);
                            if (!Meteor.userId()) {
                                iNotifier.error('Bạn cần đăng nhập để sử dụng chức năng này.');
                            } else {
                                if (!Roles.userIsInRole(Meteor.userId(), $scope.pageData.rights['can_upsert_sua_chua'], 'sky-project')) {
                                    iNotifier.error('Bạn không đủ quyền hạn để thực hiện chức năng này.');
                                } else {
                                    Notifies.update({
                                        _id: $scope.pageOptions.ui.heroContent._id
                                    }, {
                                        $set: {
                                            'content': $scope.heroContent.content
                                        }
                                    }, (error) => {
                                        if (error) {
                                            iNotifier.error('Có lỗi xảy ra khi cập nhật thông báo. ' + error.message + '.');
                                        } else {
                                            iNotifier.success('Thông báo đã được cập nhật thành công.');
                                        }
                                    });
                                }
                            }
                        }
                    },
                    clearText: function() {
                        $scope.heroContent.content.text = '';
                        $scope.heroContent.content.mode = 'default';
                        console.log('about: ', $scope.pageOptions.ui.heroContent._id, $scope.heroContent.content);
                        Notifies.update({
                            _id: $scope.pageOptions.ui.heroContent._id
                        }, {
                            $set: {
                                'content': $scope.heroContent.content
                            }
                        }, (error) => {
                            if (error) {
                                iNotifier.error('Có lỗi xảy ra khi reset thông báo này. ' + error.message + '.');
                            }
                        });
                    }
                }
            }

            // ***************************************************
            // UTILS
            // ***************************************************


            // ***************************************************
            // WATCHERS
            // ***************************************************


        }
    }
});