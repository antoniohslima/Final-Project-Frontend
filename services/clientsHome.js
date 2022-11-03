myApp.service("ClientsHomeService", function($http) {
  this.getClients = () =>  $http.get(`${baseUrl}clients/`);
});