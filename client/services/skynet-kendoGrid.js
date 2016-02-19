angular.module('angular-skynet').factory('skynetKendoGrid', function($rootScope) {

    let factory = {
        thietbis: {},
        thongsokythuats: {}
    };


    // ***************************************************
    // THIETBIS DATA
    // ***************************************************

    factory.thietbis.data = {
        config: {
            schema: {
                props: {},
                fields: {
                    columns: []
                }
            },
            defaultColumns: [
                'ma_tb.ma_tb',
                'ma_tb.ma_topx',
                'phan_loai.chung_loai.ten',
                'phan_loai.loai.ten',
                'ho_so_tb.thong_tin_chung.hang_san_xuat.ten',
                'ho_so_tb.thong_tin_chung.nam_sd',
                'don_vi_so_huu.ten',
                'don_vi_quan_ly.ten'
            ],
            defaultDataSource: {
                aggregate: undefined,
                batch: false,
                filter: undefined,
                group: [],
                offlineStorage: null,
                page: 1,
                pageSize: 5,
                // schema: {
                //     model: factory.thietbis.helpers.buildGridSchemaModel(this.defaultColumns)
                // },
                select: null,
                serverAggregates: false,
                serverFiltering: false,
                serverGrouping: false,
                serverPaging: false,
                serverSorting: false,
                sort: undefined,
                table: null,
                serverPaging: false,
                serverSorting: false,
            },
            defaultOptions: {
                allowCopy: {
                    delimeter: "\t"
                },
                altRowTemplate: "",
                autoBind: true,
                columnMenu: false,
                columnResizeHandleWidth: 3,
                // columns: factory.thietbis.helpers.buildGridColumns(this.defaultColumns),
                detailTemplate: null,
                editable: false,
                excel: {
                    allPages: false,
                    filterable: false,
                    fileName: "From Sky with Love.xlsx",
                },
                filterable: {
                    mode: 'menu',
                    extra: false
                },
                groupable: {
                    enabled: true,
                    showFooter: false,
                },
                height: null,
                mobile: "",
                name: "thietbisGrid",
                navigatable: false,
                noRecords: false,
                pageable: {
                    refresh: false,
                    pageSizes: false,
                    info: true,
                    buttonCount: 3,
                    numeric: false,
                    input: true,
                    previousNext: true
                },
                pdf: {
                    allPages: false,
                    avoidLinks: true,
                    author: "Long Ho",
                    creator: "Skynet",
                    date: new Date(),
                    fileName: "From Sky with Love.pdf",
                    keywords: "Skynet's database",
                    landscape: false,
                    paperSize: "auto",
                    subject: "From Sky with Love",
                    title: "Tong Hop Thuc Luc TCT Tan Cang Sai Gon - from Skynet"
                },
                prefix: "",
                reorderable: true,
                resizable: true,
                rowTemplate: "",
                scrollable: {
                    virtual: false
                },
                selectable: "row",
                sortable: {
                    mode: "single",
                    allowUnsort: true
                },
                toolbar: ["excel", "pdf"]
            },
            availableColumns: [{
                field: "_id",
                title: "ID TB",
                type: "string",
                width: "120px"
            }, {
                field: "ma_tb.ma_tb",
                title: "Mã TB",
                type: "string",
                width: "100px"
            }, {
                field: "ma_tb.ma_topx",
                title: "Mã TOPX",
                type: "string",
                width: "100px"
            }, {
                field: "ma_tb.ma_maximo",
                title: "Mã Maximo",
                type: "string",
                width: "100px"
            }, {
                field: "ma_tb.ma_topovn",
                title: "Mã TopoVn",
                type: "string",
                width: "100px"
            }, {
                field: "phan_loai.nhom.keyId",
                title: "ID nhóm",
                type: "string",
                width: "130px"
            }, {
                field: "phan_loai.nhom.ten",
                title: "Nhóm",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.nhom.ma",
                title: "Mã nhóm",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.chung_loai.keyId",
                title: "ID chủng loại",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.chung_loai.ten",
                title: "Chủng loại",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.chung_loai.ma",
                title: "Mã chủng loại",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.loai.keyId",
                title: "ID loại TB",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.loai.ten",
                title: "Loại TB",
                type: "string",
                width: "120px"
            }, {
                field: "phan_loai.loai.ma",
                title: "Mã loại",
                type: "string",
                width: "120px"
            }, {
                field: "dia_ban_hoat_dong.keyId",
                title: "ID địa bàn",
                type: "string",
                width: "120px"
            }, {
                field: "dia_ban_hoat_dong.ten",
                title: "Địa bàn hoạt động",
                type: "string",
                width: "120px"
            }, {
                field: "dia_ban_hoat_dong.ma",
                title: "Mã địa bàn",
                type: "string",
                width: "120px"
            }, {
                field: "dia_ban_hoat_dong.mien",
                title: "Vùng miền",
                type: "string",
                width: "120px"
            }, {
                field: "dia_ban_hoat_dong.map_data.subdepartment.ten",
                title: "Địa phương",
                type: "string",
                width: "120px"
            }, {
                field: "dia_ban_hoat_dong.map_data.department.ten",
                title: "Tỉnh thành",
                type: "string",
                width: "120px"
            }, {
                field: "don_vi_so_huu.ten",
                title: "Sở hữu",
                type: "string",
                width: "160px"
            }, {
                field: "don_vi_so_huu.ma",
                title: "Mã ĐVSH",
                type: "string",
                width: "120px"
            }, {
                field: "don_vi_so_huu.phan_loai",
                title: "SH: Phân loại",
                type: "string",
                width: "120px"
            }, {
                field: "don_vi_quan_ly.ten",
                title: "Quản lý",
                type: "string",
                width: "160px"
            }, {
                field: "don_vi_quan_ly.ma",
                title: "Mã ĐVQL",
                type: "string",
                width: "120px"
            }, {
                field: "don_vi_quan_ly.phan_loai",
                title: "QL: Phân loại",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.nam_sd",
                title: "Năm SD",
                type: "number",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.nam_sx",
                title: "Năm SX",
                type: "number",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.so_khung",
                title: "Số khung",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.so_may",
                title: "Số máy",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.so_dang_ky",
                title: "Số đăng ký",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.so_dang_kiem",
                title: "Số đăng kiểm",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.xuat_xu.ten",
                title: "Xuất xứ",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.bao_hanh.ngay_ban_giao",
                title: "Ngày bàn giao",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.bao_hanh.tinh_trang_ban_giao",
                title: "BG: Tình trạng",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.bao_hanh.isTrongThoiGianBaoHanh",
                title: "Trong thời hạn BH",
                type: "boolean",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_ban_hanh",
                title: "Thời gian BH",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_bat_dau",
                title: "BH: Bắt đầu",
                type: "string",
                width: "date"
            }, {
                field: "ho_so_tb.thong_tin_chung.bao_hanh.thoi_gian_ket_thuc",
                title: "BH: Kết thúc",
                type: "string",
                width: "date"
            }, {
                field: "ho_so_tb.thong_tin_chung.hang_san_xuat.ten",
                title: "Hãng sản xuất",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.hang_san_xuat.ma",
                title: "Mã HSX",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.model_tb.ten",
                title: "Model TB",
                type: "string",
                width: "120px"
            }, {
                field: "ho_so_tb.thong_tin_chung.model_tb.ma",
                title: "Mã model",
                type: "string",
                width: "120px"
            }, {
                field: "ghi_chu",
                title: "Ghi chú",
                type: "string",
                width: "120px"
            }, {
                field: "mo_ta",
                title: "Mô tả",
                type: "string",
                width: "120px"
            }, {
                field: "icon",
                title: "Icon",
                type: "string",
                width: "120px"
            }]
        }
    };

    factory.thongsokythuats.data = {
        config: {
            schema: {
                props: {},
                fields: {
                    columns: []
                }
            },
            defaultColumns: [
                'thiet_bi.ma_tb.ma_tb',
                'thiet_bi.phan_loai.chung_loai.ten',
                'thiet_bi.ho_so.hang_san_xuat.ten',
                'thiet_bi.ho_so.model_tb.ten',
                'nhom_thong_so',
                'ten',
                'gia_tri',
                'don_vi',
                'gia_tri_text'
            ],
            defaultDataSource: {
                aggregate: undefined,
                batch: false,
                filter: undefined,
                group: [],
                offlineStorage: null,
                page: 1,
                pageSize: 5,
                // schema: {
                //     model: factory.thietbis.helpers.buildGridSchemaModel(this.defaultColumns)
                // },
                select: null,
                serverAggregates: false,
                serverFiltering: false,
                serverGrouping: false,
                serverPaging: false,
                serverSorting: false,
                sort: undefined,
                table: null,
                serverPaging: false,
                serverSorting: false,
            },
            defaultOptions: {
                allowCopy: {
                    delimeter: "\t"
                },
                altRowTemplate: "",
                autoBind: true,
                columnMenu: false,
                columnResizeHandleWidth: 3,
                // columns: factory.thietbis.helpers.buildGridColumns(this.defaultColumns),
                detailTemplate: null,
                editable: false,
                excel: {
                    allPages: false,
                    filterable: false,
                    fileName: "From Sky with Love.xlsx",
                },
                filterable: {
                    mode: 'menu',
                    extra: false
                },
                groupable: {
                    enabled: true,
                    showFooter: false,
                },
                height: null,
                mobile: "",
                name: "thongsokythuatsGrid",
                navigatable: false,
                noRecords: false,
                pageable: {
                    refresh: false,
                    pageSizes: false,
                    info: true,
                    buttonCount: 3,
                    numeric: false,
                    input: true,
                    previousNext: true
                },
                pdf: {
                    allPages: false,
                    avoidLinks: true,
                    author: "Long Ho",
                    creator: "Skynet",
                    date: new Date(),
                    fileName: "From Sky with Love.pdf",
                    keywords: "Skynet's database",
                    landscape: false,
                    paperSize: "auto",
                    subject: "From Sky with Love",
                    title: "Tong Hop Thuc Luc TCT Tan Cang Sai Gon - from Skynet"
                },
                prefix: "",
                reorderable: true,
                resizable: true,
                rowTemplate: "",
                scrollable: {
                    virtual: false
                },
                selectable: "row",
                sortable: {
                    mode: "single",
                    allowUnsort: true
                },
                toolbar: ["excel", "pdf"]
            },
            availableColumns: [{
                field: "_id",
                title: "ID TSKT",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.ma_tb.ma_tb",
                title: "Mã TB",
                type: "string",
                width: "80px"
            }, {
                field: "thiet_bi.ma_tb.ma_topx",
                title: "Mã TOPX",
                type: "string",
                width: "80px"
            }, {
                field: "thiet_bi.ma_tb.ma_maximo",
                title: "Mã Maximo",
                type: "string",
                width: "80px"
            }, {
                field: "thiet_bi.ma_tb.ma_topovn",
                title: "Mã TopoVn",
                type: "string",
                width: "80px"
            }, {
                field: "thiet_bi.phan_loai.nhom.keyId",
                title: "ID nhóm",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.nhom.ten",
                title: "Nhóm",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.nhom.ma",
                title: "Mã nhóm",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.chung_loai.keyId",
                title: "ID chủng loại",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.chung_loai.ten",
                title: "Chủng loại",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.chung_loai.ma",
                title: "Mã chủng loại",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.loai.keyId",
                title: "ID loại TB",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.loai.ten",
                title: "Loại TB",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.phan_loai.loai.ma",
                title: "Mã loại",
                type: "string",
                width: "100px"
            }, {
                field: "thiet_bi.ho_so.hang_san_xuat",
                title: "Hãng sản xuất",
                type: "string",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.model_tb",
                title: "Model TB",
                type: "string",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.nam_sd",
                title: "Năm SD",
                type: "number",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.nam_sx",
                title: "Năm SX",
                type: "number",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.don_vi_quan_ly",
                title: "Đơn vị quản lý",
                type: "string",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.ma_don_vi_quan_ly",
                title: "Mã ĐVQL",
                type: "string",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.don_vi_so_huu",
                title: "Đơn vị sở hữu",
                type: "string",
                width: "160px"
            }, {
                field: "thiet_bi.ho_so.ma_don_vi_so_huu",
                title: "Mã ĐVSH",
                type: "string",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.dia_ban_hoat_dong",
                title: "Địa bàn hoạt động",
                type: "string",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.ma_dia_ban_hoat_dong",
                title: "Mã địa bàn hoạt động",
                type: "string",
                width: "160px"
            }, {
                field: "thiet_bi.ho_so.thoi_gian_bao_hanh",
                title: "TGBH (tháng)",
                type: "number",
                width: "120px"
            }, {
                field: "thiet_bi.ho_so.ket_thuc_bao_hanh",
                title: "Kết thúc bảo hành",
                type: "date",
                width: "120px"
            }, {
                field: "nhom_thong_so",
                title: "Nhóm thông số",
                type: "string",
                width: "150px"
            }, {
                field: "ten",
                title: "Thông số",
                type: "string",
                width: "180px"
            }, {
                field: "don_vi",
                title: "Đơn vị",
                type: "string",
                width: "80px"
            }, {
                field: "gia_tri",
                title: "Giá trị",
                type: "number",
                width: "100px"
            }, {
                field: "gia_tri_text",
                title: "Giá trị *",
                type: "string",
                width: "120px"
            }, {
                field: "metadata.nguoi_tao_name",
                title: "Người tạo",
                type: "string",
                width: "120px"
            }, {
                field: "metadata.nguoi_tao_email",
                title: "Người tạo (Email)",
                type: "string",
                width: "120px"
            }, {
                field: "metadata.nguoi_cap_nhat_cuoi_name",
                title: "Cập nhật cuối",
                type: "string",
                width: "120px"
            }, {
                field: "metadata.nguoi_cap_nhat_cuoi_email",
                title: "Cập nhật cuối (Email)",
                type: "string",
                width: "120px"
            }]
        }
    };


    // ***************************************************
    // THIETBIS HELPERS
    // ***************************************************

    factory.thietbis.helpers = {
        initDefaultDataSource: function(source) {
            source.aggregate = angular.copy(factory.thietbis.data.config.defaultDataSource.aggregate);
            source.batch = factory.thietbis.data.config.defaultDataSource.batch;
            source.filter = angular.copy(factory.thietbis.data.config.defaultDataSource.filter);
            source.group = angular.copy(factory.thietbis.data.config.defaultDataSource.group);
            source.offlineStorage = angular.copy(factory.thietbis.data.config.defaultDataSource.offlineStorage);
            source.page = factory.thietbis.data.config.defaultDataSource.page;
            source.pageSize = factory.thietbis.data.config.defaultDataSource.pageSize;
            source.select = angular.copy(factory.thietbis.data.config.defaultDataSource.select);
            source.serverAggregates = factory.thietbis.data.config.defaultDataSource.serverAggregates;
            source.serverFiltering = factory.thietbis.data.config.defaultDataSource.serverFiltering;
            source.serverGrouping = factory.thietbis.data.config.defaultDataSource.serverGrouping;
            source.serverPaging =  factory.thietbis.data.config.defaultDataSource.serverPaging;
            source.serverSorting = factory.thietbis.data.config.defaultDataSource.serverSorting;
            source.sort = angular.copy(factory.thietbis.data.config.defaultDataSource.sort);
            source.table = angular.copy(factory.thietbis.data.config.defaultDataSource.table);
            source.serverPaging = factory.thietbis.data.config.defaultDataSource.serverPaging;
            source.serverSorting = factory.thietbis.data.config.defaultDataSource.serverSorting;

            source.schema = angular.copy(this.buildGridSchemaModel(factory.thietbis.data.config.defaultColumns));
        },
        initDefaultOptions: function() {
            let options = angular.copy(factory.thietbis.data.config.defaultOptions);
            options.columns = angular.copy(this.buildGridColumns(factory.thietbis.data.config.defaultColumns));
            
            return options;
        },
        buildGridColumns: function(columns) {
            return _.without(_.map(factory.thietbis.data.config.availableColumns, (item) => {
                if (_.contains(columns, item.field)) {
                    return _.omit(item, 'type');
                }
            }), undefined);
        },
        buildGridSchemaModel: function(columns) {
            let model = {
                id: "_id",
                fields: {}
            };
            _.each(factory.thietbis.data.config.availableColumns, (item) => {
                if (_.contains(columns, item.field)) {
                    model.fields[item.field] = {
                        type: item.type
                    }
                }
            });
            return model;
        }
    };

    factory.thongsokythuats.helpers = {
        initDefaultDataSource: function(source) {
            source.aggregate = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.aggregate);
            source.batch = factory.thongsokythuats.data.config.defaultDataSource.batch;
            source.filter = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.filter);
            source.group = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.group);
            source.offlineStorage = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.offlineStorage);
            source.page = factory.thongsokythuats.data.config.defaultDataSource.page;
            source.pageSize = factory.thongsokythuats.data.config.defaultDataSource.pageSize;
            source.select = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.select);
            source.serverAggregates = factory.thongsokythuats.data.config.defaultDataSource.serverAggregates;
            source.serverFiltering = factory.thongsokythuats.data.config.defaultDataSource.serverFiltering;
            source.serverGrouping = factory.thongsokythuats.data.config.defaultDataSource.serverGrouping;
            source.serverPaging =  factory.thongsokythuats.data.config.defaultDataSource.serverPaging;
            source.serverSorting = factory.thongsokythuats.data.config.defaultDataSource.serverSorting;
            source.sort = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.sort);
            source.table = angular.copy(factory.thongsokythuats.data.config.defaultDataSource.table);
            source.serverPaging = factory.thongsokythuats.data.config.defaultDataSource.serverPaging;
            source.serverSorting = factory.thongsokythuats.data.config.defaultDataSource.serverSorting;

            source.schema = angular.copy(this.buildGridSchemaModel(factory.thongsokythuats.data.config.defaultColumns));
        },
        initDefaultOptions: function() {
            let options = angular.copy(factory.thongsokythuats.data.config.defaultOptions);
            options.columns = angular.copy(this.buildGridColumns(factory.thongsokythuats.data.config.defaultColumns));
            
            return options;
        },
        buildGridColumns: function(columns) {
            return _.without(_.map(factory.thongsokythuats.data.config.availableColumns, (item) => {
                if (_.contains(columns, item.field)) {
                    return _.omit(item, 'type');
                }
            }), undefined);
        },
        buildGridSchemaModel: function(columns) {
            let model = {
                id: "_id",
                fields: {}
            };
            _.each(factory.thongsokythuats.data.config.availableColumns, (item) => {
                if (_.contains(columns, item.field)) {
                    model.fields[item.field] = {
                        type: item.type
                    }
                }
            });
            console.log('Build Schema: ', model);
            return model;
        }
    };

    

    return factory;

});
