app.controller("loginController", function($rootScope, $location) {
    var vm = this;

    vm.username = '';
    vm.password = '';
    vm.usuarioDefecto = {
        usuario: 'user',
        contraseña: 'password'
    };
    vm.errorMessage = '';

    vm.login = function() {
        if (!vm.username || !vm.password) {
            vm.errorMessage = "Error en el formulario";
            return;
        } 
        
        if (vm.username !== vm.usuarioDefecto.usuario || vm.password !== vm.usuarioDefecto.contraseña) {
            vm.errorMessage = "Error al validar usuario";
            return;
        }

        vm.errorMessage = "";
        amplify.store.sessionStorage("isLogued", true);
        amplify.store.sessionStorage("userInfo", { user: vm.username });

        // Emitir evento de inicio de sesión
        $rootScope.$broadcast('loggedIn');
        //console.log("Se ha iniciado sesion");
        $location.url("/home");
    };

    // Método para cerrar sesión
    vm.logOut = function() {
        amplify.store.sessionStorage("isLogued", false);
        amplify.store.sessionStorage("userInfo", null);

        // Emitir evento de cierre de sesión
        $rootScope.$broadcast('loggedOut');
        //console.log("se ha cerrado la sesión");

        // Redirigir a la página de inicio
        $location.url("/home");
    };
});
