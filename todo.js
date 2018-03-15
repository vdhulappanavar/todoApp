// employees.js
var faker = require('faker')
function generateTodo () {
  var todoItems = []
  for (var id = 0; id < 50; id++) {
    // var firstName = faker.name.firstName()
    // var lastName = faker.name.lastName()
    // var email = faker.internet.email()
    var todoItem = faker.lorem.words()
    var todoDate = faker.date.future(10)
    // employees.push({
    //   "id": id,
    //   "first_name": firstName,
    //   "last_name": lastName,
    //   "email": email
    // })
    todoItems.push({
      "id" : id,
      "todo" : todoItem,
      "by" : todoDate
    })
  }
  return { "todoList": todoItems }
}
module.exports = generateTodo