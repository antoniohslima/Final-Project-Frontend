myApp.controller("cardCreateCtrl", ['$scope', "ClientsCardService", "ClientsService", "NetworkService", "$state", function($scope, ClientsCardService, ClientsService, NetworkService, $state) {
  const clientId = localStorage.getItem('clientId');
  
  const cardHTML = document.getElementById('card-container');
  const cardBackHTML = document.getElementById('card-container-back');
  
  $scope.card = {}
  $scope.type = localStorage.getItem('cardType');

  $scope.threeYears = moment().add(3, 'years').format('yyyy-MM-DD');
  $scope.fiveYears = moment().add(5, 'years').format('yyyy-MM-DD');
  $scope.sevenYears = moment().add(7, 'years').format('yyyy-MM-DD');

  
  $scope.setCardStyle = (type) => {
    cardHTML.classList.add(`${type}`);
    cardBackHTML.classList.add(`${type}-back`);
    return 
  }
  
  
  $scope.listNetworks = () => {
    return NetworkService.getNetworks()
    .then(resp => {
      $scope.networks = resp.data;
    })
  }
  
  $scope.submitCard = (card, network) => {
    card.network = network.name;
    
    return ClientsCardService.createCard(clientId, card)
    .then(() => {
      $state.go('client-cards');
    })
    
  }
  
  $scope.listNetworks();
  $scope.setCardStyle($scope.type);
  
}]);