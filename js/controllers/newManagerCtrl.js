myApp.controller("newManagerCtrl", ['$scope', "ManagerService", "AlertMessage", "$state", function($scope, ManagerService, AlertMessage, $state) {
  // $scope.newManager = {}
  $scope.managerData = {
    name: '',
    email: '',
    password: '',
  }

  $scope.password_confirmation = ''

  const isValid = () => {
    if($scope.managerData.password !== $scope.password_confirmation) {
      AlertMessage.error('A senha e sua confirmação não coincidem');
      return false
    }

    if($scope.managerData.password.lenght < 6 || $scope.password_confirmation.lenght < 6){
      AlertMessage.error('A senha precisa ter no mínimo 8 caracteres');
      return false
    }

    return true
  }


  const create = () => {
    if(!isValid()) return

    return ManagerService.create($scope.managerData)
      .then(() => {
        $scope.err = false;
        $state.go('login');
      })
      .catch(() => {
        AlertMessage.error('Erro no cadastro. Reveja os dados')
      })
  }

  $scope.create = create;
}]);