module.exports = {
   getAll: async (req, res) => {
      const db = req.app.get('db');

      const allMilestones = await db.get_all_milestones({user_id: req.session.user.user_id})
      res.status(200).send(allMilestones);
   },

   addMilestone: async (req, res) => {
      const { title, description, date, location, img } = req.body;
      const db = req.app.get('db');

      const newMilestone = await db.add_milestone(
         { title, description, date, location, img, author_id: req.session.user.user_id }
      )
      res.status(200).send({message: 'Milestone Added'})
   },

   updateMilestone: async(req, res) => {

   },

   deleteMilestone: async (req, res) => {
      const { milestone_id } = req.params;
      const db = req.app.get('db');

      const deleted = await db.delete_milestone({milestone_id})
      res.status(200).send({message: 'Milestone deleted'})
   }, 

   userData: async(req, res) => {
      if(req.session.user) {
         res.status(200).send(req.session.user)
         
      } else {
         res.status(401).send('Please log in')
      }
   }
}