myApp.controller("loginCtrl", ['$scope', "LoginService", function($scope, LoginService) {
  $scope.manager = {
    email: '',
    password: '',
  }

  $scope.token = '';

  const login = () => {
    return LoginService.getManager($scope.manager)
      .then(resp => {
        $scope.token = resp.data;
        $scope.manager.email = '';
        $scope.manager.password = '';
      })
      .catch(() => {
        // $scope.error = "Unable to load data.";
        $scope.token = false;
        $scope.manager.password = '';
      }); 
    };
  $scope.login = login;
}]);