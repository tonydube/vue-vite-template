module.exports = {
    port: 3306,
    db: {
      database: process.env.DB_NAME || 'fragility',
      user: process.env.DB_USER || 'fragility',
      password: process.env.DB_PASS || 'fragility',
      options: {
        dialect: process.env.DIALECT || 'mysql',
        host: process.env.HOST || 'localhost',
      }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
  }
  