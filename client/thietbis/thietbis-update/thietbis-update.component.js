angular.module('angular-skynet').directive('thietbisUpdate', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/thietbis/thietbis-update/thietbis-update.template.html',
        controllerAs: 'vm',
        controller: function($scope, skynetHelpers, $rootScope, iNotifier, $timeout, $reactive) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            vm._helpers.initNewThietBiParams(vm);

            vm.params = {
                nhomSelectedId: null,
                chungloaiSelectedId: null,
                hangsanxuatSelectedId: null
            };

            vm.pageOptions = {
                currentState: 'thong_tin_chung',
                updateStates: [
                    {
                        name: "Thông tin chung",
                        value: "thong_tin_chung",
                        active: true
                    }, {
                        name: "Thông số KT",
                        value: "thong_so_ky_thuat",
                        active: false
                    }, {
                        name: "Lịch sửa chữa",
                        value: "lich_sua_chua",
                        active: false
                    }, {
                        name: "Nhật ký TB",
                        value: "nhat_ky_tb",
                        active: false
                    }, 
                ]
            }

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                source: () => {
                    vm.master = ThietBis.findOne({
                        _id: $rootScope.$stateParams.thietbiId
                    });
                    return angular.copy(vm.master);
                }
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            vm.reset = () => {
                angular.copy(vm.master, vm.source);
            };

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                accentColor: _.findWhere(vm._data.general.themes, {
                    name: $rootScope.main_theme
                }).color_accent
            };

            // ***************************************************
            // FIX BUGS
            // ***************************************************

            // $timeout(()=>{
            //    $("#phanloai_chungloai_dropdown").data("kendoDropDownList").refresh(); // fix bugs kendo không hiển thị được giá trị tại field chủng loại
            // }, 1000);

            // ***************************************************
            // WATCHERS
            // ***************************************************

            $rootScope.$watch('main_theme', (newVal) => {
                vm.utils.accentColor = _.findWhere(vm._data.general.themes, {
                    name: newVal
                }).color_accent;
            });    
        }
    }
});
