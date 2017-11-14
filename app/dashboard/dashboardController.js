angular.module('moneyKeeper').controller('DashboardCtrl', [
    '$scope',
    '$http',
    DashboardController
])

function DashboardController($scope, $http) {


    $scope.getSummary = function () {
        let url = 'http://localhost:3003/api/billingSummary'
        $http.get(url).then(function({credit = 0, debt = 0}) {
            $scope.credit = credit
            $scope.debt = debt
            $scope.total = credit - debt
        })
    }

    $scope.getSummary()
}