myApp.controller("clientsHomeCtrl", ['$scope', "ClientsService", "$state", "AlertMessage", "pdfService", "xlsService", function($scope, ClientsService, $state, AlertMessage, pdfService, xlsService) {
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
      $scope.listClients(0)
    })
  }
  
  $scope.generatePDF = () => { 
    return pdfService.generate()
    .then((resp) => {
      window.open(resp.data, '_blank')
      
    })
    .catch((e) => {
      AlertMessage.error('Erro ao criar o pdf');
    })
  }
  
  $scope.generateXLS = () => { 
    return xlsService.generate()
    .then((resp) => {
      window.open(resp.data.url, '_blank')
      
    })
    .catch(() => {
      AlertMessage.error('Erro ao criar o xls');
    })
  }

  $scope.currentPage = 0;
  $scope.totalPages = 0;

  $scope.listClients = (page) => { 

    const lastPage = $scope.totalPages - 1;

    if (page > lastPage || page < 0) return;

    return ClientsService.getClients(page)
    .then((resp) => {

      $scope.allClients = resp.data;
      
      $scope.currentPage = page;
      
      })
  }

  $scope.checkActive = (page) => {
    if (page === $scope.currentPage) return true;
    return false
  }
  
  const countClients = () => { 
    return ClientsService.countClients()
    .then((resp) => {
      const totalClients = resp.data;
      const totalPages = Math.ceil(totalClients / 7);
      $scope.totalPages = totalPages;

      $scope.pages = []

      for (let i = 0; i < totalPages; i++){
        $scope.pages.push(i);
      }

      $scope.listClients(0);
      })
  }
  
  countClients();
}]);