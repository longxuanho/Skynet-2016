angular.module('angular-skynet').factory('skynetDictionary', function($meteor, $rootScope) {
    var factory = {};


    // ***************************************************
    // DATA
    // ***************************************************

    factory.data = {
        "nganhangcauhois": {
            "lops": [
                {
                    "ma": "ky_thuat",
                    "ten": "Kỹ thuật"
                }
            ],
            "phan_lops": [
                {
                    "ma": "trac_nghiem",
                    "ten": "Trắc nghiệm"
                },
                {
                    "ma": "tu_luan",
                    "ten": "Tự luận"
                },
            ],
            "status": [
                "Active",
                "Draft"
            ], 
            "data": {
                "ky_thuat": {
                    "trac_nghiem": {
                        "kieu_cau_hois": [
                            {
                                "ma": "chon_dung_sai",
                                "ten": "Lựa chọn đúng / sai"
                            }, {
                                "ma": "mot_dap_an_dung",
                                "ten": "Một đáp án đúng"
                            }, {
                                "ma": "nhieu_dap_an_dung",
                                "ten": "Nhiều đáp án đúng"
                            }
                        ],
                        "nhom_tbs": [
                            {
                                "ma": "thiet_bi_nang",
                                "ten": "Thiết bị nâng",
                                "order": 1
                            }, {
                                "ma": "xe_may",
                                "ten": "Xe - Máy",
                                "order": 2
                            }, {
                                "ma": "tau_thuyen",
                                "ten": "Tàu thuyền",
                                "order": 3
                            } 
                        ],
                        "loai_tbs": {
                            "thiet_bi_nang": [
                                "KE / KOCK",
                                "KOCK Cái Mép",
                                "Liebherr",
                                "Mijack-50",
                                "Mijack-850P",
                                "RTG 6+1",
                                "Xe nâng hàng",
                                "Xe nâng kho",
                                "Tất cả"
                            ]
                        },
                        "nhom_cau_hois": [
                            {
                                "ma": "an_toan",
                                "ten_ngan": "An toàn",
                                "ten": "An toàn và Quy định",
                                "mo_ta": "Các câu hỏi về ATLĐ và các Quy định trong quá trình vận hành của TCT",
                                "icon": "&#xE8E8;",
                                "order": 4
                            }, {
                                "ma": "cum_chi_tiet",
                                "ten_ngan": "Cụm CT",
                                "ten": "Các cụm chi tiết",
                                "mo_ta": "Các câu hỏi về các cụm chi tiết của phương tiện",
                                "icon": "&#xE8B8;",
                                "order": 1
                            }, {
                                "ma": "dien_co_so",
                                "ten_ngan": "Điện cơ sở",
                                "ten": "Điện cơ sở",
                                "mo_ta": "Các câu hỏi về kiến thức cơ sở chuyên ngành Điện",
                                "icon": "&#xE90F;",
                                "order": 5
                            }, {
                                "ma": "kiem_tra_bao_duong",
                                "ten_ngan": "KT - BD",
                                "ten": "Kiểm tra - Bảo dưỡng",
                                "mo_ta": "Các câu hỏi về kiểm tra phương tiện và bảo dưỡng",
                                "icon": "&#xE065;",  //&#xE14F; ;
                                "order": 3
                            }, {
                                "ma": "tong_quat",
                                "ten_ngan": "Tổng quát",
                                "ten": "Kiến thức tổng quát",
                                "mo_ta": "Các câu hỏi về hàng hóa - phương tiện - kỹ thuật cơ bản",
                                "icon": "&#xE616;", //"&#xE065;",
                                "order": 0
                            }, {
                                "ma": "van_hanh",
                                "ten_ngan": "Vận hành",
                                "ten": "Kỹ năng vận hành",
                                "mo_ta": "Các câu hỏi về kỹ năng vận hành phương tiện",
                                "icon": "&#xE637;", //&#xE0DA;
                                "order": 2
                            } 
                        ],
                        "bac_this": [
                            "Bậc 1",
                            "Bậc 2",
                            "Bậc 3",
                            "Bậc 4"
                        ],
                        "muc_dos": [
                            {
                                "ma": "easy",
                                "ten": "Dễ"
                            }, {
                                "ma": "medium",
                                "ten": "Trung bình"
                            }, {
                                "ma": "hard",
                                "ten": "Khó"
                            }
                        ],
                        "tags": [
                            {
                                ten: "An toàn",
                                group: " Nội dung"
                            }, {
                                ten: "Bảo dưỡng",
                                group: " Nội dung"
                            }, {
                                ten: "Cụm máy",
                                group: " Nội dung"
                            }, {
                                ten: "Điện cơ bản",
                                group: " Nội dung"
                            }, {
                                ten: "Giới hạn",
                                group: " Nội dung"
                            }, {
                                ten: "Hàng hóa",
                                group: " Nội dung"
                            }, {
                                ten: "Kiểm tra",
                                group: " Nội dung"
                            }, {
                                ten: "Kiến thức chung",
                                group: " Nội dung"
                            }, {
                                ten: "Quy định",
                                group: " Nội dung"
                            }, {
                                ten: "Quy trình",
                                group: " Nội dung"
                            }, {
                                ten: "Thông số KT",
                                group: " Nội dung"
                            }, {
                                ten: "Tiêu chuẩn",
                                group: " Nội dung"
                            }, {
                                ten: "Vận hành",
                                group: " Nội dung"
                            }, {
                                ten: "Bạc đạn",
                                group: "Cụm CT"
                            }, {
                                ten: "Bánh xe",
                                group: "Cụm CT"
                            }, {
                                ten: "Bộ truyền BR",
                                group: "Cụm CT"
                            }, {
                                ten: "Bơm",
                                group: "Cụm CT"
                            }, {
                                ten: "Cảm biến",
                                group: "Cụm CT"
                            }, {
                                ten: "Cáp",
                                group: "Cụm CT"
                            }, {
                                ten: "Con lăn",
                                group: "Cụm CT"
                            }, {
                                ten: "CC di chuyển",
                                group: "Cụm CT"
                            }, {
                                ten: "CC tời nâng",
                                group: "Cụm CT"
                            }, {
                                ten: "Động cơ",
                                group: "Cụm CT"
                            }, {
                                ten: "Gù",
                                group: "Cụm CT"
                            }, {
                                ten: "Hộp giảm tốc",
                                group: "Cụm CT"
                            }, {
                                ten: "Kẹp ray",
                                group: "Cụm CT"
                            }, {
                                ten: "Khớp nối từ",
                                group: "Cụm CT"
                            }, {
                                ten: "Khung chụp",
                                group: "Cụm CT"
                            }, {
                                ten: "Pa lăng",
                                group: "Cụm CT"
                            }, {
                                ten: "Phanh",
                                group: "Cụm CT"
                            }, {
                                ten: "Xe tời",
                                group: "Cụm CT"
                            }
                        ]
                    }    
                }
            }
        },
        "suachuas": {
            "nhom_tbs": [
                {
                    "ten": "Thiết bị nâng",
                    "ma": "thiet_bi_nang"
                }, {
                    "ten": "Xe - máy",
                    "ma": "xe_may"
                }, {
                    "ten": "Tàu thuyền",
                    "ma": "tau_thuyen"
                }
            ],
            "loai_sua_chuas": [
                {
                    "ten": "Sửa chữa nhỏ",
                    "ma": "sua_chua_nho"
                }, {
                    "ten": "Sửa chữa cụm",
                    "ma": "sua_chua_cum"
                }, {
                    "ten": "Sửa chữa lớn",
                    "ma": "sua_chua_lon"
                }, {
                    "ten": "Đại tu phương tiện",
                    "ma": "dai_tu"
                }, {
                    "ten": "Kiểm tra",
                    "ma": "kiem_tra"
                }
            ],
            trang_thais: [
                {
                    "ten": "Đang sửa chữa",
                    "ten_ngan": "Đang SC",
                    "ma": "Đang sửa chữa"
                }, {
                    "ten": "Hoàn thành",
                    "ten_ngan": "Hoàn thành",
                    "ma": "Sửa chữa xong"
                }
            ]
        },
        "xuongdvkt": {
            "nhom_tbs": [
                "Thiết bị nâng",
                "Xe - máy",
                "Tàu thuyền"
            ],
            "loai_tbs": {
                "Xe - máy": [
                    "Đầu kéo chạy ngoài",
                    "Đầu kéo nội bộ",
                    "Rơ móoc",
                    "Xe bus nội bộ",
                    "Xe chuyên dụng",
                    "Xe tải / bán tải",
                    "Thiết bị khác"
                ]
            },
            "loai_sua_chuas": [
                "Sửa chữa nhỏ",
                "Sửa chữa cụm",
                "Sửa chữa lớn",
                "Sơn",
                "Đại tu",
                "Kiểm tra",
                "Kiểm định"
            ],
            "khu_vucs": [
                "Khu A",
                "Khu B",
                "Khu C",
                "Khu D",
                "Khu E",
                "Khu F"
            ],
            "vi_tris": {
                "Khu A": [  "A1:01", "A1:02", "A1:03", "A1:04", "A1:05", "A1:06", "A1:07",
                            "A2:01", "A2:02", "A2:03", "A2:04", "A2:05", "A2:06", "A2:07",
                            "A3:01", "A3:02", "A3:03", "A3:04", "A3:05", "A3:06", "A3:07", "A3:08", "A3:09", "A3:10", "A3:11"
                    ],
                "Khu B": [ "B01", "B02", "B03", "B04", "B05" ],
                "Khu C": [ "C01", "C02", "C03", "C04", "C05" ],
                "Khu D": [ "D01", "D02", "D03", "D04" ],
                "Khu E": [ "E01", "E02" ],
                "Khu F": [ "F01", "F02", "F03", "F04" ]
            },
            "trang_thais": [
                "Đang sửa chữa",
                "Chuẩn bị bàn giao",
                "Sửa chữa xong",
                "Ngừng sửa chữa"
            ]
        },
    }

    return factory;

});
