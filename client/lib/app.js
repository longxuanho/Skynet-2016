var skynetApp = angular.module('angular-skynet', ['angular-meteor',
	'ui.router',
	'accounts.ui',
	'angularUtils.directives.dirPagination',
	'ui.grid',
	'ui.grid.saveState',
	'ui.grid.pinning',
	'ui.grid.resizeColumns',
	'ui.grid.moveColumns',
	'ui.grid.exporter',
	'ui.grid.selection',
	'ui.grid.grouping',
	'ui.calendar',
	'ngAnimate',
	'ngSanitize',
	'ngAnimate',
	'icheck',
	'ngSwitchery',
	'kendo.directives',
	'ngFileUpload',
  	'ngImgCrop',
  	'angular-meteor.auth']);

skynetApp.constant('variables', {
    header__main_height: 48,
    easing_swiftOut: [ 0.4,0,0.2,1 ],
    bez_easing_swiftOut: jQuery.bez([ 0.4,0,0.2,1 ])
});

skynetApp.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**',
        'https://w.soundcloud.com/**'
    ]);
});


function onReady() {
    angular.bootstrap(document, ['angular-skynet'], {
        strictDi: true
    });
    kendo.culture("vi-VN");
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);