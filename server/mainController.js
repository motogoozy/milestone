module.exports = {
   getAll: async (req, res) => {
      const {user_id} = req.params;
      const db = req.app.get('db');

      const allMilestones = await db.get_all_milestones({user_id})
      res.status(200).send(allMilestones);
   },

   
}