myApp.controller("newManagerCtrl", ['$scope', "ManagerService", function($scope, ManagerService) {
  $scope.newManager = {}
  $scope.managerData = {
    name: '',
    email: '',
    password: '',
  }

  const create = () => {
    return ManagerService.create($scope.info)
    .then(resp => {
      $scope.newManager = resp.data;
    })
    .catch(() => {
      $scope.newManager = "F GRANDE"
    })
  }

  $scope.create = create;
}]);