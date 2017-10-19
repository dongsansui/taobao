/**
 * Created by John on 2017/10/18.
 */
var app = angular.module("app",["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("shopping",{
            url:"/shopping",
            templateUrl:"./App/Views/shopCar.html",
            controller:"shoppingCarController"
        });
    $urlRouterProvider.otherwise("/shopping");
});