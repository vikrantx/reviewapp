app.controller('myController', ['$scope', 'ReviewService', 'ProjectService', 'ScopeService', '$uibModal',  '$log', function ($scope, ReviewService, ProjectService, ScopeService, $uibModal, $log) {
    ReviewService.getReviews($scope);

    ProjectService.getProjects($scope);
    ScopeService.getScopes($scope);
    //$scope.appscope = [
    //                    { 'Id': '1', 'PId': '2', 'ScopeName': 'Add User info' },
    //                    { 'Id': '2', 'PId': '4', 'ScopeName': 'Upload File to Azure' },
    //                    { 'Id': '4', 'PId': '2', 'ScopeName': 'VCR Working' },
    //                    { 'Id': '5', 'PId': '4', 'ScopeName': 'Home theater working' },
    //                    { 'Id': '6', 'PId': '2', 'ScopeName': 'Light are not blinking' }
    //];

    //$scope.projects = [
    //                    { 'Id': '1', 'ProjectName': 'Tv Application' },
    //                    { 'Id': '2', 'ProjectName': 'Video Library' },
    //                    { 'Id': '4', 'ProjectName': 'Office Management' },
    //                    { 'Id': '5', 'ProjectName': 'Travels To do' },
    //                    { 'Id': '6', 'ProjectName': 'Alarm Alert' }
    //];

    $scope.GetReview = function (id) {
        return ReviewService.getReview($scope, id);
    };

    //$scope.Reviews = [
    //                    { 'Id': '1', 'ProjectName': 'Tv Application', 'ScopeName': 'Add User info', 'Date': '3/4/2014', 'AssingedTo': 'Vikrant', 'ReviewBy': 'Rajendra', 'Severity': 'High', 'Category': 'Improvement', 'Status': 'Open' },
    //                    { 'Id': '2', 'ProjectName': 'Video Library', 'ScopeName': 'Add User info', 'Date': '1/4/2015', 'AssingedTo': 'Rajnish', 'ReviewBy': 'Vikrant', 'Severity': 'Low', 'Category': 'Defect', 'Status': 'On Hold' },
    //                    { 'Id': '3', 'ProjectName': 'Travels To do', 'ScopeName': 'VCR Working', 'Date': '3/4/2014', 'AssingedTo': 'William', 'ReviewBy': 'Rajendra', 'Severity': 'High', 'Category': 'Suggestion', 'Status': 'Close' },
    //                    { 'Id': '4', 'ProjectName': 'Tv Application', 'ScopeName': 'Add User info', 'Date': '6/4/2014', 'AssingedTo': 'Vikrant', 'ReviewBy': 'Rajendra', 'Severity': 'Medium', 'Category': 'Improvement', 'Status': 'Rejected' },
    //                    { 'Id': '5', 'ProjectName': 'Video Library', 'ScopeName': 'VCR Working', 'Date': '7/4/2014', 'AssingedTo': 'Rajnish', 'ReviewBy': 'Vikrant', 'Severity': 'High', 'Category': 'Defect', 'Status': 'Open' },
    //                    { 'Id': '6', 'ProjectName': 'Video Library', 'ScopeName': 'Home theater working', 'Date': '8/4/2014', 'AssingedTo': 'Vikrant', 'ReviewBy': 'Rajendra', 'Severity': 'Low', 'Category': 'Suggestion', 'Status': 'Close' }
    //];

    $scope.ItemSelected = function (item) {
        $scope.SelectedProject = item;
        $scope.CurrentProject = item;
        $scope.CurrentProjectIndex = $scope.Projects[$scope.Projects.map(function (d) { return d['Name']; }).indexOf(item)].Id;
        //alert(item);
        barChartData.labels = [];
        //get id of current project and load scope into barChartData.labels from  $scope.appscope
        //add data in barchart.dataset.data according to reviewtype
        //for chart dataset.data parameter count and labels count should be same otherwise it will be an extra undefined column
        for (var i = 0; i < $scope.appscope.length; i++) {
            if ($scope.appscope[i].PId == $scope.CurrentProjectIndex)
                barChartData.labels.push($scope.appscope[i].Name);
        }

        $scope.CreateChart();
    };

    $scope.filreview = [];
    $scope.filterScope = function (r) {
        return function (p) {
            for (var i in $scope.filreview) {
                console.log(p.Scope + ' reviewId scopeId - ' + p.Id + ' ' + p.ScopeId + ' : Original scopes ' + $scope.appscope[i].Id + ' : ' + $scope.filreview[i]);
                if (p.ScopeId == $scope.appscope[i].Id && $scope.filreview[i]) {

                    return true;
                }
            }
        };
    };

    //function for popup
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size, turl) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: turl,
            controller: 'ModalInstanceCtrl',
            scope:$scope,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

  

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.popupReview = function (id) {
        $scope.GetReview(id);
        var modalInstance1 = $uibModal.open({
            animation: true,
            templateUrl: 'viewReview.html',
            controller: 'myController',
            size: 'lg',

        });

        modalInstance1.result.then(function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };



    $scope.CreateChart = function () {
        createBarChart();
    };
}]);