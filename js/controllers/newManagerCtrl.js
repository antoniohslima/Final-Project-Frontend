myApp.controller("newManagerCtrl", ['$scope', "ManagerService", "$state", function($scope, ManagerService, $state) {
  // $scope.newManager = {}
  $scope.managerData = {
    name: '',
    email: '',
    password: '',
  }

  $scope.err = false;

  const create = () => {
    return ManagerService.create($scope.managerData)
    .then(() => {
      $scope.err = false;
      $state.go('login')
    })
    .catch(() => {
      $scope.err = true;
      $scope.managerData.password = '';
      $scope.managerData.email = '';
    })
  }

  $scope.create = create;
}]);