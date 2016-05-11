(function (angular) {
    var app = angular.module('app',[
        'ngRoute','quizC','aboutC','indexC','offlineC','redemptionC','videoC','autoFocusC'
    ]);
    app.config(['$routeProvider',function($routeProvider) {
        $routeProvider.otherwise({redirectTo:'/index'});
    }]);
})(angular);