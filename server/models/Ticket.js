module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
      project: {
        type: DataTypes.STRING,
      },
      issue: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      reporter: {
        type: DataTypes.STRING,
      },
      assignee: {
        type: DataTypes.STRING,
      },
      priority: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
    }, {
        tableName: 'tickets'
    })
  
    return Ticket
  }