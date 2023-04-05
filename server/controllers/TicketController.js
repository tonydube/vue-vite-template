const { Ticket } = require('../models')

module.exports = {
  async create(req, res) {
    try {
      const ticket = await Ticket.create(req.body)
      const ticketJson = ticket.toJSON()
      res.send({
        ticket: ticketJson
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: 'Could not create ticket.'
      })
    }
  },
  async getAll(req, res) {
    try {
      const tickets = await Ticket.findAll();
      res.send(tickets)
    } catch (error) {
      res.status(400).send({
        error: 'Could not get all tickets.'
      })
    }
  },
  async getOne(req, res) {
    try {
      const ticket = await Ticket.findAll({
        where: {
          id: req.body.id
        }
      });
      res.send(ticket)
    } catch (error) {
      res.status(400).send({
        error: 'Could not get ticket.'
      })
    }
  },
  async update(req, res) {
    try {
      const { id, project, issue, description, reporter, status } = req.body;
      await Ticket.update({
        project: project, issue: issue, description: description, reporter: reporter, status: status
      }, {
        where: {
          id: id
        }
      });


      const ticket = await Ticket.findAll({
        where: {
          id: req.body.id
        }
      });
      res.send(ticket)
    } catch (error) {
      res.status(400).send({
        error: 'Could not get ticket.'
      })
    }
  },
  async delete(req, res) {
    try {
      await Ticket.destroy({
        where: {
          id: req.body.id
        }
      });
      res.status(200).send()
    } catch (error) {
      res.send()
    }
  },
}