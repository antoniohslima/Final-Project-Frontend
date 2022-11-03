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

  // $scope.principal = () => {
  //   $state.go('home');
  // }

  listClients();
}]);