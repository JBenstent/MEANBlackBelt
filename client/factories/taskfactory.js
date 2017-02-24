/*

/client/factories/item.js
The "Client side DB" / connnection between the client and the server (where the client can request additional data)

*/

app.factory("taskFactory", function($http) {


    var factory = {};

    factory.bnewPoll = function({poll:poll, option1:option1, option2:option2, option3:option3, option4:option4}, callback) {
        $http.post('/create', poll, option1, option2, option3, option4).then(function(response) {
            alert('Poll has been posted!')
            console.log(response)

            callback(response)

        })
    }

    factory.getData = function(callback) {
      $http.get('/alltasks').then(function(response) {
        console.log('this is response', response)
        callback(response.data.tasks)
      })
    }

    factory.FacUpdateStatus = function(task, status, callback) {
        $http.put('/task', {task_id:task._id, NewStatus:status}).then(function(response) {

          // console.log('this is the task status:', status)
          callback(response)
        alert('Status has been updated')
    })
}

factory.ValidateUser = function(username, callback) {
  $http.post('/user', username).then(function(response) {
    factory.user = response.data
    callback(response)
  })
}
return factory;

})
