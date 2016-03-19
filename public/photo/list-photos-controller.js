angular.module('alurapic')
.controller('ListPhotosController', function($scope, PhotoResource) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	// get photos
	PhotoResource.query().$promise
	.then(function(fotos) {
		$scope.fotos = fotos;
	})
	.catch(function(err) {
		console.log(error);
		$scope.mensagem = 'Erro ao recuperar as fotos';
	});

	$scope.remove = function(foto) {
		PhotoResource.delete({fotoId: foto._id}).$promise
		.then(function() {
			$scope.mensagem = 'Foto removida com sucesso.';
			var index = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(index, 1);
		})
		.catch(function(err) {
			console.log(err);
			$scope.mensagem = 'Não foi possível remover a foto';
		});
	};

});