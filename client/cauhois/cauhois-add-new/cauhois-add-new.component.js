angular.module('angular-skynet').directive('cauhoisAddNew', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-add-new/cauhois-add-new.template.html',
        controllerAs: 'vm',
        controller: function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;
            
            vm._helpers.initNewCauHoiParams(vm);
            vm.dictionary = angular.copy(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem);

            vm.pageOptions = {
                limit: {
                    numOfLuaChonsMax: 6,
                    numOfLuaChonsMin: 2
                },
                able: {
                    addNumOfLuaChons: true,
                    decreaseNumOfLuaChons: true
                },
                template: {
                    flags: {
                        isPhanLoai: false,
                        isTags: false,
                        isUrlHinhAnh: false,
                        isGhiChu: false
                    },
                    phan_loai: {
                        nhom_cau_hoi: {},
                        muc_do: {},
                        nhom_tb: {},
                        loai_tb: []
                    },
                    tags: [],
                    url_hinh_anh: [],
                    ghi_chu: {
                        mo_ta: '',
                        ghi_chu: ''
                    }
                },
                props: {
                    isDiffViewLink: true,
                    isDiffViewResult: false
                }               
            };

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
            });


            // ***************************************************
            // METHODS
            // ***************************************************

            vm.addNewCauHoi = () => {
                let err = vm._helpers.validateUser('can_upsert_cau_hoi');
                if (_.isEmpty(err)) {
                    err = vm._helpers.validateCauHoiForm(vm.newCauHoi);
                    if (_.isEmpty(err)) {

                        vm._helpers.buildNewCauHoi(vm.newCauHoi);
                        CauHois.insert(vm.newCauHoi, (error, result) => {
                            if (error) {
                                iNotifier.error('Không thể tạo mới dữ liệu câu hỏi này. ' + error.message + '.');
                            } else {
                                $scope.$apply( () => {
                                    vm._helpers.initNewCauHoiParams(vm);
                                });                        
                                iNotifier.success('Dữ liệu câu hỏi được tạo mới thành công.');
                            }
                        });

                    } else {
                        iNotifier.error(err.message);
                    }
                } else {
                    iNotifier.error(err.message);
                }
            };

            vm.clearNewCauHoiForm = () => {
                vm._helpers.initNewCauHoiParams(vm);
            };

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                accentColor: _.findWhere(vm._data.general.themes, {
                    name: $rootScope.main_theme
                }).color_accent,
                setCorrectAnswer: function(index) {
                    if (!vm.newCauHoi.noi_dung.lua_chons[index].isCorrect) {
                        // Nếu hành vi người dùng là switch câu trả lời đúng -> clear rồi switch vị trí đáp án đúng
                        _.each(vm.newCauHoi.noi_dung.lua_chons, (item, i) => {
                            item.isCorrect = (index === i) ? true : false;
                        });  
                    } else { 
                        // Nếu hành vi người dùng là toggle on/off câu trả lời đúng -> toggle
                        vm.newCauHoi.noi_dung.lua_chons[index].isCorrect = false;
                    }                     
                },
                addNumOfLuaChons: function() {
                    if (vm.newCauHoi.noi_dung.lua_chons.length < vm.pageOptions.limit.numOfLuaChonsMax) {
                        vm.newCauHoi.noi_dung.lua_chons.push({});
                        vm.pageOptions.able.decreaseNumOfLuaChons = true;   // Bây giờ có thể giảm số lựa chọn
                    }
                    else 
                        vm.pageOptions.able.addNumOfLuaChons = false;       // Đã vượt quá giới hạn tối đa số lựa chọn cho phép
                },
                decreaseNumOfLuaChons: function() {
                    if (vm.newCauHoi.noi_dung.lua_chons.length > vm.pageOptions.limit.numOfLuaChonsMin) {
                        vm.newCauHoi.noi_dung.lua_chons.pop({});
                        vm.pageOptions.able.addNumOfLuaChons = true;        // Bây giờ có thể thêm số lựa chọn
                    } else
                        vm.pageOptions.able.decreaseNumOfLuaChons = false;  // Đã quá giới hạn tối thiểu số lựa chọn cho phép
                }
            };

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
