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
                                "order": 4
                            }, {
                                "ma": "cum_chi_tiet",
                                "ten_ngan": "Cụm CT",
                                "ten": "Các cụm chi tiết",
                                "mo_ta": "Các câu hỏi về các cụm chi tiết của phương tiện",
                                "order": 1
                            }, {
                                "ma": "dien_co_so",
                                "ten_ngan": "Điện cơ sở",
                                "ten": "Điện cơ sở",
                                "mo_ta": "Các câu hỏi về kiến thức cơ sở chuyên ngành Điện",
                                "order": 5
                            }, {
                                "ma": "kiem_tra_bao_duong",
                                "ten_ngan": "KT - BD",
                                "ten": "Kiểm tra - Bảo dưỡng",
                                "mo_ta": "Các câu hỏi về kiểm tra phương tiện và bảo dưỡng",
                                "order": 3
                            }, {
                                "ma": "tong_quat",
                                "ten_ngan": "Tổng quát",
                                "ten": "Kiến thức tổng quát",
                                "mo_ta": "Các câu hỏi về hàng hóa - phương tiện - kỹ thuật cơ bản",
                                "order": 0
                            }, {
                                "ma": "van_hanh",
                                "ten_ngan": "Vận hành",
                                "ten": "Kỹ năng vận hành",
                                "mo_ta": "Các câu hỏi về kỹ năng vận hành phương tiện",
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
                }
            ],
            "loai_tbs": [
                {
                    "ten": "Đầu kéo chạy ngoài",
                    "ma": "dau_keo_chay_ngoai",
                    "group": "xe_may"
                }, {
                    "ten": "Đầu kéo nội bộ",
                    "ma": "dau_keo_noi_bo",
                    "group": "xe_may"
                }, {
                    "ten": "Rơ móoc",
                    "ma": "ro_mooc",
                    "group": "xe_may"
                }, {
                    "ten": "Xe bus nội bộ",
                    "ma": "xe_bus_noi_bo",
                    "group": "xe_may"
                }
            ],
            "ma_tbs": [
                {
                    "ma_tb": "NB100",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "NB101",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "NB102",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "NB103",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "NB104",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "NB105",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "NB106",
                    "group": "dau_keo_noi_bo"
                }, {
                    "ma_tb": "CP189-01",
                    "group": "dau_keo_chay_ngoai"
                }, {
                    "ma_tb": "CP189-02",
                    "group": "dau_keo_chay_ngoai"
                }, {
                    "ma_tb": "CPCL16",
                    "group": "dau_keo_chay_ngoai"
                }, {
                    "ma_tb": "CPCL17",
                    "group": "dau_keo_chay_ngoai"
                }, {
                    "ma_tb": "KC01",
                    "group": "dau_keo_chay_ngoai"
                }, {
                    "ma_tb": "KC02",
                    "group": "dau_keo_chay_ngoai"
                }, {
                    "ma_tb": "NO-07",
                    "group": "xe_bus_noi_bo"
                }, {
                    "ma_tb": "NO-08",
                    "group": "xe_bus_noi_bo"
                }, {
                    "ma_tb": "NO-09",
                    "group": "xe_bus_noi_bo"
                }, {
                    "ma_tb": "NO-10",
                    "group": "xe_bus_noi_bo"
                }, {
                    "ma_tb": "R-50R-0010",
                    "group": "ro_mooc"
                }, {
                    "ma_tb": "R-51R-00070",
                    "group": "ro_mooc"
                }, {
                    "ma_tb": "R-51R-00074",
                    "group": "ro_mooc"
                }, {
                    "ma_tb": "R-51R-00159",
                    "group": "ro_mooc"
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
            "khu_vucs": [
                {
                    ten: "Khu A",
                    ma: "zone_a"
                }, {
                    ten: "Khu B",
                    ma: "zone_b"
                }, {
                    ten: "Khu C",
                    ma: "zone_c"
                }, {
                    ten: "Khu D",
                    ma: "zone_d"
                }, {
                    ten: "Khu E",
                    ma: "zone_e"
                }
            ], 
            // "vi_tris": [
            //     {
            //         "ten": "A01",
            //         "ma": "A01",
            //         group: "zone_a"
            //     }, {
            //         "ten": "A02",
            //         "ma": "A02",
            //         group: "zone_a"
            //     }, {
            //         "ten": "A03",
            //         "ma": "A03",
            //         group: "zone_a"
            //     }, {
            //         "ten": "A04",
            //         "ma": "A04",
            //         group: "zone_a"
            //     }, {
            //         "ten": "A05",
            //         "ma": "A05",
            //         group: "zone_a"
            //     }, {
            //         "ten": "A06",
            //         "ma": "A06",
            //         group: "zone_a"
            //     }, {
            //         "ten": "B01",
            //         "ma": "B01",
            //         group: "zone_b"
            //     }, {
            //         "ten": "B02",
            //         "ma": "B02",
            //         group: "zone_b"
            //     },{
            //         "ten": "B03",
            //         "ma": "B03",
            //         group: "zone_b"
            //     },{
            //         "ten": "C01",
            //         "ma": "C01",
            //         group: "zone_c"
            //     },{
            //         "ten": "C02",
            //         "ma": "C02",
            //         group: "zone_c"
            //     },{
            //         "ten": "C03",
            //         "ma": "C03",
            //         group: "zone_c"
            //     }
            // ],
            "vi_tris": {
                'zone_a': [
                    "A01",
                    "A02",
                    "A03",
                    "A04",
                    "A05"
                ],
                'zone_b': [
                    "B01",
                    "B02",
                    "B03",
                    "B04",
                    "B05"
                ],
                'zone_c': [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05"
                ]
            },
            tags: {
                "dau_keo_chay_ngoai": [
                    "Ắc quy",
                    "Bánh xe",
                    "Bình nhiên liệu",
                    "Bộ phận khởi động",
                    "Cần gạt nước",
                    "Dây đai",
                    "Điều hòa",
                    "Động cơ",
                    "Hộp số",
                    "Kính chắn gió",
                    "Lốp xe",
                    "Ống xả",
                    "Phanh"
                ],
                "dau_keo_noi_bo": [
                    "Ắc quy",
                    "Bánh xe",
                    "Bình nhiên liệu",
                    "Bộ phận khởi động",
                    "Cần gạt nước",
                    "Dây đai",
                    "Điều hòa",
                    "Động cơ",
                    "Hộp số",
                    "Kính chắn gió",
                    "Lốp xe",
                    "Ống xả",
                    "Phanh"
                ]
            }, 
            trang_thais: [
                {
                    "ten": "Đang sửa chữa",
                    "ma": "dang_sua_chua"
                }, {
                    "ten": "Hoàn thành",
                    "ma": "hoan_thanh"
                }, {
                    "ten": "Ngừng sửa chữa",
                    "ma": "ngung_sua_chua"
                }
            ]
        }
    }

    return factory;

});
