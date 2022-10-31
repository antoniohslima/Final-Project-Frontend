myApp.service("ManagerService", function($http) {
  this.create = (data) => $http.post(`${baseUrl}managers/`, data);
})