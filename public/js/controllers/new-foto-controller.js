angular.module('alurapic').controller('NewFotoController', function($scope, $http) {

	$scope.foto = {};
	$scope.mensagem = '';

	$scope.enviar = function() {
		// quit if form is not valid
		if ($scope.formulario.$invalid) {
			return;
		}
		// send via post
		$http.post('/v1/fotos', $scope.foto)
		// handle success
		.success(function() {
			$scope.mensagem = 'Foto cadastrada com sucesso!';
			$scope.formulario.$submitted = false;
			$scope.foto = {};
		})
		// handle error
		.error(function(err) {
			console.log(err);
			$scope.mensagem = 'Erro ao cadastrar a foto.';
		});
	};
});
