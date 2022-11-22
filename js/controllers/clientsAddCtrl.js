myApp.controller("clientsAddCtrl", ['$scope', "ClientsService", "AlertMessage", "$state", function($scope, ClientsService, AlertMessage, $state) {
  $scope.client = {}

  const isValid = () => {
    if($scope.client.age < 18) {
      AlertMessage.error('O cliente precisa ter no mínimo 18 anos.');
      return false;
    }
    return true
  }

  $scope.createClient = () => {
    if(!isValid()) return false

    return ClientsService.createClient($scope.client)
      .then(() => {
        AlertMessage.success('Cliente criado comsucesso.');
        $state.go('clientsHome');
      })
      .catch(() => {
        AlertMessage.error('Algo deu errado, por favor reveja os dados inseridos.');
      }); 
  };
}]);