angular.module('angular-skynet').directive('dashboardSuachuasMain', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-suachuas/dashboard-suachuas-main.template.html',
        controllerAs: 'vm',
        bindToController: true,
        controller: function($scope, $stateParams, $state, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary, variables, $timeout) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            // vm._data = skynetHelpers.data;
            // vm._helpers = skynetHelpers.helpers;

        

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('suachuas');

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
            });

            // ***************************************************
            // LISTEN EVENTS FROM SERVER
            // ***************************************************

            ddpEvents.addListener('suachuasChageEvent', function(message) {
                console.log('event fired!');
                if ($state && $state.$current.name==='dashboard.suachuas') {
                    console.log('to this!', message);
                    if (message.action==='insert')
                        iNotifier.info('Thiết bị mã số ' + message.data.ma_tb.ma_tb + ' đã được đưa vào sửa chữa tại ô ' + message.data.dia_diem.vi_tri + '.');
                    if (message.action==='update')
                        iNotifier.success('Thiết bị mã số ' + message.data.ma_tb.ma_tb + ' tại ô ' + message.data.dia_diem.vi_tri + ' đã được sửa chữa xong.');
                }
            });
            

            // ***************************************************
            // METHODS
            // ***************************************************
            


            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                // accentColor: _.findWhere(vm._data.general.themes, {
                //     name: $rootScope.main_theme
                // }).color_accent,
                setGroupById: function(id) {
                    vm.pageOptions.groupBy.selectedId = id;
                }
            };

            // ***************************************************
            // WATCHERS
            // ***************************************************

            // $rootScope.$watch('main_theme', (newVal) => {
            //     vm.utils.accentColor = _.findWhere(vm._data.general.themes, {
            //         name: newVal
            //     }).color_accent;
            // });
        }
    }
});