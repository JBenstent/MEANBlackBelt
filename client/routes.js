/*

client/partials/config.js
Configure client routes, and really anything

*/

var app = angular.module("app", ["ngRoute"]);
console.log("creating app")

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "partials/login.html",
      controller: "Login"
    })

    .when("/alltasks", {
        templateUrl: "partials/all-tasks.html",
        controller: "all-Tasks"
    })
    .when("/create", {
        templateUrl: "partials/new_item.html",
        controller: "Create-Task"
    })
    .otherwise('/')
    console.log("Configuring routes")
});
