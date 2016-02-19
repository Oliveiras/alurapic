angular.module('alurapic').controller('NewFotoController', function($scope, $http, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';

	if ($routeParams.fotoId) {
		$http.get('/v1/fotos/' + $routeParams.fotoId)
		.success(function(foto) {
			$scope.foto = foto;
		})
		.error(function(err) {
			console.log(err);
		});
	}

	$scope.enviar = function() {
		// quit if form is not valid
		if ($scope.formulario.$invalid) {
			return;
		}

		if ($routeParams.fotoId) {
			// send via put
			$http.put('/v1/fotos/' + $routeParams.fotoId, $scope.foto)
			.success(function() {
				$scope.mensagem = 'Foto atualizada com sucesso!';
			})
			.error(function(err) {
				console.log(err);
				$scope.mensagem = 'Erro ao atualizar a foto.';
			});
		} else {
			// send via post
			$http.post('/v1/fotos', $scope.foto)
			.success(function() {
				$scope.mensagem = 'Foto cadastrada com sucesso!';
				$scope.formulario.$submitted = false;
				$scope.foto = {};
			})
			.error(function(err) {
				console.log(err);
				$scope.mensagem = 'Erro ao cadastrar a foto.';
			});
		}
	};
});
