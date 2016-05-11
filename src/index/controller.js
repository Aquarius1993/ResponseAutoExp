/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    var module = angular.module('indexC',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/index',{
            templateUrl:'index/view.html',
            controller:'indexCtl'
        })
    }]);
    module.controller('indexCtl',['$scope',function ($scope) {

    }]);
})(angular);