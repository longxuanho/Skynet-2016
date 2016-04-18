angular.module('angular-skynet').directive('dashboardXuongdvktSettings', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-xuongdvkt/dashboard-xuongdvkt-settings.template.html',
        scope: {
            pageOptions: '='
        },
        controller: function($scope, $rootScope) {

            // ***************************************************
            // INITIALIZE
            // ***************************************************
            
            $scope.pageData = {
                thong_bao: {
                    hero_content: {
                        text: '',
                        mode: 'default'
                    }
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
                        if ($scope.pageData.thong_bao.hero_content.text) {
                            $scope.pageOptions.displayMode.hero_content.text = $scope.pageData.thong_bao.hero_content.text;
                            $scope.pageOptions.displayMode.hero_content.mode = $scope.pageData.thong_bao.hero_content.mode;
                        }
                    },
                    clearText: function() {
                        $scope.pageData.thong_bao.hero_content.text = '';
                        $scope.pageData.thong_bao.hero_content.mode = 'default';

                        $scope.pageOptions.displayMode.hero_content.text = '';
                        $scope.pageOptions.displayMode.hero_content.mode = 'default';
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