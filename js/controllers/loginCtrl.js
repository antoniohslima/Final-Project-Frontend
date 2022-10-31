myApp.controller("loginCtrl", ['$scope', "LoginService", function($scope, LoginService) {
  $scope.manager = {
    email: '',
    password: '',
  }

  const login = () => {
    return LoginService.getToken($scope.manager)
      .then(resp => {
        localStorage.setItem("token", resp.data);
        localStorage.setItem("email", $scope.manager.email);
        $scope.manager.email = '';
        $scope.manager.password = '';

      })
      .catch(() => {
        $scope.token = false;
        $scope.manager.password = '';
      }); 
    };
  $scope.login = login;
}]);