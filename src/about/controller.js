/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    var module = angular.module('aboutC',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/about',{
            templateUrl:'about/view.html',
            controller:'aboutCtl'
        })
    }]);
    module.controller('aboutCtl',['$scope',function ($scope) {

    }]);
})(angular);