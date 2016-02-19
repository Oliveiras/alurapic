angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	// get fotos
	$http.get('/v1/fotos')
	.success(function(result) {
		$scope.fotos = result;
	}).error(function(error) {
		console.log(error);
	});

	$scope.remove = function(foto) {
		$http.delete('/v1/fotos/' + foto._id)
		.success(function() {
			$scope.mensagem = 'Foto removida com sucesso.';
			var index = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(index, 1);
		}).error(function(err) {
			$scope.mensagem = 'Não foi possível remover a foto';
		});
	};

});