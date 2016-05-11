/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    var module = angular.module('quizC',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/quiz',{
            templateUrl:'3Dquiz/view.html',
            controller:'quizCtl'
        })
    }]);
    module.controller('quizCtl',['$scope',function ($scope) {
        
    }]);
})(angular);
