Meteor.startup(function() {
    if (HangSanXuats.find().count() === 0) {
        var hangsanxuats = [{
                "_id": "4WJKbekEbuHpFYgXt",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "pHuPgtZdrqfyrobh8",
                    "ten": "Trung Quốc",
                    "name": "China",
                    "ma": "CHN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:37:39.948+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Trung Quốc :>quoc_gia China :>ten Chienyou :>ma CHNY :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Chienyou",
                "ma": "CHNY"
            }, {
                "_id": "Qs2R9noWaJ9i2Ee5m",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "pHuPgtZdrqfyrobh8",
                    "ten": "Trung Quốc",
                    "name": "China",
                    "ma": "CHN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:37:58.879+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Trung Quốc :>quoc_gia China :>ten CIMC :>ma CIMC :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "CIMC",
                "ma": "CIMC"
            }, {
                "_id": "yMrRXaJFSjv6oufbc",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "pHuPgtZdrqfyrobh8",
                    "ten": "Trung Quốc",
                    "name": "China",
                    "ma": "CHN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:38:23.765+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Trung Quốc :>quoc_gia China :>ten Dongfeng :>ma DNGF :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Dongfeng",
                "ma": "DNGF"
            }, {
                "_id": "tspFoEEfFJgKpJozL",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "pHuPgtZdrqfyrobh8",
                    "ten": "Trung Quốc",
                    "name": "China",
                    "ma": "CHN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:38:54.452+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Trung Quốc :>quoc_gia China :>ten ZPMC :>ma ZPMC :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ZPMC",
                "ma": "ZPMC"
            }, {
                "_id": "Zz3Sat7uBoookDpDP",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "bJ5uCowWDhzeT8zqi",
                    "ten": "Anh",
                    "name": "England",
                    "ma": "ENG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:45:56.011+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Anh :>quoc_gia England :>ten Lancer Boss :>ma LNBS :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Lancer Boss",
                "ma": "LNBS"
            }, {
                "_id": "NeXqjsbzornmbAfYT",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "bJ5uCowWDhzeT8zqi",
                    "ten": "Anh",
                    "name": "England",
                    "ma": "ENG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:47:35.222+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Anh :>quoc_gia England :>ten Boss :>ma BOSS :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Boss",
                "ma": "BOSS"
            }, {
                "_id": "pwEznEYimag6F5JtH",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "bJ5uCowWDhzeT8zqi",
                    "ten": "Anh",
                    "name": "England",
                    "ma": "ENG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:47:57.756+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Anh :>quoc_gia England :>ten P&H :>ma PNH :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "P&H",
                "ma": "PNH"
            }, {
                "_id": "iZ97chEdPAKfPof9e",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "bJ5uCowWDhzeT8zqi",
                    "ten": "Anh",
                    "name": "England",
                    "ma": "ENG"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:48:12.908+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Anh :>quoc_gia England :>ten Terex :>ma TERX :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Terex",
                "ma": "TERX"
            }, {
                "_id": "wxqCjHLKG2KShyn5k",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "87kdPP3oKDAEms6y4",
                    "ten": "Phần Lan",
                    "name": "Finland",
                    "ma": "FIN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:48:48.581+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Phần Lan :>quoc_gia Finland :>ten Kalmar :>ma KALM :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Kalmar",
                "ma": "KALM"
            }, {
                "_id": "YmvnshdvZqginCCiL",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "87kdPP3oKDAEms6y4",
                    "ten": "Phần Lan",
                    "name": "Finland",
                    "ma": "FIN"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:49:04.366+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Phần Lan :>quoc_gia Finland :>ten Valmet :>ma VALM :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Valmet",
                "ma": "VALM"
            }, {
                "_id": "3DM6GvnkCvBC6cKyh",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "XePRBE6PcqH9AAdHr",
                    "ten": "Pháp",
                    "name": "France",
                    "ma": "FRA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T05:49:29.605+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Pháp :>quoc_gia France :>ten Renault :>ma RENA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Renault",
                "ma": "RENA"
            }, {
                "_id": "zAjQoN3SWH8khsDQF",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "SED3mBiCnpHEcNS7h",
                    "ten": "Đức",
                    "name": "Germany",
                    "ma": "GER"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:06:26.308+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Đức :>quoc_gia Germany :>ten Deutz :>ma DEUT :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Deutz",
                "ma": "DEUT"
            }, {
                "_id": "7W5kWACTwD6WanhDF",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "SED3mBiCnpHEcNS7h",
                    "ten": "Đức",
                    "name": "Germany",
                    "ma": "GER"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:07:06.964+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Đức :>quoc_gia Germany :>ten Kocks Krane GmbH :>ma KOCK :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Kocks Krane GmbH",
                "ma": "KOCK"
            }, {
                "_id": "2ePMCe55mxnZKFHy7",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "SED3mBiCnpHEcNS7h",
                    "ten": "Đức",
                    "name": "Germany",
                    "ma": "GER"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:08:28.173+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Đức :>quoc_gia Germany :>ten Liebherr :>ma LBHR :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Liebherr",
                "ma": "LBHR"
            }, {
                "_id": "cGniiJdWzxHx9isKL",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "SED3mBiCnpHEcNS7h",
                    "ten": "Đức",
                    "name": "Germany",
                    "ma": "GER"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:08:51.348+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Đức :>quoc_gia Germany :>ten Linde :>ma LIND :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Linde",
                "ma": "LIND"
            }, {
                "_id": "2Adm62R4Bzsj7ghB5",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "SED3mBiCnpHEcNS7h",
                    "ten": "Đức",
                    "name": "Germany",
                    "ma": "GER"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:08:07.627+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Đức :>quoc_gia Germany :>ten Kranbau Eberswalde :>ma KREB :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Kranbau Eberswalde",
                "ma": "KREB"
            }, {
                "_id": "wca8FcHSsEiozdQKf",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "SED3mBiCnpHEcNS7h",
                    "ten": "Đức",
                    "name": "Germany",
                    "ma": "GER"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:09:06.881+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Đức :>quoc_gia Germany :>ten Man :>ma MAN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Man",
                "ma": "MAN"
            }, {
                "_id": "ys4PezSKJFEuKLBSj",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "ttaqbXpCCYH7Gjpvh",
                    "ten": "Ý",
                    "name": "Italy",
                    "ma": "ITA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:10:09.664+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Ý :>quoc_gia Italy :>ten Ferrari :>ma FERR :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Ferrari",
                "ma": "FERR"
            }, {
                "_id": "fhidT3Qd2MbHkCRuB",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "ttaqbXpCCYH7Gjpvh",
                    "ten": "Ý",
                    "name": "Italy",
                    "ma": "ITA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:09:33.965+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id fhidT3Qd2MbHkCRuB :>quoc_gia Ý :>quoc_gia Italy :>ten Fantuzzi :>ma FNTZ :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2015-12-31T10:10:37.444+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Fantuzzi",
                "ma": "FNTZ"
            }, {
                "_id": "aT4ojXrZa3eJXhShP",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:11:15.531+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Daihatsu :>ma DAIH :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Daihatsu",
                "ma": "DAIH"
            }, {
                "_id": "feSYi9ev7HXYkG9ha",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:11:35.943+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Hino :>ma HINO :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Hino",
                "ma": "HINO"
            }, {
                "_id": "pw8rYGu5Ltws3dwhk",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:11:59.429+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Honda :>ma HOND :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Honda",
                "ma": "HOND"
            }, {
                "_id": "gxTBvALKx8xYePojW",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:12:28.118+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Isuzu :>ma ISUZ :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Isuzu",
                "ma": "ISUZ"
            }, {
                "_id": "JA9zr2KzZDJySDSGf",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:12:43.843+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Komatsu :>ma KOMA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Komatsu",
                "ma": "KOMA"
            }, {
                "_id": "Dwp9T6Tqh6JidLzQJ",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:13:02.668+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Mazda :>ma MAZD :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mazda",
                "ma": "MAZD"
            }, {
                "_id": "6i7zn3ANzWvm7tGdu",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:13:33.804+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Mitsubishi :>ma MTSU :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mitsubishi",
                "ma": "MTSU"
            }, {
                "_id": "47BXKcqagWAf68yHC",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:13:50.166+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Mitsui :>ma MITS :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mitsui",
                "ma": "MITS"
            }, {
                "_id": "Q5S8FdXZ9FFBnKaSs",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:14:04.943+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Ottawa :>ma OTTA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Ottawa",
                "ma": "OTTA"
            }, {
                "_id": "3aCWJ5swuru8uvtAG",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:14:22.222+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Sumitomo :>ma SUMI :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Sumitomo",
                "ma": "SUMI"
            }, {
                "_id": "NJ3XhuzJnZAzNbhMW",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:16:50.264+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten TCM :>ma TCM :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "TCM",
                "ma": "TCM"
            }, {
                "_id": "p8tLS49LTQRCYMGiE",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:17:05.649+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten Toyota :>ma TOYO :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Toyota",
                "ma": "TOYO"
            }, {
                "_id": "L3KSqYgs5bnCEtWSN",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "Fvbw6WYesrXhzhYs5",
                    "ten": "Nhật Bản",
                    "name": "Japan",
                    "ma": "JAP"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:17:22.737+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nhật Bản :>quoc_gia Japan :>ten UD Trucks :>ma UDTR :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "UD Trucks",
                "ma": "UDTR"
            }, {
                "_id": "N4pq89uorCg7ZF7zQ",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "3zLR2zj4vPt9KBHfC",
                    "ten": "Hàn Quốc",
                    "name": "Korea",
                    "ma": "KOR"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:18:15.305+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hàn Quốc :>quoc_gia Korea :>ten Daewoo :>ma DAEW :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Daewoo",
                "ma": "DAEW"
            }, {
                "_id": "rJopdP3qGM75bPD66",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "3zLR2zj4vPt9KBHfC",
                    "ten": "Hàn Quốc",
                    "name": "Korea",
                    "ma": "KOR"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:18:30.956+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hàn Quốc :>quoc_gia Korea :>ten Doosan :>ma DOOS :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Doosan",
                "ma": "DOOS"
            }, {
                "_id": "KNgZRn2eTxDGycopA",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "3zLR2zj4vPt9KBHfC",
                    "ten": "Hàn Quốc",
                    "name": "Korea",
                    "ma": "KOR"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:18:53.433+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hàn Quốc :>quoc_gia Korea :>ten Huyndai :>ma HUYN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Huyndai",
                "ma": "HUYN"
            }, {
                "_id": "nZpZKujDg3Kjkd86Y",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "3zLR2zj4vPt9KBHfC",
                    "ten": "Hàn Quốc",
                    "name": "Korea",
                    "ma": "KOR"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:19:05.641+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hàn Quốc :>quoc_gia Korea :>ten Hyundai :>ma HYUN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Hyundai",
                "ma": "HYUN"
            }, {
                "_id": "h7YExLMS6PeKnuq2c",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "3zLR2zj4vPt9KBHfC",
                    "ten": "Hàn Quốc",
                    "name": "Korea",
                    "ma": "KOR"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:19:15.815+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hàn Quốc :>quoc_gia Korea :>ten KIA :>ma KIA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "KIA",
                "ma": "KIA"
            }, {
                "_id": "AFCmdmaQpgdA2y6Tm",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "jQA22NKHKaw7wsA92",
                    "ten": "Hà Lan",
                    "name": "Netherlands",
                    "ma": "NLD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:19:39.697+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hà Lan :>quoc_gia Netherlands :>ten Stinis :>ma STIN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Stinis",
                "ma": "STIN"
            }, {
                "_id": "Pi7HBfgpSmWhQfYFA",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "jQA22NKHKaw7wsA92",
                    "ten": "Hà Lan",
                    "name": "Netherlands",
                    "ma": "NLD"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:20:23.986+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Hà Lan :>quoc_gia Netherlands :>ten Terberg :>ma TERB :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Terberg",
                "ma": "TERB"
            }, {
                "_id": "dB9gijkNQ8ptjMHGp",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "GHg8KCH9p2HsGgkQS",
                    "ten": "Nga",
                    "name": "Russia",
                    "ma": "RUS"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:20:39.364+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nga :>quoc_gia Russia :>ten Kamaz :>ma KAMZ :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Kamaz",
                "ma": "KAMZ"
            }, {
                "_id": "72bZ2HK3C5ki8BZmT",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "GHg8KCH9p2HsGgkQS",
                    "ten": "Nga",
                    "name": "Russia",
                    "ma": "RUS"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:20:48.502+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nga :>quoc_gia Russia :>ten Maz :>ma MAZ :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Maz",
                "ma": "MAZ"
            }, {
                "_id": "BPB4gJKsow7g5hAPn",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "GHg8KCH9p2HsGgkQS",
                    "ten": "Nga",
                    "name": "Russia",
                    "ma": "RUS"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:21:00.788+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nga :>quoc_gia Russia :>ten UAZ :>ma UAZ :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "UAZ",
                "ma": "UAZ"
            }, {
                "_id": "Qr7Z4P6z5F7HdtB4x",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "GHg8KCH9p2HsGgkQS",
                    "ten": "Nga",
                    "name": "Russia",
                    "ma": "RUS"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:21:13.115+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Nga :>quoc_gia Russia :>ten ZIN :>ma ZIN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "ZIN",
                "ma": "ZIN"
            }, {
                "_id": "eWJ3rzZPXNQqooNc9",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "kZH2yNmoJHQ72yqXa",
                    "ten": "Thụy Điển",
                    "name": "Sweden",
                    "ma": "SWE"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:21:38.449+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Thụy Điển :>quoc_gia Sweden :>ten Alimax :>ma ALMX :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Alimax",
                "ma": "ALMX"
            }, {
                "_id": "RqPthxqzSBZ9dn3Pe",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "kZH2yNmoJHQ72yqXa",
                    "ten": "Thụy Điển",
                    "name": "Sweden",
                    "ma": "SWE"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:21:54.690+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Thụy Điển :>quoc_gia Sweden :>ten Volvo :>ma VOLV :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Volvo",
                "ma": "VOLV"
            }, {
                "_id": "EtboPpckw6kek7zAW",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "JcewYTSX2dx64YfDF",
                    "ten": "Chưa xác định",
                    "name": "Unknown",
                    "ma": "UNK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:22:22.130+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Chưa xác định :>quoc_gia Unknown :>ten DGA :>ma DGA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "DGA",
                "ma": "DGA"
            }, {
                "_id": "RKBDCZTrdGxxHqWE2",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "JcewYTSX2dx64YfDF",
                    "ten": "Chưa xác định",
                    "name": "Unknown",
                    "ma": "UNK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:22:36.193+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Chưa xác định :>quoc_gia Unknown :>ten Gene :>ma GENE :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Gene",
                "ma": "GENE"
            }, {
                "_id": "oJGEeimGTTeEnkh2x",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "JcewYTSX2dx64YfDF",
                    "ten": "Chưa xác định",
                    "name": "Unknown",
                    "ma": "UNK"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:22:44.389+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Chưa xác định :>quoc_gia Unknown :>ten KC :>ma KC :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "KC",
                "ma": "KC"
            }, {
                "_id": "LBAhK2oW3PY7rQpRR",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "zBwtfe4ZcKqgrL4Ns",
                    "ten": "Mỹ",
                    "name": "America",
                    "ma": "USA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:22:57.680+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Mỹ :>quoc_gia America :>ten Capacity :>ma CAPA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Capacity",
                "ma": "CAPA"
            }, {
                "_id": "G93ddEbS8PS8Nug5X",
                "isPublic": true,
                "isArchived": false,
                "quoc_gia": {
                    "keyId": "zBwtfe4ZcKqgrL4Ns",
                    "ten": "Mỹ",
                    "name": "America",
                    "ma": "USA"
                },
                "metadata": {
                    "ngay_tao": "2015-12-31T10:23:24.083+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>quoc_gia Mỹ :>quoc_gia America :>ten Cummins :>ma CMMN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cummins",
                "ma": "CMMN"
            }, { 
                "_id" : "Nzqiodx7ZnTJRG8gK", 
                "isPublic" : true, 
                "isArchived" : false, 
                "quoc_gia" : {
                    "keyId" : "zBwtfe4ZcKqgrL4Ns", 
                    "ten" : "Mỹ", 
                    "name" : "America", 
                    "ma" : "USA"
                }, 
                "metadata" : {
                    "ngay_tao" : "2016-01-11T17:28:31.893+0000", 
                    "nguoi_tao" : "Ai3PeP5nbk2mxEr55", 
                    "nguoi_tao_field" : "Long Hồ:longxuanho@admin.io", 
                    "search_field" : ">_id undefined :>quoc_gia Mỹ :>quoc_gia America :>ten Mi-Jack :>ma MIJACK :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                }, 
                "ten" : "Mi-Jack", 
                "ma" : "MIJACK"
            }

        ];

        _.each(hangsanxuats, function(hangsanxuat) {
            HangSanXuats.insert(hangsanxuat);
            console.log('Added hangsanxuat [' + hangsanxuat.ten + ']');
        });
    };
});
