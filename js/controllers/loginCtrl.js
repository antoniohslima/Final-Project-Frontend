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
      .catch(async () => {
        $scope.manager.password = '';
        const confirmation = await Swal.fire({
          title: 'Algo deu errado',
          text: "Verifique as suas informações!",
          icon: 'error',
          confirmButtonColor: '#1F1F21',
        });
        
        if (!confirmation.isConfirmed) {
          return;
        }

      }); 
  };
  
  $scope.init = () => {
    const token = localStorage.getItem('token');

    if(token) {
      $state.go('home');
      return
    }
  }

  $scope.init();
  
  }]);