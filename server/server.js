require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const mainController = require('./mainController');
const authController = require('./authController');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const path = require('path');

const { SERVER_PORT, CONNECTION_STRING, SECRET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET } = process.env;

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

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

// configure the keys for accessing AWS
AWS.config.update({
   accessKeyId: AWS_ACCESS_KEY_ID,
   secretAccessKey: AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
   const params = {
   ACL: 'public-read',
   Body: buffer,
   Bucket: S3_BUCKET,
   ContentType: type.mime,
   Key: `${name}.${type.ext}`
   };
   return s3.upload(params).promise();
};


//AUTH ENDPOINTS
app.post('/auth/register', authController.register) //register
app.post('/auth/login', authController.login) //login
app.get('/auth/logout', authController.logout) //logout

//MAIN ENDPOINTS
app.get(`/api/milestones`, mainController.getAll); //Gets all of the user's milestones (user_id, username, and profile_pic stored on session) by descending order (shows most recent first)
app.get(`/api/milestones-asc`, mainController.getAllAsc)
app.post(`/api/milestones/add`, mainController.addMilestone); //Adds a post to database (req.body)
app.put(`/api/milestone/edit`, mainController.editMilestone) //Edits a milestone (req.body)
app.delete(`/api/milestones/delete/:milestone_id`, mainController.deleteMilestone); //Deletes milestone from database
app.get('/api/userData', mainController.userData) // getting the user data off of session.
app.get('/api/milestones/getOne/:milestone_id', mainController.getOne) //getting one milestone (req.params)
app.put(`/api/userData/edit`, mainController.updateProfile)

//S3 ENDPOINT
app.post('/upload', (request, response) => {
   const form = new multiparty.Form();
   form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `userPhotos/${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);

      return response.status(200).send(data);
      } catch (error) {
      return response.status(400).send(error);
      }
   });
});

app.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, '../build/index.html'));
});

//NOTE
// IT IS BAD CONVENTION TO USE PLURALS IN ENDPOINT URLS. NEXT TIME, DON'T PUT MILESTONES, BUT RATHER MILESTONE. ALSO THERE IS NO NEED FOR /ADD OR /EDIT, THE ACTION IS IMPLIED BY THE .POST OR .PUT REQUESTS. 