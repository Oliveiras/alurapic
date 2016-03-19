angular.module('alurapic')
.controller('CategoryController', function($scope, $http) {
    $http.get('/v1/grupos')
    .success(function(grupos) {
        $scope.grupos = grupos;
    })
    .error(function(erro) {
        console.log(erro);
    });
});
