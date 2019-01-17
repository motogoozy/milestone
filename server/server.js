require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const mainController = require('./mainController');
const authController = require('./authController');

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

const app = express();

//MIDDLEWARE
app.use(express.json());

app.use(session({
   secret: SECRET,
   resave: false,
   saveUninitialized: false
}));

massive(CONNECTION_STRING).then(db => {
   app.set('db', db)
      console.log(('Connected to database'))
   app.listen(SERVER_PORT, () => {
      console.log(`Listening on port: ${SERVER_PORT}`)
   })
})


//AUTH ENDPOINTS
// app.post('/auth/login', authCtrl.login) //login
// app.post('/auth/register', authCtrl.register) //register

//MAIN ENDPOINTS
app.get(`/api/milestones/:user_id`, mainController.getAll); //Gets all of the user's milestones (req.params)
app.post(`/api/milestones/add`, mainController.addMilestone) //Adds a post to database (req.body)