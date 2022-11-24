myApp.service("pdfService", function($http) {
  this.generate = () =>  $http.get(`${baseUrl}pdf/`);
  this.get = (email) =>  $http.get(`${baseUrl}pdf/pdf-${email}.pdf`);
})