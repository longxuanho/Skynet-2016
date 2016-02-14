Meteor.startup(function() {
    if (ThietBis.find().count() === 0) {
        var thietbis = [

            {
                "_id": "rngENTieQCLRowuPP",
                "ma_tb": {
                    "ma_tb": "Q01",
                    "ma_topx": "Q01",
                    "ma_maximo": "Q_01",
                    "ma_tb_field": ">ma_tb Q01 :>ma_topx Q01 :>ma_maximo Q_01 :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "ojMAP3j8XdPbtrfvF",
                        "ten": "Thiết bị nâng",
                        "ma": "TBN"
                    },
                    "chung_loai": {
                        "keyId": "Pp7JdWTYAuy8wA569",
                        "ten": "Cẩu bờ",
                        "ma": "STS"
                    },
                    "loai": {
                        "keyId": "PABBmdqYJPxxiMSFm",
                        "ten": "KE",
                        "ma": "KE"
                    },
                    "phan_loai_field": ">nhom ojMAP3j8XdPbtrfvF :>nhom Thiết bị nâng :>chung_loai Pp7JdWTYAuy8wA569 :>chung_loai Cẩu bờ :>loai PABBmdqYJPxxiMSFm :>loai KE :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "iS8F6jgxJiC84oeMy",
                            "ten": "Việt Nam",
                            "name": "Vietnam",
                            "ma": "VIE"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "2Adm62R4Bzsj7ghB5",
                            "ten": "Kranbau Eberswalde",
                            "ma": "KREB",
                            "quoc_gia": {
                                "keyId": "SED3mBiCnpHEcNS7h",
                                "ten": "Đức",
                                "name": "Germany",
                                "ma": "GER"
                            }
                        },
                        "model_tb": {

                        },
                        "nam_sx": 2002,
                        "nam_sd": 2002,
                        "so_khung": "213365",
                        "so_dang_ky": "KE01",
                        "so_dang_kiem": "19MT-1510",
                        "ho_so_tb_field": ">nam_sx 2002 :>nam_sd 2002 :>so_khung 213365 :>so_may undefined :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Kranbau Eberswalde :>model_tb undefined :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "fr8CJPdv3GMYoNZ3Z",
                    "ten": "Xí nghiệp Cơ giới",
                    "ma": "XNCG",
                    "phan_loai": "tct"
                },
                "don_vi_so_huu": {
                    "keyId": "wMb79JgwmKmKXJ5GT",
                    "ten": "Tổng Cty Tân Cảng Sài Gòn",
                    "ma": "TCT",
                    "phan_loai": "tct"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "dh3K9LAK5kf9M5XG4",
                    "ten": "Cảng Cát Lái",
                    "ma": "CLA",
                    "mien": "nam"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:20:04.792+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb Q01 :>ma_topx Q01 :>ma_maximo Q_01 :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng Cát Lái :>ma CLA : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu Tổng Cty Tân Cảng Sài Gòn :>don_vi_so_huu TCT :>don_vi_quan_ly Xí nghiệp Cơ giới :>don_vi_quan_ly XNCG :"
            }, {
                "_id": "i3exK4ApGyy9fK5ZY",
                "ma_tb": {
                    "ma_tb": "Q02",
                    "ma_topx": "Q02",
                    "ma_maximo": "Q_02",
                    "ma_tb_field": ">ma_tb Q02 :>ma_topx Q02 :>ma_maximo Q_02 :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "ojMAP3j8XdPbtrfvF",
                        "ten": "Thiết bị nâng",
                        "ma": "TBN"
                    },
                    "chung_loai": {
                        "keyId": "Pp7JdWTYAuy8wA569",
                        "ten": "Cẩu bờ",
                        "ma": "STS"
                    },
                    "loai": {
                        "keyId": "PABBmdqYJPxxiMSFm",
                        "ten": "KE",
                        "ma": "KE"
                    },
                    "phan_loai_field": ">nhom ojMAP3j8XdPbtrfvF :>nhom Thiết bị nâng :>chung_loai Pp7JdWTYAuy8wA569 :>chung_loai Cẩu bờ :>loai PABBmdqYJPxxiMSFm :>loai KE :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "iS8F6jgxJiC84oeMy",
                            "ten": "Việt Nam",
                            "name": "Vietnam",
                            "ma": "VIE"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "2Adm62R4Bzsj7ghB5",
                            "ten": "Kranbau Eberswalde",
                            "ma": "KREB",
                            "quoc_gia": {
                                "keyId": "SED3mBiCnpHEcNS7h",
                                "ten": "Đức",
                                "name": "Germany",
                                "ma": "GER"
                            }
                        },
                        "model_tb": {

                        },
                        "nam_sx": 2000,
                        "nam_sd": 2000,
                        "so_dang_kiem": "19MT-1504",
                        "ho_so_tb_field": ">nam_sx 2000 :>nam_sd 2000 :>so_khung  :>so_may undefined :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Kranbau Eberswalde :>model_tb undefined :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "BPnQiChRcifdWXepd",
                    "ten": "CP Tân Cảng 189 Hải Phòng",
                    "ma": "CP189",
                    "phan_loai": "cty_thanh_vien"
                },
                "don_vi_so_huu": {
                    "keyId": "wMb79JgwmKmKXJ5GT",
                    "ten": "Tổng Cty Tân Cảng Sài Gòn",
                    "ma": "TCT",
                    "phan_loai": "tct"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "ibGQsikM2XQeD2F8F",
                    "ten": "Cảng 189 Hải Phòng",
                    "ma": "189HP",
                    "mien": "bac"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:22:33.425+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb Q02 :>ma_topx Q02 :>ma_maximo Q_02 :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng 189 Hải Phòng :>ma 189HP : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu Tổng Cty Tân Cảng Sài Gòn :>don_vi_so_huu TCT :>don_vi_quan_ly CP Tân Cảng 189 Hải Phòng :>don_vi_quan_ly CP189 :"
            }, {
                "_id": "2mtapZn7s4i7irmjA",
                "ma_tb": {
                    "ma_tb": "Q18",
                    "ma_topx": "Q18",
                    "ma_maximo": "KOCK_18",
                    "ma_tb_field": ">ma_tb Q18 :>ma_topx Q18 :>ma_maximo KOCK_18 :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "ojMAP3j8XdPbtrfvF",
                        "ten": "Thiết bị nâng",
                        "ma": "TBN"
                    },
                    "chung_loai": {
                        "keyId": "Pp7JdWTYAuy8wA569",
                        "ten": "Cẩu bờ",
                        "ma": "STS"
                    },
                    "loai": {
                        "keyId": "jLuJk8BD8579uLLqv",
                        "ten": "KOCKs",
                        "ma": "KOCKS"
                    },
                    "phan_loai_field": ">nhom ojMAP3j8XdPbtrfvF :>nhom Thiết bị nâng :>chung_loai Pp7JdWTYAuy8wA569 :>chung_loai Cẩu bờ :>loai jLuJk8BD8579uLLqv :>loai KOCKs :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "iS8F6jgxJiC84oeMy",
                            "ten": "Việt Nam",
                            "name": "Vietnam",
                            "ma": "VIE"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "7W5kWACTwD6WanhDF",
                            "ten": "Kocks Krane GmbH",
                            "ma": "KOCK",
                            "quoc_gia": {
                                "keyId": "SED3mBiCnpHEcNS7h",
                                "ten": "Đức",
                                "name": "Germany",
                                "ma": "GER"
                            }
                        },
                        "model_tb": {

                        },
                        "nam_sx": 2011,
                        "nam_sd": 2011,
                        "so_dang_kiem": "19MT-2915",
                        "ho_so_tb_field": ">nam_sx 2011 :>nam_sd 2011 :>so_khung undefined :>so_may undefined :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Kocks Krane GmbH :>model_tb undefined :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "fr8CJPdv3GMYoNZ3Z",
                    "ten": "Xí nghiệp Cơ giới",
                    "ma": "XNCG",
                    "phan_loai": "tct"
                },
                "don_vi_so_huu": {
                    "keyId": "uc5oMNPXPKeyTSh9q",
                    "ten": "CP Đại lý Giao nhận vận tải",
                    "ma": "TCL",
                    "phan_loai": "cty_thanh_vien"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "dh3K9LAK5kf9M5XG4",
                    "ten": "Cảng Cát Lái",
                    "ma": "CLA",
                    "mien": "nam"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:24:35.287+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb Q18 :>ma_topx Q18 :>ma_maximo KOCK_18 :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng Cát Lái :>ma CLA : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu CP Đại lý Giao nhận vận tải :>don_vi_so_huu TCL :>don_vi_quan_ly Xí nghiệp Cơ giới :>don_vi_quan_ly XNCG :"
            }, {
                "_id": "ssHDCApv595tbLfZg",
                "ma_tb": {
                    "ma_tb": "QC40-01",
                    "ma_topx": "G01",
                    "ma_maximo": "QC40_01",
                    "ma_tb_field": ">ma_tb QC40-01 :>ma_topx G01 :>ma_maximo QC40_01 :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "ojMAP3j8XdPbtrfvF",
                        "ten": "Thiết bị nâng",
                        "ma": "TBN"
                    },
                    "chung_loai": {
                        "keyId": "x8H3qx9BTdx6cSwaP",
                        "ten": "Cẩu khung",
                        "ma": "CKH"
                    },
                    "loai": {
                        "keyId": "4WrPttrQicNnxgKxb",
                        "ten": "RTG 3+1",
                        "ma": "RTG3+1"
                    },
                    "phan_loai_field": ">nhom ojMAP3j8XdPbtrfvF :>nhom Thiết bị nâng :>chung_loai x8H3qx9BTdx6cSwaP :>chung_loai Cẩu khung :>loai 4WrPttrQicNnxgKxb :>loai RTG 3+1 :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "zBwtfe4ZcKqgrL4Ns",
                            "ten": "Mỹ",
                            "name": "America",
                            "ma": "USA"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "Nzqiodx7ZnTJRG8gK",
                            "ten": "Mi-Jack",
                            "ma": "MIJACK",
                            "quoc_gia": {
                                "keyId": "zBwtfe4ZcKqgrL4Ns",
                                "ten": "Mỹ",
                                "name": "America",
                                "ma": "USA"
                            }
                        },
                        "model_tb": {

                        },
                        "nam_sx": 1995,
                        "nam_sd": 1995,
                        "so_khung": "0718",
                        "so_may": "45.194.39",
                        "so_dang_kiem": "19MT-745",
                        "so_dang_ky": "QC40-01",
                        "ho_so_tb_field": ">nam_sx 1995 :>nam_sd 1995 :>so_khung 0718 :>so_may 45.194.39 :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Mi-Jack :>model_tb undefined :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "BPnQiChRcifdWXepd",
                    "ten": "CP Tân Cảng 189 Hải Phòng",
                    "ma": "CP189",
                    "phan_loai": "cty_thanh_vien"
                },
                "don_vi_so_huu": {
                    "keyId": "wMb79JgwmKmKXJ5GT",
                    "ten": "Tổng Cty Tân Cảng Sài Gòn",
                    "ma": "TCT",
                    "phan_loai": "tct"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "ibGQsikM2XQeD2F8F",
                    "ten": "Cảng 189 Hải Phòng",
                    "ma": "189HP",
                    "mien": "bac"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:30:02.902+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb QC40-01 :>ma_topx G01 :>ma_maximo QC40_01 :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng 189 Hải Phòng :>ma 189HP : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu Tổng Cty Tân Cảng Sài Gòn :>don_vi_so_huu TCT :>don_vi_quan_ly CP Tân Cảng 189 Hải Phòng :>don_vi_quan_ly CP189 :"
            }, {
                "_id": "jKjeApHpaXz73c4fE",
                "ma_tb": {
                    "ma_tb": "QC40-28",
                    "ma_topx": "G28",
                    "ma_maximo": "QC40_28",
                    "ma_tb_field": ">ma_tb QC40-28 :>ma_topx G28 :>ma_maximo QC40_28 :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "ojMAP3j8XdPbtrfvF",
                        "ten": "Thiết bị nâng",
                        "ma": "TBN"
                    },
                    "chung_loai": {
                        "keyId": "x8H3qx9BTdx6cSwaP",
                        "ten": "Cẩu khung",
                        "ma": "CKH"
                    },
                    "loai": {
                        "keyId": "vJeb6Tkzp4iWdBWSH",
                        "ten": "RTG 6+1",
                        "ma": "RTG6+1"
                    },
                    "phan_loai_field": ">nhom ojMAP3j8XdPbtrfvF :>nhom Thiết bị nâng :>chung_loai x8H3qx9BTdx6cSwaP :>chung_loai Cẩu khung :>loai vJeb6Tkzp4iWdBWSH :>loai RTG 6+1 :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "JcewYTSX2dx64YfDF",
                            "ten": "Chưa xác định",
                            "name": "Unknown",
                            "ma": "UNK"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "wxqCjHLKG2KShyn5k",
                            "ten": "Kalmar",
                            "ma": "KALM",
                            "quoc_gia": {
                                "keyId": "87kdPP3oKDAEms6y4",
                                "ten": "Phần Lan",
                                "name": "Finland",
                                "ma": "FIN"
                            }
                        },
                        "model_tb": {

                        },
                        "nam_sx": 2008,
                        "nam_sd": 2008,
                        "so_khung": "40.694",
                        "so_may": "79.959.552",
                        "so_dang_kiem": "19MT-2144",
                        "so_dang_ky": "QC 40-28",
                        "ho_so_tb_field": ">nam_sx 2008 :>nam_sd 2008 :>so_khung 40.694 :>so_may 79.959.552 :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Kalmar :>model_tb undefined :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "fr8CJPdv3GMYoNZ3Z",
                    "ten": "Xí nghiệp Cơ giới",
                    "ma": "XNCG",
                    "phan_loai": "tct"
                },
                "don_vi_so_huu": {
                    "keyId": "wMb79JgwmKmKXJ5GT",
                    "ten": "Tổng Cty Tân Cảng Sài Gòn",
                    "ma": "TCT",
                    "phan_loai": "tct"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "dh3K9LAK5kf9M5XG4",
                    "ten": "Cảng Cát Lái",
                    "ma": "CLA",
                    "mien": "nam"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:33:21.027+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb QC40-28 :>ma_topx G28 :>ma_maximo QC40_28 :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng Cát Lái :>ma CLA : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu Tổng Cty Tân Cảng Sài Gòn :>don_vi_so_huu TCT :>don_vi_quan_ly Xí nghiệp Cơ giới :>don_vi_quan_ly XNCG :"
            }, {
                "_id": "wC6cwmPwnuS6rBLeq",
                "ma_tb": {
                    "ma_tb": "NB125",
                    "ma_topx": "NB125",
                    "ma_tb_field": ">ma_tb NB125 :>ma_topx NB125 :>ma_maximo undefined :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "GWFPJCqZ65ksiLr3q",
                        "ten": "Xe - Máy",
                        "ma": "XMY"
                    },
                    "chung_loai": {
                        "keyId": "sDAch3okZgP8dhSEu",
                        "ten": "Đầu kéo",
                        "ma": "DKE"
                    },
                    "loai": {
                        "keyId": "PhNdchmynfjc33DtG",
                        "ten": "Đầu kéo nội bộ",
                        "ma": "DKNB"
                    },
                    "phan_loai_field": ">nhom GWFPJCqZ65ksiLr3q :>nhom Xe - Máy :>chung_loai sDAch3okZgP8dhSEu :>chung_loai Đầu kéo :>loai PhNdchmynfjc33DtG :>loai Đầu kéo nội bộ :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "JcewYTSX2dx64YfDF",
                            "ten": "Chưa xác định",
                            "name": "Unknown",
                            "ma": "UNK"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "Pi7HBfgpSmWhQfYFA",
                            "ten": "Terberg",
                            "ma": "TERB",
                            "quoc_gia": {
                                "keyId": "jQA22NKHKaw7wsA92",
                                "ten": "Hà Lan",
                                "name": "Netherlands",
                                "ma": "NLD"
                            }
                        },
                        "model_tb": {
                            "keyId": "r3fuqEYuAiLFwvHqz",
                            "ten": "YT180",
                            "ma": "YT180"
                        },
                        "nam_sx": 2007,
                        "nam_sd": 2007,
                        "ho_so_tb_field": ">nam_sx 2007 :>nam_sd 2007 :>so_khung undefined :>so_may undefined :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Terberg :>model_tb YT180 :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "fr8CJPdv3GMYoNZ3Z",
                    "ten": "Xí nghiệp Cơ giới",
                    "ma": "XNCG",
                    "phan_loai": "tct"
                },
                "don_vi_so_huu": {
                    "keyId": "wMb79JgwmKmKXJ5GT",
                    "ten": "Tổng Cty Tân Cảng Sài Gòn",
                    "ma": "TCT",
                    "phan_loai": "tct"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "dh3K9LAK5kf9M5XG4",
                    "ten": "Cảng Cát Lái",
                    "ma": "CLA",
                    "mien": "nam"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:36:19.208+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb NB125 :>ma_topx NB125 :>ma_maximo undefined :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng Cát Lái :>ma CLA : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu Tổng Cty Tân Cảng Sài Gòn :>don_vi_so_huu TCT :>don_vi_quan_ly Xí nghiệp Cơ giới :>don_vi_quan_ly XNCG :"
            }, {
                "_id": "FA54jA76RqaN63GZv",
                "ma_tb": {
                    "ma_tb": "NB162",
                    "ma_topx": "NB162",
                    "ma_tb_field": ">ma_tb NB162 :>ma_topx NB162 :>ma_maximo undefined :>ma_topovn undefined :"
                },
                "phan_loai": {
                    "nhom": {
                        "keyId": "GWFPJCqZ65ksiLr3q",
                        "ten": "Xe - Máy",
                        "ma": "XMY"
                    },
                    "chung_loai": {
                        "keyId": "sDAch3okZgP8dhSEu",
                        "ten": "Đầu kéo",
                        "ma": "DKE"
                    },
                    "loai": {
                        "keyId": "PhNdchmynfjc33DtG",
                        "ten": "Đầu kéo nội bộ",
                        "ma": "DKNB"
                    },
                    "phan_loai_field": ">nhom GWFPJCqZ65ksiLr3q :>nhom Xe - Máy :>chung_loai sDAch3okZgP8dhSEu :>chung_loai Đầu kéo :>loai PhNdchmynfjc33DtG :>loai Đầu kéo nội bộ :"
                },
                "ho_so_tb": {
                    "thong_tin_chung": {
                        "xuat_xu": {
                            "keyId": "JcewYTSX2dx64YfDF",
                            "ten": "Chưa xác định",
                            "name": "Unknown",
                            "ma": "UNK"
                        },
                        "bao_hanh": {
                            "isTrongThoiGianBaoHanh": false
                        },
                        "hang_san_xuat": {
                            "keyId": "LBAhK2oW3PY7rQpRR",
                            "ten": "Capacity",
                            "ma": "CAPA",
                            "quoc_gia": {
                                "keyId": "zBwtfe4ZcKqgrL4Ns",
                                "ten": "Mỹ",
                                "name": "America",
                                "ma": "USA"
                            }
                        },
                        "model_tb": {
                            "keyId": "xmYF2d2H8Qq2hE4e8",
                            "ten": "TJ9000",
                            "ma": "CAP-TJ9000"
                        },
                        "nam_sx": 2009,
                        "nam_sd": 2009,
                        "ho_so_tb_field": ">nam_sx 2009 :>nam_sd 2009 :>so_khung undefined :>so_may undefined :>so_giay_dang_ky undefined :>so_giay_dang_kiem undefined :>hang_san_xuat Capacity :>model_tb TJ9000 :"
                    }
                },
                "don_vi_quan_ly": {
                    "keyId": "fr8CJPdv3GMYoNZ3Z",
                    "ten": "Xí nghiệp Cơ giới",
                    "ma": "XNCG",
                    "phan_loai": "tct"
                },
                "don_vi_so_huu": {
                    "keyId": "wMb79JgwmKmKXJ5GT",
                    "ten": "Tổng Cty Tân Cảng Sài Gòn",
                    "ma": "TCT",
                    "phan_loai": "tct"
                },
                "dia_ban_hoat_dong": {
                    "keyId": "dh3K9LAK5kf9M5XG4",
                    "ten": "Cảng Cát Lái",
                    "ma": "CLA",
                    "mien": "nam"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T17:38:01.742+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ma_tb >ma_tb NB162 :>ma_topx NB162 :>ma_maximo undefined :>ma_topovn undefined : :>ho_so_tb undefined :>dia_ban_hoat_dong >ten Cảng Cát Lái :>ma CLA : :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "isPublic": true,
                "isArchived": false,
                "status": "Hoạt động",
                "don_vi_field": ">don_vi_so_huu Tổng Cty Tân Cảng Sài Gòn :>don_vi_so_huu TCT :>don_vi_quan_ly Xí nghiệp Cơ giới :>don_vi_quan_ly XNCG :"
            }

        ];

        _.each(thietbis, function(thietbi) {
            ThietBis.insert(thietbi);
            console.log('Added thietbi [' + thietbi.ma_tb.ma_tb + ']');
        });
    };
});
