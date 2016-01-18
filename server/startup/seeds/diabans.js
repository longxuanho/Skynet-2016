Meteor.startup(function() {
    if (DiaBans.find().count() === 0) {
        var diabans = [{
                "_id": "toecbrjzNifPMogxR",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng 128 Hải Phòng",
                        "geo_name": "Công Ty Cổ Phần Tân Cảng - 128 Hải Phòng",
                        "geo_latitude": 20.8528676,
                        "geo_longitude": 106.7353468
                    },
                    "subdepartment": {
                        "ten": "Hải Phòng",
                        "geo_latitude": 20.8468135,
                        "geo_longitude": 106.6637271,
                        "geo_name": "Hải Phòng, Việt Nam"
                    },
                    "department": {
                        "ten": "Hải Phòng",
                        "geo_longitude": 106.6637271,
                        "geo_latitude": 20.8468135,
                        "geo_name": "Hải Phòng, Việt Nam"
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:09:37.417+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng 128 Hải Phòng :>ma 128HP :>mo_ta Cảng Tân Cảng 128, Phường Đông Hải 2, Quận Hải An, Hải Phòng, Việt Nam. :>map_data Cảng 128 Hải Phòng :>map_data Hải Phòng :>map_data Hải Phòng :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng 128 Hải Phòng",
                "mien": "Bắc",
                "ma": "128HP",
                "mo_ta": "Cảng Tân Cảng 128, Phường Đông Hải 2, Quận Hải An, Hải Phòng, Việt Nam."
            }, {
                "_id": "ibGQsikM2XQeD2F8F",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng 189 Hải Phòng",
                        "geo_name": "Công Ty Cổ Phần Tân Cảng – 189 Hải Phòng",
                        "geo_latitude": 20.8401278,
                        "geo_longitude": 106.7603302
                    },
                    "subdepartment": {
                        "ten": "Hải Phòng",
                        "geo_name": "Hải Phòng, Việt Nam",
                        "geo_latitude": 20.8468135,
                        "geo_longitude": 106.6637271
                    },
                    "department": {
                        "ten": "Hải Phòng",
                        "geo_name": "Hải Phòng, Việt Nam",
                        "geo_longitude": 106.6637271,
                        "geo_latitude": 20.8468135
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:13:06.693+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng 189 Hải Phòng :>ma 189HP :>mo_ta Cảng Tân Cảng 189, Phường Đông Hải 2, Quận Hải An, Hải Phòng, Việt Nam. :>map_data Cảng 189 Hải Phòng :>map_data Hải Phòng :>map_data Hải Phòng :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng 189 Hải Phòng",
                "mien": "Bắc",
                "ma": "189HP",
                "mo_ta": "Cảng Tân Cảng 189, Phường Đông Hải 2, Quận Hải An, Hải Phòng, Việt Nam."
            }, {
                "_id": "jaThasRZyaGuQTzDo",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng Quốc tế Cái Mép - Thị Vải ODA",
                        "geo_name": "Cảng Tổng hợp Thị Vải",
                        "geo_latitude": 10.5721419,
                        "geo_longitude": 107.0230786
                    },
                    "subdepartment": {
                        "ten": "Tân Thành",
                        "geo_latitude": 10.593358,
                        "geo_longitude": 107.0161674,
                        "geo_name": "Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam"
                    },
                    "department": {
                        "ten": "Bà Rịa - Vũng Tàu",
                        "geo_latitude": 10.4026665,
                        "geo_longitude": 107.0555453,
                        "geo_name": "Bà Rịa - Vũng Tàu, Việt Nam"
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:20:16.786+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Quốc tế Cái Mép - Thị Vải ODA :>ma CMETCOT :>mo_ta Cảng Quốc Tế Cái Mép - Thị Vải ODA, Huyện Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam :>map_data Cảng Quốc tế Cái Mép - Thị Vải ODA :>map_data Tân Thành :>map_data Bà Rịa - Vũng Tàu :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Quốc tế Cái Mép - Thị Vải ODA",
                "mien": "Nam",
                "mo_ta": "Cảng Quốc Tế Cái Mép - Thị Vải ODA, Huyện Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam",
                "ma": "CMETCOT"
            }, {
                "_id": "oDmSkijpLPwvwYwpQ",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cam Ranh",
                        "geo_name": "Cam Ranh, Khánh Hòa, Việt Nam",
                        "geo_latitude": 11.9012779,
                        "geo_longitude": 109.1548267
                    },
                    "subdepartment": {
                        "ten": "Cam Ranh",
                        "geo_name": "Cam Ranh, Khánh Hòa, Việt Nam",
                        "geo_latitude": 11.9177923,
                        "geo_longitude": 109.0755474
                    },
                    "department": {
                        "ten": "Khánh Hòa",
                        "geo_latitude": 12.3358479,
                        "geo_longitude": 108.5060481,
                        "geo_name": "Khánh Hòa, Việt Nam"
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:37:44.816+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cam Ranh :>ma CMR :>mo_ta Cam Ranh, Khánh Hoà, Việt Nam. :>map_data Cam Ranh :>map_data Cam Ranh :>map_data Khánh Hòa :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cam Ranh",
                "mien": "Nam",
                "ma": "CMR",
                "mo_ta": "Cam Ranh, Khánh Hoà, Việt Nam."
            }, {
                "_id": "sfmjr53xuqAFuLGhL",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng Quốc tế Tân Cảng - Cái Mép",
                        "geo_name": "Cảng Container Quốc Tế Tân Cảng - Cái Mép",
                        "geo_latitude": 10.5573372,
                        "geo_longitude": 107.056545
                    },
                    "subdepartment": {
                        "ten": "Tân Thành",
                        "geo_name": "Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam",
                        "geo_latitude": 10.593358,
                        "geo_longitude": 107.0161674
                    },
                    "department": {
                        "ten": "Bà Rịa - Vũng Tàu",
                        "geo_name": "Bà Rịa - Vũng Tàu, Việt Nam",
                        "geo_latitude": 10.4026665,
                        "geo_longitude": 107.0555453
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:29:50.724+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Quốc tế Tân Cảng - Cái Mép :>ma CMETCIT :>mo_ta Cảng Quốc tế Tân Cảng - Cái Mép, Huyện Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam :>map_data Cảng Quốc tế Tân Cảng - Cái Mép :>map_data Tân Thành :>map_data Bà Rịa - Vũng Tàu :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Quốc tế Tân Cảng - Cái Mép",
                "mien": "Nam",
                "ma": "CMETCIT",
                "mo_ta": "Cảng Quốc tế Tân Cảng - Cái Mép, Huyện Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam"
            }, {
                "_id": "JcZ9YWQyKmkC5a3LL",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng Tân Cảng - Cái Mép",
                        "geo_name": "Cảng Tân Cảng Cái Mép",
                        "geo_latitude": 10.5398251,
                        "geo_longitude": 107.0310859
                    },
                    "subdepartment": {
                        "ten": "Tân Thành",
                        "geo_name": "Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam",
                        "geo_latitude": 10.593358,
                        "geo_longitude": 107.0161674
                    },
                    "department": {
                        "ten": "Bà Rịa - Vũng Tàu",
                        "geo_latitude": 10.4026665,
                        "geo_longitude": 107.0555453,
                        "geo_name": "Bà Rịa - Vũng Tàu, Việt Nam"
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:33:49.362+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Tân Cảng - Cái Mép :>ma CMETCCT :>mo_ta Cảng Tân Cảng - Cái Mép, Huyện Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam. :>map_data Cảng Tân Cảng - Cái Mép :>map_data Tân Thành :>map_data Bà Rịa - Vũng Tàu :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Tân Cảng - Cái Mép",
                "mien": "Nam",
                "ma": "CMETCCT",
                "mo_ta": "Cảng Tân Cảng - Cái Mép, Huyện Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam."
            }, {
                "_id": "LhAFKbYLxg6Rv6NqS",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng Dầu Thực Vật",
                        "geo_name": "Cảng Dầu Thực Vật",
                        "geo_latitude": 10.729322,
                        "geo_longitude": 106.7424075
                    },
                    "subdepartment": {
                        "ten": "Quận 7",
                        "geo_name": "Quận 7, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.7380907,
                        "geo_longitude": 106.6918648
                    },
                    "department": {
                        "ten": "Hồ Chí Minh",
                        "geo_name": "Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.769,
                        "geo_longitude": 106.4141667
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:43:18.468+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Dầu Thực Vật :>ma DTV :>mo_ta Cảng Dầu Thực Vật, Phường Phú Thuận, Quận 7, Hồ Chí Minh, Việt Nam. :>map_data Cảng Dầu Thực Vật :>map_data Quận 7 :>map_data Hồ Chí Minh :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Dầu Thực Vật",
                "mien": "Nam",
                "mo_ta": "Cảng Dầu Thực Vật, Phường Phú Thuận, Quận 7, Hồ Chí Minh, Việt Nam.",
                "ma": "DTV"
            }, {
                "_id": "J2u7swMsu3vnsdbnp",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cao Lãnh",
                        "geo_name": "Cao Lãnh, Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.4797494,
                        "geo_longitude": 105.5547217
                    },
                    "subdepartment": {
                        "ten": "Cao Lãnh",
                        "geo_latitude": 10.4797494,
                        "geo_longitude": 105.5547217,
                        "geo_name": "Cao Lãnh, Đồng Tháp, Việt Nam"
                    },
                    "department": {
                        "ten": "Đồng Tháp",
                        "geo_latitude": 10.553171,
                        "geo_longitude": 105.2862711,
                        "geo_name": "Đồng Tháp, Việt Nam"
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:45:47.620+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id J2u7swMsu3vnsdbnp :>ten Cao Lãnh :>ma CAOL :>mo_ta Cao Lãnh, Đồng Tháp, Việt Nam. :>map_data Cao Lãnh :>map_data Cao Lãnh :>map_data Đồng Tháp :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-01T08:47:10.219+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Cao Lãnh",
                "mien": "Nam",
                "ma": "CAOL",
                "mo_ta": "Cao Lãnh, Đồng Tháp, Việt Nam."
            }, {
                "_id": "dh3K9LAK5kf9M5XG4",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "geo_name": "Cat Lai Port, Nguyễn Thị Định, Cát Lái, Hồ Chí Minh, Việt Nam",
                        "ten": "Cảng Cát Lái",
                        "geo_latitude": 10.7634574,
                        "geo_longitude": 106.7935266
                    },
                    "subdepartment": {
                        "ten": "Quận 2",
                        "geo_name": "Quận 2, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.7801238,
                        "geo_longitude": 106.72383
                    },
                    "department": {
                        "ten": "Hồ Chí Minh",
                        "geo_name": "Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.769,
                        "geo_longitude": 106.4141667
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:51:32.204+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Cát Lái :>ma CLA :>mo_ta Cảng Cát Lái, Phường Cát Lái, Quận 2, Hồ Chí Minh, Việt Nam. :>map_data Cảng Cát Lái :>map_data Quận 2 :>map_data Hồ Chí Minh :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Cát Lái",
                "mien": "Nam",
                "mo_ta": "Cảng Cát Lái, Phường Cát Lái, Quận 2, Hồ Chí Minh, Việt Nam.",
                "ma": "CLA"
            }, {
                "_id": "jZETWwh7JQKPBtAZk",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Depot Suối Tiên",
                        "geo_name": "Depot Suối Tiên, Quận 9, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.8524681,
                        "geo_longitude": 106.8165064
                    },
                    "subdepartment": {
                        "ten": "Quận 9",
                        "geo_name": "Quận 9, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.8306106,
                        "geo_longitude": 106.7489719
                    },
                    "department": {
                        "ten": "Hồ Chí Minh",
                        "geo_name": "Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.769,
                        "geo_longitude": 106.4141667
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:54:27.503+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id jZETWwh7JQKPBtAZk :>ten Depot Suối Tiên :>ma DPST :>mo_ta Depot Suối Tiên, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam. :>map_data Depot Suối Tiên :>map_data Quận 9 :>map_data Hồ Chí Minh :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-01T09:08:49.727+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Depot Suối Tiên",
                "mien": "Nam",
                "ma": "DPST",
                "mo_ta": "Depot Suối Tiên, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam."
            }, {
                "_id": "hxD8Jy94F87Ly3aar",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Đồng Tháp",
                        "geo_name": "Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.553171,
                        "geo_longitude": 105.2862711
                    },
                    "subdepartment": {
                        "ten": "Đồng Tháp",
                        "geo_name": "Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.553171,
                        "geo_longitude": 105.2862711
                    },
                    "department": {
                        "ten": "Đồng Tháp",
                        "geo_name": "Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.553171,
                        "geo_longitude": 105.2862711
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:57:53.957+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Đồng Tháp :>ma DTHAP :>mo_ta Đồng Tháp, Việt Nam. :>map_data Đồng Tháp :>map_data Đồng Tháp :>map_data Đồng Tháp :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Đồng Tháp",
                "mien": "Nam",
                "ma": "DTHAP",
                "mo_ta": "Đồng Tháp, Việt Nam."
            }, {
                "_id": "ADA6WNLosq55vaxv6",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Đồng Nai",
                        "geo_name": "Đồng Nai, Việt Nam",
                        "geo_latitude": 11.0826545,
                        "geo_longitude": 106.6032817
                    },
                    "subdepartment": {
                        "ten": "Đồng Nai",
                        "geo_name": "Đồng Nai, Việt Nam",
                        "geo_latitude": 11.0826545,
                        "geo_longitude": 106.6032817
                    },
                    "department": {
                        "ten": "Đồng Nai",
                        "geo_name": "Đồng Nai, Việt Nam",
                        "geo_latitude": 11.0826545,
                        "geo_longitude": 106.6032817
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T08:56:31.445+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id ADA6WNLosq55vaxv6 :>ten Đồng Nai :>ma DNAI :>mo_ta Đồng Nai, Việt Nam. :>map_data Đồng Nai :>map_data Đồng Nai :>map_data Đồng Nai :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :",
                    "ngay_cap_nhat_cuoi": "2016-01-01T08:58:05.229+0000",
                    "nguoi_cap_nhat_cuoi": "Ai3PeP5nbk2mxEr55",
                    "nguoi_cap_nhat_cuoi_field": "Long Hồ:longxuanho@admin.io"
                },
                "ten": "Đồng Nai",
                "mien": "Nam",
                "ma": "DNAI",
                "mo_ta": "Đồng Nai, Việt Nam."
            }, {
                "_id": "sXWStiCdNWxjTYQNx",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "geo_latitude": 10.761905,
                        "geo_longitude": 106.777099,
                        "ten": "Hiệp Lực",
                        "geo_name": "Hiệp Lực, Quận 2, Hồ Chí Minh, Việt Nam"
                    },
                    "subdepartment": {
                        "ten": "Quận 2",
                        "geo_name": "Quận 2, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.7801238,
                        "geo_longitude": 106.72383
                    },
                    "department": {
                        "ten": "Hồ Chí Minh",
                        "geo_name": "Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.769,
                        "geo_longitude": 106.4141667
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:02:20.418+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Hiệp Lực :>ma HLUC :>mo_ta Hiệp Lực, Quận 2, Hồ Chí Minh, Việt Nam. :>map_data Hiệp Lực :>map_data Quận 2 :>map_data Hồ Chí Minh :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Hiệp Lực",
                "mien": "Nam",
                "ma": "HLUC",
                "mo_ta": "Hiệp Lực, Quận 2, Hồ Chí Minh, Việt Nam."
            }, {
                "_id": "oGvX6fcbDvvymnn82",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng Hiệp Phước",
                        "geo_name": "Cảng Hiệp Phước, Nhà Bè, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.6457998,
                        "geo_longitude": 106.7419833
                    },
                    "subdepartment": {
                        "ten": "Nhà Bè",
                        "geo_name": "Nhà Bè, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.6514861
                    },
                    "department": {
                        "ten": "Hồ Chí Minh",
                        "geo_name": "Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.769,
                        "geo_longitude": 106.4141667
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:05:28.817+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Hiệp Phước :>ma HPHC :>mo_ta Cảng Hiệp Phước, Huyện Nhà Bè, Hồ Chí Minh, Việt Nam. :>map_data Cảng Hiệp Phước :>map_data Nhà Bè :>map_data Hồ Chí Minh :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Hiệp Phước",
                "mien": "Nam",
                "mo_ta": "Cảng Hiệp Phước, Huyện Nhà Bè, Hồ Chí Minh, Việt Nam.",
                "ma": "HPHC"
            }, {
                "_id": "Tt325LKchidm63MpZ",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Long Bình",
                        "geo_name": "Long Bình, Biên Hòa, Đồng Nai, Việt Nam",
                        "geo_latitude": 10.9295922,
                        "geo_longitude": 106.8673142
                    },
                    "subdepartment": {
                        "ten": "Biên Hòa",
                        "geo_name": "Biên Hòa, Đồng Nai, Việt Nam",
                        "geo_longitude": 106.8041011,
                        "geo_latitude": 10.9142863
                    },
                    "department": {
                        "ten": "Đồng Nai",
                        "geo_name": "Đồng Nai,  Việt Nam",
                        "geo_latitude": 11.0826545,
                        "geo_longitude": 106.6032817
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:08:36.143+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Long Bình :>ma LBI :>mo_ta Long Bình, Tp. Biên Hòa, Đồng Nai, Việt Nam. :>map_data Long Bình :>map_data Biên Hòa :>map_data Đồng Nai :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Long Bình",
                "mien": "Nam",
                "ma": "LBI",
                "mo_ta": "Long Bình, Tp. Biên Hòa, Đồng Nai, Việt Nam."
            }, {
                "_id": "4mxxNPMCbACqNeAhH",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Cảng Tân Cảng Miền Trung",
                        "geo_name": "Cảng Tân Cảng Miền Trung, Quy Nhơn, Bình Định, Việt Nam",
                        "geo_latitude": 13.7771192,
                        "geo_longitude": 109.2339043
                    },
                    "subdepartment": {
                        "ten": "Quy Nhơn",
                        "geo_name": "Quy Nhơn, Bình Định, Việt Nam",
                        "geo_latitude": 13.7849973,
                        "geo_longitude": 109.1462224
                    },
                    "department": {
                        "ten": "Bình Định",
                        "geo_name": "Bình Định, Việt Nam",
                        "geo_latitude": 14.1086382,
                        "geo_longitude": 108.3904283
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:12:06.213+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Cảng Tân Cảng Miền Trung :>ma TCMT :>mo_ta Cảng Tân Cảng Miền Trung, Thành phố Quy Nhơn, Bình Định, Việt Nam. :>map_data Cảng Tân Cảng Miền Trung :>map_data Quy Nhơn :>map_data Bình Định :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Cảng Tân Cảng Miền Trung",
                "mien": "Trung",
                "ma": "TCMT",
                "mo_ta": "Cảng Tân Cảng Miền Trung, Thành phố Quy Nhơn, Bình Định, Việt Nam."
            }, {
                "_id": "R2eWbPJ5RY2gW4NLj",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Mỹ Tho",
                        "geo_name": "Mỹ Tho, Tiền Giang, Việt Nam",
                        "geo_latitude": 10.3701453,
                        "geo_longitude": 106.3102548
                    },
                    "subdepartment": {
                        "ten": "Mỹ Tho",
                        "geo_name": "Mỹ Tho, Tiền Giang, Việt Nam",
                        "geo_latitude": 10.3701453,
                        "geo_longitude": 106.3102548
                    },
                    "department": {
                        "ten": "Tiền Giang",
                        "geo_name": "Tiền Giang, Việt Nam",
                        "geo_latitude": 10.4008248,
                        "geo_longitude": 106.023872
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:14:20.891+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Mỹ Tho :>ma MTHO :>mo_ta Mỹ Tho, Tiền Giang, Việt Nam. :>map_data Mỹ Tho :>map_data Mỹ Tho :>map_data Tiền Giang :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Mỹ Tho",
                "mien": "Nam",
                "mo_ta": "Mỹ Tho, Tiền Giang, Việt Nam.",
                "ma": "MTHO"
            }, {
                "_id": "sNskanWatC2QDJMCQ",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Nhơn Trạch",
                        "geo_name": "Nhơn Trạch, Đồng Nai, Việt Nam",
                        "geo_latitude": 10.6838626,
                        "geo_longitude": 106.8138859
                    },
                    "subdepartment": {
                        "ten": "Nhơn Trạch",
                        "geo_name": "Nhơn Trạch, Đồng Nai, Việt Nam",
                        "geo_latitude": 10.6838626,
                        "geo_longitude": 106.8138859
                    },
                    "department": {
                        "ten": "Đồng Nai",
                        "geo_name": "Đồng Nai, Việt Nam",
                        "geo_latitude": 11.0826545,
                        "geo_longitude": 106.6032817
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:16:10.162+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Nhơn Trạch :>ma NHTR :>mo_ta Nhơn Trạch, Đồng Nai, Việt Nam. :>map_data Nhơn Trạch :>map_data Nhơn Trạch :>map_data Đồng Nai :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Nhơn Trạch",
                "mien": "Nam",
                "ma": "NHTR",
                "mo_ta": "Nhơn Trạch, Đồng Nai, Việt Nam."
            }, {
                "_id": "vuW5gvEXdSNJ3sjY4",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Sa Đéc",
                        "geo_name": "Sa Đéc, Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.3211596,
                        "geo_longitude": 105.7078306
                    },
                    "subdepartment": {
                        "ten": "Sa Đéc",
                        "geo_name": "Sa Đéc, Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.3211596,
                        "geo_longitude": 105.7078306
                    },
                    "department": {
                        "ten": "Đồng Tháp",
                        "geo_name": "Đồng Tháp, Việt Nam",
                        "geo_latitude": 10.553171,
                        "geo_longitude": 105.2862711
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:17:57.921+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Sa Đéc :>ma SADE :>mo_ta Sa Đéc, Đồng Tháp, Việt Nam. :>map_data Sa Đéc :>map_data Sa Đéc :>map_data Đồng Tháp :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Sa Đéc",
                "ma": "SADE",
                "mien": "Nam",
                "mo_ta": "Sa Đéc, Đồng Tháp, Việt Nam."
            }, {
                "_id": "C7Gp6vyYP9mnvXrBL",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Sóng Thần",
                        "geo_name": "Sóng Thần, Thuận An, Bình Dương, Việt Nam",
                        "geo_latitude": 10.912866,
                        "geo_longitude": 106.7271724
                    },
                    "subdepartment": {
                        "ten": "Thuận An",
                        "geo_name": "Thuận An, Bình Dương, Việt Nam",
                        "geo_latitude": 10.9319717,
                        "geo_longitude": 106.6299823
                    },
                    "department": {
                        "ten": "Bình Dương",
                        "geo_name": "Bình Dương, Việt Nam",
                        "geo_latitude": 11.1823621,
                        "geo_longitude": 106.3715096
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:20:35.752+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Sóng Thần :>ma STHN :>mo_ta Sóng Thần, Thuận An, Bình Dương, Việt Nam. :>map_data Sóng Thần :>map_data Thuận An :>map_data Bình Dương :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Sóng Thần",
                "mien": "Nam",
                "mo_ta": "Sóng Thần, Thuận An, Bình Dương, Việt Nam.",
                "ma": "STHN"
            }, {
                "_id": "oT7wiNbGYGNM4ek5H",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Tân Cảng",
                        "geo_name": "Vinhomes Tân Cảng, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.7890702,
                        "geo_longitude": 106.7345711
                    },
                    "subdepartment": {
                        "ten": "Quận Bình Thạnh",
                        "geo_name": "Quận Bình Thạnh, Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.8125912,
                        "geo_longitude": 106.6995731
                    },
                    "department": {
                        "ten": "Hồ Chí Minh",
                        "geo_name": "Hồ Chí Minh, Việt Nam",
                        "geo_latitude": 10.769,
                        "geo_longitude": 106.4141667
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:23:03.566+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Tân Cảng :>ma TCA :>mo_ta Tân Cảng, Quận Bình Thạnh, Hồ Chí Minh, Việt Nam. :>map_data Tân Cảng :>map_data Quận Bình Thạnh :>map_data Hồ Chí Minh :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Tân Cảng",
                "mien": "Nam",
                "ma": "TCA",
                "mo_ta": "Tân Cảng, Quận Bình Thạnh, Hồ Chí Minh, Việt Nam."
            }, {
                "_id": "z6y2tsx3MRLokC8MY",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Thanh Hóa",
                        "geo_name": "Thanh Hóa, Việt Nam",
                        "geo_latitude": 19.9791564,
                        "geo_longitude": 104.6666147
                    },
                    "subdepartment": {
                        "geo_latitude": 19.9791564,
                        "geo_longitude": 104.6666147,
                        "ten": "Thanh Hóa",
                        "geo_name": "Thanh Hóa, Việt Nam"
                    },
                    "department": {
                        "ten": "Thanh Hóa",
                        "geo_name": "Thanh Hóa, Việt Nam",
                        "geo_longitude": 104.6666147,
                        "geo_latitude": 19.9791564
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:25:12.485+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Thanh Hóa :>ma THHOA :>mo_ta Thanh Hóa, Việt Nam. :>map_data Thanh Hóa :>map_data Thanh Hóa :>map_data Thanh Hóa :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Thanh Hóa",
                "mien": "Bắc",
                "ma": "THHOA",
                "mo_ta": "Thanh Hóa, Việt Nam."
            }, {
                "_id": "yojorJuTghbLJ34cX",
                "isPublic": true,
                "isArchived": false,
                "map_data": {
                    "location": {
                        "ten": "Thốt Nốt",
                        "geo_name": "Thốt Nốt, Cần Thơ, Việt Nam",
                        "geo_latitude": 10.2720923,
                        "geo_longitude": 105.5026965
                    },
                    "subdepartment": {
                        "ten": "Cần Thơ",
                        "geo_name": "Cần Thơ, Việt Nam",
                        "geo_latitude": 10.0345932,
                        "geo_longitude": 105.7214751
                    },
                    "department": {
                        "geo_longitude": 105.7214751,
                        "geo_latitude": 10.0345932,
                        "geo_name": "Cần Thơ, Việt Nam",
                        "ten": "Cần Thơ"
                    }
                },
                "metadata": {
                    "ngay_tao": "2016-01-01T09:27:08.780+0000",
                    "nguoi_tao": "Ai3PeP5nbk2mxEr55",
                    "nguoi_tao_field": "Long Hồ:longxuanho@admin.io",
                    "search_field": ">_id undefined :>ten Thốt Nốt :>ma TNOT :>mo_ta Thốt Nốt, Cần Thơ, Việt Nam. :>map_data Thốt Nốt :>map_data Cần Thơ :>map_data Cần Thơ :>metadata Ai3PeP5nbk2mxEr55 :>metadata Long Hồ:longxuanho@admin.io :"
                },
                "ten": "Thốt Nốt",
                "mien": "Nam",
                "ma": "TNOT",
                "mo_ta": "Thốt Nốt, Cần Thơ, Việt Nam."
            }

        ];

        _.each(diabans, function(diaban) {
            DiaBans.insert(diaban);
            console.log('Added diaban [' + diaban.ten + ']');
        });
    };
});
