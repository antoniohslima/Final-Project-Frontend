myApp.directive('pagination', function() {
  return {
    restict: 'E',
    templateUrl: './view/pagination.html',
    scope: {
      totalItems: "=",
      listFn: "=",
      page: "=",
      itemsPerPage: "=",
    },
    
    controller: ["$scope", function ($scope) {
      $scope.totalPages = Math.ceil(~~$scope.totalItems / $scope.itemsPerPage);
      $scope.pages = [];

      $scope.list = page => {
        if (page < 1 || page > $scope.totalPages) return 
        
        $scope.listFn(page);
      }

      // if ($scope.page > $scope.totalPages) {
      //   $scope.page = $scope.totalPages;
      // }

      // if ($scope.page < 1) {
      //   $scope.page = 1;
      // }

      for (let i = 1; i <= $scope.totalPages; i++){
        $scope.pages.push(i);
      }

      $scope.checkActive = (page) => {
        if (page === $scope.page) return true;
        return false
      }
    }]

  }

});