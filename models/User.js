const { db,Sequelize } =  require('../db');

const User = db.define('users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },

  first_name: Sequelize.STRING(50),

  last_name: Sequelize.STRING(50),

  email: Sequelize.STRING(50),

  password: Sequelize.STRING(20),
  


},{

  timestamp: false

})

module.exports=User