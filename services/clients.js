myApp.service("ClientsService", function($http) {
  this.getClients = () =>  $http.get(`${baseUrl}clients/`);
  this.createClient = (data) => $http.post(`${baseUrl}clients/`, data);
});