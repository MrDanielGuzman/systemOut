app.controller("indexController", function ($scope, $location, $timeout, $rootScope) {
    $scope.isLogued = false;

    $scope.init = function () {
        $scope.isLogued = amplify.store.sessionStorage("isLogued");

        $scope.linkActivo();
    };

    /**
     * Selecciona la vista actual en la barra de navegación
     * @param {string} linkActual 
     */
    $scope.linkActivo = function (linkActual) {
        return linkActual === $location.path();
    }

    $scope.logOut = function () {
        amplify.store.sessionStorage("isLogued", false);
        amplify.store.sessionStorage("userInfo", null);

        // Emitir evento de cierre de sesión
        $rootScope.$broadcast('loggedOut');
        $location.url("/home");
    };

    // Agregar un listener para actualizar $scope.isLogued después de iniciar sesión correctamente
    $scope.$on('loggedIn', function(event, data) {
        $scope.isLogued = true;
        console.log("se ha iniciado la sesion")
    });

    // Agregar un listener para actualizar $scope.isLogued después de cerrar sesión
    $scope.$on('loggedOut', function(event, data) {
        $scope.isLogued = false;
        console.log("se ha cerrado la sesion");
    });

    $scope.init();
});