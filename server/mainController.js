module.exports = {
   getAll: async (req, res) => {
      const db = req.app.get('db');

      const allMilestones = await db.get_all_milestones({ user_id: req.session.user.user_id })
      res.status(200).send(allMilestones);
   },

   getAllAsc: async (req, res) => {
      const db = req.app.get('db');

      const allMilestones = await db.get_all_milestones_asc({ user_id: req.session.user.user_id })
      res.status(200).send(allMilestones)
   },

   addMilestone: async (req, res) => {
      const { title, description, date, location, img } = req.body;
      const db = req.app.get('db');

      const newMilestone = await db.add_milestone({ title, description, date, location, img, author_id: req.session.user.user_id })
      res.status(200).send({ message: 'Milestone Added' })
   },

   editMilestone: async(req, res) => {
      const { milestone_id, title, description, date, location, img } = req.body;
      const db = req.app.get('db');

      const edited = await db.edit_milestone({ milestone_id, title, description, date, location, img })
      res.status(200).send({ message: 'Milestone updated' })
   },

   deleteMilestone: async (req, res) => {
      const { milestone_id } = req.params;
      const db = req.app.get('db');

      const deleted = await db.delete_milestone({ milestone_id })
      res.status(200).send({message: 'Milestone deleted'})
   }, 

   userData: async(req, res) => {
      if(req.session.user) {
         res.status(200).send(req.session.user)
      } else {
         res.status(401).send('Please log in')
      }
   },

   getOne: async(req, res) => {
      const { milestone_id } = req.params;
      const db = req.app.get('db');

      const one = await db.get_one_milestone({ milestone_id })
      res.status(200).send(one)
   },
   
   updateProfile: async(req, res) => {
      const { username, profile_pic, user_id } = req.body;
      const db = req.app.get('db');

      const updated = await db.update_profile({ username, profile_pic, user_id })
      req.session.user = { user_id: updated[0].user_id, username: updated[0].username, profile_pic: updated[0].profile_pic };
      res.status(200).send({ message: 'Profile successfully updated', userData: req.session.user })
   },
}