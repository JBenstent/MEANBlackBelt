/*
/server/controllers/items.js
Main logic for connecting http requests with database requests, delivering
responses
*/

console.log("Loaded: /server/controllers/items.js")
var mongoose = require('mongoose')
var Poll = mongoose.model("Poll")
var User = mongoose.model('User')



module.exports = {
    index: function(request, response) {
        console.log("Items Index");

    },
    create: function(request, response) {

      console.log('THIS IS HITTING THE REQUEST.BODY',request.body)

      var poll = new Poll({
        poll: request.body.poll,
        option1: request.body.option1,
        option2: request.body.option2,
        option3: request.body.option3,
        option4: request.body.option4,
      })
      poll.save(function(err) {
        if (err) {
          console.log('Error occured:', err)
        } else {
        console.log('POLL INFO:', poll)
          response.json(poll)
        }
      })

    },



    retrieve: function(request, response) {
      Poll.find({}, function(err, polls) {
        // console.log("This is all task information", polls)
        response.json({polls: polls})
        })
      },

      update: function(request, response) {
        Task.findOne({_id:request.body.task_id}, function(err, poll){
          console.log('TASK', task)
          // poll.status = request.body.NewStatus

          poll.save(function(err) {
            if (err) {
              console.log('this is an error:', err)
            } else {
              console.log('SUCCESSFULLY UDPATED TASK STATUS:')
              response.json(poll)
            }
        })

        })

      },

      createuser: function(request, response) {

        User.findOne({username: request.body.username}, function(err, user) {
          if (err) {
            console.log(err)
          } else if (user) {
            response.json(user)
          } else {
            var user = new User ({
              username: request.body.username
            })
            user.save(function(err) {
                if (err) {
                    console.log('Error occured:', err)
                } else {
                  console.log('user successfully added')
                    response.json(user)
                }
            })
          }
        })

      }
    }
