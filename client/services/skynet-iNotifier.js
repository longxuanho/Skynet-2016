angular.module('angular-skynet').factory('iNotifier', function($rootScope, $window) {
    var factory = {};

    var w = angular.element($window)

    factory.success = function(message) {
        if (_.isObject(message))
            message = message.message;

        if ($rootScope.notificationStyle === 'uikit')
            this.showUIKitNotify(message, 'success', 5000, '', 'bottom-right');
            // UIkit.notify(message, {
            //     status: 'success',
            //     pos: 'bottom-right'
            // });

        if ($rootScope.notificationStyle === 'toastr')
            toastr.success(message);

        if ($rootScope.notificationStyle === 'windows10')
            UIkit.notify(message, {
                pos: 'bottom-center'
            });

        console.log('Success: ', message);
    }

    factory.warning = function(message) {
        if (_.isObject(message))
            message = message.message;

        if ($rootScope.notificationStyle === 'uikit')
            this.showUIKitNotify(message, 'warning', 5000, '', 'bottom-right');

        if ($rootScope.notificationStyle === 'toastr')
            toastr.warning(message);

        if ($rootScope.notificationStyle === 'windows10')
            UIkit.notify(message, {
                pos: 'bottom-center'
            });

        console.log('Warning: ', message);
    }

    factory.error = function(message) {
        if (_.isObject(message))
            message = message.message;

        if ($rootScope.notificationStyle === 'uikit')
            this.showUIKitNotify(message, 'danger', 5000, '', 'bottom-right');

        if ($rootScope.notificationStyle === 'toastr')
            toastr.error(message);

        if ($rootScope.notificationStyle === 'windows10')
            UIkit.notify(message, {
                pos: 'bottom-center'
            });

        console.log('Error: ', message);
    }

    factory.info = function(message) {
        if (_.isObject(message))
            message = message.message;

        if ($rootScope.notificationStyle === 'uikit')
            this.showUIKitNotify(message, 'info', 5000, '', 'bottom-right');
            // UIkit.notify(message, {
            //     status: 'info',
            //     pos: 'bottom-right'
            // });

        if ($rootScope.notificationStyle === 'toastr')
            toastr.info(message);

        if ($rootScope.notificationStyle === 'windows10')
            UIkit.notify(message, {
                pos: 'bottom-center'
            });

        console.log('Info: ', message);
    }

    factory.raise = function(message, status) {
        if (_.isObject(message))
            message = message.message;

        if (status === 'success')
            this.success(message);

        if (status === 'info')
            this.info(message);

        if (status === 'warning')
            this.warning(message);

        if (status === 'error')
            this.error(message);
    }

    factory.showUIKitNotify = function(message, status, timeout, group, position) {
        let thisNotify = UIkit.notify({
            message: message,
            status: status ? status : '',
            timeout: timeout ? timeout : 4000,
            group: group ? group : '',
            pos: position ? position : 'top-center',
            onClose: function() {
                $('body').find('.md-fab-wrapper').css('margin-bottom', '');
                clearTimeout(thisNotify.timeout);
            }
        });

        if (
            ((w.width() < 768) && (
                (position == 'bottom-right') || (position == 'bottom-left') || (position == 'bottom-center')
            )) || (position == 'bottom-right')
        ) {
            var thisNotify_height = $(thisNotify.element).outerHeight(),
                spacer = (w.width() < 768) ? -6 : 8;
            $('body').find('.md-fab-wrapper').css('margin-bottom', thisNotify_height + spacer);
        }
    }

    return factory;

});
