myApp.controller("cardsManagementCtrl", ['$scope', "ClientsService", "ClientsCardService", "$state", function($scope, ClientsService, ClientsCardService, $state) {
  // const name = document.getElementById('x');

  
  $scope.goToPath = (id, path) => {
    localStorage.setItem("cardId", id);
    $state.go(path);
  } 

  $scope.showClient = (id) => {
    return ClientsService.showClient(id)
      .then(resp => {
        console.log(resp);
        $scope.client = resp.data;
        // console.log(name);
      })
      .catch((e) => {
      })
  }

  $scope.listAllCards = (id) => {
    return ClientsCardService.getClientCards(id)
      .then(resp => {
        $scope.cards = resp.data;
      })
  }

  $scope.clientId = localStorage.getItem('clientId');
  $scope.showClient($scope.clientId);
  $scope.listAllCards($scope.clientId);

}]);