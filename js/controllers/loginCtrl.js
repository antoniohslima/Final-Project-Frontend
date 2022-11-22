myApp.controller("loginCtrl", ['$scope', "LoginService", "$state", function($scope, LoginService, $state) {
  $scope.manager = {
    email: '',
    password: '',
  }

  $scope.goToRecover = () => {
    $state.go('ajuda');
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
      .catch(async (err) => {
        $scope.manager.password = '';
        let confirmation;

        if (err.data.error === 'Error: Usuário bloqueado entre em contato com o suporte.') {
          confirmation = await Swal.fire({
          title: 'Bloqueado',
          text: 'O usuário foi bloqueado, entre em conatato com o suporte.',
          icon: 'error',
          confirmButtonColor: '#1F1F21',
        });

        }
        else {
          confirmation = await Swal.fire({
            title: 'Algo deu errado',
            text: 'Dados inválidos',
            icon: 'error',
            confirmButtonColor: '#1F1F21',
          });

        }
        
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