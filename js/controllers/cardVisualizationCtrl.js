myApp.controller("cardVisualizationCtrl", ['$scope', "ClientsService", "ClientsCardService", "$state", function($scope, ClientsService, ClientsCardService, $state) {
  const clientId = localStorage.getItem('clientId');
  const cardId = localStorage.getItem('cardId');

  const cardHTML = document.getElementById('card-container');
  const cardBackHTML = document.getElementById('card-container-back');

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

        if($scope.card.limit == 10000) {
          $scope.card.type = 'Gold';
          cardHTML.classList.add('gold');
          cardBackHTML.classList.add('gold-back');
        }
        else if ($scope.card.limit == 50000){
          $scope.card.type = 'Platinum';
          cardHTML.classList.add('platinum');
        }
        else if ($scope.card.limit == 200000){
          $scope.card.type = 'Black';
          cardHTML.classList.add('black');
        }
        else {
          $scope.card.type = 'Full';
          cardHTML.classList.add('full');
        }

      })
  }

  $scope.getCardInfo(clientId, cardId)
}]);