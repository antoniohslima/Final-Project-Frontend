myApp.controller("clientsHomeCtrl", ['$scope', "ClientsHomeService", "$state", function($scope, ClientsHomeService, $state) {
  
  const listClients = () => {
    $scope.allClients = [];

    return ClientsHomeService.getClients()
    .then((resp) => {
      $scope.allClients = resp.data;
      console.log(allClients);
      // $scope.err = false;
      // $state.go('login');
    })
    .catch(() => {
      // $scope.err = true;
      // $scope.managerData.password = '';
      // $scope.managerData.email = '';
    })
  }

  $scope.listClients = listClients;
  $scope.listClients()
}]);