const Sequelize = require('sequelize');
require('dotenv').config();
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)

const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.USERNAME.split('(')[0],'',{
  host: process.env.HOST,
  dialect: 'mysql',
  opratorsAliases: false,
  pool: {
    max: 5 ,
    min: 0,
    acquire: 30000,
    idle: 10000
  } 
})


const db = {
  db: sequelize,
  Sequelize: Sequelize
}
module.exports=db;