myApp.controller("loginCtrl", ['$scope', "LoginService", "$state", function($scope, LoginService, $state) {
  $scope.manager = {
    email: '',
    password: '',
  }

  $scope.login = () => {
    return LoginService.getToken($scope.manager)
      .then(resp => {
        localStorage.setItem("token", resp.data);
        localStorage.setItem("email", $scope.manager.email);
        $scope.manager.email = '';
        $scope.manager.password = '';
        $state.go('home');
      })
      .catch(() => {
        $scope.manager.password = '';
      }); 
  };
  // $scope.login = login;

  $scope.init = () => {
    localStorage.clear();
  }

  $scope.init()
}]);