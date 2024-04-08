app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    // Si el usuario selecciona un archivo, convertirlo a Base64.
                    if (element[0].files && element[0].files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            // Asume solo un archivo y lo asigna en Base64.
                            modelSetter(scope, e.target.result);
                        };
                        reader.readAsDataURL(element[0].files[0]);
                    }
                });
            });
        }
    };
}]);

app.controller('CreacionTicketController', function($scope, $http) {
    $scope.ticket = {
        descripcion: '',
        categoria: '',
        prioridad: '',
        archivoAdjunto: '' // Asegúrate de agregar esta nueva propiedad
    };

    $scope.crearTicket = function() {
        // Aquí tu código para crear el ticket, asegúrate de incluir el archivoAdjunto.
        $http.post('http://localhost:3000/tickets', $scope.ticket)
            .then(function(response) {
                alert('Ticket creado exitosamente con archivo adjunto');
                $scope.ticket = {}; // Limpiar el formulario
            })
            .catch(function(error) {
                console.error('Error al crear el ticket:', error);
                alert('Error al crear el ticket');
            });
    };
});