myApp.service("CardService", function ($http) {
  this.getNetworkId = (cardId) => $http.get(`${baseUrl}cards/${cardId}`);
});