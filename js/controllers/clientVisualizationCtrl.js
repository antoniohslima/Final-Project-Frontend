myApp.controller("clientVisualizationCtrl", ['$scope', "$state",  "ClientsService", "ClientsCardService", "CardService", "AlertMessage", function($scope, $state, ClientsService, ClientsCardService, CardService, AlertMessage) {
  const clientId = localStorage.getItem('clientId');
  $scope.atualCardType = localStorage.getItem('cardType');

  $scope.goToCardVisualization = (cardId, card_id) => {
    localStorage.setItem('cardId', cardId);
    localStorage.setItem('card_id_network', card_id);

    $state.go('card-visualization');
  }
  
  $scope.delClient = async () => {
    const confirmation = await Swal.fire({
      title: 'Tem certeza que dejesa excluir esse cliente?',
      text: "Os dados desse cliente serão apagados!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir',
      cancelButtonText: "Cancelar",
    });

    if (confirmation.isConfirmed) {
      AlertMessage.success("Usuário excluido!")
    }
    
    if (!confirmation.isConfirmed) {
      return;
    }

    const id = localStorage.getItem('clientId');
    ClientsService.deleteClient(id)
      .then(() => {
        $state.go('home')
      })
  }

  $scope.getClientInfo = (clientId) => {
    return ClientsService.showClient(clientId)
    .then(resp => {
      $scope.client = resp.data;
    })
  }
  
  $scope.getCards = (clientId) => {
    return ClientsCardService.getClientCards(clientId)
    .then(resp => {
      const cards = resp.data.cards;
      
      cards.forEach(element => {
        const number = element.number;
        let cardNumber = ''
        
        for ( let i = 0; i < number.length; i += 4) {
          cardNumber = cardNumber + ' ' +(number.slice(i, i + 4))
          }
          
          element.number = cardNumber;

          CardService.getNetworkId(element.card_id)
            .then(resp => {
              element.type = resp.data.type;
            })
          
        });

        $scope.cards = cards;
      })
  }

  $scope.goToCardsMng = () => {
    $state.go('client-cards')
  }

  $scope.getCards(clientId);
  $scope.getClientInfo(clientId);
}]);