Meteor.startup(function() {
    if (QuocGias.find().count() === 0) {
        var quocgias = [
            /* 1 */
            {
                "_id": "pHuPgtZdrqfyrobh8",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:21:54.069Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Trung Quốc :>name China :>ma CHN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Trung Quốc",
                "ma": "CHN",
                "name": "China"
            },

            /* 2 */
            {
                "_id": "bJ5uCowWDhzeT8zqi",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:22:25.952Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Anh :>name England :>ma ENG :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Anh",
                "ma": "ENG",
                "name": "England"
            },

            /* 3 */
            {
                "_id": "87kdPP3oKDAEms6y4",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:22:48.063Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Phần Lan :>name Finland :>ma FIN :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Phần Lan",
                "ma": "FIN",
                "name": "Finland"
            },

            /* 4 */
            {
                "_id": "XePRBE6PcqH9AAdHr",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:23:19.216Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Pháp :>name France :>ma FRA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Pháp",
                "ma": "FRA",
                "name": "France"
            },

            /* 5 */
            {
                "_id": "SED3mBiCnpHEcNS7h",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:23:35.339Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Đức :>name Germany :>ma GER :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Đức",
                "ma": "GER",
                "name": "Germany"
            },

            /* 6 */
            {
                "_id": "jQA22NKHKaw7wsA92",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:26:59.954Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Hà Lan :>name Netherlands :>ma NLD :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Hà Lan",
                "name": "Netherlands",
                "ma": "NLD"
            },

            /* 7 */
            {
                "_id": "ttaqbXpCCYH7Gjpvh",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:27:38.098Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Ý :>name Italy :>ma ITA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Ý",
                "ma": "ITA",
                "name": "Italy"
            },

            /* 8 */
            {
                "_id": "Fvbw6WYesrXhzhYs5",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:27:57.353Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Nhật Bản :>name Japan :>ma JAP :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Nhật Bản",
                "ma": "JAP",
                "name": "Japan"
            },

            /* 9 */
            {
                "_id": "3zLR2zj4vPt9KBHfC",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:28:42.220Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Hàn Quốc :>name Korea :>ma KOR :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Hàn Quốc",
                "ma": "KOR",
                "name": "Korea"
            },

            /* 10 */
            {
                "_id": "GHg8KCH9p2HsGgkQS",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:29:03.287Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Nga :>name Russia :>ma RUS :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Nga",
                "ma": "RUS",
                "name": "Russia"
            },

            /* 11 */
            {
                "_id": "kZH2yNmoJHQ72yqXa",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:31:58.082Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Thụy Điển :>name Sweden :>ma SWE :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Thụy Điển",
                "ma": "SWE",
                "name": "Sweden"
            },

            /* 12 */
            {
                "_id": "zBwtfe4ZcKqgrL4Ns",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:33:05.545Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Mỹ :>name America :>ma USA :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mỹ",
                "ma": "USA",
                "name": "America"
            },

            /* 13 */
            {
                "_id": "iS8F6jgxJiC84oeMy",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:33:55.026Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Việt Nam :>name Vietnam :>ma VIE :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Việt Nam",
                "ma": "VIE",
                "name": "Vietnam"
            },

            /* 14 */
            {
                "_id": "JcewYTSX2dx64YfDF",
                "isPublic": true,
                "isArchived": false,
                "metadata": {
                    "ngay_tao": "2015-12-31T05:34:15.736Z",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Chưa xác định :>name Unknown :>ma UNK :>mo_ta undefined :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Chưa xác định",
                "ma": "UNK",
                "name": "Unknown"
            }
        ];

        _.each(quocgias, function(quocgia) {
            QuocGias.insert(quocgia);
            console.log('Added quocgia [' + quocgia.ten + ']');
        });
    };
});
