angular.module('angular-skynet').factory('skynetKendoGrid', function($rootScope, iNotifier) {

    let factory = {
        cauhois: {},
        suachuas: {},
    };

    factory.cauhois.data = {
        config: {
            schema: {
                props: {},
                fields: {
                    columns: []
                }
            },
            defaultOptions: {
                allowCopy: {
                    delimeter: "\t"
                },
                autoBind: true,
                columnMenu: false,
                columnResizeHandleWidth: 3,
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
                    messages: {
                      empty: "Kéo/thả để nhóm theo nội dung được chọn"
                    }
                },
                navigatable: false,
                noRecords: false,
                pageable: {
                    pageSize: 2,
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
                    title: "Tong Hop Cau Hoi Thi Nang Giu Bac - from Skynet"
                },
                reorderable: true,
                resizable: true,
                scrollable: {
                    virtual: false
                },
                selectable: "row",
                sortable: {
                    mode: "single",
                    allowUnsort: true
                },
                toolbar: ["excel", "pdf"],
                filterMenuInit: function(e) {
                    if (_.contains([
                            "phan_loai.nhom_cau_hoi.ten",
                            "_id",
                            "phan_loai.nhom_cau_hoi.ten_ngan",
                            "phan_loai.nhom_cau_hoi.ten",
                            "fields.loai_tb",
                            "phan_loai.muc_do.ten",
                            "noi_dung.tieu_de",
                            "fields.tags",
                            "fields.bac_thi",
                            "ghi_chu",
                            "mo_ta",
                            "metadata.nguoi_cap_nhat_cuoi_name",
                            "metadata.nguoi_cap_nhat_cuoi_email",
                            "fields.lua_chons.A",
                            "fields.lua_chons.B",
                            "fields.lua_chons.C",
                            "fields.lua_chons.D"
                        ], e.field)) {
                        let firstValueDropDown = e.container.find("select:eq(0)").data("kendoDropDownList");
                        firstValueDropDown.value("contains");
                        firstValueDropDown.trigger("change");
                    }
                },
                excelExport: function(e) {
                    iNotifier.success('Dữ liệu đã được trích xuất dưới định dạng Excel.');
                },
                pdfExport: function(e) {
                    iNotifier.success('Dữ liệu đã được trích xuất dưới định dạng Pdf thành công.');
                }              
            },
            availableColumns: [{
                field: "_id",
                title: "ID Câu Hỏi",
                type: "string",
                width: "100px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        showOperators: false
                    }
                }
            }, {
                field: "phan_loai.kieu_cau_hoi.ten",
                title: "Kiểu câu hỏi",
                type: "string",
                width: "150px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "phan_loai.nhom_cau_hoi.ten_ngan",
                title: "Mã nhóm câu hỏi",
                type: "string",
                width: "80px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "phan_loai.nhom_cau_hoi.ten",
                title: "Nhóm câu hỏi",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "#= value # (#= count# câu hỏi)",
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.loai_tb",
                title: "Loại thiết bị",
                type: "string",
                width: "140px",
                aggregates: ["count"],
                groupHeaderTemplate: "#= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "phan_loai.muc_do.ten",
                title: "Mức độ",
                type: "string",
                width: "90px",
                aggregates: ["count"],
                groupHeaderTemplate: "Mức độ: #= value # (#= count# câu hỏi)",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "noi_dung.tieu_de",
                title: "Nội dung",
                type: "string",
                width: "330px",
                aggregates: ["count"],
                groupHeaderTemplate: "Nội dung: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "noi_dung.thong_ke.numOfLuaChons",
                title: "Lựa chọn",
                type: "number",
                width: "115px",
                attributes: {
                    style: "text-align: center;"
                },
                aggregates: ["count"],
                groupHeaderTemplate: "Số lựa chọn: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "eq",
                        showOperators: false
                    }
                }
            }, {
                field: "noi_dung.thong_ke.numOfCorrectAnswers",
                title: "SL câu đúng",
                type: "number",
                width: "115px",
                attributes: {
                    style: "text-align: center;"
                },
                aggregates: ["count"],
                groupHeaderTemplate: "Số đáp án đúng: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "eq",
                        showOperators: false
                    }
                }
            }, {
                field: "noi_dung.thong_ke.numOfUrlHinhAnhs",
                title: "Hình ảnh",
                type: "number",
                width: "115px",
                attributes: {
                    style: "text-align: center;"
                },
                aggregates: ["count"],
                groupHeaderTemplate: "Hình ảnh: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "eq",
                        showOperators: false
                    }
                }
            }, {
                field: "fields.correctAnswer",
                title: "Đáp án",
                type: "string",
                width: "100px",
                attributes: {
                    style: "text-align: center;"
                },
                aggregates: ["count"],
                groupHeaderTemplate: "Đáp án đúng: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "eq",
                        showOperators: false
                    }
                }
            }, {
                field: "fields.tags",
                title: "Thẻ dấu",
                type: "string",
                width: "200px",
                aggregates: ["count"],
                groupHeaderTemplate: "Thẻ: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.bac_thi",
                title: "Bậc thi",
                type: "string",
                width: "100px",
                aggregates: ["count"],
                groupHeaderTemplate: "Bậc thi: #= value # (#= count# câu hỏi)",
                hidden: false,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "ghi_chu",
                title: "Ghi chú",
                type: "string",
                width: "300px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "mo_ta",
                title: "Mô tả",
                type: "string",
                width: "120px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "metadata.ngay_tao",
                title: "Ngày tạo (D)",
                type: "date",
                format: "{0: yyyy-MM-dd}",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Ngày tạo: #= value # (#= count# câu hỏi)",
                hidden: true
            }, {
                field: "metadata.ngay_cap_nhat_cuoi",
                title: "Ngày CN cuối (D)",
                type: "date",
                format: "{0: yyyy-MM-dd}",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Ngày cập nhật cuối: #= value # (#= count# câu hỏi)",
                hidden: true
            }, {
                field: "fields.thoi_gians.ngay_tao_string",
                title: "Ngày tạo (S)",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Ngày tạo: #= value # (#= count# câu hỏi)",
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.thoi_gians.ngay_cap_nhat_cuoi_string",
                title: "Ngày CN cuối (S)",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Ngày cập nhật cuối: #= value # (#= count# câu hỏi)",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "metadata.nguoi_tao_name",
                title: "Người tạo",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người tạo: #= value # (#= count# câu hỏi)",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "metadata.nguoi_tao_email",
                title: "Người tạo (Email)",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người tạo: #= value # (#= count# câu hỏi)",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "metadata.nguoi_cap_nhat_cuoi_name",
                title: "Người cập nhật cuối",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người cập nhật cuối: #= value # (#= count# câu hỏi)",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "metadata.nguoi_cap_nhat_cuoi_email",
                title: "Người cập nhật cuối (Email)",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người cập nhật cuối: #= value # (#= count# câu hỏi)",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.lua_chons.A",
                title: "Lựa chọn A",
                type: "string",
                width: "300px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.lua_chons.B",
                title: "Lựa chọn B",
                type: "string",
                width: "300px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.lua_chons.C",
                title: "Lựa chọn C",
                type: "string",
                width: "300px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }, {
                field: "fields.lua_chons.D",
                title: "Lựa chọn D",
                type: "string",
                width: "300px",
                hidden: true,
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains",
                        minLength: 3,
                        showOperators: false
                    }
                }
            }]
        }
    };

    factory.suachuas.data = {
        config: {
            schema: {
                props: {},
                fields: {
                    columns: []
                }
            },
            defaultColumns: [
                'phan_loai.loai_tb',
                'ma_tb.ma_tb',
                'phan_loai.loai_sua_chua',
                'trang_thai',
                'dia_diem.khu_vuc',
                'dia_diem.vi_tri',
                'noi_dung',                
                'thong_ke.thoi_gian.bat_dau.ngay',
                'thong_ke.thoi_gian.sua_chua.thuc_te',
                'thoi_gian.thoi_gian.sua_chua.du_kien'
            ],
            defaultOptions: {
                allowCopy: {
                    delimeter: "\t"
                },
                altRowTemplate: "",
                autoBind: true,
                columnMenu: {
                    sortable: false
                },
                columnResizeHandleWidth: 3,
                // columns: factory.thietbis.helpers.buildGridColumns(this.defaultColumns),
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
                    messages: {
                      empty: "Kéo/thả để nhóm theo nội dung được chọn"
                    }
                },
                height: null,
                mobile: "",
                name: "suachuasGrid",
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
                    title: "Tong Hop Sua Chua - from Skynet"
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
                toolbar: ["excel", "pdf"],
                detailTemplate: "",
                detailInit: function(e) {
                    e.detailRow.find(".myGridDetails").kendoGrid({
                        dataSource: e.data.noi_dung.lua_chons
                    });
                }                
            },
            availableColumns: [{
                field: "_id",
                title: "ID Sửa chữa",
                type: "string",
                width: "100px"
            }, {
                field: "phan_loai.nhom_tb",
                title: "Nhóm phương tiện",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Nhóm PT: #= value # (#= count# lượt)"
            }, {
                field: "phan_loai.loai_tb",
                title: "Loại PT",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Loại PT: #= value # (#= count# lượt)"
            }, {
                field: "ma_tb.ma_tb",
                title: "Mã PT",
                type: "string",
                width: "120px",
                aggregates: ["count"],
                groupHeaderTemplate: "Mã PT: #= value # (#= count# lượt)"
            }, {
                field: "phan_loai.loai_sua_chua",
                title: "Loại sửa chữa",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Loại SC: #= value # (#= count# lượt)"
            }, {
                field: "trang_thai",
                title: "Trạng thái",
                type: "string",
                width: "180px",
                aggregates: ["count"],
                groupHeaderTemplate: "Trạng thái: #= value # (#= count# lượt)"
            }, {
                field: "dia_diem.khu_vuc",
                title: "Khu vực SC",
                type: "string",
                width: "130px",
                aggregates: ["count"],
                groupHeaderTemplate: "#= value # (#= count# lượt)"
            }, {
                field: "dia_diem.vi_tri",
                title: "Vị trí",
                type: "string",
                width: "120px",
                aggregates: ["count"],
                groupHeaderTemplate: "Vị trí: #= value # (#= count# lượt)"
            }, {
                field: "noi_dung",
                title: "Nội dung sửa chữa",
                type: "string",
                width: "320px",
                aggregates: ["count"],
                groupHeaderTemplate: "Nội dung SC: #= value # (#= count# lượt)"
            }, {
                field: "thong_ke.thoi_gian.sua_chua.thuc_te",
                title: "TGSC (giờ)",
                type: "number",
                width: "120px",
                format: "{0: #.00}",
                attributes: {
                    style: "text-align: right;"
                },
                aggregates: ["min", "max", "average"],
                groupHeaderTemplate: "Thời gian SC: #= value # (min: #= min#, max: #= max#, avg: #= average#)"
            }, {
                field: "thoi_gian.sua_chua_du_kien",
                title: "SC dự kiến (giờ)",
                type: "number",
                width: "120px",
                format: "{0: #.00}",
                attributes: {
                    style: "text-align: right;"
                },
                aggregates: ["min", "max", "average"],
                groupHeaderTemplate: "Thời gian SC dự kiến: #= value # (min: #= min#, max: #= max#, avg: #= average#)"
            }, {
                field: "thong_ke.thoi_gian.bat_dau.ngay",
                title: "Ngày bắt đầu",
                type: "string",
                width: "140px",
                aggregates: ["count"],
                groupHeaderTemplate: "Ngày: #= value # (#= count# lượt)"
            }, {
                field: "thong_ke.thoi_gian.ket_thuc.ngay",
                title: "Ngày kết thúc",
                type: "string",
                width: "140px",
                aggregates: ["count"],
                groupHeaderTemplate: "Ngày: #= value # (#= count# lượt)"
            }, {
                field: "thong_ke.thoi_gian.bat_dau.thang",
                title: "Tháng",
                type: "string",
                width: "100px",
                aggregates: ["count"],
                groupHeaderTemplate: "Tháng: #= value # (#= count# lượt)"
            }, {
                field: "thong_ke.thoi_gian.bat_dau.nam",
                title: "Năm",
                type: "string",
                width: "100px",
                aggregates: ["count"],
                groupHeaderTemplate: "Năm: #= value # (#= count# lượt)"
            }, {
                field: "ghi_chu",
                title: "Ghi chú",
                type: "string",
                width: "300px"
            }, {
                field: "metadata.ngay_tao",
                title: "Ngày tạo",
                type: "date",
                format: "{0: yyyy-MM-dd}",
                width: "160px"
            }, {
                field: "metadata.ngay_cap_nhat_cuoi",
                title: "Ngày CN cuối",
                type: "date",
                format: "{0: yyyy-MM-dd}",
                width: "160px"
            }, {
                field: "metadata.nguoi_tao_name",
                title: "Người tạo",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người tạo: #= value # (#= count# lượt)"
            }, {
                field: "metadata.nguoi_tao_email",
                title: "Người tạo (Email)",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người tạo: #= value # (#= count# lượt)"
            }, {
                field: "metadata.nguoi_cap_nhat_cuoi_name",
                title: "Người cập nhật cuối",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người cập nhật cuối: #= value # (#= count# lượt)"
            }, {
                field: "metadata.nguoi_cap_nhat_cuoi_email",
                title: "Người cập nhật cuối (Email)",
                type: "string",
                width: "160px",
                aggregates: ["count"],
                groupHeaderTemplate: "Người cập nhật cuối: #= value # (#= count# lượt)"
            }]
        }
    };

    // ***************************************************
    // HELPERS
    // ***************************************************

    factory.cauhois.helpers = {
        initDefaultDataSource: function() {
            let source = kendo.data.DataSource.create({
                data: [],
                page: 1,
                pageSize: 5,
                schema: {
                    model: this.buildGridSchemaModel()
                }
            });
            console.log('build DataSource: ', source);
            return source;
        },
        initDefaultOptions: function() {
            // Khởi tạo các cấu hình cơ bản
            let options = angular.copy(factory.cauhois.data.config.defaultOptions);
            // Khởi tạo các cột dữ liệu
            options.columns = angular.copy(this.buildGridColumns());
            // Khởi tạo nguồn dữ liệu - dataSource
            options.dataSource = this.initDefaultDataSource();

            return options;
        },
        // buildGridColumns: function(columns) {
        //     return _.without(_.map(factory.cauhois.data.config.availableColumns, (item) => {
        //         if (_.contains(columns, item.field)) {
        //             // return _.omit(item, 'type');
        //             return item;
        //         }
        //     }), undefined);
        // },
        buildGridColumns: function() {
            return factory.cauhois.data.config.availableColumns;
        },
        buildGridSchemaModel: function() {
            let model = {
                fields: {}
            };
            _.each(factory.cauhois.data.config.availableColumns, (item) => {
                model.fields[item.field] = {
                    type: item.type
                }
            });
            console.log('Build Schema: ', model);
            return model;
        }
    };

    factory.suachuas.helpers = {
        initDefaultDataSource: function() {
            let source = {
                aggregate: undefined,
                batch: false,
                filter: undefined,
                group: [],
                offlineStorage: null,
                page: 1,
                pageSize: 10,
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

                schema: this.buildGridSchemaModel(factory.suachuas.data.config.defaultColumns),
                data: []
            };
            return source;
        },
        initDefaultOptions: function() {
            let options = angular.copy(factory.suachuas.data.config.defaultOptions);
            options.columns = angular.copy(this.buildGridColumns(factory.suachuas.data.config.defaultColumns));
            
            return options;
        },
        buildGridColumns: function(columns) {
            return _.without(_.map(factory.suachuas.data.config.availableColumns, (item) => {
                if (_.contains(columns, item.field)) {
                    // return _.omit(item, 'type');
                    return item;
                }
            }), undefined);
        },
        buildGridSchemaModel: function(columns) {
            let model = {
                id: "_id",
                fields: {}
            };
            _.each(factory.suachuas.data.config.availableColumns, (item) => {
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
