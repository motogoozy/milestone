module.exports = {
   getAll: async (req, res) => {
      const {user_id} = req.params;
      const db = req.app.get('db');

      const allMilestones = await db.get_all_milestones({user_id})
      res.status(200).send(allMilestones);
   },

   addMilestone: async (req, res) => {
      const { user_id, title, description, date, location, img } = req.body;
      const db = req.app.get('db');

      const newMilestone = await db.add_milestone(
         { title, description, date, location, img, author_id: user_id }
      )
      res.status(200).send({message: 'Milestone Added'})
   }
}