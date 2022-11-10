myApp.controller("clientsEditCtrl", ['$scope', "ClientsService", "$state", function($scope, ClientsService, $state) {
  $scope.clientId = localStorage.getItem('clientId');

  $scope.updateInfo = {};

  $scope.updateClient = (id, data) => {
    return ClientsService.updateClient(id, data)
      .then(() => {
        $state.go('clientsHome');
      })
      .catch((e) => {
        console.log(e);
      })
  }

  $scope.showClient = () => {
    return ClientsService.showClient($scope.clientId)
      .then(resp => {
        $scope.updateInfo = resp.data;
      })
  }

  $scope.showClient();
}]);