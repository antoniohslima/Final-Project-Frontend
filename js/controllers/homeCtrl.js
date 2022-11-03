myApp.controller("homeCtrl", ['$scope', "ManagerService", "$state", function($scope, ManagerService, $state) {
  const goToClientsPage = () => {
    $state.go('clientsHome');
  }

  const init = () => {
    ManagerService.show()
      .then((resp)=> {
        console.log(resp.data)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  const showManager = () => {
    
  }

  showManager();
  init();

  $scope.goToClientsPage = goToClientsPage;
}]);