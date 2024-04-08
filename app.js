var app = angular.module('miApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngSanitize', 'ngResource', 'toastr']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Views/home.html",
            controller: "homeController"
        })
        .when("/login", {
            templateUrl: "Views/login.html",
            controller: "loginController",
            controllerAs: "login"
        })
        .when("/systemOut", {
            templateUrl: "Views/systemOut.html",
            controller: "systemOutController",
            controllerAs:"systemOut"
        })
        .when("/creacionTicket", {
            templateUrl: "Views/creacionTicket.html",
            controller: "CreacionTicketController",
            controllerAs:"systemOut"
        })
        .when("/historialTickets", {
            templateUrl: "Views/historialTickets.html",
            controller: "HistorialTicketsController",
            controllerAs:"systemOut"
        })
        .when("/registroCliente", {
            templateUrl: "Views/registroCliente.html",
            controller: "RegistroClienteController",
            controllerAs:"systemOut"
        })
        .when("/presupuesto", {
            templateUrl: "Views/presupuesto.html",
            controller: "PresupuestoController",
            controllerAs:"systemOut"
        })

        .when("/metodoPago", {
            templateUrl: "Views/metodoPago.html",
            controller: "MetodosPagoController",
            controllerAs:"systemOut"
        })
        .when("/preguntasFrecuentes", {
            templateUrl: "Views/preguntasFrecuentes.html",
            controller: "FAQController",
            controllerAs:"systemOut"
        })
        .otherwise({
            redirectTo: '/home'
        });
        
});