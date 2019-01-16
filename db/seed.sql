-- CREATE USERS TABLE
CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
hash text,
profile_pic text
);

select * from users;

-- CREATE POSTS TABLE
CREATE TABLE milestones (
id SERIAL PRIMARY KEY,
title VARCHAR(60),
description VARCHAR(200),
date VARCHAR(10),
location VARCHAR(40),
img TEXT,
author_id INTEGER references users(id)
);


-- DUMMY USER DATA
INSERT INTO users ( username, hash, profile_pic )
VALUES ( 'k', 'k', 'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg');

INSERT INTO users ( username, hash, profile_pic )
VALUES ( 'test', 'test', 'https://bcdcog.com/wp-content/uploads/2016/05/profile-default-02.png');

-- DUMMY MILESTONE DATA
INSERT INTO milestones ( title, description, date, location, img, author_id )
VALUES ( 'First time riding a bike', 'rode a bike for the first time by myself', '01/01/1999', 'Spanish Fork', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71478UzpAB-TgU7AYPDg4zuOvs3VrQKH4N09Ub5EvpZCBGj97', 1);

INSERT INTO milestones ( title, description, date, location, img, author_id )
VALUES ( 'First time at the beach', 'Went to a beach in Oregon', '02/01/2000', 'Oregon', 'https://image.oregonlive.com/home/olive-media/width620/img/travel_impact/photo/floaras-lake-state-natural-area-9d8e569575a61e35.jpg', 2);

INSERT INTO milestones ( title, description, date, location, img, author_id )
VALUES ( 'Watched Lion King', 'Watched the movie The Lion King', '02/01/2000', 'Utah', 'https://mamamickterry.files.wordpress.com/2013/12/img_5259.jpg', 1);

INSERT INTO milestones ( title, description, date, location, img, author_id )
VALUES ( 'Went to Disneyland', 'Went to Disneyland in California', '06/01/2002', 'California', 'http://babiestravellite.com/wp-content/uploads/2016/03/disneyland.jpg', 2);

