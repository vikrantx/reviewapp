app.service('ProjectService', ['$http', function ($http) {
    this.getProjects = function ($scope) {
        return $http({
            method: 'GET',
            url: 'http://reviewservice.azurewebsites.net/api/projects',
            headers: { 'Content-Type': 'application-json' }
        }).success(function (data) {
            $scope.Projects = JSON.parse(data);
            //console.log(data);
        }).error(function (data) {
            console.log(data);
        });
    };

}]);