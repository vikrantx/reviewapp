app.service('ScopeService', ['$http', function ($http) {
    this.getScopes = function ($scope) {
        return $http({
            method: 'GET',
            url: 'http://reviewservice.azurewebsites.net/api/scope',
            headers: { 'Content-Type': 'application-json' }
        }).success(function (data) {
            $scope.appscope = JSON.parse(data);
            //console.log(data);
        }).error(function (data) {
            console.log(data);
        });
    };

}]);