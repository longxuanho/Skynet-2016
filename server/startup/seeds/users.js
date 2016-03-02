Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        var users = [
            /* 1 */
            {
                "_id" : "Z3h7xFa5PTwkEpSvg",
                "createdAt" : Date("2015-12-01T08:14:02.428Z"),
                "services" : {
                    "password" : {
                        "bcrypt" : "$2a$10$IPigdDH.D0xLPB9lYPTISeA1IVris3PZmjC9OA0RzlLispZ9Lg1y2"
                    }
                },
                "username" : "manager",
                "emails" : [ 
                    {
                        "address" : "test@manager.io",
                        "verified" : true
                    }
                ],
                "profile" : {
                    "name" : "Manager",
                    "search_field" : "Z3h7xFa5PTwkEpSvg : manager : test@manager.io : Manager"
                },
                "roles" : {
                    "sky-project" : [
                        "ktvt",
                        "super-manager"
                    ]
                },
                "status" : {
                    "online" : false
                }
            },

            /* 2 */
            {
                "_id" : "ffo8F8zGe5knoqTuL",
                "createdAt" : Date("2015-12-01T08:14:02.534Z"),
                "services" : {
                    "password" : {
                        "bcrypt" : "$2a$10$6xNVLXGYB4al6hkpl6kCReiRVoTkSiFWOKs9XSm6x70JGFuZYcdwS"
                    }
                },
                "username" : "guest",
                "emails" : [ 
                    {
                        "address" : "test@guest.io",
                        "verified" : true
                    }
                ],
                "profile" : {
                    "name" : "Guest",
                    "search_field" : "ffo8F8zGe5knoqTuL : guest : test@guest.io : Guest"
                },
                "roles" : {
                    "sky-project" : [
                        "ktvt",
                        "basic-user", 
                        "manager-tau"
                    ]
                },
                "status" : {
                    "online" : false
                }
            },

            /* 3 */
            {
                "_id" : "i3XznGMpg79JRtEcS",
                "createdAt" : Date("2015-12-01T08:14:02.313Z"),
                "services" : {
                    "password" : {
                        "bcrypt" : "$2a$10$FsphXhO7xbT1Og.Vaxqx.uQbO2GLKXLIlnj1HIrZoZmyBeaCu0OPC"
                    },
                    "resume" : {
                        "loginTokens" : []
                    }
                },
                "username" : "user",
                "emails" : [ 
                    {
                        "address" : "test@user.io",
                        "verified" : true
                    }
                ],
                "profile" : {
                    "name" : "User (KTVT)",
                    "search_field" : "i3XznGMpg79JRtEcS : user : test@user.io : User (KTVT)"
                },
                "roles" : {
                    "sky-project" : [
                        "ktvt",
                        "support-staff"
                    ]
                },
                "status" : {
                    "online" : false,
                    "lastLogin" : {
                        "date" : Date("2015-12-13T09:53:52.768Z"),
                        "ipAddr" : "127.0.0.1",
                        "userAgent" : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36"
                    }
                }
            },

            /* 4 */
            {
                "_id" : "Ai3PeP5nbk2mxEr55",
                "createdAt" : Date("2015-12-01T08:14:02.129Z"),
                "services" : {
                    "password" : {
                        "bcrypt" : "$2a$10$fRtiZimah7rymICUiQW1j.51Jnrh5Mmq.YwnNuYRcCJFniMJrwxgW"
                    },
                    "resume" : {
                        "loginTokens" : [ 
                            {
                                "when" : Date("2015-12-13T09:54:06.810Z"),
                                "hashedToken" : "DQ31MjK0cJsY5ktLhEQTU/gx61hDsX5qt1dO2piCizg="
                            }
                        ]
                    }
                },
                "username" : "longxuanho",
                "emails" : [ 
                    {
                        "address" : "longxuanho@admin.io",
                        "verified" : true
                    }
                ],
                "profile" : {
                    "name" : "Long Hồ",
                    "search_field" : "Ai3PeP5nbk2mxEr55 : longxuanho : longxuanho@admin.io : Long Hồ"
                },
                "roles" : {
                    "sky-project" : [
                        "ktvt",
                        "admin", 
                        "manage-users"
                    ]
                },
                "status" : {
                    "online" : true,
                    "lastLogin" : {
                        "date" : Date("2015-12-16T05:20:20.201Z"),
                        "ipAddr" : "127.0.0.1",
                        "userAgent" : "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36"
                    },
                    "idle" : false
                }
            }
        ];

        _.each(users, function(user) {
            Meteor.users.insert(user);
            console.log('Added user [' + user.emails[0].address + ']');
        });
    };
});
