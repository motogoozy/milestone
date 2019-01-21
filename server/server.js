require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const mainController = require('./mainController');
const authController = require('./authController');

const { SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV } = process.env;

const app = express();

//MIDDLEWARE
app.use(express.json());

app.use(session({
   secret: SECRET,
   resave: false,
   saveUninitialized: false
}));


//DATABASE CONNECTION
massive(CONNECTION_STRING).then(db => {
   app.set('db', db)
      console.log(('Connected to database'))
   app.listen(SERVER_PORT, () => {
      console.log(`Listening on port: ${SERVER_PORT}`)
   })
})


//AUTH ENDPOINTS
app.post('/auth/register', authController.register) //register
app.post('/auth/login', authController.login) //login
app.get('/auth/logout', authController.logout) //logout

//MAIN ENDPOINTS
app.get(`/api/milestones`, mainController.getAll); //Gets all of the user's milestones (user_id, username, and profile_pic stored on session)
app.post(`/api/milestones/add`, mainController.addMilestone); //Adds a post to database (req.body)
app.put(`/api/milestone/edit`, mainController.editMilestone) //Edits a milestone (req.body)
app.delete(`/api/milestones/delete/:milestone_id`, mainController.deleteMilestone); //Deletes milestone from database
app.get('/api/userData', mainController.userData) 
app.get('/api/milestones/getOne/:milestone_id', mainController.getOne) //getting one milestone (req.params)