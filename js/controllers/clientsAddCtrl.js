myApp.controller("clientsAddCtrl", ['$scope', "ClientsService", "AlertMessage", "$state", function($scope, ClientsService, AlertMessage, $state) {
  $scope.client = {}

  $scope.createClient = () => {
    return ClientsService.createClient($scope.client)
      .then(() => {
        AlertMessage.success('Cliente criado comsucesso.');
        $state.go('clientsHome');
      })
      .catch((err) => {
        AlertMessage.error('Algo deu errado, por favor reveja os dados inseridos.');
      }); 
  };
}]);