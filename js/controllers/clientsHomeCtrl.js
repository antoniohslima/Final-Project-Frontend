myApp.controller("clientsHomeCtrl", ['$scope', "ClientsService", "$state", "AlertMessage", "pdfService", function($scope, ClientsService, $state, AlertMessage, pdfService) {
  $scope.email = localStorage.getItem('email');

  $scope.logOut = async () => {
    const confirmation = await Swal.fire({
      title: 'Tem certeza que dejesa sair?',
      text: "Você será desconectado de sua conta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sair',
      cancelButtonText: "Cancelar",
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

    ClientsService.deleteClient(id)
      .then(() => {
        listClients()
      })
  }

  $scope.generatePDF = () => { 
    return pdfService.generate()
    .then((resp) => {
      console.log(resp.data);
      window.open(resp.data, '_blank')
      
      })
      .catch((e) => {
        console.log(e);
      })
  }

  listClients();
}]);