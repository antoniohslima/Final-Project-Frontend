myApp.controller("cardVisualizationCtrl", ['$scope', "ClientsCardService", "NetworkService", "CardService", "$state", function($scope, ClientsCardService, NetworkService, CardService, $state) {
  const clientId = localStorage.getItem('clientId');
  const cardId = localStorage.getItem('cardId');
  const card_id = localStorage.getItem('card_id_network');
  
  const cardHTML = document.getElementById('card-container');
  const cardBackHTML = document.getElementById('card-container-back');
  
  $scope.type = localStorage.getItem('cardType');
  
  $scope.setCardStyle = (type) => {
    cardHTML.classList.add(`${type}`);
    cardBackHTML.classList.add(`${type}-back`);
    return 
  }

  $scope.getNetworkName = (network_id) => {
    return NetworkService.getNetworkName(network_id)
      .then(resp => {
        $scope.networkName = resp.data.name;

        $scope.link = `../assets/img/${$scope.networkName}.png`
      })
    }
    
    $scope.getNetworkId = (card_id) => {
      return CardService.getNetworkId(card_id)
      .then(resp => {
        $scope.networkId = resp.data.network_id;
        
        $scope.getNetworkName($scope.networkId);
      })
    }
    

  $scope.getCardInfo = (clientId, cardId) => {
    return ClientsCardService.getClientCard(clientId, cardId)
    .then(resp => {
      $scope.card = resp.data;
      
      const number = $scope.card.number;
      
      let cardNumber = ''
      
      for ( let i = 0; i < number.length; i += 4) {
        cardNumber = cardNumber + ' ' +(number.slice(i, i + 4))
      }
      
      $scope.card.number = cardNumber;
    })
  }
  
  // $scope.setCardStyle($scope.type, $scope.networkName);
  $scope.setCardStyle($scope.type);
  $scope.getNetworkId(card_id);
  $scope.getCardInfo(clientId, cardId);
  
}]);