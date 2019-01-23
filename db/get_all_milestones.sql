SELECT id, title, description, date, location, img, author_id, user_id, username, profile_pic
FROM milestones
   JOIN users
   ON users.user_id = milestones.author_id
WHERE users.user_id = ${user_id}
ORDER BY id DESC;