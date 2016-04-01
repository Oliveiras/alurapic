angular.module('alurapic')
.factory('photoResource', function($resource) {
	return $resource('/v1/fotos/:fotoId', null, {
		put: {
			method: 'PUT',
		},
		post: {
			method: 'POST',
		},
	});
});
