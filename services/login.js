myApp.service("LoginService", function($http) {
  this.getToken = (data) =>  $http.post(`${baseUrl}login/`, data);
});