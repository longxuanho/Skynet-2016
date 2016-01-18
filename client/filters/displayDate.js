angular.module('angular-skynet').filter('displayDate', function() {
    return function(date, type) {
        if (!date)
            return;
        if (_.isDate(date)) {
            if (type === 'calendar')
                return moment(date).calendar();
            return moment(date).fromNow();
        } else
            return date;
    }
});
