myApp.service("pdfService", function($http) {
  this.generate = () =>  $http.get(`${baseUrl}pdf/`);
})