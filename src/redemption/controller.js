/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    var module = angular.module('redemptionC',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/redemption',{
            templateUrl:'redemption/view.html',
            controller:'redemptionCtl'
        })
    }]);
    module.controller('redemptionCtl',['$scope',function ($scope) {

    }]);
})(angular);