myApp.controller("passwordRecoverCtrl", ['$scope', "RecoveryService", "AlertMessage", "$state", function($scope, RecoveryService, AlertMessage, $state) {
  $scope.form = {
    email: '',
  };

  const isValid = () => {
    if (!$scope.form.email) {
        AlertMessage.error("Informe um email!");
        return false;
    }

    if ($scope.form.email.length < 3) {
        AlertMessage.error("O email deve conter no mínimo 3 caracteres!");
        return false;
    }

    return true;
  };

  $scope.submitForm = () => {
    if (!isValid()) {
        return;
    }

    RecoveryService.recovery($scope.form)
      .then(() => {
        AlertMessage.success("Solicitação enviada com sucesso!")
        $state.go("login");
      }).catch(() => {
        AlertMessage.error("Erro ao enviar sua solicitação!")
      });
    
};



}]);