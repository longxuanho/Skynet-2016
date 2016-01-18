angular.module('angular-skynet').factory('Skynet', function($meteor, $rootScope, uiGridConstants) {
    var factory = {
        settings: {}
    };

    factory.settings.phanloais = {
        page_display: 'nhoms',
        nhoms: {
            ui: {
                page: 1,
                perPage: 3,
                sort: {
                    ten: 1
                },
                orderProperty: '1',
                pageChanged: function(newPage) {
                    factory.settings.phanloais.nhoms.ui.page = newPage;
                },
                search: '',
                searchBy: 'ten',
                searchFields: [{
                    value: 'ten',
                    name: 'Tên nhóm'
                }, {
                    value: 'ma',
                    name: 'Mã nhóm'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'nguoi_tao',
                    name: 'Người tạo'
                }]
            },
            utils: {
                initParams: function(scope) {
                    scope.newNhom = {
                        isPublic: true,
                        isArchived: false,
                        metadata: {}
                    };
                }
            }
        },
        chungloais: {
            ui: {
                page: 1,
                perPage: 3,
                sort: {
                    ten: 1
                },
                orderProperty: '1',
                pageChanged: function(newPage) {
                    factory.settings.phanloais.chungloais.ui.page = newPage;
                },
                search: '',
                searchBy: 'ten',
                searchFields: [{
                    value: 'ten',
                    name: 'Tên chủng loại'
                }, {
                    value: 'ma',
                    name: 'Mã chủng loại'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'nguoi_tao',
                    name: 'Người tạo'
                }]
            },
            utils: {
                initParams: function(scope) {
                    scope.newChungLoai = {
                        isPublic: true,
                        isArchived: false,
                        metadata: {}
                    };
                }
            }
        },
        loais: {
            ui: {
                page: 1,
                perPage: 3,
                sort: {
                    ten: 1
                },
                orderProperty: '1',
                pageChanged: function(newPage) {
                    factory.settings.phanloais.loais.ui.page = newPage;
                },
                search: '',
                searchBy: 'ten',
                searchFields: [{
                    value: 'ten',
                    name: 'Tên loại'
                }, {
                    value: 'ma',
                    name: 'Mã loại'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: 'nguoi_tao',
                    name: 'Người tạo'
                }]
            },
            utils: {
                initParams: function(scope) {
                    scope.newLoai = {
                        isPublic: true,
                        isArchived: false,
                        metadata: {}
                    };
                }
            }
        }
    }

    factory.settings.donvies = {
        ui: {
            page: 1,
            perPage: 3,
            sort: {
                ten: 1
            },
            orderProperty: '1',
            pageChanged: function(newPage) {
                factory.settings.donvies.ui.page = newPage;
            },
            search: '',
            searchBy: 'ten',
            searchFields: [{
                value: 'ten',
                name: 'Tên đơn vị'
            }, {
                value: 'ma',
                name: 'Mã đơn vị'
            }, {
                value: 'mo_ta',
                name: 'Mô tả'
            }, {
                value: 'ghi_chu',
                name: 'Ghi chú'
            }, {
                value: 'nguoi_tao',
                name: 'Người tạo'
            }]
        },
        utils: {
            initParams: function(scope) {
                scope.newDonVi = {
                    isPublic: true,
                    isArchived: false,
                    metadata: {}
                };
            }
        }
    }

    factory.settings.diabans = {
        ui: {
            details: {
                isDisplayState_TinhThanh: false,
                isDisplayState_DiaPhuong: false,
                isOnOpenForm: false,
                setOpenFormState: function() {
                    factory.settings.diabans.ui.details.isOnOpenForm = factory.settings.diabans.ui.details.isDisplayState_TinhThanh || factory.settings.diabans.ui.details.isDisplayState_DiaPhuong;
                },
                toggleDisplayState: function(stateName) {
                    if (stateName === 'tinh_thanh') {
                        factory.settings.diabans.ui.details.isDisplayState_TinhThanh = !factory.settings.diabans.ui.details.isDisplayState_TinhThanh;
                        factory.settings.diabans.ui.details.setOpenFormState();
                    }
                    if (stateName === 'dia_phuong') {
                        factory.settings.diabans.ui.details.isDisplayState_DiaPhuong = !factory.settings.diabans.ui.details.isDisplayState_DiaPhuong;
                        factory.settings.diabans.ui.details.setOpenFormState();
                    }
                },
                setDisplayState: function(stateName, state) {
                    if (stateName === 'tinh_thanh') {
                        factory.settings.diabans.ui.details.isDisplayState_TinhThanh = state;
                        factory.settings.diabans.ui.details.setOpenFormState();
                    }
                    if (stateName === 'dia_phuong') {
                        factory.settings.diabans.ui.details.isDisplayState_DiaPhuong = state;
                        factory.settings.diabans.ui.details.setOpenFormState();
                    }
                    if (stateName === 'all') {
                        factory.settings.diabans.ui.details.isDisplayState_TinhThanh = state;
                        factory.settings.diabans.ui.details.isDisplayState_DiaPhuong = state;
                        factory.settings.diabans.ui.details.setOpenFormState();
                    }
                }
            },
            page: 1,
            perPage: 3,
            sort: {
                'dia_ban.ten': 1
            },
            orderProperty: '1',
            pageChanged: function(newPage) {
                factory.settings.diabans.ui.page = newPage;
            },
            search: '',
            searchBy: 'dia_ban.ten',
            searchFields: [{
                value: 'dia_ban.ten',
                name: 'Tên địa bàn'
            }, {
                value: 'dia_ban.ma',
                name: 'Mã địa bàn'
            }, {
                value: 'mo_ta',
                name: 'Mô tả'
            }, {
                value: 'ghi_chu',
                name: 'Ghi chú'
            }, {
                value: 'nguoi_tao',
                name: 'Người tạo'
            }]
        },

        utils: {
            initParams: function(scope) {
                scope.newDiaBan = {
                    dia_ban: {},
                    dia_phuong: {},
                    tinh_thanh: {},
                    isPublic: true,
                    isArchived: false,
                    metadata: {}
                };
            }
        }
    }

    factory.settings.quocgias = {
        ui: {
            page: 1,
            perPage: 3,
            sort: {
                ten: 1
            },
            orderProperty: '1',
            pageChanged: function(newPage) {
                factory.settings.quocgias.ui.page = newPage;
            },
            search: '',
            searchBy: 'ten',
            searchFields: [{
                value: 'ten',
                name: 'Tên quốc gia'
            }, {
                value: 'ma',
                name: 'Mã quốc gia'
            }, {
                value: 'name',
                name: 'Country name'
            }, {
                value: 'icon',
                name: 'Icon'
            }]
        },

        utils: {
            initParams: function(scope) {
                scope.newQuocGia = {
                    isPublic: true,
                    isArchived: false,
                    metadata: {}
                };
            }
        }
    }

    factory.settings.hangsanxuats = {
        ui: {
            page: 1,
            perPage: 3,
            sort: {
                ten: 1
            },
            orderProperty: '1',
            pageChanged: function(newPage) {
                factory.settings.hangsanxuats.ui.page = newPage;
            },
            search: '',
            searchBy: 'ten',
            searchFields: [{
                value: 'ten',
                name: 'Hãng sản xuất'
            }, {
                value: 'ma',
                name: 'Mã hãng sản xuất'
            }, {
                value: 'quoc_gia.ten',
                name: 'Quốc gia'
            }, {
                value: 'mo_ta',
                name: 'Mô tả'
            }, {
                value: 'ghi_chu',
                name: 'Ghi chú'
            }, {
                value: 'nguoi_tao',
                name: 'Người tạo'
            }]
        },

        utils: {
            initParams: function(scope) {
                scope.newHangSanXuat = {
                    isPublic: true,
                    isArchived: false,
                    metadata: {}
                };
            }
        }
    }

    factory.settings.modelthietbis = {
        ui: {
            page: 1,
            perPage: 3,
            sort: {
                ten: 1
            },
            orderProperty: '1',
            pageChanged: function(newPage) {
                factory.settings.modelthietbis.ui.page = newPage;
            },
            search: '',
            searchBy: 'ten',
            searchFields: [{
                value: 'ten',
                name: 'Tên model'
            }, {
                value: 'ma',
                name: 'Mã model'
            }, {
                value: 'hang_san_xuat.ten',
                name: 'Hãng sản xuất'
            }, {
                value: 'mo_ta',
                name: 'Mô tả'
            }, {
                value: 'ghi_chu',
                name: 'Ghi chú'
            }, {
                value: 'nguoi_tao',
                name: 'Người tạo'
            }]
        },

        utils: {
            initParams: function(scope) {
                scope.newModelThietBi = {
                    isPublic: true,
                    isArchived: false,
                    metadata: {}
                };
            }
        }
    }

    factory.settings.loaithongsokythuats = {
        ui: {
            page: 1,
            perPage: 3,
            sort: {
                ten: 1
            },
            orderProperty: '1',
            pageChanged: function(newPage) {
                factory.settings.loaithongsokythuats.ui.page = newPage;
            },
            search: '',
            searchBy: 'ten',
            searchFields: [{
                value: 'ten',
                name: 'Loại Thông Số'
            }, {
                value: 'don_vi',
                name: 'Đơn vị tính'
            }, {
                value: 'mo_ta',
                name: 'Mô tả'
            }, {
                value: 'ghi_chu',
                name: 'Ghi Chú'
            }, {
                value: 'icon',
                name: 'Icon'
            }, {
                value: 'nguoi_tao',
                name: 'Người tạo'
            }]
        },

        utils: {
            initParams: function(scope) {
                scope.newLoaiThongSoKyThuat = {
                    isPublic: true,
                    isArchived: false,
                    metadata: {}
                };
            }
        }
    }

    factory.settings.thietbis = {
        ui: {
            list: {
                general: {
                    page: 1,
                    perPage: 3,
                    sort: {
                        ten: 1
                    },
                    orderProperty: '1',
                    pageChanged: function(newPage) {
                        this.page = newPage;
                    },
                    search: '',
                    searchBy: 'ma_tb.ma_tb',
                    searchFields: [{
                        value: 'ma_tb.ma_tb',
                        name: 'Mã Thiết Bị'
                    }, {
                        value: 'mo_ta',
                        name: 'Mô tả'
                    }, {
                        value: 'ghi_chu',
                        name: 'Ghi Chú'
                    }, {
                        value: 'icon',
                        name: 'Icon'
                    }, {
                        value: 'nguoi_tao',
                        name: 'Người tạo'
                    }]
                },
                data: {
                    count: {
                        numOfNewLyLichThietBis: 0,
                        numOfNewRefImgs: 0,
                        numOfNewThongSoKyThuats: 0,
                        numOfNewDonViQuanLies: 1,
                        numOfNewDonViSoHuus: 1,
                    },
                    array: {
                        numOfNewLyLichThietBisArray: [],
                        numOfNewRefImgsArray: [],
                        numOfNewThongSoKyThuatsArray: [],
                        numOfNewDonViQuanLiesArray: [],
                        numOfNewDonViSoHuusArray: []
                    },
                    limit: {
                        max: {
                            numOfNewLyLichThietBis: 5,
                            numOfNewRefImgs: 5,
                            numOfNewThongSoKyThuats: 30,
                            numOfNewDonViQuanLies: 3,
                            numOfNewDonViSoHuus: 3
                        },
                        min: {
                            numOfNewLyLichThietBis: 0,
                            numOfNewRefImgs: 0,
                            numOfNewThongSoKyThuats: 0,
                            numOfNewDonViQuanLies: 1,
                            numOfNewDonViSoHuus: 1
                        }
                    },
                    resolveDataArray: function() {
                        this.array.numOfNewLyLichThietBisArray = _.range(this.count.numOfNewLyLichThietBis);
                        this.array.numOfNewRefImgsArray = _.range(this.count.numOfNewRefImgs);
                        this.array.numOfNewThongSoKyThuatsArray = _.range(this.count.numOfNewThongSoKyThuats);
                        this.array.numOfNewDonViQuanLiesArray = _.range(this.count.numOfNewDonViQuanLies);
                        this.array.numOfNewDonViSoHuusArray = _.range(this.count.numOfNewDonViSoHuus);
                    },
                    resetDataCount: function() {
                        this.count.numOfNewLyLichThietBis = 0;
                        this.count.numOfNewRefImgs = 0;
                        this.count.numOfNewThongSoKyThuats = 0;
                        this.count.numOfNewDonViQuanLies = 1;
                        this.count.numOfNewDonViSoHuus = 1;
                    },
                    initParams: function() {
                        this.newThietBi = {
                            ma_tb: {},
                            phan_loai: {
                                nhom: {},
                                chung_loai: {},
                                loai: {}
                            },
                            ho_so_tb: {
                                thong_tin_chung: {},
                                ly_lich_tb: [],
                                ref_img: []
                            },
                            thong_so_ky_thuat: [],
                            don_vi_quan_ly: [],
                            don_vi_so_huu: [],
                            metadata: {},
                            isPublic: true,
                            isArchived: false,
                            status: 'active'
                        }

                        if (this.isUseTemplate) {
                            angular.copy(this.newThietBiTemplate, this.newThietBi);
                        }

                        this.resetDataCount();
                        this.resolveDataArray();
                    },
                    isUseTemplate: true,
                    newThietBi: {},
                    newThietBiTemplate: {
                        ma_tb: {},
                        phan_loai: {
                            nhom: {},
                            chung_loai: {},
                            loai: {}
                        },
                        ho_so_tb: {
                            thong_tin_chung: {},
                            ly_lich_tb: [],
                            ref_img: []
                        },
                        thong_so_ky_thuat: [],
                        don_vi_quan_ly: [],
                        don_vi_so_huu: [],
                        metadata: {},
                        isPublic: true,
                        isArchived: false,
                        status: 'active'
                    },
                }
            },

            details: {
                general: {

                },
                data: {
                    limit: {
                        max: {
                            numOfLyLichThietBis: 5,
                            numOfRefImgs: 5,
                            numOfThongSoKyThuats: 30,
                            numOfDonViQuanLies: 3,
                            numOfDonViSoHuus: 3
                        },
                        min: {
                            numOfLyLichThietBis: 0,
                            numOfRefImgs: 0,
                            numOfThongSoKyThuats: 0,
                            numOfDonViQuanLies: 1,
                            numOfDonViSoHuus: 1
                        }
                    }
                }
            }
        }
    }

    factory.settings.thongkes = {
        ui: {
            list: {
                general: {
                    uiGrids: {
                        setAllColumnsProp: function(nameOfProp, value) {
                            _.each(this.columns, function(item) {
                                item[nameOfProp] = value;
                            });
                        },
                        defaultState: {
                            "columns": [{
                                "name": "ma_tb",
                                "visible": true,
                                "width": 100,
                                "sort": {
                                    "direction": "asc",
                                    "priority": 1
                                },
                                "filters": [{}]
                            }, {
                                "name": "ma_topx",
                                "visible": true,
                                "width": 100,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "ma_maximo",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "nhom",
                                "visible": false,
                                "width": 150,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "chung_loai",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "loai",
                                "visible": true,
                                "width": 80,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "hang_san_xuat",
                                "visible": true,
                                "width": 200,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "model_tb",
                                "visible": true,
                                "width": 100,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "nam_sx",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "nam_sd",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "so_giay_dang_kiem",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "so_giay_dang_ky",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "so_khung",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "so_may",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "xuat_xu",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "don_vi_quan_ly",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "ma_dvql",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "don_vi_so_huu",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "ma_dvsh",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "dia_ban",
                                "visible": true,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }, {
                                "name": "ma_dbhd",
                                "visible": false,
                                "width": 120,
                                "sort": {},
                                "filters": [{}]
                            }],
                            "scrollFocus": {},
                            "selection": [],
                            "grouping": {
                                "grouping": [],
                                "aggregations": [],
                                "rowExpandedStates": {}
                            },
                            "treeView": {}
                        },
                        columns: [{
                            name: 'ma_tb',
                            field: 'ma_tb.ma_tb',
                            sort: {
                                direction: uiGridConstants.ASC,
                                priority: 1
                            },
                            width: 100,
                            visible: true
                        }, {
                            name: 'ma_topx',
                            displayName: 'Mã TOPX',
                            field: 'ma_tb.ma_topx',
                            width: 100,
                            visible: true
                        }, {
                            name: 'ma_maximo',
                            displayName: 'Mã Maximo',
                            field: 'ma_tb.ma_maximo',
                            width: 120,
                            visible: false
                        }, {
                            name: 'nhom',
                            displayName: 'Nhóm',
                            field: 'phan_loai.nhom.ten',
                            width: 150,
                            visible: false
                        }, {
                            name: 'chung_loai',
                            displayName: 'Chủng Loại',
                            field: 'phan_loai.chung_loai.ten',
                            width: 120,
                            visible: true
                        }, {
                            name: 'loai',
                            displayName: 'Loại',
                            field: 'phan_loai.loai.ten',
                            width: 80,
                            visible: true
                        }, {
                            name: 'hang_san_xuat',
                            displayName: 'Hãng Sản Xuất',
                            field: 'ho_so_tb.thong_tin_chung.hang_san_xuat.ten',
                            width: 200,
                            visible: true
                        }, {
                            name: 'model_tb',
                            displayName: 'Model',
                            field: 'ho_so_tb.thong_tin_chung.model_tb.ten',
                            width: 100,
                            visible: true
                        }, {
                            name: 'nam_sx',
                            displayName: 'Năm SX',
                            field: 'ho_so_tb.thong_tin_chung.nam_sx',
                            width: 120,
                            visible: false
                        }, {
                            name: 'nam_sd',
                            displayName: 'Năm SD',
                            field: 'ho_so_tb.thong_tin_chung.nam_sd',
                            width: 120,
                            visible: true
                        }, {
                            name: 'so_giay_dang_kiem',
                            displayName: 'Số giấy đăng kiểm',
                            field: 'ho_so_tb.thong_tin_chung.so_giay_dang_kiem',
                            width: 120,
                            visible: true
                        }, {
                            name: 'so_giay_dang_ky',
                            displayName: 'Số giấy đăng ký',
                            field: 'ho_so_tb.thong_tin_chung.so_giay_dang_ky',
                            width: 120,
                            visible: true
                        }, {
                            name: 'so_khung',
                            displayName: 'Số khung',
                            field: 'ho_so_tb.thong_tin_chung.so_khung',
                            width: 120,
                            visible: false
                        }, {
                            name: 'so_may',
                            displayName: 'Số máy',
                            field: 'ho_so_tb.thong_tin_chung.so_may',
                            width: 120,
                            visible: false
                        }, {
                            name: 'xuat_xu',
                            displayName: 'Số khung',
                            field: 'ho_so_tb.thong_tin_chung.xuat_xu.ten',
                            width: 120,
                            visible: false
                        }, {
                            name: 'don_vi_quan_ly',
                            displayName: 'ĐV quản lý',
                            field: 'don_vi_quan_ly[0].ten',
                            width: 120,
                            visible: true
                        }, {
                            name: 'ma_dvql',
                            displayName: 'Mã ĐVQL',
                            field: 'don_vi_quan_ly[0].ma',
                            width: 120,
                            visible: false
                        }, {
                            name: 'don_vi_so_huu',
                            displayName: 'ĐV sở hữu',
                            field: 'don_vi_so_huu[0].ten',
                            width: 120,
                            visible: true
                        }, {
                            name: 'ma_dvsh',
                            displayName: 'Mã ĐVSH',
                            field: 'don_vi_so_huu[0].ma',
                            width: 120,
                            visible: false
                        }, {
                            name: 'dia_ban',
                            displayName: 'Địa bàn HĐ',
                            field: 'dia_ban_hoat_dong.dia_ban.ten',
                            width: 120,
                            visible: true
                        }, {
                            name: 'ma_dbhd',
                            displayName: 'Mã địa bàn',
                            field: 'dia_ban_hoat_dong.dia_ban.ma',
                            width: 120,
                            visible: false
                        }]
                    }
                },

                data: {

                }
            },

            utils: {

            }
        }
    }

    factory.settings.suachuas = {
        ui: {
            general: {
                calendar: {}
            },
            search: {
                sort: {
                    'thiet_bi.ma_tb.ma_tb': 1
                },
                orderProperty: '1',
                search: '',
                searchBy: 'thiet_bi.ma_tb.ma_tb',
                searchFields: [{
                    value: 'search_field',
                    name: 'Tất cả'
                }, {
                    value: '_ma_tb',
                    name: 'Mã thiết bị'
                }, {
                    value: 'noi_dung',
                    name: 'Nội dung'
                }, {
                    value: 'mo_ta',
                    name: 'Mô tả'
                }, {
                    value: 'ghi_chu',
                    name: 'Ghi chú'
                }, {
                    value: '_nguoi_tao',
                    name: 'Người tạo'
                }]
            }
        },
        utils: {
            initParams: function(scope) {
                scope.newSuaChua = {
                    thiet_bi: {},
                    phan_loai: {},
                    metadata: {}
                };
            }
        }
    }

    factory.settings.users = {
            ui: {
                list: {
                    search: {
                        sort: {
                            'emails.$.address': 1
                        },
                        orderProperty: '1',
                        search: '',
                        searchBy: 'profile.search_field',
                        searchFields: [{
                            value: 'profile.search_field',
                            name: 'Tất cả'
                        }, {
                            value: 'emails.$.address',
                            name: 'Email'
                        }, {
                            value: 'profile.name',
                            name: 'Tên người dùng'
                        }]
                    }
                }
            },
            utils: {

            }
        },

        factory.settings.accounts = {
            utils: {
                initParams: function(scope) {
                    scope.isLogin = true;
                    scope.isForgetPassword = false;
                }
            }
        }

    factory.helpers = {
        isLoggedIn: function() {
            return !!$rootScope.currentUser;
        },
        initUserSettings: function(userId) {
            var user = this.getUserById(userId);
            var newUserSettings = {
                userId: userId,
                metadata: {
                    ngay_tao: new Date(),
                    nguoi_tao: user._id,
                    nguoi_tao_email: user.emails[0].address
                },
                data: {
                    ui_grids: {
                        states: []
                    }
                }
            };
            if (user.profile && user.profile.name)
                newUserSettings.metadata.nguoi_tao_profile_name = user.profile.name;
            console.log('newUserSettings: ', newUserSettings);
            UserSettings.insert(newUserSettings, function(error, result) {
                if (error) {
                    console.log('Không thể tạo mới thiết lập cho người sử dụng. Error:', error);
                } else {
                    console.log('Khởi tạo các thiết lập cho người sử dụng thành công.', result);
                }
            });
        },
        resolveUser: function(userId) {
            if (!userId)
                return '[Vô danh]';
            if (!!$rootScope.currentUser) {
                var user = this.getUserById(userId);
                if (user._id === $rootScope.currentUser._id)
                    return 'Tôi';
            }
            return user;
        },
        getUserById: function(id) {
            var user = Meteor.users.findOne(id);
            if (!!user)
                return user;
            return;
        },
        validateUser: function(condition) {
            var error = {};
            console.log('Validating...');
            if (!!$rootScope.currentUser) {
                switch (condition) {
                    case 'can_upsert_phan_loai':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_phan_loai':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_phan_loai':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_loai_thong_so_ky_thuat':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_loai_thong_so_ky_thuat':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_loai_thong_so_ky_thuat':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_quoc_gia':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_quoc_gia':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_quoc_gia':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_hang_san_xuat':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_hang_san_xuat':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_hang_san_xuat':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_model_thiet_bi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_model_thiet_bi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_model_thiet_bi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_don_vi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_don_vi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_don_vi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_dia_ban':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_dia_ban':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_dia_ban':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_thiet_bi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_sync_thiet_bi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_thiet_bi':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_upsert_sua_chua':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager', 'manager-xemay', 'manager-tbn', 'manager-tau', 'manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_sua_chua':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin', 'super-manager', 'manager-xemay', 'manager-tbn', 'manager-tau', 'manager'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_update_role':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['manage-users', 'support-staff'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_force_reset_password':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    case 'can_delete_user':
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['manage-users', 'support-staff'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                        break;
                    default:
                        if (!Roles.userIsInRole($rootScope.currentUser._id, ['admin'], 'sky-project'))
                            error.message = 'Bạn không đủ quyền hạn để thực hiện chức năng này.';
                }
            } else
                error.message = 'Bạn cần đăng nhập để thực hiện chức năng này.';

            return error;
        }
    }

    return factory;
})
