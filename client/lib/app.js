var skynetApp = angular.module('angular-skynet', [
	'angular-meteor',
	'ui.router',
	'accounts.ui',
	'angularUtils.directives.dirPagination',
	'ui.calendar',
	'ngAnimate',
	'ngSanitize',	
	'icheck',
    'selectize',
	'ngSwitchery',
	'kendo.directives',
	'ngFileUpload',
  	'ngImgCrop',
  	'angular-meteor.auth']);

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