Meteor.startup(function() {
    if (Nhoms.find().count() === 0) {
        var nhoms = [ 

            /* 1 */
            {
                "_id" : "ojMAP3j8XdPbtrfvF",
                "isPublic" : true,
                "isArchived" : false,
                "metadata" : {
                    "ngay_tao" : "2015-12-30T07:41:11.848Z",
                    "nguoi_tao" : "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field" : "Long Hồ:longxuanho@admin.io",
                    "search_field" : ">_id undefined :>ten Thiết bị nâng :>ma TBN :>mo_ta Các nhóm phương tiện, máy nâng chuyển. :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten" : "Thiết bị nâng",
                "ma" : "TBN",
                "mo_ta" : "Các nhóm phương tiện, máy nâng chuyển.",
                "order" : 1010
            },

            /* 2 */
            {
                "_id" : "GWFPJCqZ65ksiLr3q",
                "isPublic" : true,
                "isArchived" : false,
                "metadata" : {
                    "ngay_tao" : "2015-12-30T07:43:11.753Z",
                    "nguoi_tao" : "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field" : "Long Hồ:longxuanho@admin.io",
                    "search_field" : ">_id undefined :>ten Xe - Máy :>ma XMY :>mo_ta Các nhóm phương tiện ngành xe, đầu kéo và  rơ móoc. :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten" : "Xe - Máy",
                "ma" : "XMY",
                "mo_ta" : "Các nhóm phương tiện ngành xe, đầu kéo và  rơ móoc.",
                "order" : 1040
            },

            /* 3 */
            {
                "_id" : "CvxBqhuSaqhhNDKeE",
                "isPublic" : true,
                "isArchived" : false,
                "metadata" : {
                    "ngay_tao" : "2015-12-30T07:44:32.545Z",
                    "nguoi_tao" : "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field" : "Long Hồ:longxuanho@admin.io",
                    "search_field" : ">_id undefined :>ten Tàu thuyền :>ma TTH :>mo_ta Các nhóm phương tiện thủy. :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten" : "Tàu thuyền",
                "ma" : "TTH",
                "mo_ta" : "Các nhóm phương tiện thủy.",
                "order" : 1020
            },

            /* 4 */
            {
                "_id" : "pKgSncdwj445yFPB6",
                "isPublic" : true,
                "isArchived" : false,
                "metadata" : {
                    "ngay_tao" : "2015-12-30T07:45:48.131Z",
                    "nguoi_tao" : "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field" : "Long Hồ:longxuanho@admin.io",
                    "search_field" : ">_id undefined :>ten Trạm nguồn :>ma TRM :>mo_ta Các nhóm thiết bị trạm nguồn. :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten" : "Trạm nguồn",
                "ma" : "TRM",
                "icon" : "Trạm nguồn",
                "mo_ta" : "Các nhóm thiết bị trạm nguồn.",
                "order" : 1030
            },

            /* 5 */
            {
                "_id" : "JwFK5covLdBSrouF6",
                "isPublic" : true,
                "isArchived" : false,
                "metadata" : {
                    "ngay_tao" : "2015-12-30T07:47:13.130Z",
                    "nguoi_tao" : "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field" : "Long Hồ:longxuanho@admin.io",
                    "search_field" : ">_id undefined :>ten TB Thanh Lý :>ma THL :>mo_ta Các nhóm phương tiện thuộc diện thanh lý :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten" : "TB Thanh Lý",
                "ma" : "THL",
                "mo_ta" : "Các nhóm phương tiện thuộc diện thanh lý.",
                "order" : 1050
            }
        ];

        _.each(nhoms, function(nhom) {
            Nhoms.insert(nhom);
            console.log('Added nhom [' + nhom.ten + ']');
        });
    };
});
