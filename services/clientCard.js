myApp.service("ClientsCardService", function($http) {
  this.getClientCards = (clientId) => $http.get(`${baseUrl}clientsCards/${clientId}`);
  this.getClientCard = (clientId, cardId) => $http.get(`${baseUrl}clientsCards/${cardId}/${clientId}`);
});