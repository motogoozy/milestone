SELECT *
FROM milestones
   JOIN users
   ON users.user_id = milestones.author_id
WHERE users.user_id = 1