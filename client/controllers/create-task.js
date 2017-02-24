/*

/client/controllers/new_item.js
the logic for new-item partial, will connect the factory with the template

*/
app.controller("Create-Task", function(taskFactory, $scope, $location) {
  $scope.user = taskFactory.user

  if (taskFactory.user == undefined) {
    $location.url('/')
  }

    $scope.createPoll = function() {
        taskFactory.bnewPoll({poll: $scope.poll, option1: $scope.option1, option2: $scope.option2, option3: $scope.option3, option4:$scope.option4}, function(response) {
            $scope.poll = ""
            $scope.option1 = ""
            $scope.option2 = ""
            $scope.option3 = ""
            $scope.option4 = ""
            // $scope.data = poll
            $location.url("/alltasks")
        })
    }
});
