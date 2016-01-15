module.exports = function(){
    //var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //var zipPattern = /^\d{5}$/;

    return {
        restrict: 'E',
        templateUrl: 'assets/js/directives/templates/ab-text-field.html',
        controller: function($scope){
            if (angular.isUndefined($scope.field))
                $scope.field = "text";
            if (angular.isUndefined($scope.req))
                $scope.req = "false";

            if ($scope.name=="zipcode")
                $scope.ptn=/^\d{5}$/;

            if ($scope.name=="email")
                $scope.ptn=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        },
        scope: {
            req: '@',
            name: '@',
            ph:'@',
            ptn:'@',
            field:'@',
            ngModel: '='
        }
    };
};
