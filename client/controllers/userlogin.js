app.controller("Login", function(taskFactory, $scope, $location) {
    $scope.createUser = function() {
      taskFactory.ValidateUser({username: $scope.username}, function(response) {
        $scope.username = ""
        $scope.user = taskFactory.user
        $location.url('/alltasks')
      })
    }
});
