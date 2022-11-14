myApp.controller("cardsManagementCtrl", ['$scope', "ClientsService", "ClientsCardService", "AlertMessage", "$state", function($scope, ClientsService, ClientsCardService, AlertMessage, $state) {
  $scope.clientId = localStorage.getItem('clientId');

  $scope.goToCreateCard = () => {
    $state.go('card-create');
  }
  
  $scope.goToPath = (id, path) => {
    localStorage.setItem("cardId", id);
    $state.go(path);
  } 

  $scope.showClient = (id) => {
    return ClientsService.showClient(id)
      .then(resp => {
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

  $scope.deleteCard = async (cardId, clientId) => {
    const confirmation = await Swal.fire({
      title: "Deseja realmente excluir esse cartão?",
      showCancelButton: true,
      confirmButtonText: "Excluir",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
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