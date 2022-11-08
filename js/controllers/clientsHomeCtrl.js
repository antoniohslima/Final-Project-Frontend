myApp.controller("clientsHomeCtrl", ['$scope', "ClientsService", "$state", function($scope, ClientsService, $state) {
  const listClients = () => { 
    return ClientsService.getClients()
    .then((resp) => {
      $scope.allClients = resp.data;
      })
      .catch((e) => {
       
      })
  }

  $scope.goToAddClients = () => {
    $state.go('clients-add');
  }

  $scope.goToEdit = (id) => {
    localStorage.setItem("clientId", id);
    $state.go('clients-edit');
  }

  $scope.deleteClient = (id) => {
    return ClientsService.deleteClient(id)
      .then((resp) => {
        listClients()
      })
  }


  listClients();
}]);