myApp.service("ManagerService", function($http) {
  const create = (data) => {
    return $http.post(`${baseUrl}managers/`, data);
  }
})