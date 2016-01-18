Meteor.startup(function() {
    if (ChungLoais.find().count() === 0) {
        var chungloais = [
            /* 1 */
            {
                "_id": "Pp7JdWTYAuy8wA569",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T07:53:20.954Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>ten Cẩu bờ :>ma STS :>mo_ta Nhóm cẩu trục bốc xếp tàu - bờ, phục vụ tuyến tiền phương. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cẩu bờ",
                "ma": "STS",
                "mo_ta": "Nhóm cẩu trục bốc xếp tàu - bờ, phục vụ tuyến tiền phương.",
                "order": 1000
            },

            /* 2 */
            {
                "_id": "x8H3qx9BTdx6cSwaP",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T07:56:25.876Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>ten Cẩu khung :>ma CKH :>mo_ta Nhóm cẩu trục bốc xếp sử dụng bánh lốp hoặc chạy ray, hoạt động trên bãi. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cẩu khung",
                "ma": "CKH",
                "mo_ta": "Nhóm cẩu trục bốc xếp sử dụng bánh lốp hoặc chạy ray, hoạt động trên bãi.",
                "order": 1010
            },

            /* 3 */
            {
                "_id": "DCEeBTHsxa6vyPyqL",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:01:16.496Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>ten Xe nâng :>ma XNG :>mo_ta Nhóm phương tiện xe có khả năng nâng hạ và bốc xếp. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe nâng",
                "ma": "XNG",
                "mo_ta": "Nhóm phương tiện xe có khả năng nâng hạ và bốc xếp.",
                "order": 1020
            },

            /* 4 */
            {
                "_id": "Bv5PwXj9PK5K23JHk",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:06:02.931Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>ten Khung chụp rời :>ma KHC :>mo_ta Nhóm thiết bị ngáng chụp gắp container, được trang bị rời. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Khung chụp rời",
                "ma": "KHC",
                "mo_ta": "Nhóm thiết bị ngáng chụp gắp container, được trang bị rời.",
                "order": 1030
            },

            /* 5 */
            {
                "_id": "gcffKnWdAaqxJw4sm",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:07:59.379Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>ten Vận thăng :>ma VTH :>mo_ta Nhóm thiết bị thang máy gắn trên cẩu trục, được trang bị rời. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Vận thăng",
                "ma": "VTH",
                "mo_ta": "Nhóm thiết bị thang máy gắn trên cẩu trục, được trang bị rời.",
                "order": 1040
            },

            /* 6 */
            {
                "_id": "iEQQiM7aLmsf6Q4dE",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:10:17.223Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>ten TB nâng khác :>ma TBK :>mo_ta Các phương tiện khác thuộc ngành Thiết bị nâng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TB nâng khác",
                "ma": "TBK",
                "mo_ta": "Các nhóm phương tiện khác thuộc biên chế ngành Thiết bị nâng.",
                "order": 1050
            },

            /* 7 */
            {
                "_id": "sDAch3okZgP8dhSEu",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:21:10.962Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>ten Đầu kéo :>ma DKE :>mo_ta Nhóm phương tiện xe đầu kéo, chạy nội bộ hoặc chạy ngoài. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Đầu kéo",
                "ma": "DKE",
                "mo_ta": "Nhóm phương tiện xe đầu kéo, nội bộ hoặc chạy ngoài.",
                "order": 2000
            },

            /* 8 */
            {
                "_id": "dacecBCdvuScfCs3f",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:23:49.865Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>ten Xe tải/bán tải :>ma XTA :>mo_ta Nhóm xe tải hoặc bán tải vận chuyển hàng hóa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe tải/bán tải",
                "ma": "XTA",
                "mo_ta": "Nhóm xe tải hoặc bán tải vận chuyển hàng hóa.",
                "order": 2020
            },

            /* 9 */
            {
                "_id": "aoTAZYNS38LTmcXDd",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:25:48.922Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>ten Rơ móoc :>ma RMO :>mo_ta Nhóm phương tiện rơ móoc đỡ container, kèm theo xe đầu kéo. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Rơ móoc",
                "ma": "RMO",
                "mo_ta": "Nhóm phương tiện rơ móoc đỡ container, kèm theo xe đầu kéo.",
                "order": 2010
            },

            /* 10 */
            {
                "_id": "K8AGZHNzddiyrNMC5",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:26:45.451Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>ten Xe chuyên dụng :>ma XCD :>mo_ta Các nhóm phương tiện ngành xe được thiết kế với mục đích đặc thù. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe chuyên dụng",
                "ma": "XCD",
                "mo_ta": "Các nhóm phương tiện ngành xe được thiết kế với mục đích đặc thù.",
                "order": 2030
            },

            /* 11 */
            {
                "_id": "GK8haFvc4qbL3RJ7A",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:28:57.265Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>ten Xe du lịch :>ma XKH :>mo_ta Nhóm phương tiện xe phục vụ đi lại, công tác hoặc chuyên chở khách. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe du lịch",
                "ma": "XDL",
                "mo_ta": "Nhóm phương tiện xe phục vụ đi lại, công tác hoặc chuyên chở khách.",
                "order": 2040
            },

            /* 12 */
            {
                "_id": "ba6nhyETPh3zjZz33",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:32:54.720Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>ten Moto :>ma MTO :>mo_ta Nhóm phương tiện xe mô tô phục vụ tuần tra, kiểm soát cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Moto",
                "ma": "MTO",
                "mo_ta": "Nhóm phương tiện xe mô tô phục vụ tuần tra, kiểm soát cảng.",
                "order": 2050
            },

            /* 13 */
            {
                "_id": "TeGWAR3FwQqXGtxfz",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:36:08.193Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id TeGWAR3FwQqXGtxfz :>nhom Tàu thuyền :>ten Ca nô :>ma CNO :>mo_ta Nhóm phương tiện thủy phục vụ dẫn dẹp luồng, chở khách hoặc đưa tàu ra vào cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-30T08:53:29.890Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Ca nô",
                "ma": "CNO",
                "mo_ta": "Nhóm phương tiện thủy phục vụ dẫn dẹp luồng, chở khách hoặc đưa tàu ra vào cảng.",
                "order": 3000
            },

            /* 14 */
            {
                "_id": "nQcxm7b86onCJTgBn",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:37:11.725Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id nQcxm7b86onCJTgBn :>nhom Tàu thuyền :>ten Tàu kéo :>ma TKE :>mo_ta Nhóm phương tiện thủy phục vụ lai dắt tàu ra vào cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-30T08:54:41.593Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Tàu kéo",
                "ma": "TKE",
                "mo_ta": "Nhóm phương tiện thủy phục vụ lai dắt tàu ra vào cảng.",
                "order": 3020
            },

            /* 15 */
            {
                "_id": "Xp5pnS9c7jtz7DhsR",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:39:18.914Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id Xp5pnS9c7jtz7DhsR :>nhom Tàu thuyền :>ten Tàu khách :>ma TKH :>mo_ta Nhóm phương tiện thủy phục vụ chuyên chở khách. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-30T08:54:34.715Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Tàu khách",
                "ma": "TKH",
                "mo_ta": "Nhóm phương tiện thủy phục vụ chuyên chở khách.",
                "order": 3030
            },

            /* 16 */
            {
                "_id": "aoTq2CR2YCd5QbkWp",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:45:07.035Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id aoTq2CR2YCd5QbkWp :>nhom Tàu thuyền :>ten Sà lan :>ma SLN :>mo_ta Nhóm phương tiện thủy phục vụ chuyên chở container và hàng hóa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-30T08:54:20.970Z",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Sà lan",
                "ma": "SLN",
                "mo_ta": "Nhóm phương tiện thủy phục vụ chuyên chở container và hàng hóa.",
                "order": 3010
            },

            /* 17 */
            {
                "_id": "agoGoJoM4uGCTWRTc",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "pKgSncdwj445yFPB6",
                    "ten": "Trạm nguồn",
                    "ma": "TRM",
                    "icon": "Trạm nguồn"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:46:15.315Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Trạm nguồn :>ten Trạm nguồn :>ma TRM :>mo_ta Nhóm thiết bị máy phát phục vụ cung cấp điện năng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Trạm nguồn",
                "ma": "TRM",
                "mo_ta": "Nhóm thiết bị máy phát phục vụ cung cấp điện năng.",
                "order": 4000
            },

            /* 18 */
            {
                "_id": "aJJK54zFFcDnnbbc9",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "JwFK5covLdBSrouF6",
                    "ten": "TB Thanh Lý",
                    "ma": "THL"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T08:48:52.113Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom TB Thanh Lý :>ten TL: Đầu kéo :>ma TDK :>mo_ta Nhóm các phương tiện đầu kéo đang chờ thanh lý hoặc đã thanh lý. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TL: Đầu kéo",
                "ma": "TDK",
                "mo_ta": "Nhóm các phương tiện đầu kéo đang chờ thanh lý hoặc đã thanh lý.",
                "order": 5000
            }
        ];

        _.each(chungloais, function(chungloai) {
            ChungLoais.insert(chungloai);
            console.log('Added chungloai [' + chungloai.ten + ']');
        });
    };
});
