myApp.controller("homeCtrl", ['$scope', "HomeService", "$state", function($scope, HomeService, $state) {
  const goToClientsPage = () => {
    $state.go('clientsHome');
  }

  $scope.goToClientsPage = goToClientsPage;
}]);