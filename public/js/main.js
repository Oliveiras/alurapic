angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: '/partials/fotos.html',
		controller: 'FotosController',
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: '/partials/fotos/new.html',
	});

	$routeProvider.otherwise({ redirectTo: '/fotos' });
});
