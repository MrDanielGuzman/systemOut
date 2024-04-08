app.controller('RegistroClienteController', function($scope, $http) {
    $scope.cliente = {
        nombre: '',
        direccion: '',
        telefono: ''
    };

    $scope.registrarCliente = function() {
        $http.post('http://localhost:3000/clientes', $scope.cliente)
            .then(function(response) {
                alert('Cliente registrado correctamente');
                $scope.cliente = {}; // Limpiar el formulario
            })
            .catch(function(error) {
                console.error('Error al registrar el cliente:', error);
                alert('Error al registrar el cliente');
            });
    };
});
