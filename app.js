const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const {db} = require('./db')
require('dotenv').config();
const PORT = process.env.PORT || 5000

app.set('view engine','ejs')
app.use(cors());
app.use(bodyParser.json());
db.sync();

app.use(bodyParser.urlencoded({extended: true}));

app.use('',require('./controllers/user.controller'));

app.listen(PORT,()=>{
  console.log("server runnig on port: "+PORT)
})
