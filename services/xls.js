myApp.service("xlsService", function($http) {
  this.generate = () =>  $http.get(`${baseUrl}xls/`);
})