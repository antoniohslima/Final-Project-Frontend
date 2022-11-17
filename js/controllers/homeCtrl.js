myApp.controller("homeCtrl", ['$scope', "ManagerService", "$state", function($scope, ManagerService, $state) {
  $scope.goToClientsPage = () => {
    $state.go('clientsHome');
  }

  const init = () => {
    return ManagerService.show()
      .then( resp => {
        $scope.manager = resp.data;
      })
      .catch((e) => {
        console.log(e);
      })
  }
  init();
}]);