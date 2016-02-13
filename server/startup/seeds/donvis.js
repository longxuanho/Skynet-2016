Meteor.startup(function() {
    if (DonVis.find().count() === 0) {
        var donvis = [
            /* 1 */
            {
                "_id": "fdtMSXttJMbrRcbkW",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:01:42.019Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id fdtMSXttJMbrRcbkW :>ten CP Tân Cảng Bến Thành :>ma BNTH :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:35:44.359Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Tân Cảng Bến Thành",
                "phan_loai": "cty_thanh_vien",
                "ma": "BNTH"
            },

            /* 2 */
            {
                "_id": "ztkRbiddcDHkuNY9B",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:02:20.946Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng ITC Phú Hữu :>ma ITC :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng ITC Phú Hữu",
                "phan_loai": "cty_thanh_vien",
                "ma": "ITC"
            },

            /* 3 */
            {
                "_id": "ZeNzp9mjL7jHKc5KW",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:02:43.201Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Quốc tế Tân Cảng Cái Mép :>ma TCIT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Quốc tế Tân Cảng Cái Mép",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCIT"
            },

            /* 4 */
            {
                "_id": "HSDcBKRpdAwKLAWB7",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:03:08.169Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cty 15-03 :>ma 15-03 :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cty 15-03",
                "phan_loai": "cty_thanh_vien",
                "ma": "15-03"
            },

            /* 5 */
            {
                "_id": "DaghBSmjT8kGNLMmJ",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:04:01.709Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Cảng Quốc tế Cái Mép - Thị Vải ODA :>ma TCOT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Cảng Quốc tế Cái Mép - Thị Vải ODA",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCOT"
            },

            /* 6 */
            {
                "_id": "BwjAPqxRHykRqBbGh",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:04:20.722Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Dịch vụ biển :>ma TCO :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Dịch vụ biển",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCO"
            },

            /* 7 */
            {
                "_id": "AoZ7CeSFsHfDGZYMX",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:03:29.505Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id AoZ7CeSFsHfDGZYMX :>ten CP Cảng Cát Lái :>ma CPCL :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:04:33.336Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Cảng Cát Lái",
                "phan_loai": "cty_thanh_vien",
                "ma": "CPCL"
            },

            /* 8 */
            {
                "_id": "hegYcgRPYxumc8Tva",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:05:55.057Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Tân Cảng Cái Mép :>ma TCCT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Tân Cảng Cái Mép",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCCT"
            },

            /* 9 */
            {
                "_id": "wP8NAuCazeJQMLzTH",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:06:12.026Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Tân Cảng Miền Trung :>ma TCMT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Tân Cảng Miền Trung",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCMT"
            },

            /* 10 */
            {
                "_id": "PZPuuPjSWYSdW5kcg",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:06:28.268Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Xây dựng số Một :>ma XDSM :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Xây dựng số Một",
                "phan_loai": "cty_thanh_vien",
                "ma": "XDSM"
            },

            /* 11 */
            {
                "_id": "wiQteQJapemzuMcYE",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:34:54.158Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Phòng Hậu cần :>ma HAUC :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Phòng Hậu cần",
                "phan_loai": "tct",
                "ma": "HAUC"
            },

            /* 12 */
            {
                "_id": "fr8CJPdv3GMYoNZ3Z",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:37:45.966Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Xí nghiệp Cơ giới :>ma XNCG :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xí nghiệp Cơ giới",
                "phan_loai": "tct",
                "ma": "XNCG"
            },

            /* 13 */
            {
                "_id": "wMb79JgwmKmKXJ5GT",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:38:04.246Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tổng Cty Tân Cảng Sài Gòn :>ma TCT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tổng Cty Tân Cảng Sài Gòn",
                "ma": "TCT",
                "phan_loai": "tct"
            },

            /* 14 */
            {
                "_id": "ioxmSwLYiSLwkgBPJ",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:07:41.032Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten ICD Long Bình :>ma ICDLB :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ICD Long Bình",
                "phan_loai": "cty_thanh_vien",
                "ma": "ICDLB"
            },

            /* 15 */
            {
                "_id": "xPPmf9CqvhvikAGck",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:07:55.034Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten ICD Sóng Thần :>ma ICDST :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ICD Sóng Thần",
                "phan_loai": "cty_thanh_vien",
                "ma": "ICDST"
            },

            /* 16 */
            {
                "_id": "8igLyRmLnRZQeMKLb",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:08:51.505Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Tân Cảng 128 Hải Phòng :>ma CP128 :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Tân Cảng 128 Hải Phòng",
                "phan_loai": "cty_thanh_vien",
                "ma": "CP128"
            },

            /* 17 */
            {
                "_id": "BPnQiChRcifdWXepd",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:09:06.233Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Tân Cảng 189 Hải Phòng :>ma CP189 :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Tân Cảng 189 Hải Phòng",
                "phan_loai": "cty_thanh_vien",
                "ma": "CP189"
            },

            /* 18 */
            {
                "_id": "am4dhYi84pwKWsDN8",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:09:38.745Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Bình Dương :>ma TVBD :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Bình Dương",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVBD"
            },

            /* 19 */
            {
                "_id": "cq6Pv2vXy5qDzpZLm",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:09:52.524Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Cát Lái :>ma TVCL :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Cát Lái",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVCL"
            },

            /* 20 */
            {
                "_id": "kcSZPB497aMCJ5Kj2",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:10:12.353Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Đồng Nai :>ma TVDN :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Đồng Nai",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVDN"
            },

            /* 21 */
            {
                "_id": "EefuuEw6eWyGpYgMy",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:09:21.850Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id EefuuEw6eWyGpYgMy :>ten CP Tân Cảng Hiệp Phước :>ma TCHP :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:10:34.033Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Tân Cảng Hiệp Phước",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCHP"
            },

            /* 22 */
            {
                "_id": "JTspgA4EFRPQ6AbGt",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:11:29.233Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Hiệp Phước :>ma TVHP :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Hiệp Phước",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVHP"
            },

            /* 23 */
            {
                "_id": "t7NqgFkAD6nva95wE",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:11:45.664Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Long Bình :>ma TVLB :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Long Bình",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVLB"
            },

            /* 24 */
            {
                "_id": "a8hpSdxzSrouWxntD",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:12:01.960Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Mekong :>ma TVMK :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Mekong",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVMK"
            },

            /* 25 */
            {
                "_id": "jcdJGooZQFnyE6XWa",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:12:21.083Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Miền Bắc :>ma TVMB :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Miền Bắc",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVMB"
            },

            /* 26 */
            {
                "_id": "iAkESWYA2BkBCT98G",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:12:33.073Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tiếp vận Vũng Tàu :>ma TVVT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tiếp vận Vũng Tàu",
                "phan_loai": "cty_thanh_vien",
                "ma": "TVVT"
            },

            /* 27 */
            {
                "_id": "uNtHM2ChW4QJi9mYh",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:14:37.537Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Vận tải bộ :>ma VTB :>ten_quoc_te undefined :>ten_viet_tat  :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Vận tải bộ",
                "phan_loai": "cty_thanh_vien",
                "ma": "VTB"
            },

            /* 28 */
            {
                "_id": "yoSRafTBuMkTWL8S6",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:14:52.348Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Vận tải thủy :>ma VTT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Vận tải thủy",
                "phan_loai": "cty_thanh_vien",
                "ma": "VTT"
            },

            /* 29 */
            {
                "_id": "QqKbiezQ68kPvHGyC",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:15:10.313Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Xây dựng công trình :>ma XDCT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xây dựng công trình",
                "phan_loai": "cty_thanh_vien",
                "ma": "XDCT"
            },

            /* 30 */
            {
                "_id": "ubWo4gWhdkdTEKqhC",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:15:53.994Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Dầu Thực Vật :>ma CDTV :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Dầu Thực Vật",
                "phan_loai": "cty_thanh_vien",
                "ma": "CDTV"
            },

            /* 31 */
            {
                "_id": "AA6mbu5Arem25biEn",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:25:36.394Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Đầu tư và Phát triển hạ tầng Tân Cảng :>ma DTPT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Đầu tư và Phát triển hạ tầng Tân Cảng",
                "phan_loai": "cty_thanh_vien",
                "ma": "DTPT"
            },

            /* 32 */
            {
                "_id": "Q3nNu6hQqFn4kM3QS",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:26:07.434Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten CP Vận tải biển :>ma TCSS :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CP Vận tải biển",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCSS"
            },

            /* 33 */
            {
                "_id": "FXgGYCNYTFchfCx9a",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:26:23.417Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten DIC :>ma DIC :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "DIC",
                "phan_loai": "cty_thanh_vien",
                "ma": "DIC"
            },

            /* 34 */
            {
                "_id": "sJTuC4gkRhLFMQ9GY",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:26:50.329Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Hoa tiêu Tân Cảng :>ma HOAT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Hoa tiêu Tân Cảng",
                "phan_loai": "cty_thanh_vien",
                "ma": "HOAT"
            },

            /* 35 */
            {
                "_id": "uc5oMNPXPKeyTSh9q",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:06:50.392Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id uc5oMNPXPKeyTSh9q :>ten CP Đại lý Giao nhận vận tải :>ma TCL :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:31:54.386Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Đại lý Giao nhận vận tải",
                "phan_loai": "cty_thanh_vien",
                "ma": "TCL"
            },

            /* 36 */
            {
                "_id": "bhk8KzHgooC5cmFjb",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:07:09.734Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id bhk8KzHgooC5cmFjb :>ten CP Dịch vụ hàng hải :>ma DVHH :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:32:32.690Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Dịch vụ hàng hải",
                "phan_loai": "cty_thanh_vien",
                "ma": "DVHH"
            },

            /* 37 */
            {
                "_id": "xWTw5EW6JNxvoTnEa",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:07:22.354Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id xWTw5EW6JNxvoTnEa :>ten CP Dịch vụ Kỹ thuật :>ma DVKT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:33:23.249Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Dịch vụ Kỹ thuật",
                "phan_loai": "cty_thanh_vien",
                "ma": "DVKT"
            },

            /* 38 */
            {
                "_id": "nNGzaZ6Nwr45Hzc2j",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:08:11.488Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id nNGzaZ6Nwr45Hzc2j :>ten CP Kho vận Tân Cảng :>ma KVTC :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T11:33:49.450Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CP Kho vận Tân Cảng",
                "phan_loai": "cty_thanh_vien",
                "ma": "KVTC"
            },

            /* 39 */
            {
                "_id": "tZeDYwoB7Rqcnh4CG",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:34:22.159Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Phòng An toàn Pháp chế :>ma ATPC :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Phòng An toàn Pháp chế",
                "phan_loai": "tct",
                "ma": "ATPC"
            },

            /* 40 */
            {
                "_id": "3x5BQ7WDRqKD7Rrc4",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T11:38:25.937Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten P. Kỹ thuật Vật tư :>ma KTVT :>ten_quoc_te undefined :>ten_viet_tat undefined :>mo_ta undefined :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "P. Kỹ thuật Vật tư",
                "phan_loai": "tct",
                "ma": "KTVT"
            }
        ];

        _.each(donvis, function(donvi) {
            DonVis.insert(donvi);
            console.log('Added donvi [' + donvi.ten + ']');
        });
    };
});
