angular.module('angular-skynet').filter('displayDate', function() {
    return function(date, type) {
        if (!date)
            return;
        if (_.isDate(date) && type) {
            if (type === 'calendar')
                return moment(date).calendar();
            if (type === 'standard')
                return moment(date).format('L');
            if (type === 'fromNow')
                return moment(date).fromNow();
            // Các trường hợp khác, xuất theo định dạng type: MM-DD-YYYY HH:mm A Z
            return moment(date).format(type);            

        } else
            return date;
    }
});
