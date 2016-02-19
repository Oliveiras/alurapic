angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: '/partials/fotos.html',
		controller: 'FotosController',
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: '/partials/fotos/new.html',
		controller: 'NewFotoController',
	});

	$routeProvider.when('/fotos/:fotoId', {
		templateUrl: '/partials/fotos/new.html',
		controller: 'NewFotoController',
	});

	$routeProvider.otherwise({ redirectTo: '/fotos' });
});
