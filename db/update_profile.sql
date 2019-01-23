UPDATE users
SET username = ${username}, profile_pic = ${profile_pic}
WHERE user_id = ${user_id};

select * from users
WHERE user_id = ${user_id};