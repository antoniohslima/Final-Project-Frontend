myApp.controller("homeCtrl", ['$scope', "ManagerService", "ClientsService",  "ClientsCardService", "$state", function($scope, ManagerService, ClientsService, ClientsCardService, $state) {
  
  $scope.getClients = () => {
    return ClientsService.getClients()
      .then(resp => {
        $scope.clients = resp.data;

        $scope.clients.forEach(element => {
          ClientsCardService.getClientCards(element.id)
            .then(resp => {
              element.numberOfCards = resp.data.nCards;
            });
        
        });;
      });
  }

  $scope.goToClientPage = (clientId) => {
    localStorage.setItem('clientId', clientId);
    localStorage.setItem('backToClientPage', true);

    $state.go('client-visualization');
  }

  $scope.logOut = async () => {
    const confirmation = await Swal.fire({
      title: 'Tem certeza que dejesa sair?',
      text: "Você será desconectado de sua conta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1F1F21',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sair',
      cancelButtonText: "Cancelar",
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    localStorage.clear();
    $state.go('login');
  }

  const init = () => {
    $scope.getClients();

    return ManagerService.show()
      .then( resp => {
        $scope.manager = resp.data;
      })
      .catch((e) => {
        console.log(e);
      })
  }
  init();
}]);