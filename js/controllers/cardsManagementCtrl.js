myApp.controller("cardsManagementCtrl", ['$scope', "ClientsService", "ClientsCardService", "AlertMessage", "$state", function($scope, ClientsService, ClientsCardService, AlertMessage, $state) {
  $scope.clientId = localStorage.getItem('clientId');


  $scope.goToCreateCard = () => {
    $state.go('card-create');
  }
  
  $scope.goToPath = (id, path, card_id) => {
    localStorage.setItem("cardId", id);
    localStorage.setItem('card_id_network', card_id);
    $state.go(path);
  } 
  
  $scope.showClient = (id) => {
    return ClientsService.showClient(id)
    .then(resp => {
      $scope.client = resp.data;
      localStorage.setItem("cardType", $scope.client.CardType);
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
    
    $scope.deleteCard = async (cardId, clientId) => {
    const confirmation = await Swal.fire({
      title: 'Tem certeza que dejesa excluir esse cartão?',
      text: "Os dados desse cartão serão apagados!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir',
      cancelButtonText: "Cancelar",
    });

    if (confirmation.isConfirmed) {
      AlertMessage.success("Cartão excluido!")
    }
    
    if (!confirmation.isConfirmed) {
      return;
    }

    return ClientsCardService.deleteCard(cardId, clientId)
      .then(resp => {
        console.log(resp.data);
        $scope.listAllCards(clientId);
      })
  }

  $scope.showClient($scope.clientId);
  $scope.listAllCards($scope.clientId);
}]);