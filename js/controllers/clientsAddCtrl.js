myApp.controller("clientsAddCtrl", ['$scope', "ClientsService", "$state", function($scope, ClientsService, $state) {
  $scope.client = {
    email: '',
    name: '',
    age: '',
    net_worth: '',
  }

  $scope.check = true;

  $scope.createClient = () => {
    return ClientsService.createClient($scope.client)
      .then(() => {
        $state.go('clientsHome');
      })
      .catch(() => {
        $scope.check = false;
      }); 
  };
}]);