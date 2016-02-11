angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
	var ddo = {
		restrict: 'AE',
		transclude: true,
		templateUrl: 'js/directives/meu-painel.html',
		scope: {
			titulo: '@',
		},
	};
	return ddo;
});