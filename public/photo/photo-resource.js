angular.module('alurapic')
.factory('PhotoResource', function($resource) {
	return $resource('/v1/fotos/:fotoId', null, {
		put: {
			method: 'PUT',
		},
		post: {
			method: 'POST',
		},
	});
});
