myApp.service("ClientsCardService", function($http) {
  this.getClientCards = (clientId) => $http.get(`${baseUrl}clientsCards/${clientId}`);
});