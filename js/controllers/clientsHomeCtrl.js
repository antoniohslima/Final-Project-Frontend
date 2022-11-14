myApp.controller("clientsHomeCtrl", ['$scope', "ClientsService", "$state", "AlertMessage",  function($scope, ClientsService, $state, AlertMessage) {
  $scope.goToLogin = async () => {
    const confirmation = await Swal.fire({
      title: "Deseja realmente sair da sua conta?",
      showCancelButton: true,
      confirmButtonText: "Sair",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    $state.go('login');
  }

  const listClients = () => { 
    return ClientsService.getClients()
    .then((resp) => {
      $scope.allClients = resp.data;
      })
      .catch((e) => {
       
      })
  }

  $scope.goToAddClients = () => {
    $state.go('clients-add');
  }

  $scope.goToPath = (id, path) => {
    localStorage.setItem("clientId", id);
    $state.go(path);
  }

  $scope.deleteClient = async (id) => {
    const confirmation = await Swal.fire({
      title: "Deseja realmente excluir esse cliente?",
      showCancelButton: true,
      confirmButtonText: "Excluir",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    if (confirmation.isConfirmed) {
      AlertMessage.success("Usuário excluido!")
    }
    
    if (!confirmation.isConfirmed) {
      return;
    }

    ClientsService.deleteClient(id)
      .then(() => {
        listClients()
      })
  }


  listClients();
}]);