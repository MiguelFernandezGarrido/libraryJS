
let controller = angular.module('library', ["ngRoute"]);
controller.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/home.html",
        controller: "libraryController"
    }).when("/book/:bookId", {
        templateUrl: "views/book.html",
        controller: "bookController"
    })
    .otherwise({
        templateUrl: "views/error.html"
    });

});

controller.controller("libraryController", function ($scope, $http) {
    $scope.orderBy = "default";
    $http.get("data/books.json")
    .then(response => {
        $scope.books = response.data;
    })
    .catch(error => {
        console.log(error);
    })
});

controller.controller("bookController", function ($scope, $routeParams) {
    var bookId = $routeParams.bookId;
    $scope.book = $scope.books.find(book => book.id === bookId);
    });

