app.controller('PresupuestoController', function($scope, $http) {
    $scope.presupuesto = {
        descripcion: '',
        costo: ''
    };

    $scope.generarPresupuesto = function() {
        $http.post('http://localhost:3000/presupuestos', $scope.presupuesto)
            .then(function(response) {
                alert('Presupuesto generado correctamente');
                $scope.presupuesto = {}; // Limpiar el formulario
            })
            .catch(function(error) {
                console.error('Error al generar el presupuesto:', error);
                alert('Error al generar el presupuesto');
            });
    };
});
