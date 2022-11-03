myApp.service("ClientsService", function($http) {
  this.getClients = () =>  $http.get(`${baseUrl}clients/`);
});