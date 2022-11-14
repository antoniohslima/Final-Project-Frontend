myApp.service("NetworkService", function($http) {
  this.getNetworks = () =>  $http.get(`${baseUrl}networks/`);
})