angular.module('alurapic', ['ngAnimate', 'ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: '/photo/list-photos.html',
		controller: 'ListPhotosController',
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: '/photo/edit-photo.html',
		controller: 'EditPhotoController',
	});

	$routeProvider.when('/fotos/:fotoId', {
		templateUrl: '/photo/edit-photo.html',
		controller: 'EditPhotoController',
	});

	$routeProvider.otherwise({ redirectTo: '/fotos' });
});
