Meteor.startup(function() {
    if (ModelThietBis.find().count() === 0) {
        var modelthietbis = [{
                "_id": "xmYF2d2H8Qq2hE4e8",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "LBAhK2oW3PY7rQpRR",
                    "ten": "Capacity",
                    "ma": "CAPA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:06:32.373+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id xmYF2d2H8Qq2hE4e8 :>hang_san_xuat Capacity :>ten TJ9000 :>ma CAP-TJ9000 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:08:20.474+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "TJ9000",
                "ma": "CAP-TJ9000"
            }, {
                "_id": "kejJkQ2d68xLoqM9E",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:07:54.203+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id kejJkQ2d68xLoqM9E :>hang_san_xuat Cummins :>ten CUM1045 :>ma CUM-1045KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:08:55.073+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "CUM1045",
                "ma": "CUM-1045KVA"
            }, {
                "_id": "SJZDRwysj67NmBi9X",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:09:54.722+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Cummins :>ten CUM1065 :>ma CUM-1065KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CUM1065",
                "ma": "CUM-1065KVA"
            }, {
                "_id": "LaDZgi4XRuiByweAs",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:10:29.296+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Cummins :>ten CUM2000 :>ma CUM-2000KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CUM2000",
                "ma": "CUM-2000KVA"
            }, {
                "_id": "peSRBegaRkzqPLkBo",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:11:40.289+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Cummins :>ten CUM380 :>ma CUM-380KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CUM380",
                "ma": "CUM-380KVA"
            }, {
                "_id": "efSLyPnqBNsw48Jzs",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:12:19.583+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Cummins :>ten CUM450 :>ma CUM-450KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CUM450",
                "ma": "CUM-450KVA"
            }, {
                "_id": "qhAPyY48iiLspxuLn",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:12:39.190+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Cummins :>ten CUM550 :>ma CUM-550KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CUM550",
                "ma": "CUM-550KVA"
            }, {
                "_id": "QdKQ2qNdnZb6C4vYt",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "G93ddEbS8PS8Nug5X",
                    "ten": "Cummins",
                    "ma": "CMMN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:12:56.311+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Cummins :>ten CUM750 :>ma CUM-750KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CUM750",
                "ma": "CUM-750KVA"
            }, {
                "_id": "gRBKsZcBFxDCkxgrt",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "N4pq89uorCg7ZF7zQ",
                    "ten": "Daewoo",
                    "ma": "DAEW"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:13:17.631+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Daewoo :>ten DWV3TEF :>ma DWV3TEF :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "DWV3TEF",
                "ma": "DWV3TEF"
            }, {
                "_id": "AP2LeGXCHGNFNPSCY",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "zAjQoN3SWH8khsDQF",
                    "ten": "Deutz",
                    "ma": "DEUT"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:13:54.054+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Deutz :>ten DTZ108 :>ma DTZ-108KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "DTZ108",
                "ma": "DTZ-108KVA"
            }, {
                "_id": "msAm7utYr59XJZLRw",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "EtboPpckw6kek7zAW",
                    "ten": "DGA",
                    "ma": "DGA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:14:21.031+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat DGA :>ten DGA350 :>ma DGA-350KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "DGA350",
                "ma": "DGA-350KVA"
            }, {
                "_id": "QsQE9QR7Fx5RqL9mE",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "fWgp2td9XQve4Trqh",
                    "ten": "Dĩ An",
                    "ma": "DIAN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:20:53.491+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Dĩ An :>ten DIA1031 :>ma DIA-1031KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "DIA1031",
                "ma": "DIA-1031KVA"
            }, {
                "_id": "DntGqYcHM35fyxbPh",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "GDuCtFH3w5SPjnA7t",
                    "ten": "Hữu Toàn",
                    "ma": "HUTO"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:21:55.617+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Hữu Toàn :>ten HUTO1031 :>ma HUTO-1031KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "HUTO1031",
                "ma": "HUTO-1031KVA"
            }, {
                "_id": "3dporZTwbWWd4D5jA",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "i3tYcckGHmjEaWZ7z",
                    "ten": "Ford",
                    "ma": "FORD"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:22:53.912+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Ford :>ten ESCAPE :>ma ESCAPE :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ESCAPE",
                "ma": "ESCAPE"
            }, {
                "_id": "hvoJLCTXG2YebLdN8",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "i3tYcckGHmjEaWZ7z",
                    "ten": "Ford",
                    "ma": "FORD"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:23:16.231+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Ford :>ten EVEREST :>ma EVEREST :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "EVEREST",
                "ma": "EVEREST"
            }, {
                "_id": "Bha83uRDm6yX8CAg9",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "i3tYcckGHmjEaWZ7z",
                    "ten": "Ford",
                    "ma": "FORD"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:23:34.671+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Ford :>ten LEADER :>ma LEADER :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "LEADER",
                "ma": "LEADER"
            }, {
                "_id": "fqZEX6JTsupHXyMKN",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "RKBDCZTrdGxxHqWE2",
                    "ten": "Gene",
                    "ma": "GENE"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:24:04.911+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Gene :>ten 45/22 :>ma 45/22 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "45/22",
                "ma": "45/22"
            }, {
                "_id": "PySqtJn98Xcaw5nT2",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "KNgZRn2eTxDGycopA",
                    "ten": "Huyndai",
                    "ma": "HUYN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:24:54.358+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Huyndai :>ten HD700 :>ma HD700 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "HD700",
                "ma": "HD700"
            }, {
                "_id": "yJj4BAkfisbKnWcBk",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "KNgZRn2eTxDGycopA",
                    "ten": "Huyndai",
                    "ma": "HUYN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:26:20.680+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Huyndai :>ten PORTER1.0T :>ma PORTER1.0T :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "PORTER1.0T",
                "ma": "PORTER1.0T"
            }, {
                "_id": "XuPQuzTdEQoGXKcDH",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "KNgZRn2eTxDGycopA",
                    "ten": "Huyndai",
                    "ma": "HUYN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:26:39.287+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Huyndai :>ten PORTER1.25T :>ma PORTER1.25T :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "PORTER1.25T",
                "ma": "PORTER1.25T"
            }, {
                "_id": "9t6nzQgpGz6fSfuN6",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "KNgZRn2eTxDGycopA",
                    "ten": "Huyndai",
                    "ma": "HUYN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:27:00.501+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Huyndai :>ten PORTERH100 :>ma PORTERH100 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "PORTERH100",
                "ma": "PORTERH100"
            }, {
                "_id": "wgacz6A7FdJYG4F5d",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "KNgZRn2eTxDGycopA",
                    "ten": "Huyndai",
                    "ma": "HUYN"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:27:35.349+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Huyndai :>ten STAREX :>ma STAREX :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "STAREX",
                "ma": "STAREX"
            }, {
                "_id": "i79anw3AYuAMHYKJM",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "gxTBvALKx8xYePojW",
                    "ten": "Isuzu",
                    "ma": "ISUZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:27:51.899+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Isuzu :>ten 1T9 :>ma 1T9 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "1T9",
                "ma": "1T9"
            }, {
                "_id": "okS65LKXvfZqHAP44",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "gxTBvALKx8xYePojW",
                    "ten": "Isuzu",
                    "ma": "ISUZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:28:04.643+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Isuzu :>ten FRR90N :>ma FRR90N :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "FRR90N",
                "ma": "FRR90N"
            }, {
                "_id": "LSxeNgkjYKgJz2Es3",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "gxTBvALKx8xYePojW",
                    "ten": "Isuzu",
                    "ma": "ISUZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:28:45.428+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Isuzu :>ten ZOOMLION :>ma ZOOMLION :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ZOOMLION",
                "ma": "ZOOMLION"
            }, {
                "_id": "pT8Li63qeixcmf5YR",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "RNfHf564PWmWcmbQi",
                    "ten": "JLG",
                    "ma": "JLG"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:31:32.578+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat JLG :>ten 110HX :>ma 110HX :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "110HX",
                "ma": "110HX"
            }, {
                "_id": "D8Zk3onRTGtR7SjyC",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "RNfHf564PWmWcmbQi",
                    "ten": "JLG",
                    "ma": "JLG"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:31:44.265+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat JLG :>ten 600 AJ :>ma 600 AJ :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "600 AJ",
                "ma": "600 AJ"
            }, {
                "_id": "ZiEaA7Hfbs89Jcxaw",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "RNfHf564PWmWcmbQi",
                    "ten": "JLG",
                    "ma": "JLG"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:32:00.641+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat JLG :>ten 800A :>ma 800A :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "800A",
                "ma": "800A"
            }, {
                "_id": "WpMv3d3jdhxxESA6n",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "wxqCjHLKG2KShyn5k",
                    "ten": "Kalmar",
                    "ma": "KALM"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:32:14.908+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Kalmar :>ten PT122 :>ma PT122 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "PT122",
                "ma": "PT122"
            }, {
                "_id": "RYY5Xzx3aHFKGzvTq",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "dB9gijkNQ8ptjMHGp",
                    "ten": "Kamaz",
                    "ma": "KAMZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:33:59.041+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Kamaz :>ten 54112 :>ma 54112 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "54112",
                "ma": "54112"
            }, {
                "_id": "ncQFZQAwcQaAeMWig",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "dB9gijkNQ8ptjMHGp",
                    "ten": "Kamaz",
                    "ma": "KAMZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:34:19.488+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Kamaz :>ten 54115 :>ma 54115 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "54115",
                "ma": "54115"
            }, {
                "_id": "dGQMaZL6yb4wHjd7T",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "h7YExLMS6PeKnuq2c",
                    "ten": "KIA",
                    "ma": "KIA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:34:32.830+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat KIA :>ten K2700II :>ma K2700II :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "K2700II",
                "ma": "K2700II"
            }, {
                "_id": "W3cZbDqj8jD6RL8KG",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:36:37.573+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Komatsu :>ten FD25T-16 :>ma FD25T-16 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "FD25T-16",
                "ma": "FD25T-16"
            }, {
                "_id": "WH8RvXthDiakLtKbp",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:36:49.239+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Komatsu :>ten FD25T-17 :>ma FD25T-17 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "FD25T-17",
                "ma": "FD25T-17"
            }, {
                "_id": "xva59QZgkj4iLRfiL",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "72bZ2HK3C5ki8BZmT",
                    "ten": "Maz",
                    "ma": "MAZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:37:53.645+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Maz :>ten 5337 :>ma 5337 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "5337",
                "ma": "5337"
            }, {
                "_id": "XdnocFtNk37EbYkTu",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "72bZ2HK3C5ki8BZmT",
                    "ten": "Maz",
                    "ma": "MAZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:38:08.756+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Maz :>ten 54323 :>ma 54323 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "54323",
                "ma": "54323"
            }, {
                "_id": "LcKijbr7Md6CxCEi5",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "72bZ2HK3C5ki8BZmT",
                    "ten": "Maz",
                    "ma": "MAZ"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:38:24.301+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Maz :>ten 64229 :>ma 64229 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "64229",
                "ma": "64229"
            }, {
                "_id": "2MvLXRpKkWWmZpDrS",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "6i7zn3ANzWvm7tGdu",
                    "ten": "Mitsubishi",
                    "ma": "MTSU"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:38:33.964+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Mitsubishi :>ten FUSO :>ma FUSO :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "FUSO",
                "ma": "FUSO"
            }, {
                "_id": "FgWX25do8J3dHBMmm",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "Hmbmk7WBHCYRFeKcR",
                    "ten": "Perkins",
                    "ma": "PERK"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:42:49.826+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Perkins :>ten PER1000 :>ma PER-1000KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "PER1000",
                "ma": "PER-1000KVA"
            }, {
                "_id": "wkLkhTf9QeH3KXf8E",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "Hmbmk7WBHCYRFeKcR",
                    "ten": "Perkins",
                    "ma": "PERK"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:43:15.363+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Perkins :>ten PER1031 :>ma PER-1031KVA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "PER1031",
                "ma": "PER-1031KVA"
            }, {
                "_id": "BN7SEu52S4umprukL",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:35:16.078+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id BN7SEu52S4umprukL :>hang_san_xuat Komatsu :>ten KOMD2,5 :>ma KOMD2,5 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:44:19.681+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "KOMD2,5",
                "ma": "KOMD2,5"
            }, {
                "_id": "3G6b6cXKHdFfDhvFW",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:34:50.982+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id 3G6b6cXKHdFfDhvFW :>hang_san_xuat Komatsu :>ten KOMD2,0 :>ma KOMD2,0 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:44:34.153+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "KOMD2,0",
                "ma": "KOMD2,0"
            }, {
                "_id": "cuyYhsP3ekJ6dmDax",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:36:06.278+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id cuyYhsP3ekJ6dmDax :>hang_san_xuat Komatsu :>ten KOMD3,0 :>ma KOMD3,0 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:44:46.767+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "KOMD3,0",
                "ma": "KOMD3,0"
            }, {
                "_id": "GDMriA5XmrQ4PbHGJ",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:36:21.502+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id GDMriA5XmrQ4PbHGJ :>hang_san_xuat Komatsu :>ten KOMD4,5 :>ma KOMD4,5 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:45:01.464+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "KOMD4,5",
                "ma": "KOMD4,5"
            }, {
                "_id": "h28z42yLbMiubXDbk",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "NJ3XhuzJnZAzNbhMW",
                    "ten": "TCM",
                    "ma": "TCM"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:47:00.134+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat TCM :>ten TCMD2,5 :>ma TCMD2,5 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TCMD2,5",
                "ma": "TCMD2,5"
            }, {
                "_id": "ARnyzbnFFPTN3dhwS",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "NJ3XhuzJnZAzNbhMW",
                    "ten": "TCM",
                    "ma": "TCM"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:47:42.342+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat TCM :>ten TCMD4,5 :>ma TCMD4,5 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TCMD4,5",
                "ma": "TCMD4,5"
            }, {
                "_id": "KrtPko2KKG9n6yt4w",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "NJ3XhuzJnZAzNbhMW",
                    "ten": "TCM",
                    "ma": "TCM"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:48:02.287+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat TCM :>ten FD25T3 :>ma FD25T3 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "FD25T3",
                "ma": "FD25T3"
            }, {
                "_id": "TCsmWufrAKNWooGNQ",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "NJ3XhuzJnZAzNbhMW",
                    "ten": "TCM",
                    "ma": "TCM"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:48:24.422+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat TCM :>ten TCMG1,5 :>ma TCMG1,5 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TCMG1,5",
                "ma": "TCMG1,5"
            }, {
                "_id": "XxTnqhExkDdK3r92P",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "JA9zr2KzZDJySDSGf",
                    "ten": "Komatsu",
                    "ma": "KOMA"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:37:10.165+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id XxTnqhExkDdK3r92P :>hang_san_xuat Komatsu :>ten KOMG1,5 :>ma KOMG1,5 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-11T16:48:40.606+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "KOMG1,5",
                "ma": "KOMG1,5"
            }, {
                "_id": "r3fuqEYuAiLFwvHqz",
                "isPublic": true,
                "isArchived": false,
                "hang_san_xuat": {
                    "keyId": "Pi7HBfgpSmWhQfYFA",
                    "ten": "Terberg",
                    "ma": "TERB"
                },
                "metadata": {
                    "ngay_tao": "2016-01-11T16:50:18.157+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>hang_san_xuat Terberg :>ten YT180 :>ma YT180 :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "YT180",
                "ma": "YT180"
            }

        ];

        _.each(modelthietbis, function(modelthietbi) {
            ModelThietBis.insert(modelthietbi);
            console.log('Added modelthietbi [' + modelthietbi.ten + ']');
        });
    };
});
