angular.module('alurapic')
.directive('categoryCombobox', function() {
	var ddo = {
		restrict: 'E',
		templateUrl: 'category/category-combobox.html',
		scope: {
			titulo: '@',
		},
	};
	return ddo;
});
