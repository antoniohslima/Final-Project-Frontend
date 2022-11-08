myApp.service("ClientsService", function($http) {
  this.getClients = () =>  $http.get(`${baseUrl}clients/`);
  this.createClient = (data) => $http.post(`${baseUrl}clients/`, data);
  this.deleteClient = (id) => $http.delete(`${baseUrl}clients/${id}`);
  this.showClient = (id) => $http.get(`${baseUrl}clients/${id}`);
  this.updateClient = (clientId, data) => $http.put(`${baseUrl}clients/${clientId}`, data);
});