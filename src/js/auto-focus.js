/**
 * Created by lhy on 2016/5/10.
 */
(function (angular) {
    angular.module('autoFocusC',[])
        //自定义指令
        .directive('autoFocus',['$location',function ($location) {
            var path = $location.path();//   /coming_soon/1
            return {
                redirect: 'A',
                link: function ($scope,ele) {
                    $scope.$location  = $location;
                    $scope.$watch('$location.path()',function (now) {
                        var link = ele.children().attr('href');
                        var type = link.replace(/#(\/.+?)/,'$1');
                        if(now.startsWith(type)){
                            ele.parent().children().removeClass('active');
                            ele.addClass('active');
                        }
                    });
                }
            }
        }])
})(angular);