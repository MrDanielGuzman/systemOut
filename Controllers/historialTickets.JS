app.controller('HistorialTicketsController', function($scope, $http) {
    $scope.searchKeyword = '';
    $scope.searchTicketNumber = '';

    $scope.tickets = [];

    $scope.buscar = function() {
        // Realizar la búsqueda por palabra clave o número de ticket
        $http.get('http://localhost:3000/tickets')
            .then(function(response) {
                $scope.tickets = response.data.filter(function(ticket) {
                    return ticket.descripcion.toLowerCase().includes($scope.searchKeyword.toLowerCase()) ||
                           ticket.categoria.toLowerCase().includes($scope.searchKeyword.toLowerCase()) ||
                           ticket.prioridad.toLowerCase().includes($scope.searchKeyword.toLowerCase()) ||
                           ticket.id === $scope.searchTicketNumber;
                });
            })
            .catch(function(error) {
                console.error('Error al buscar historial de tickets:', error);
            });
    };
});
