angular.module('angular-skynet').directive('cauhoisSidebarManageTags', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/directives/skynet/cauhoiSidebar/cauhois-sidebar-manage-tags.template.html',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            nhomtbs: '=',
        	dictionary: '=',
            options: '='
        },
        controller: function($scope, $rootScope, skynetHelpers, $state, $timeout, $reactive, skynetDictionary, iNotifier) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._helpers = skynetHelpers.helpers;

            vm.modalOptions = {
                kOptions: {
                    dataSource: [
                        { productName: "Tea", category: "Beverages" },
                        { productName: "Coffee", category: "Beverages" },
                        { productName: "Ham", category: "Food" },
                        { productName: "Bread", category: "Food" }
                    ],
                    columns: [
                        { field: "productName" },
                        { field: "category" }
                    ]
                    // dataSource: new kendo.data.DataSource({
                    //     data: [],
                    //     pageSize: 10
                    // }),
                    // columns: [
                    //     {
                    //         field: "data.value.group",
                    //         title: "Phân loại"
                    //     }, {
                    //         field: "data.value.ten",
                    //         title: "Tên"
                    //     }]                    
                }
            }

            let myAlert = $('.suachua_alert');
            myAlert.hide();

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                // datahelpers: () => {
                //     let data = DataHelpers.find({
                //         'section': 'cauhois',
                //         'field': 'tags',
                //         'data.subject': vm.nhomtbs.ten
                //     }).fetch();
                //     try {
                //         vm.modalOptions.kOptions.dataSource.data(data);
                //     } catch (error) {
                //         console.log("Error: ", error);
                //     }
                //     return DataHelpers.find({
                //         'section': 'cauhois',
                //         'field': 'tags',
                //         'data.subject': vm.nhomtbs.ten 
                //     });
                // }
            });

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            // $scope.subscribe('suachuas');

            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                // accentColor: _.findWhere($scope._data.general.themes, {
                //     name: $rootScope.main_theme
                // }).color_accent,
                resetSuaChua: function() {
                    angular.copy(vm.master, vm.source);
                    // Cập nhật thời gian kết thúc
                    vm.source.thoi_gian.ket_thuc = new Date();
                },
                saveSuaChua: function() {

                    let err = vm._helpers.validateUser('can_upsert_sua_chua');
                    if (_.isEmpty(err)) {
                        err = vm._helpers.validateSuaChuaForm(vm.source);
                        if (_.isEmpty(err)) {

                            vm._helpers.buildSuaChua(vm.source);
                            SuaChuas.update({
                                _id: vm.id
                            }, {
                                $set: {
                                    'trang_thai': vm.source.trang_thai,
                                    'tags': vm.source.tags,
                                    'thoi_gian.ket_thuc': vm.source.thoi_gian.ket_thuc,
                                    'thong_ke': vm.source.thong_ke, 
                                    'metadata.ngay_cap_nhat_cuoi': vm.source.metadata.ngay_cap_nhat_cuoi,
                                    'metadata.nguoi_cap_nhat_cuoi': vm.source.metadata.nguoi_cap_nhat_cuoi,
                                    'metadata.nguoi_cap_nhat_cuoi_name': vm.source.metadata.nguoi_cap_nhat_cuoi_name,
                                    'metadata.nguoi_cap_nhat_cuoi_email': vm.source.metadata.nguoi_cap_nhat_cuoi_email,
                                    'metadata.nguoi_cap_nhat_cuoi_field': vm.source.metadata.nguoi_cap_nhat_cuoi_field
                                }
                            }, (error) => {
                                if (error) {
                                    this.showModalAlert('Không thể cập nhật sửa chữa này. ' + error.message + '.');
                                } else {
                                    iNotifier.success('Sửa chữa được cập nhật thành công.');
                                    this.closeModal();
                                }
                            });
                        } else {
                            this.showModalAlert(err.message);
                        }
                    } else {
                        this.showModalAlert(err.message);
                    }
                },
                showModalAlert: function(message) {
                    vm.modalOptions.errorMessage = message;
                    myAlert.slideDown();
                    $timeout(() => {
                        myAlert.slideUp();
                    }, 3000);
                },
                isEditable: function() {
                    return _.isEmpty($scope._helpers.validateUser('can_upsert_cau_hoi'));
                },
                goToEditPage: function() {
                    this.closeModal();
                    $timeout(()=>{
                        $state.go('cauhois.update', {cauhoiId: $scope.source._id});
                    }, 600);          
                },
                closeModal: function() {
                    let modal = UIkit.modal("#modal_cauhois_sidebar_manage_suachuas");
                    if (modal.isActive()) {
                        modal.hide();
                    }
                }
            }


            // ***************************************************
            // WATCHERS
            // ***************************************************

        }
    }
});
