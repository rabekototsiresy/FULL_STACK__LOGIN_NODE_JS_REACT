const routes = require('express').Router();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt')
const User = require('../models/User')
require('dotenv').config()

routes.use(cors())


routes.get('/user',(req,res)=>{
  res.render('index')
})
routes.post('/register',(req,res)=>{

  const userData = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }

  User.findOne({
    where: {
      email:  req.body.email
    }
  })
  .then(user=>{
      if(!user){
        // bcrypt.hash(req.body.password,10,(error,hash)=>{
        //   userData.password = hash
          User.create(userData)
          .then(user=>{
            res.json({status: user.email+ "registred"})
          })
          .catch(error=>{
            res.send('error: '+error)
          })
        // })
      }else{
        res.json({error:"user already exist"})
      }
  })
  .catch(error=>{
    res.send('error: '+error)
  })


})

routes.post('/login',(req,res)=>{
  const { email,password } = req.body;
  User.findOne({
    where: {
      email: email,
      password: password
    }
  })
  .then(user=>{
    if(user){
      res.json({status: "accés accépté par",user})
    }else{
      res.json({error: 'accés refusé'})
    }
  })
  .catch(error=>{
    res.send('error: '+error)
  })
})



module.exports=routes;