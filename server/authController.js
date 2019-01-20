const bcrypt = require('bcryptjs');

module.exports = {
   register: async (req, res) => {
      const { username, password, profile_pic } = req.body;
      const db = req.app.get('db');

      const userArr = await db.find_user({ username });
      if (userArr.length >=1) {
         return res.status(200).send({ message: 'Username already taken. Please enter a different username.', loggedIn: false })
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newUserArr = await db.create_user({ username, hash, profile_pic });
      req.session.user = { user_id: newUserArr[0].user_id, username: newUserArr[0].username, profile_pic: newUserArr[0].profile_pic };
      res.status(200).send({ message: 'logged in', userData: req.session.user, loggedIn: true })
   },

   login: async (req, res) => {
      const { username, password } = req.body;
      const db = req.app.get('db');

      const userArr = await db.find_user({ username: username });
      if(!userArr[0]) {
         return res.status(200).send({ message: 'User not found.' })
      }
      const result = bcrypt.compareSync(password, userArr[0].hash)
      if (!result) { //if result is falsy, passwords don't match up
         return res.status(200).send({ message: 'Incorrect password.' })
      }
      req.session.user = { user_id: userArr[0].user_id, username: userArr[0].username, profile_pic: userArr[0].profile_pic };
      res.status(200).send({ message: 'logged in', userData: req.session.user, loggedIn: true })
   }, 

   logout: (req, res) => {
      req.session.destroy();
      res.redirect('http://localhost:3000/#/')
   },

}