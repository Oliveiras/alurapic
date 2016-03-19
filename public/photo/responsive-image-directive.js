angular.module('alurapic')
.directive('responsiveImage', function() {
	var ddo = {
		restrict: 'E',
		templateUrl: 'photo/responsive-image.html',
		scope: {
			titulo: '@',
			url: '@',
		},
	};
	return ddo;
});
