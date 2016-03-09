angular.module('angular-skynet').filter('displayDate', function() {
    return function(date, type) {
        if (!date)
            return;
        if (_.isDate(date)) {
            if (type === 'calendar')
                return moment(date).calendar();
            if (type === 'standard')
                return moment(date).format('L');
            if (type === 'fromNow')
                return moment(date).fromNow();
            return moment(date).fromNow();
            

        } else
            return date;
    }
});
