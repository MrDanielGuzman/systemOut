app.controller("homeController", function ($scope, $rootScope) {
    $scope.isLogued = false;


    

    $scope.init = function () {
        $scope.isLogued = amplify.store.sessionStorage("isLogued");
    };

    $scope.init();

    // Agregar un listener para actualizar $scope.isLogued después de cerrar sesión
    $rootScope.$on('loggedOut', function(event, data) {
        $scope.isLogued = false;
    });
});


