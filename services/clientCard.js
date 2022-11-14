myApp.service("ClientsCardService", function($http) {
  this.getClientCards = (clientId) => $http.get(`${baseUrl}clientsCards/${clientId}`);
  this.getClientCard = (clientId, cardId) => $http.get(`${baseUrl}clientsCards/${cardId}/${clientId}`);
  this.createCard = (clientId, data) => $http.post(`${baseUrl}clientsCards/${clientId}`, data);
  this.deleteCard = (cardId, clientId) => $http.delete(`${baseUrl}clientsCards/${cardId}/${clientId}`);
});