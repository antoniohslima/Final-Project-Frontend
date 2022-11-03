myApp.controller("clientsHomeCtrl", ['$scope', "ClientsService", "$state", function($scope, ClientsService, $state) {
  const listClients = () => {
    
    return ClientsService.getClients()
      .then((resp) => {
        $scope.allClients = resp.data;
      })
      .catch((e) => {
        // console.log(e);
        // $scope.err = true;
        // $scope.managerData.password = '';
        // $scope.managerData.email = '';
      })
  }

  listClients();
}]);