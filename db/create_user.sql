INSERT INTO users(username, hash, profile_pic)
VALUES(${username}, ${hash}, ${profile_pic})

RETURNING *; 
-- Returning is immediately giving us back what was inserted into table. 