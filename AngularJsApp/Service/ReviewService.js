app.service('ReviewService', ['$http', function ($http) {
    this.getReviews = function ($scope) {
        return $http({
            method: 'GET',
            url: 'http://reviewservice.azurewebsites.net/api/review',
            headers: { 'Content-Type': 'application-json' }
        }).success(function (data) {
            $scope.Reviews = JSON.parse(data);
            //console.log(data);
        }).error(function (data) {
            console.log(data);
        });
    };
    this.getReview = function ($scope, id) {
        return $http({
            method: 'GET',
            url: 'http://reviewservice.azurewebsites.net/api/review/' + id,
            headers: { 'Content-Type': 'application-json' }
        }).success(function (data) {
            $scope.Review = JSON.parse(data);
            //console.log($scope.Review);
        }).error(function (data) {
            console.log(data);
        });
    }

}]);