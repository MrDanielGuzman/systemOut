app.controller('FAQController', function($scope, $http) {
    $scope.preguntasFrecuentes = [];
    
    // Cargar preguntas existentes
    $scope.cargarPreguntas = function() {
        $http.get('http://localhost:3000/preguntasFrecuentes')
            .then(function(response) {
                $scope.preguntasFrecuentes = response.data;
            });
    };

    // Inicialmente cargar preguntas
    $scope.cargarPreguntas();

    // Agregar pregunta
    $scope.agregarPreguntaFrecuente = function(pregunta, respuesta) {
        const nuevaPregunta = { pregunta, respuesta };
        $http.post('http://localhost:3000/preguntasFrecuentes', nuevaPregunta)
            .then(function() {
                $scope.preguntasFrecuentes.push(nuevaPregunta);
                // Limpiar campos
                $scope.nuevaPregunta = '';
                $scope.nuevaRespuesta = '';
            })
            .catch(function(error) {
                console.error('Error al agregar pregunta frecuente:', error);
            });
    };

    // Modificar pregunta
    $scope.modificarPregunta = function(id, preguntaActualizada) {
        $http.put('http://localhost:3000/preguntasFrecuentes/' + id, preguntaActualizada)
            .then(function(response) {
                // Actualizar la vista o recargar las preguntas
                cargarPreguntas(); // Asume que tienes una función para cargar las preguntas
                alert('Pregunta actualizada con éxito');
            })
            .catch(function(error) {
                console.error('Error al actualizar la pregunta:', error);
                alert('Error al actualizar la pregunta');
            });
    };
    

    // Eliminar pregunta
    $scope.eliminarPregunta = function(id) {
        $http.delete(`http://localhost:3000/preguntasFrecuentes/${id}`)
            .then(function() {
                $scope.cargarPreguntas(); // Recargar las preguntas
            });
    };

    $scope.habilitarEdicion = function(pregunta) {
        pregunta.editando = true;
    };

    $scope.cancelarEdicion = function(pregunta) {
        pregunta.editando = false;
        // Opcional: recargar la pregunta desde el servidor si se desea descartar los cambios
    };

    $scope.actualizarPregunta = function(pregunta) {
        // Aquí iría el código para enviar la pregunta actualizada al servidor
        pregunta.editando = false; // Desactivar el modo de edición tras la actualización
    };
    
});
