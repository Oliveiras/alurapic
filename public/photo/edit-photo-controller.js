angular.module('alurapic')
.controller('EditPhotoController', function($scope, $routeParams, PhotoResource) {

	$scope.foto = {};
	$scope.mensagem = '';

	// retrieve the photo, if updating
	if ($routeParams.fotoId) {		
		PhotoResource.get({fotoId: $routeParams.fotoId}).$promise
		.then(function(foto) {
			$scope.foto = foto;
		})
		.catch(function(err) {
			console.log(err);
			$scope.mensagem = 'Erro ao recuperar a foto';
		});
	}

	$scope.enviar = function() {

		// quit if form is not valid
		if ($scope.formulario.$invalid) {
			return;
		}

		// send via put, if updating
		if ($routeParams.fotoId) {
			PhotoResource.put({fotoId: $routeParams.fotoId}, $scope.foto).$promise
			.then(function() {
				$scope.mensagem = 'Foto atualizada com sucesso!';
			})
			.catch(function(err) {
				console.log(err);
				$scope.mensagem = 'Erro ao atualizar a foto.';
			});
		}

		// send via post, if creating
		else {
			PhotoResource.post($scope.foto).$promise
			.then(function() {
				$scope.mensagem = 'Foto cadastrada com sucesso!';
				$scope.formulario.$submitted = false;
				$scope.foto = {};
			})
			.catch(function(err) {
				console.log(err);
				$scope.mensagem = 'Erro ao cadastrar a foto.';
			});
		}
	};
});
