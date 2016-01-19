app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
    // Please note that $modalInstance represents a modal window (instance) dependency.
    // It is not the same as the $uibModal service used above.

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };
    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});