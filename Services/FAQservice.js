app.factory('FAQService', function($http) {
    var endpoint = 'http://localhost:3000/preguntasFrecuentes'; // Endpoint del servidor JSON

    return {
        getPreguntasFrecuentes: function() {
            return $http.get(endpoint);
        },
        agregarPreguntaFrecuente: function(pregunta, respuesta) {
            return $http.post(endpoint, { pregunta: pregunta, respuesta: respuesta });
        }
    };
});
