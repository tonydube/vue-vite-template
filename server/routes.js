// const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const TicketController = require('./controllers/TicketController')
const ProjectController = require('./controllers/ProjectController')

module.exports = (app) => {
//   app.post('/register',
//     AuthenticationControllerPolicy.register,
//     AuthenticationController.register)
//   app.post('/login',
//     AuthenticationController.login)

  app.post('/create-ticket',
    TicketController.create)
  app.post('/get-ticket-by-id',
    TicketController.getOne)
//   app.get('/get-all-tickets',
//     TicketController.getAll)
  app.post('/update-ticket',
    TicketController.update)
  app.post('/delete-ticket',
    TicketController.delete)

  app.post('/create-project',
    ProjectController.create)
//   app.get('/get-all-projects',
//     ProjectController.getAll)
  app.post('/delete-project',
    ProjectController.delete)
}
