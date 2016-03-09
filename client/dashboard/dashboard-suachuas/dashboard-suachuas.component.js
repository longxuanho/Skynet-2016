angular.module('angular-skynet').directive('dashboardSuachuas', function() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard-suachuas/dashboard-suachuas.template.html',
        controllerAs: 'vm',
        bindToController: true,
        controller: function($scope, $stateParams, skynetHelpers, $rootScope, iNotifier, $reactive, skynetDictionary, variables, $timeout) {

            $reactive(this).attach($scope);

            // ***************************************************
            // INITIALIZE
            // ***************************************************

            // Capture 'this contex - Refer to https://github.com/johnpapa/angular-styleguide#controlleras-with-vm
            let vm = this;

            vm._data = skynetHelpers.data;
            vm._helpers = skynetHelpers.helpers;

            vm.pageOptions = {
                
            };

            vm.pageReactiveData = {
                
            };



            let messages = [
                {
                    "id": 1,
                    "sender_avatar": "",
                    "sender": "Elyse Swift",
                    "email": "lelah.keeling@romaguera.org",
                    "title": "Eaque ab fuga corrupti ut enim tempora dolorem.",
                    "content": "Quod rerum et dolores neque animi et magni ex hic rerum qui omnis minima aliquam iusto deleniti consectetur fuga et nihil voluptatem magni qui corrupti animi dolores facilis nulla voluptatem dolore aut doloremque adipisci sunt aut ut deleniti dolores sunt quaerat dolorum facere autem deserunt possimus dolorum consequatur est quidem sint velit nihil aut et voluptates maxime labore recusandae ullam veniam vero eos harum ipsam eos necessitatibus quia esse soluta in nisi sapiente occaecati cumque quam ut hic assumenda error repudiandae et repellat praesentium autem ipsam et consectetur illum rerum perferendis mollitia nihil possimus dignissimos ut aut vel facilis illum voluptatum magni aliquam quia dolores sequi sapiente totam in tempore harum veniam enim vero odit.",
                    "date": "12.08.2016",
                    "sender_color": "cyan",
                    "verified": true
                },
                {
                    "id": 2,
                    "sender_avatar": "",
                    "sender": "Claudia Deckow",
                    "email": "pasquale57@hotmail.com",
                    "title": "Similique quos ea architecto repellendus dolorum unde quis.",
                    "content": "Magnam animi exercitationem repellendus facere minima maxime voluptatem iusto doloribus enim perspiciatis non ducimus fuga quas dolor odio voluptate facere ipsum incidunt earum a necessitatibus in iusto repudiandae ad sed sed dolorem dolor quod quos doloribus sint minima ut reprehenderit consectetur qui voluptatem odio dicta aut rem sunt rem nostrum molestias voluptatem ducimus expedita reprehenderit doloremque animi consequatur eum iste nihil natus natus asperiores commodi neque minus accusantium illum sit quo ab modi incidunt in omnis iusto iusto laboriosam mollitia et consequatur maiores qui error blanditiis aut ut dolorem quis nulla et nulla dolore.",
                    "date": "12.08.2016",
                    "sender_color": "green",
                    "verified": true
                },
                {
                    "id": 3,
                    "sender_avatar": "assets\/img\/avatars\/avatar_05_tn.png",
                    "sender": "Alanna Wisozk",
                    "email": "anabelle74@gmail.com",
                    "title": "Autem provident quia ad suscipit rerum error quibusdam dignissimos et est provident totam non ex.",
                    "content": "Quisquam et doloribus necessitatibus maxime saepe saepe aut quisquam ut velit et alias omnis excepturi nostrum culpa consequatur consequatur voluptas vitae repellendus ut placeat impedit dolorem natus impedit eligendi sint a blanditiis voluptatum magnam facilis aspernatur aut fugit culpa corporis dolor deserunt et non veritatis vero fugiat cupiditate et ea et aut fugiat ratione accusamus qui temporibus a aspernatur voluptates minima magni sequi voluptate laudantium ad quis dolorum et deserunt ad quaerat qui neque saepe praesentium et ea necessitatibus placeat nesciunt nam voluptatibus voluptates illum aut ipsa voluptas eum nisi ratione ex ut dolore doloremque velit aut dignissimos pariatur dolor earum voluptatem sint debitis voluptate eos eligendi eum incidunt adipisci nihil possimus est in voluptas natus ut in unde aliquid quia placeat velit minima autem.",
                    "date": "12.08.2016",
                    "sender_color": "green",
                    "verified": true
                },
                {
                    "id": 4,
                    "sender_avatar": "assets\/img\/avatars\/avatar_10_tn.png",
                    "sender": "Noble Mitchell",
                    "email": "feil.braden@yahoo.com",
                    "title": "Perspiciatis et eum rerum sit.",
                    "content": "Exercitationem ad est dolorum tenetur sint voluptatem sit labore velit ea inventore in dolore exercitationem eum consectetur maiores est consequatur corrupti sint corrupti eligendi harum id voluptatibus beatae veniam laborum enim vitae molestias qui fugit qui porro beatae ut sed ut labore nesciunt nostrum fuga iure iure est quo accusamus sit necessitatibus ut quia cupiditate dolorem delectus et adipisci dolorum nisi rerum est iure facere vitae ab deleniti natus aliquid aperiam minus eligendi aut rerum suscipit aperiam.",
                    "date": "12.08.2016",
                    "sender_color": "grey",
                    "verified": false
                }
            ];

            $rootScope.toBarActive = true;

            $scope.messages = messages;

            var $mailbox = $('#mailbox');

            // select message
            $mailbox
                .on('ifChanged', '.select_message', function() {
                    $(this).is(':checked') ? $(this).closest('li').addClass('md-card-list-item-selected') : $(this).closest('li').removeClass('md-card-list-item-selected');
            });

            // select all messages
            $('#mailbox_select_all').on('ifChanged',function() {
                var $this = $(this);
                $mailbox.find('.select_message').each(function() {
                    $this.is(':checked') ? $(this).iCheck('check') : $(this).iCheck('uncheck');
                })
            });

            // show message details
            $mailbox.on('click', '.md-card-list ul > li', function(e) {

                if ( !$(e.target).closest('.md-card-list-item-menu').length && !$(e.target).closest('.md-card-list-item-select').length ) {

                    var $this = $(this);

                    if (!$this.hasClass('item-shown')) {
                        // get height of clicked message
                        var el_min_height = $this.height() + $this.children('.md-card-list-item-content-wrapper').actual("height");

                        // hide opened message
                        $mailbox.find('.item-shown').velocity("reverse", {
                            begin: function (elements) {
                                $(elements).removeClass('item-shown').children('.md-card-list-item-content-wrapper').hide().velocity("reverse");
                            }
                        });

                        // show message
                        $this.velocity({
                            marginTop: 40,
                            marginBottom: 40,
                            marginLeft: -20,
                            marginRight: -20,
                            minHeight: el_min_height
                        }, {
                            duration: 300,
                            easing: variables.easing_swiftOut,
                            begin: function (elements) {
                                $(elements).addClass('item-shown');
                            },
                            complete: function (elements) {
                                // show: message content, reply form
                                $(elements).children('.md-card-list-item-content-wrapper').show().velocity({
                                    opacity: 1
                                });

                                // scroll to message
                                var container = $('body'),
                                    scrollTo = $(elements);
                                container.animate({
                                    scrollTop: scrollTo.offset().top - $('#page_content').offset().top - 8
                                }, 1000, variables.bez_easing_swiftOut);

                            }
                        });
                    }
                }
            });

            // hide message on: outside click, esc button
            $(document).on('click keydown', function(e) {
                if (
                    ( !$(e.target).closest('li.item-shown').length ) || e.which == 27
                ) {
                    $mailbox.find('.item-shown').velocity("reverse", {
                        begin: function(elements) {
                            $(elements).removeClass('item-shown').children('.md-card-list-item-content-wrapper').hide().velocity("reverse");
                        }
                    });
                }
            });

        

            // ***************************************************
            // SUBSCRIBE
            // ***************************************************

            $scope.subscribe('suachuas', () => {
                return [{
                        limit: parseInt($scope.getReactively('perPage')),
                        skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage'))
                    },
                    $rootScope.getReactively('searchText'),
                    $rootScope.getReactively('searchBy')
                ]
            });

            // ***************************************************
            // REACTIVE HELPERS
            // ***************************************************

            vm.helpers({
                suachuas: () => {
                    return SuaChuas.find({
                        'trang_thai.ma': 'dang_sua_chua'
                    });
                }
            });

            // ***************************************************
            // METHODS
            // ***************************************************
            vm.test = function() {
                $scope.messages.push(
                    {
                        "id": 5,
                        "sender_avatar": "",
                        "sender": "Long Test",
                        "email": "lelah.keeling@romaguera.org",
                        "title": "Eaque ab fuga corrupti ut enim tempora dolorem.",
                        "content": "Quod rerum et dolores neque animi et magni ex hic rerum qui omnis minima aliquam iusto deleniti consectetur fuga et nihil voluptatem magni qui corrupti animi dolores facilis nulla voluptatem dolore aut doloremque adipisci sunt aut ut deleniti dolores sunt quaerat dolorum facere autem deserunt possimus dolorum consequatur est quidem sint velit nihil aut et voluptates maxime labore recusandae ullam veniam vero eos harum ipsam eos necessitatibus quia esse soluta in nisi sapiente occaecati cumque quam ut hic assumenda error repudiandae et repellat praesentium autem ipsam et consectetur illum rerum perferendis mollitia nihil possimus dignissimos ut aut vel facilis illum voluptatum magni aliquam quia dolores sequi sapiente totam in tempore harum veniam enim vero odit.",
                        "date": "12.08.2016",
                        "sender_color": "cyan",
                        "verified": true
                });
            }


            // ***************************************************
            // UTILS
            // ***************************************************

            vm.utils = {
                accentColor: _.findWhere(vm._data.general.themes, {
                    name: $rootScope.main_theme
                }).color_accent,
            };

            // ***************************************************
            // WATCHERS
            // ***************************************************

            $rootScope.$watch('main_theme', (newVal) => {
                vm.utils.accentColor = _.findWhere(vm._data.general.themes, {
                    name: newVal
                }).color_accent;
            });

        }
    }
});

angular.module('angular-skynet')
.filter("lastCharacter", function() {
    return function(x) {
        if (x) {
            return x.charAt(x.length - 1).toUpperCase();
        } else {
            return null;
        }
    };
});