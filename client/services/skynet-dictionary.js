angular.module('angular-skynet').factory('skynetDictionary', function($meteor, $rootScope) {
    var factory = {};


    // ***************************************************
    // DATA
    // ***************************************************

    factory.data = {
        "thietbis": {
            "thong_so_ky_thuat": {
                    "nhom_thong_so_ky_thuat": [
                        "Điều kiện làm việc",
                        "Kích thước thiết kế",
                        "Phân cấp cần trục",
                        "Tải trọng",
                        "Tầm với",
                        "Tốc độ",
                        "Trọng lượng"
                    ],
                    "nhom_thong_so_voi_gia_tri_text": [
                        "Phân cấp cần trục"
                    ],
                    "thong_so_dict": {
                        "STS": {
                            "Tải trọng": {
                                "text": [
                                    "Tải trọng khi hoạt động với gàu",
                                    "Tải trọng khi hoạt động với khung chụp",
                                    "Tải trọng khi hoạt động với móc",
                                    "Tải trọng làm việc",
                                    "Tải trọng lớn nhất trên bánh xe trong điều kiện bình thường",
                                    "Tải trọng lớn nhất trên bánh xe trong điều kiện chịu gió bão"
                                ],
                                "measure": [
                                    "tấn",
                                    "KN"
                                ]
                            },
                            "Tầm với": {
                                "text": [
                                    "Bán kính hoạt động tối đa",
                                    "Bán kính hoạt động tối thiểu",
                                    "Tầm với tối đa",
                                    "Tầm với tối thiểu",
                                    "Tầm với phía nước",
                                    "Tầm với phía bờ"
                                ],
                                "measure": [
                                    "m"
                                ]
                            },
                            "Trọng lượng": {
                                "text": [
                                    "Trọng lượng cần trục",
                                    "Trọng lượng các cấu kiện rời",
                                    "Trọng lượng đế nối"
                                ],
                                "measure": [
                                    "tấn",
                                    "kg"
                                ]
                            },
                            "Kích thước thiết kế": {
                                "text": [
                                    "Chiều cao nâng",
                                    "Chiều sâu hạ",
                                    "Góc xoay",
                                    "Hành trình xe tời",
                                    "Khẩu độ ray",
                                    "Khoảng cách bánh xe xe tời",
                                    "Khoảng cách giữa hai khung cổng trục",
                                    "Khoảng cách ray xe tời",
                                    "Tổng chiều cao"
                                ],
                                "measure": [
                                    "m",
                                    "độ"
                                ]
                            },
                            "Điều kiện làm việc": {
                                "text": [
                                    "Độ ẩm tối đa cho phép",
                                    "Nhiệt độ cao nhất",
                                    "Nhiệt độ thấp nhất",
                                    "Tốc độ gió tối đa cho phép trong thời gian làm việc"
                                ],
                                "measure": [
                                    "m/s",
                                    "°C",
                                    "%"
                                ]
                            },
                            "Tốc độ": {
                                "text": [
                                    "Thời gian nâng cần",
                                    "Vận tốc di chuyển dài cần trục",
                                    "Vận tốc di chuyển xe tời khi có tải",
                                    "Vận tốc di chuyển xe tời khi không tải",
                                    "Vận tốc nâng không tải",
                                    "Vận tốc nâng với tải 20 tấn",
                                    "Vận tốc nâng với tải 40 tấn",
                                    "Vận tốc xoay"
                                ],
                                "measure": [
                                    "giây",
                                    "m/phút",
                                    "vòng/phút"
                                ]
                            },
                            "Phân cấp cần trục": {
                                "text": [
                                    "Cơ cấu nâng cần",
                                    "Cơ cấu nâng hàng",
                                    "Cơ cấu xoay cần",
                                    "Kết cấu thép",
                                    "Toàn bộ cần trục"
                                ],
                                "measure": [
                                ]
                            }
                        }
                    }
            }
        },
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
                                "ten": "Thiết bị nâng"
                            }, {
                                "ma": "tau_thuyen",
                                "ten": "Tàu thuyền"
                            }, {
                                "ma": "tram_nguon",
                                "ten": "Trạm nguồn"
                            }, {
                                "ma": "xe_may",
                                "ten": "Xe máy"
                            }
                        ],
                        "loai_tbs": {
                            "thiet_bi_nang": [
                                {
                                    "ma": "ke_kock",
                                    "ten": "KE / KOCK"
                                }, {
                                    "ma": "kock_cm",
                                    "ten": "KOCK Cái Mép"
                                }, {
                                    "ma": "liebherr",
                                    "ten": "Liebherr"
                                }, {
                                    "ma": "mj_50",
                                    "ten": "Mijack-50"
                                }, {
                                    "ma": "mj_850p",
                                    "ten": "Mijack-850P"
                                }, {
                                    "ma": "rtg_6+1",
                                    "ten": "RTG 6+1"
                                }, {
                                    "ma": "xn_hang",
                                    "ten": "Xe nâng hàng"
                                }, {
                                    "ma": "xn_kho",
                                    "ten": "Xe nâng kho"
                                }, {
                                    "ma": "tat_ca",
                                    "ten": "Tất cả"
                                }

                            ]
                        },
                        "nhom_cau_hois": [
                            {
                                "ma": "an_toan",
                                "ten_ngan": "An toàn",
                                "ten": "An toàn và Quy định",
                                "mo_ta": "Các câu hỏi về ATLĐ và các Quy định trong quá trình vận hành của TCT"
                            }, {
                                "ma": "cum_chi_tiet",
                                "ten_ngan": "Cụm CT",
                                "ten": "Các cụm chi tiết",
                                "mo_ta": "Các câu hỏi về các cụm chi tiết của phương tiện"
                            }, {
                                "ma": "dien_co_so",
                                "ten_ngan": "Điện cơ sở",
                                "ten": "Điện cơ sở",
                                "mo_ta": "Các câu hỏi về kiến thức cơ sở chuyên ngành Điện"
                            }, {
                                "ma": "kiem_tra_bao_duong",
                                "ten_ngan": "KT - BD",
                                "ten": "Kiểm tra - Bảo dưỡng",
                                "mo_ta": "Các câu hỏi về kiểm tra phương tiện và bảo dưỡng"
                            }, {
                                "ma": "tong_quat",
                                "ten_ngan": "Tổng quát",
                                "ten": "Kiến thức tổng quát",
                                "mo_ta": "Các câu hỏi về hàng hóa - phương tiện - kỹ thuật cơ bản"
                            }, {
                                "ma": "van_hanh",
                                "ten_ngan": "Vận hành",
                                "ten": "Kỹ năng vận hành",
                                "mo_ta": "Các câu hỏi về kỹ năng vận hành phương tiện"
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
                            "An toàn",
                            "Bạc đạn",
                            "Bánh xe",
                            "Bảo dưỡng",
                            "Bộ truyền BR",
                            "Bơm",
                            "Cảm biến",
                            "Cáp",
                            "Con lăn",
                            "Cụm CT",
                            "Điện cơ bản",
                            "Động cơ",
                            "Giới hạn",
                            "Gù",
                            "Hàng hóa",
                            "Hộp giảm tốc",
                            "Kẹp ray",
                            "Khớp nối từ",
                            "Khung chụp",
                            "Kiểm tra",
                            "KT chung",
                            "Pa lăng",
                            "Phanh",
                            "Quy trình",
                            "Thông số KT",
                            "Tiêu chuẩn",
                            "Vận hành",
                            "Xe tời" 
                        ]
                    }    
                }
            }
            
        }

    }

    return factory;

});
