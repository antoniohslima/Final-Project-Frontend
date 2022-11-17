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
  
  // $scope.minDate = moment().format('yyyy-MM-DD');
  // $scope.maxDate = moment().add(10, 'years').format('yyyy-MM-DD');
  
  $scope.listNetworks = () => {
    return NetworkService.getNetworks()
    .then(resp => {
      $scope.networks = resp.data;
    })
  }
  
  $scope.submitCard = (card, network) => {
    // card.expiration_date = moment(card.expiration_date).format('MM/DD/yyy');
    card.network = network.name;
    
    return ClientsCardService.createCard(clientId, card)
    .then(() => {
      $state.go('client-cards');
    })
    
  }
  
  $scope.listNetworks();
  $scope.setCardStyle($scope.type);
  
  
  // const getNetWorth = (id) => {
  //   ClientsService.showClient(id)
  //     .then(resp => {
  //       const net_worth = resp.data.net_worth;
  
  //       if(net_worth >= 10000000) {
  //         $scope.type = 'Full';
  //         cardHTML.classList.add('full');
  //         cardBackHTML.classList.add('full-back');
  
  //       }
  //       else if (net_worth > 1000000){
  //         $scope.type = 'Black';
  //         cardHTML.classList.add('black');
  //         cardBackHTML.classList.add('black-back');
  //       }
  //       else if (net_worth > 100000){
  //         $scope.type = 'Platinum';
  //         cardHTML.classList.add('platinum');
  //         cardBackHTML.classList.add('platinum-back');
  //       }
  //       else {
  //         $scope.type = 'Gold';
  //         cardHTML.classList.add('gold');
  //         cardBackHTML.classList.add('gold-back');
  //       }
  //     })
    
    
  // }
  
  // getNetWorth(clientId);
}]);