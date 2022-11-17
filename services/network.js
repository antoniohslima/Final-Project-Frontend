myApp.service("NetworkService", function($http) {
  this.getNetworks = () =>  $http.get(`${baseUrl}networks/`);
  this.getNetworkName = (id) =>  $http.get(`${baseUrl}networks/${id}`);
})