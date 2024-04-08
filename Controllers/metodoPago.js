app.controller('MetodosPagoController', function($scope, $http) {
    $scope.metodoPago = {
        tarjeta: ''
    };

    $scope.registrarMetodoPago = function() {
        $http.post('http://localhost:3000/metodos-pago', $scope.metodoPago)
            .then(function(response) {
                alert('Método de pago registrado correctamente');
                $scope.metodoPago = {}; // Limpiar el formulario
            })
            .catch(function(error) {
                console.error('Error al registrar el método de pago:', error);
                alert('Error al registrar el método de pago');
            });
    };
});
