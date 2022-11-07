myApp.controller("clientsHomeCtrl", ['$scope', "ClientsService", "$state", function($scope, ClientsService, $state) {
  const listClients = () => { 
    return ClientsService.getClients()
    .then((resp) => {
      $scope.allClients = resp.data;
      console.log($scope.edit);
      })
      .catch((e) => {
       
      })
  }

  $scope.goToAddClients = () => {
    $state.go('clients-add');
  }

  $scope.goToEdit = (email) => {
    localStorage.setItem("clientEmail", email);
    $state.go('clients-add');
  }


  listClients();
}]);