/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    var module = angular.module('videoC',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/video',{
            templateUrl:'video/view.html',
            controller:'videoCtl'
        })
    }]);
    module.controller('videoCtl',['$scope',function ($scope) {

    }]);
})(angular);