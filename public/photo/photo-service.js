angular.module('alurapic')
.factory('photoService', function($rootScope, $q, photoResource) {
	var service = {};

	service.savedEvent = 'photo-saved';

	service.save = function(photo) {
		return $q(function(resolve, reject) {
			var upsertPromise = null;

			if (photo._id) {
				upsertPromise = photoResource.put({fotoId: photo._id}, photo)
				.then(function() {
					resolve({
						message: 'Foto ' + photo.titulo + ' cadastrada com sucesso.',
						created: false,
						error: false,
					});
				});
			} else {
				upsertPromise = photoResource.post(photo)
				.then(function() {
					resolve({
						message: 'Foto ' + photo.titulo + ' atualizada com sucesso.',
						created: false,
						error: false,
					});
				});
			}

			upsertPromise.then(function() {
				$rootScope.$broadcast(service.savedEvent);
			})
			.catch(function(err) {
				reject({
					message: 'Erro ao salvar a foto.',
					error: true,
				});
			});
		});
	};

	return service;
});
