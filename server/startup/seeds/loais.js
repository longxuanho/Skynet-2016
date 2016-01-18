Meteor.startup(function() {
    if (Loais.find().count() === 0) {
        var loais = [

            /* 1 */
            {
                "_id": "PABBmdqYJPxxiMSFm",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T09:48:50.011Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu bờ :>ten KE :>ma KE :>mo_ta Các phương tiện cẩu bờ do hãng Kranbau Eberswalde sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "KE",
                "mo_ta": "Các phương tiện cẩu bờ do hãng Kranbau Eberswalde sản xuất.",
                "ma": "KE",
                "order": 1000
            },

            /* 2 */
            {
                "_id": "jLuJk8BD8579uLLqv",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T09:50:08.731Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu bờ :>ten KOCKs :>ma KOCKS :>mo_ta Các phương tiện cẩu bờ do hãng Kocks Krane GmbH sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "KOCKs",
                "ma": "KOCKS",
                "mo_ta": "Các phương tiện cẩu bờ do hãng Kocks Krane GmbH sản xuất.",
                "order": 1010
            },

            /* 3 */
            {
                "_id": "hwKKpuwzzoge8NLDu",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T09:52:45.366Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu bờ :>ten Liebherr ray :>ma LBR :>mo_ta Các phương tiện cẩu bờ chạy ray do hãng Liebherr sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Liebherr ray",
                "ma": "LBR",
                "mo_ta": "Các phương tiện cẩu bờ chạy ray do hãng Liebherr sản xuất.",
                "order": 1020
            },

            /* 4 */
            {
                "_id": "GKZDxjZrdJGYYEHhF",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T09:53:50.425Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu bờ :>ten Liebherr cố định :>ma LBCD :>mo_ta Các phương tiện cẩu bờ gắn cố định do hãng Liebherr sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Liebherr cố định",
                "ma": "LBCD",
                "mo_ta": "Các phương tiện cẩu bờ gắn cố định do hãng Liebherr sản xuất.",
                "order": 1030
            },

            /* 5 */
            {
                "_id": "Ru5kvJSZ4DWFf849K",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T12:48:10.519Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu bờ :>ten Mitsui :>ma MITS :>mo_ta Các phương tiện cẩu bờ do hãng Mitsui sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mitsui",
                "ma": "MITS",
                "mo_ta": "Các phương tiện cẩu bờ do hãng Mitsui sản xuất.",
                "order": 1040
            },

            /* 6 */
            {
                "_id": "gWmvGTz95iy8ne8L2",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T12:49:44.912Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu bờ :>ten ZPMC :>ma ZPMC :>mo_ta Các phương tiện cẩu bờ do hãng ZPMC sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ZPMC",
                "ma": "ZPMC",
                "mo_ta": "Các phương tiện cẩu bờ do hãng ZPMC sản xuất.",
                "order": 1050
            },

            /* 7 */
            {
                "_id": "4WrPttrQicNnxgKxb",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T12:57:14.857Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu khung :>ten RTG 3+1 :>ma RTG3+1 :>mo_ta Các phương tiện cẩu khung bánh lốp với kích thước (3 tầng + 1 hàng). :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "RTG 3+1",
                "ma": "RTG3+1",
                "mo_ta": "Các phương tiện cẩu khung bánh lốp với kích thước (3 tầng + 1 hàng).",
                "order": 2000
            },

            /* 8 */
            {
                "_id": "vJeb6Tkzp4iWdBWSH",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T12:58:48.001Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu khung :>ten RTG 6+1 :>ma RTG6+1 :>mo_ta Các phương tiện cẩu khung bánh lốp với kích thước (6 tầng + 1 hàng). :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ma": "RTG6+1",
                "ten": "RTG 6+1",
                "mo_ta": "Các phương tiện cẩu khung bánh lốp với kích thước (6 tầng + 1 hàng).",
                "order": 2010
            },

            /* 9 */
            {
                "_id": "PgsyDjqYGqQc3Wugz",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T12:59:56.289Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Cẩu khung :>ten RMG :>ma RMG :>mo_ta Các phương tiện cẩu khung chạy ray do Đài Loan sản xuất. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "RMG",
                "ma": "RMG",
                "mo_ta": "Các phương tiện cẩu khung chạy ray do Đài Loan sản xuất.",
                "order": 2020
            },

            /* 10 */
            {
                "_id": "wuaDTsFLG8npXW8jd",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "DCEeBTHsxa6vyPyqL",
                    "ten": "Xe nâng",
                    "ma": "XNG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:04:02.982Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Xe nâng :>ten Xe nâng hàng :>ma XNH :>mo_ta Các xe nâng container (có hàng), sức nâng có thể đạt tới 40T. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe nâng hàng",
                "ma": "XNH",
                "mo_ta": "Các xe nâng container (có hàng), sức nâng có thể đạt tới 40T.",
                "order": 3000
            },

            /* 11 */
            {
                "_id": "FxTEYjiyxngHdDyBd",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "DCEeBTHsxa6vyPyqL",
                    "ten": "Xe nâng",
                    "ma": "XNG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:11:32.658Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Xe nâng :>ten Xe nâng rỗng :>ma XNR :>mo_ta Các xe nâng container (rỗng), sức nâng tối đa không vượt quá 15T. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe nâng rỗng",
                "ma": "XNR",
                "mo_ta": "Các xe nâng container (rỗng), sức nâng tối đa không vượt quá 15T.",
                "order": 3010
            },

            /* 12 */
            {
                "_id": "8uW5FJq7hsPjzWJPd",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "DCEeBTHsxa6vyPyqL",
                    "ten": "Xe nâng",
                    "ma": "XNG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:13:24.912Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Xe nâng :>ten Xe nâng kho :>ma XNK :>mo_ta Các xe nâng cỡ nhỏ có càng, phục vụ bốc xếp hàng hóa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe nâng kho",
                "mo_ta": "Các xe nâng cỡ nhỏ có càng, phục vụ bốc xếp hàng hóa.",
                "ma": "XNK",
                "order": 3020
            },

            /* 13 */
            {
                "_id": "9hXakyoLYLknpDMyD",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "Bv5PwXj9PK5K23JHk",
                    "ten": "Khung chụp rời",
                    "ma": "KHC"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:15:14.814Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Khung chụp rời :>ten Khung chụp 20 ft :>ma KCH20 :>mo_ta Các ngáng chụp rời gắp container với khẩu độ 20 ft. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Khung chụp 20 ft",
                "ma": "KCH20",
                "mo_ta": "Các ngáng chụp rời gắp container với khẩu độ 20 ft.",
                "order": 4000
            },

            /* 14 */
            {
                "_id": "QQg6MXf9w7jey4mwE",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "Bv5PwXj9PK5K23JHk",
                    "ten": "Khung chụp rời",
                    "ma": "KHC"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:17:21.091Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai Khung chụp rời :>ten Khung chụp 40 ft :>ma KCH40 :>mo_ta Các ngáng chụp rời gắp container với khẩu độ 40 ft. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Khung chụp 40 ft",
                "ma": "KCH40",
                "mo_ta": "Các ngáng chụp rời gắp container với khẩu độ 40 ft.",
                "order": 4010
            },

            /* 15 */
            {
                "_id": "2FTLQJi67XHmbucMc",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:19:21.344Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Xe thang :>ma XTH :>mo_ta Các phương tiện xe có gắn thang phục vụ quá trình sửa chữa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe thang",
                "ma": "XTH",
                "mo_ta": "Các phương tiện xe có gắn thang phục vụ quá trình sửa chữa.",
                "order": 5000
            },

            /* 16 */
            {
                "_id": "BKNnk5WyFf9GLYPqZ",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:20:39.807Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Xe phục vụ sửa chữa :>ma XPVSC :>mo_ta Các phương tiện xe chuyên dụng phục vụ quá trình sửa chữa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe phục vụ sửa chữa",
                "ma": "XPVSC",
                "mo_ta": "Các phương tiện xe chuyên dụng phục vụ quá trình sửa chữa.",
                "order": 5010
            },

            /* 17 */
            {
                "_id": "JbYm5bNkKshZfG3nA",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:22:18.223Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Cầu trục xưởng :>ma CTRX :>mo_ta Thiết bị cầu trục lắp đặt trong nhà xưởng phục vụ di dời các chi tiết máy. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cầu trục xưởng",
                "ma": "CTRX",
                "mo_ta": "Thiết bị cầu trục lắp đặt trong nhà xưởng phục vụ di dời các chi tiết máy.",
                "order": 5020
            },

            /* 18 */
            {
                "_id": "YjEKSDBmemxhfwvwM",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:26:55.425Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Cẩu ô tô :>ma COTO :>mo_ta Thiết bị cẩu trục ô tô. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cẩu ô tô",
                "ma": "COTO",
                "mo_ta": "Thiết bị cẩu trục ô tô.",
                "order": 5030
            },

            /* 19 */
            {
                "_id": "Ryy4nk3sd6mHFcPWP",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:28:27.888Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Cẩu bánh xích :>ma CBX :>mo_ta Thiết bị cẩu trục chạy trên bánh xích. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cẩu bánh xích",
                "ma": "CBX",
                "mo_ta": "Thiết bị cẩu trục chạy trên bánh xích.",
                "order": 5040
            },

            /* 20 */
            {
                "_id": "7ZQsxqemqnNZoDnC4",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:28:56.721Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Cẩu bánh lốp :>ma CBL :>mo_ta Thiết bị cẩu trục chạy trên bánh lốp. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cẩu bánh lốp",
                "ma": "CBL",
                "mo_ta": "Thiết bị cẩu trục chạy trên bánh lốp.",
                "order": 5050
            },

            /* 21 */
            {
                "_id": "Dfah67eZhxQ9LyQT2",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "ojMAP3j8XdPbtrfvF",
                    "ten": "Thiết bị nâng",
                    "ma": "TBN"
                },
                "chung_loai": {
                    "keyId": "iEQQiM7aLmsf6Q4dE",
                    "ten": "TB nâng khác",
                    "ma": "TBK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:30:36.880Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Thiết bị nâng :>chung_loai TB nâng khác :>ten Cẩu bonton :>ma CBTN :>mo_ta Thiết bị cẩu trục nổi đặt trên bonton. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cẩu bonton",
                "ma": "CBTN",
                "mo_ta": "Thiết bị cẩu trục nổi đặt trên bonton.",
                "order": 5060
            },

            /* 22 */
            {
                "_id": "FCBz7RkD4S7PBe3iK",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "chung_loai": {
                    "keyId": "TeGWAR3FwQqXGtxfz",
                    "ten": "Ca nô",
                    "ma": "CNO"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:34:28.122Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Tàu thuyền :>chung_loai Ca nô :>ten Ca nô :>ma CNO :>mo_ta Các phương tiện thủy phục vụ dẫn dẹp luồng, chở khách hoặc đưa tàu ra vào cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "mo_ta": "Các phương tiện thủy phục vụ dẫn dẹp luồng, chở khách hoặc đưa tàu ra vào cảng.",
                "ma": "CNO",
                "ten": "Ca nô",
                "order": 6000
            },

            /* 23 */
            {
                "_id": "GFFCeQRs2BJJ37K2D",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "chung_loai": {
                    "keyId": "aoTq2CR2YCd5QbkWp",
                    "ten": "Sà lan",
                    "ma": "SLN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:35:22.445Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Tàu thuyền :>chung_loai Sà lan :>ten Sà lan :>ma SLN :>mo_ta Các phương tiện thủy phục vụ chuyên chở container và hàng hóa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Sà lan",
                "ma": "SLN",
                "mo_ta": "Các phương tiện thủy phục vụ chuyên chở container và hàng hóa.",
                "order": 6010
            },

            /* 24 */
            {
                "_id": "Fr3bMLAJu5mjHdnrn",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "chung_loai": {
                    "keyId": "nQcxm7b86onCJTgBn",
                    "ten": "Tàu kéo",
                    "ma": "TKE"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:35:56.745Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Tàu thuyền :>chung_loai Tàu kéo :>ten Tàu kéo :>ma TKE :>mo_ta Các phương tiện thủy phục vụ lai dắt tàu ra vào cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tàu kéo",
                "ma": "TKE",
                "mo_ta": "Các phương tiện thủy phục vụ lai dắt tàu ra vào cảng.",
                "order": 6020
            },

            /* 25 */
            {
                "_id": "iH5DLqmoH9nyH7vin",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "CvxBqhuSaqhhNDKeE",
                    "ten": "Tàu thuyền",
                    "ma": "TTH"
                },
                "chung_loai": {
                    "keyId": "Xp5pnS9c7jtz7DhsR",
                    "ten": "Tàu khách",
                    "ma": "TKH"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:36:57.732Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Tàu thuyền :>chung_loai Tàu khách :>ten Tàu khách :>ma TKH :>mo_ta Các phương tiện thủy phục vụ chuyên chở khách. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tàu khách",
                "ma": "TKH",
                "mo_ta": "Các phương tiện thủy phục vụ chuyên chở khách.",
                "order": 6030
            },

            /* 26 */
            {
                "_id": "rqQFqvz2BQSigADWQ",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "pKgSncdwj445yFPB6",
                    "ten": "Trạm nguồn",
                    "ma": "TRM",
                    "icon": "Trạm nguồn"
                },
                "chung_loai": {
                    "keyId": "agoGoJoM4uGCTWRTc",
                    "ten": "Trạm nguồn",
                    "ma": "TRM"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:40:28.571Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Trạm nguồn :>chung_loai Trạm nguồn :>ten Máy phát :>ma MPH :>mo_ta Các thiết bị máy phát phục vụ cung cấp điện năng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Máy phát",
                "ma": "MPH",
                "mo_ta": "Các thiết bị máy phát phục vụ cung cấp điện năng.",
                "order": 7000
            },

            /* 27 */
            {
                "_id": "PhNdchmynfjc33DtG",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T13:43:25.668Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Đầu kéo :>ten Đầu kéo nội bộ :>ma DKNB :>mo_ta Các phương tiện xe đầu kéo phục vụ chuyên chở container hoạt động trong cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Đầu kéo nội bộ",
                "ma": "DKNB",
                "mo_ta": "Các phương tiện xe đầu kéo phục vụ chuyên chở container hoạt động trong cảng.",
                "order": 8000
            },

            /* 28 */
            {
                "_id": "ap4ZJThbwPyHMfAdp",
                "isPublic": true,
                "isArchived": false,
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
                "metadata": {
                    "ngay_tao": "2015-12-30T13:45:35.650Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Đầu kéo :>ten Đầu kéo chạy ngoài :>ma DKCN :>mo_ta Các phương tiện xe đầu kéo chuyên chở container chạy ngoài cảng, cung cấp dịch vụ logistics. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Đầu kéo chạy ngoài",
                "ma": "DKCN",
                "mo_ta": "Các phương tiện xe đầu kéo chuyên chở container hoạt động bên ngoài cảng, cung cấp các dịch vụ logistics.",
                "order": 8010
            },

            /* 29 */
            {
                "_id": "tWfgDwLFbR32wGLwb",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "aoTAZYNS38LTmcXDd",
                    "ten": "Rơ móoc",
                    "ma": "RMO"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:49:22.713Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Rơ móoc :>ten Rơ móoc 20 ft :>ma RM20 :>mo_ta Thiết bị móoc gắn theo xe đầu kéo, kích thước đặt container 20 ft. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Rơ móoc 20 ft",
                "ma": "RM20",
                "mo_ta": "Thiết bị móoc gắn theo xe đầu kéo, kích thước đặt container 20 ft.",
                "order": 9000
            },

            /* 30 */
            {
                "_id": "yDaRJ93PcJMSHYnXq",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "aoTAZYNS38LTmcXDd",
                    "ten": "Rơ móoc",
                    "ma": "RMO"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:50:42.304Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Rơ móoc :>ten Rơ móoc 40 ft :>ma RM40 :>mo_ta Thiết bị móoc gắn theo xe dầu kéo, kích thước đặt container 40 ft. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Rơ móoc 40 ft",
                "ma": "RM40",
                "mo_ta": "Thiết bị móoc gắn theo xe dầu kéo, kích thước đặt container 40 ft.",
                "order": 9010
            },

            /* 31 */
            {
                "_id": "C5SmTdxiSMpXhgNBr",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "aoTAZYNS38LTmcXDd",
                    "ten": "Rơ móoc",
                    "ma": "RMO"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T13:52:52.376Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Rơ móoc :>ten Rơ móoc 45 ft :>ma RM45 :>mo_ta Thiết bị móoc gắn theo xe đầu kéo, kích thước đặt container quá khổ 45 ft. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Rơ móoc 45 ft",
                "ma": "RM45",
                "mo_ta": "Thiết bị móoc gắn theo xe đầu kéo, kích thước đặt container quá khổ 45 ft.",
                "order": 9020
            },

            /* 32 */
            {
                "_id": "uMc5WdN2q79N4qgsj",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "dacecBCdvuScfCs3f",
                    "ten": "Xe tải/bán tải",
                    "ma": "XTA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T14:52:10.723Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe tải/bán tải :>ten Xe tải :>ma XTAI :>mo_ta Các phương tiện phục vụ vận chuyển hàng hóa với tải trọng trên 750 kg. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe tải",
                "ma": "XTAI",
                "mo_ta": "Các phương tiện phục vụ vận chuyển hàng hóa với tải trọng trên 750 kg.",
                "order": 10000
            },

            /* 33 */
            {
                "_id": "NK6eSrgcJRy8ZDWAq",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "dacecBCdvuScfCs3f",
                    "ten": "Xe tải/bán tải",
                    "ma": "XTA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T14:53:40.075Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe tải/bán tải :>ten Xe bán tải :>ma XBTAI :>mo_ta Dòng xe lai giữa xe du lịch và xe tải, phục vụ vận chuyển hàng hóa. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe bán tải",
                "ma": "XBTAI",
                "mo_ta": "Dòng xe lai giữa xe du lịch và xe tải, phục vụ vận chuyển hàng hóa.",
                "order": 10010
            },

            /* 34 */
            {
                "_id": "cAPRX5xGxq4sJri98",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T14:59:58.460Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe khách nội bộ :>ma XKNB :>mo_ta Các phương tiện phục vụ chuyên chở khách hàng trong nội bộ cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe khách nội bộ",
                "ma": "XKNB",
                "mo_ta": "Các phương tiện phục vụ chuyên chở khách hàng trong nội bộ cảng.",
                "order": 11000
            },

            /* 35 */
            {
                "_id": "4eXR7LGAmGTzYP66N",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:01:21.150Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe cứu hỏa :>ma XCH :>mo_ta Các phương tiện phục vụ công tác phòng cháy chữa cháy. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe cứu hỏa",
                "ma": "XCH",
                "mo_ta": "Các phương tiện phục vụ công tác phòng cháy chữa cháy.",
                "order": 11010
            },

            /* 36 */
            {
                "_id": "mxp8tSNBPKAHpaSxZ",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:05:03.216Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe phục vụ cứu hỏa :>ma XPVCH :>mo_ta Các phương tiện chuyên chở dụng cụ phục vụ công tác phòng cháy chữa cháy. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe phục vụ cứu hỏa",
                "ma": "XPVCH",
                "mo_ta": "Các phương tiện chuyên chở dụng cụ phục vụ công tác phòng cháy chữa cháy.",
                "order": 11020
            },

            /* 37 */
            {
                "_id": "QZebj5bsFpk6eeixw",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:06:51.886Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe chỉ huy :>ma XCH :>mo_ta Các xe chuyên dùng trong quân đội, phục vụ chuyên chở các cán bộ chỉ huy. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe chỉ huy",
                "ma": "XCH",
                "mo_ta": "Các xe chuyên dùng trong quân đội, phục vụ chuyên chở các cán bộ chỉ huy.",
                "order": 11040
            },

            /* 38 */
            {
                "_id": "LCwCdzQJrpABBy9xL",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:09:24.761Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe bồn :>ma XBON :>mo_ta Các xe tank bồn phục vụ vận chuyển và tiếp (nhiên) liệu. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe bồn",
                "ma": "XBON",
                "mo_ta": "Các xe tank bồn phục vụ vận chuyển và tiếp (nhiên) liệu.",
                "order": 11050
            },

            /* 39 */
            {
                "_id": "vj568mEkWRSkihfQ2",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:10:33.367Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe tưới đường :>ma XTDG :>mo_ta Các xe tưới đường, phục vụ công tác vệ sinh, làm sạch. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe tưới đường",
                "ma": "XTDG",
                "mo_ta": "Các xe tưới đường, phục vụ công tác vệ sinh, làm sạch.",
                "order": 11060
            },

            /* 40 */
            {
                "_id": "2cm7pZgGo7ayCniPE",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:11:07.977Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe quét đường :>ma XQDG :>mo_ta Các xe quét đường, phục vụ công tác vệ sinh, làm sạch. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe quét đường",
                "ma": "XQDG",
                "mo_ta": "Các xe quét đường, phục vụ công tác vệ sinh, làm sạch.",
                "order": 11070
            },

            /* 41 */
            {
                "_id": "hDFcNSdpXjQR8Yb9u",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:12:43.365Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe rửa cẩu :>ma XRC :>mo_ta Các xe hỗ trợ thực hiện công tác vệ sinh cẩu bở, cẩu bãi. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe rửa cẩu",
                "ma": "XRC",
                "mo_ta": "Các xe hỗ trợ thực hiện công tác vệ sinh cẩu bở, cẩu bãi.",
                "order": 11080
            },

            /* 42 */
            {
                "_id": "m35z6f8NZjCmG8DiN",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "K8AGZHNzddiyrNMC5",
                    "ten": "Xe chuyên dụng",
                    "ma": "XCD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:13:49.992Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe chuyên dụng :>ten Xe cứu thương :>ma XCTH :>mo_ta Xe cứu thương dùng trong trường hợp khẩn cấp. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe cứu thương",
                "ma": "XCTH",
                "mo_ta": "Xe cứu thương dùng trong trường hợp khẩn cấp.",
                "order": 11030
            },

            /* 43 */
            {
                "_id": "9S4XWBYBsMziNt3jd",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "GK8haFvc4qbL3RJ7A",
                    "ten": "Xe du lịch",
                    "ma": "XDL"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:19:29.647Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe du lịch :>ten Xe khách :>ma XBUS :>mo_ta Dòng xe bus phục vụ đưa đón nhân viên, hoạt động bên ngoài cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe khách",
                "ma": "XBUS",
                "mo_ta": "Dòng xe bus phục vụ đưa đón nhân viên, hoạt động bên ngoài cảng.",
                "order": 12030
            },

            /* 44 */
            {
                "_id": "Mr3BDy7cAuoPJox2W",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "GK8haFvc4qbL3RJ7A",
                    "ten": "Xe du lịch",
                    "ma": "XDL"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:20:10.895Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe du lịch :>ten Xe 4 chỗ :>ma X4CH :>mo_ta Các xe du lịch 4 chỗ. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe 4 chỗ",
                "ma": "X4CH",
                "mo_ta": "Các xe du lịch 4 chỗ.",
                "order": 12000
            },

            /* 45 */
            {
                "_id": "P4ryu8Z6cjiJng38n",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "GK8haFvc4qbL3RJ7A",
                    "ten": "Xe du lịch",
                    "ma": "XDL"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:20:34.008Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe du lịch :>ten Xe 7 chỗ :>ma X7CH :>mo_ta Các xe du lịch 7 chỗ. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe 7 chỗ",
                "ma": "X7CH",
                "mo_ta": "Các xe du lịch 7 chỗ.",
                "order": 12010
            },

            /* 46 */
            {
                "_id": "o3T25cv4XDgMu8BXJ",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "GK8haFvc4qbL3RJ7A",
                    "ten": "Xe du lịch",
                    "ma": "XDL"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:21:00.407Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Xe du lịch :>ten Xe 15 chỗ :>ma X15CH :>mo_ta Các xe du lịch 15 chỗ. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Xe 15 chỗ",
                "ma": "X15CH",
                "mo_ta": "Các xe du lịch 15 chỗ.",
                "order": 12020
            },

            /* 47 */
            {
                "_id": "FmWrL5SKCipNgkcK7",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "GWFPJCqZ65ksiLr3q",
                    "ten": "Xe - Máy",
                    "ma": "XMY"
                },
                "chung_loai": {
                    "keyId": "ba6nhyETPh3zjZz33",
                    "ten": "Moto",
                    "ma": "MTO"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:23:23.833Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom Xe - Máy :>chung_loai Moto :>ten Mô tô chuyên dụng :>ma MTO :>mo_ta Các xe mô tô phục vụ công tác tuần tra, kiểm soát cảng. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mô tô chuyên dụng",
                "ma": "MTOCD",
                "mo_ta": "Các xe mô tô phục vụ công tác tuần tra, kiểm soát cảng.",
                "order": 13000
            },

            /* 48 */
            {
                "_id": "BL74mhFDd5nssvSdh",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "JwFK5covLdBSrouF6",
                    "ten": "TB Thanh Lý",
                    "ma": "THL"
                },
                "chung_loai": {
                    "keyId": "aJJK54zFFcDnnbbc9",
                    "ten": "TL: Đầu kéo",
                    "ma": "TDK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:28:14.151Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom TB Thanh Lý :>chung_loai TL: Đầu kéo :>ten TL: Đầu kéo nội bộ :>ma TLDKNB :>mo_ta Các xe đầu kéo nội bộ được xét trong diện phương tiện xe thanh lý. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TL: Đầu kéo nội bộ",
                "ma": "TLDKNB",
                "mo_ta": "Các xe đầu kéo nội bộ được xét trong diện phương tiện xe thanh lý.",
                "order": 14000
            },

            /* 49 */
            {
                "_id": "MJ8Cpwx44aYQJj2Ev",
                "isPublic": true,
                "isArchived": false,
                "nhom": {
                    "keyId": "JwFK5covLdBSrouF6",
                    "ten": "TB Thanh Lý",
                    "ma": "THL"
                },
                "chung_loai": {
                    "keyId": "aJJK54zFFcDnnbbc9",
                    "ten": "TL: Đầu kéo",
                    "ma": "TDK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-30T15:29:11.067Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>nhom TB Thanh Lý :>chung_loai TL: Đầu kéo :>ten TL: Đầu kéo chạy ngoài :>ma TLDKCN :>mo_ta Các xe đầu kéo chạy ngoài được xét trong diện phương tiện xe thanh lý. :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TL: Đầu kéo chạy ngoài",
                "ma": "TLDKCN",
                "mo_ta": "Các xe đầu kéo chạy ngoài được xét trong diện phương tiện xe thanh lý.",
                "order": 14010
            }
        ];

        _.each(loais, function(loai) {
            Loais.insert(loai);
            console.log('Added loai [' + loai.ten + ']');
        });
    };
});
