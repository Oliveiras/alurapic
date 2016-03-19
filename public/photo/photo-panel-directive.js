angular.module('alurapic')
.directive('photoPanel', function() {
	var ddo = {
		restrict: 'E',
		transclude: true,
		templateUrl: 'photo/photo-panel.html',
		scope: {
			titulo: '@',
		},
	};
	return ddo;
});
