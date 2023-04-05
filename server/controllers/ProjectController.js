const { Project } = require('../models')

module.exports = {
  async create(req, res) {
    try {
      const project = await Project.create(req.body)
      const projectJson = project.toJSON()
      res.send({
        project: projectJson
      })
    } catch (error) {
      res.status(400).send({
        error: 'Could not create ticket.'
      })
    }
  },
  async getAll(req, res) {
    try {
      const projects = await Project.findAll();
      res.send(projects)
    } catch (error) {
      res.status(400).send({
        error: 'Could not get all projects.'
      })
    }
  },
  async delete(req, res) {
    try {
      await Project.destroy({
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