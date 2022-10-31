myApp.service("LoginService", function($http) {
  this.getManager = (data) =>  $http.post(`${baseUrl}managers/login`, data);

});