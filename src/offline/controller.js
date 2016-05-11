/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    var module = angular.module('offlineC',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/offline',{
            templateUrl:'offline/view.html',
            controller:'offlineCtl'
        })
    }]);
    module.controller('offlineCtl',['$scope',function ($scope) {

    }]);
})(angular);