angular.module('angular-skynet').directive('cauhoisWindow', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/cauhois/cauhois-windows/cauhois-window.template.html',
        controllerAs: 'vm',
        bindToController: true,
        controller: function($scope, $rootScope, $reactive, $timeout) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            
            vm.paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            vm.farm = function() {
                console.log('processing, ', $('div.k-window-titlebar.k-header'));
                $('div.k-window-titlebar.k-header').addClass('hello');
            }

            $timeout(() => {
                
                let mainPanel = UIkit.accordion('#cauhois_window_main_panel', { collapse: false });
            }, 1000);
            
            
            // vm._helpers.initNewCauHoiParams(vm);
            // vm.dictionary = angular.copy(skynetDictionary.data.nganhangcauhois.data.ky_thuat.trac_nghiem);

            // vm.windowOptions = {
            //     limit: {
            //         numOfLuaChonsMax: 6,
            //         numOfLuaChonsMin: 2,
            //         numOfUrlHinhAnhsMax: 4,
            //         numOfUrlHinhAnhsMin: 1
            //     },
            //     able: {
            //         addNumOfLuaChons: true,
            //         decreaseNumOfLuaChons: true,
            //         addNumOfUrlHinhAnhs: false,
            //         decreaseNumOfUrlHinhAnhs: false
            //     },
            //     template: {
            //         flags: {
            //             isLockSectionPhanLoai: false,
            //             isLockSectionTags: false,
            //             isLockSectionGhiChu: false
            //         },
            //         phan_loai: {
            //             nhom_cau_hoi: {},
            //             muc_do: {},
            //             nhom_tb: {},
            //             loai_tb: []
            //         },
            //         tags: [],
            //         ghi_chu: {
            //             mo_ta: '',
            //             ghi_chu: ''
            //         }
            //     },
            //     props: {
            //         isDiffViewLink: true,
            //         isDiffViewResult: false,
            //         isHasImages: false,
            //         lightBoxImageSrc: '',
            //         currentSection: 'phan_loai',

            //     },
            //     input: {
            //         diffViewSearch: ''
            //     }
            // };

            // vm.pageReactiveData = {
            //     cauhois: [],
            //     // tags: {
            //     //     data: vm.dictionary.tags,
            //     //     sort: { field: 'ten', dir: 'asc' },
            //     //     group: { field: 'group' }
            //     // },
            //     // tags: kendo.data.DataSource.create({
            //     //         data: [],
            //     //         group: { field: 'container.group' }
            //     //     }),
            //     loai_tbs: []
            // }

            // // ***************************************************
            // // SUBSCRIBE
            // // ***************************************************

            // // ***************************************************
            // // REACTIVE HELPERS
            // // ***************************************************

            // vm.helpers({
            //     // cauhois: () => {
            //     //     vm.pageReactiveData.cauhois = CauHois.find().fetch();
            //     //     // vm.pageReactiveData.dictionary.options.dataSource = CauHois.find().fetch();
            //     //     return CauHois.find();
            //     // },
            //     // loai_tbs: () => {
            //     //     vm.pageReactiveData.loai_tbs = DataHelpers.find({
            //     //         subject: 'cauhois',
            //     //         category: 'loai_tbs'
            //     //     }, {
            //     //         sort: {
            //     //             'container.text': 1
            //     //         }
            //     //     }).fetch();
            //     //     vm.pageReactiveData.tags.data(DataHelpers.find({
            //     //         subject: 'cauhois',
            //     //         category: 'tags'
            //     //     }, {
            //     //         sort: {
            //     //             'container.text': 1
            //     //         }
            //     //     }).fetch());
            //     //     return DataHelpers.find();
            //     // }
            // });


            // // ***************************************************
            // // METHODS
            // // ***************************************************

            // vm.addNewCauHoi = () => {
            //     let err = vm._helpers.validateUser('can_upsert_cau_hoi');
            //     if (_.isEmpty(err)) {
            //         err = vm._helpers.validateCauHoiForm(vm.newCauHoi);
            //         if (_.isEmpty(err)) {

            //             vm._helpers.buildNewCauHoi(vm.newCauHoi);
            //             CauHois.insert(vm.newCauHoi, (error, result) => {
            //                 if (error) {
            //                     iNotifier.error('Không thể tạo mới dữ liệu câu hỏi này. ' + error.message + '.');
            //                 } else {
            //                     $scope.$apply( () => {
            //                         vm.utils.resetNewCauHoi();
            //                     });                        
            //                     iNotifier.success('Dữ liệu câu hỏi được tạo mới thành công.');
            //                 }
            //             });

            //         } else {
            //             iNotifier.error(err.message);
            //         }
            //     } else {
            //         iNotifier.error(err.message);
            //     }
            // };

            // vm.clearNewCauHoiForm = () => {
            //     vm._helpers.initNewCauHoiParams(vm);
            // };

            // // ***************************************************
            // // UTILS
            // // ***************************************************

            // vm.utils = {
            //     accentColor: _.findWhere(vm._data.general.themes, {
            //         name: $rootScope.main_theme
            //     }).color_accent,
            //     setCorrectAnswer: function(luachon) {
            //         if (!luachon.isCorrect) {
            //             // Nếu hành vi người dùng là switch câu trả lời đúng -> clear rồi switch vị trí đáp án đúng
            //             _.each(vm.newCauHoi.noi_dung.lua_chons, (item, i) => {
            //                 item.isCorrect = false;
            //             });
            //             luachon.isCorrect = true;
            //         } else { 
            //             // Nếu hành vi người dùng là toggle on/off câu trả lời đúng -> toggle
            //             luachon.isCorrect = false;
            //         }                     
            //     },
            //     addNumOfLuaChons: function() {
            //         if (vm.newCauHoi.noi_dung.lua_chons.length < vm.windowOptions.limit.numOfLuaChonsMax) {
            //             vm.newCauHoi.noi_dung.lua_chons.push({isCorrect: false, order: vm.newCauHoi.noi_dung.lua_chons.length});
            //             vm.windowOptions.able.decreaseNumOfLuaChons = true;   // Bây giờ có thể giảm số lựa chọn
            //         }
            //         else 
            //             vm.windowOptions.able.addNumOfLuaChons = false;       // Đã vượt quá giới hạn tối đa số lựa chọn cho phép
            //     },
            //     decreaseNumOfLuaChons: function() {
            //         if (vm.newCauHoi.noi_dung.lua_chons.length > vm.windowOptions.limit.numOfLuaChonsMin) {
            //             vm.newCauHoi.noi_dung.lua_chons.pop();
            //             vm.windowOptions.able.addNumOfLuaChons = true;        // Bây giờ có thể thêm số lựa chọn
            //         } else
            //             vm.windowOptions.able.decreaseNumOfLuaChons = false;  // Đã quá giới hạn tối thiểu số lựa chọn cho phép
            //     },
            //     addNumOfHinhAnhs: function() {
            //         if (vm.windowOptions.props.isHasImages)
            //             if (vm.windowOptions.able.addNumOfUrlHinhAnhs)
            //                 vm.newCauHoi.noi_dung.url_hinh_anhs.push('');
            //     },
            //     decreaseNumOfHinhAnhs: function() {
            //         if (vm.windowOptions.props.isHasImages)
            //             if (vm.windowOptions.able.decreaseNumOfUrlHinhAnhs)
            //                 vm.newCauHoi.noi_dung.url_hinh_anhs.pop();
            //     },
            //     resetPhanLoaiSection: function() {
            //         // Nếu đang ở chế độ khóa, restore lại thời điểm bắt đầu kích hoạt khóa
            //         if (vm.windowOptions.template.flags.isLockSectionPhanLoai) {
            //             if (!_.isEmpty(vm.windowOptions.template.phan_loai)) 
            //                 vm.newCauHoi.phan_loai = angular.copy(vm.windowOptions.template.phan_loai);
            //         } else {
            //             vm.newCauHoi.phan_loai = {
            //                 kieu_cau_hoi: {
            //                     ma: 'mot_dap_an_dung',
            //                     ten: 'Một đáp án đúng'
            //                 },
            //                 nhom_tb: {
            //                     ma: "thiet_bi_nang",
            //                     ten: "Thiết bị nâng"
            //                 },
            //                 loai_tb: [],
            //                 nhom_cau_hoi: {},
            //                 nhom_noi_dung: {},
            //                 bac_thi: [],
            //                 muc_do: {}
            //             }
            //         }
            //     },
            //     resetTagSection: function() {
            //         if (vm.windowOptions.template.flags.isLockSectionTags) {
            //             if (vm.windowOptions.template.tags.length) 
            //                 vm.newCauHoi.tags = angular.copy(vm.windowOptions.template.tags);
            //         } else {
            //             vm.newCauHoi.tags = [];
            //         }       
            //     },
            //     resetHinhAnhsSection: function() {
            //         for (let i = 0; i < vm.newCauHoi.noi_dung.url_hinh_anhs.length; i++) {
            //             vm.newCauHoi.noi_dung.url_hinh_anhs[i] = '';
            //         }
            //     },
            //     resetGhiChuSection: function() {
            //         if (vm.windowOptions.template.flags.isLockSectionGhiChu) {
            //             vm.newCauHoi.ghi_chu = vm.windowOptions.template.ghi_chu.ghi_chu;
            //             vm.newCauHoi.mo_ta = vm.windowOptions.template.ghi_chu.mo_ta;
            //         } else {
            //             vm.newCauHoi.ghi_chu = '';
            //             vm.newCauHoi.mo_ta = '';
            //         }
            //     },
            //     toggleLockSectionPhanLoai: function() {
            //         vm.windowOptions.template.flags.isLockSectionPhanLoai = !vm.windowOptions.template.flags.isLockSectionPhanLoai;
            //         // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Phân Loại
            //         if (vm.windowOptions.template.flags.isLockSectionPhanLoai) {
            //             vm.windowOptions.template.phan_loai = angular.copy(vm.newCauHoi.phan_loai);
            //         }
            //     },
            //     toggleLockSectionTags: function() {
            //         vm.windowOptions.template.flags.isLockSectionTags = !vm.windowOptions.template.flags.isLockSectionTags;
            //         // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Tags
            //         if (vm.windowOptions.template.flags.isLockSectionTags) {
            //             vm.windowOptions.template.tags = angular.copy(vm.newCauHoi.tags);
            //         }
            //     },
            //     toggleLockSectionGhiChu: function() {
            //         vm.windowOptions.template.flags.isLockSectionGhiChu = !vm.windowOptions.template.flags.isLockSectionGhiChu;
            //         // Nếu kích hoạt chế độ khóa, chụp lại dữ liệu phần Ghi Chú
            //         if (vm.windowOptions.template.flags.isLockSectionGhiChu) {
            //             vm.windowOptions.template.ghi_chu = {
            //                 mo_ta: vm.newCauHoi.mo_ta,
            //                 ghi_chu: vm.newCauHoi.ghi_chu
            //             };
            //         }
            //     },
            //     showModalLightBox: function(index) {
            //         vm.windowOptions.props.lightBoxImageSrc = vm.newCauHoi.noi_dung.url_hinh_anhs[index];
            //         if (vm.windowOptions.props.lightBoxImageSrc)
            //             UIkit.modal("#modal_lightbox").show();
            //     },
            //     resetNewCauHoi: function() {
            //         vm._helpers.initNewCauHoiParams(vm);

            //         // Nếu một số trường được kích hoạt khóa
            //         if (vm.windowOptions.template.flags.isLockSectionPhanLoai) {
            //             if (!_.isEmpty(vm.windowOptions.template.phan_loai)) 
            //                 vm.newCauHoi.phan_loai = angular.copy(vm.windowOptions.template.phan_loai);
            //         }
            //         if (vm.windowOptions.template.flags.isLockSectionTags) {
            //             if (vm.windowOptions.template.tags.length) 
            //                 vm.newCauHoi.tags = angular.copy(vm.windowOptions.template.tags);
            //         }
            //         if (vm.windowOptions.template.flags.isLockSectionGhiChu) {
            //             vm.newCauHoi.ghi_chu = vm.windowOptions.template.ghi_chu.ghi_chu;
            //             vm.newCauHoi.mo_ta = vm.windowOptions.template.ghi_chu.mo_ta;
            //         }
            //     },
            //     randomizeLuaChonOrder: function() {
            //         // Loại bỏ các giá trị falsy khỏi lựa chọn trước khi xáo trộn
            //         vm.newCauHoi.noi_dung.lua_chons = _.reject(vm.newCauHoi.noi_dung.lua_chons, (item) => {return !item.tieu_de});
            //         let newOrder = _.shuffle( _.range(vm.newCauHoi.noi_dung.lua_chons.length) );
                    
            //         // Xáo trộn order các lựa chọn theo thứ tự mới
            //         _.each(vm.newCauHoi.noi_dung.lua_chons, (item, i) => {
            //             item.order = newOrder[i];
            //         });
            //         // Sắp xếp lại các lựa chọn theo thứ tự của khóa 'order'
            //         vm.newCauHoi.noi_dung.lua_chons = _.sortBy(vm.newCauHoi.noi_dung.lua_chons, 'order');
            //     },
            //     makeDiff: function() {
            //         // Toggle trạng thái isDiffViewResult
            //         vm.windowOptions.props.isDiffViewResult = !vm.windowOptions.props.isDiffViewResult;
            //         $('#diff_result').html('');
            //         let diffType = 'diffChars',
            //             panelA = vm.windowOptions.input.diffViewSearch || '';
            //             panelB = vm.newCauHoi.noi_dung.tieu_de || '';
            //             diff = JsDiff[diffType](panelA, panelB);
            //         diff.forEach(function(part){
            //             let color = part.added ? 'md-color-light-green-600': part.removed ? 'md-color-red-500 uk-text-del' : 'md-color-grey-400';
            //             let span = $('<span/>');
            //             span
            //                 .addClass(color)
            //                 .text(part.value);
            //             $('#diff_result').append(span);
            //         });
                    
            //     }
            // };

            // // ***************************************************
            // // WATCHERS
            // // ***************************************************

            // UIkit.on('toggle.uk.accordion', function(event, active, toggle){
            //     vm.windowOptions.props.currentSection = toggle[0].id || 'accordion_phan_loai';
            // });

            // UIkit.on('change.uk.sortable', function(event, sortable_object, dragged_element, action){
            //     if (action==="moved") {
            //         // Đồng bộ: Khi có event sorted, truy nhập các list để trích xuất mảng [data-index] -> [newOrder],
            //         // rồi cập nhật lại các order tuân theo thứ tự này                    
            //         $scope.$apply(() => {
            //             $('#sortable').children('li').each( function(index) {
            //                 // Để lấy thông tin về data-index: $(this).data('index')
            //                 _.extend(vm.newCauHoi.noi_dung.lua_chons[$(this).data('index')], {order: index});
            //             });
            //             // Sắp xếp lại các lựa chọn theo thứ tự của khóa 'order'
            //             vm.newCauHoi.noi_dung.lua_chons = _.sortBy(vm.newCauHoi.noi_dung.lua_chons, 'order');
            //         });
            //     }                
            // });

            $rootScope.$watch('main_theme', (newVal, oldVal) => {
                // Đổi màu k window khi màu theme thay đổi
                let header = $('div.k-window-titlebar.k-header');
                header.removeClass('color-background-' + oldVal);
                header.addClass('color-background-' + newVal);
            });

            // $scope.$watch('vm.windowOptions.props.isHasImages', (newVal, oldVal) => {
            //     if (oldVal) {
            //         // Nếu người dùng tắt chức năng sử dụng url hình ảnh, xóa tất cả các trường ngay lập tức
            //         vm.newCauHoi.noi_dung.url_hinh_anhs = ['', ''];
            //     }
            // });

            // $scope.$watch('vm.newCauHoi.noi_dung.url_hinh_anhs.length', (newVal) => {
            //     if (newVal > vm.windowOptions.limit.numOfUrlHinhAnhsMin && newVal < vm.windowOptions.limit.numOfUrlHinhAnhsMax) {
            //         // Nếu số trường url hình ảnh trong giới hạn cho phép, mở khóa các tính năng
            //         vm.windowOptions.able.decreaseNumOfUrlHinhAnhs = true;
            //         vm.windowOptions.able.addNumOfUrlHinhAnhs = true; 
            //     }
            //     if (newVal <= vm.windowOptions.limit.numOfUrlHinhAnhsMin) {
            //         // Nếu số trường url hình ảnh ít hơn giới hạn dưới, khóa khả năng decreaseUrlHinhAnh
            //         vm.windowOptions.able.decreaseNumOfUrlHinhAnhs = false; 
            //     }
            //     if (newVal >= vm.windowOptions.limit.numOfUrlHinhAnhsMax) {
            //         // Nếu số trường url hình ảnh ít hơn giới hạn trên, khóa khả năng addUrlHinhAnh
            //         vm.windowOptions.able.addNumOfUrlHinhAnhs = false; 
            //     }

            // });

            // $scope.$watch('vm.newCauHoi.noi_dung.tieu_de', (newVal) => {
            //     if (vm.windowOptions.props.isDiffViewLink) {
            //         vm.windowOptions.input.diffViewSearch = newVal;
            //         if (vm.windowOptions.props.currentSection==='accordion_so_sanh')
            //             $("#windowOptions_diffViewSearch").data("kendoAutoComplete").search(newVal);
            //     }
            // });

        }
    }
});
