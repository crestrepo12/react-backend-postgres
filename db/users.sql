DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;
-- what does \c mean?  \c it means connect
\c userlist;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  phone_number VARCHAR
);

INSERT INTO users (username, phone_number)
  VALUES ('Tyler', '(180) 007-7777'), 
    ('Shannon', '(330) 007-6891'), 
    ('Richard', '(180) 007-0485'), 
    ('Shirely', '(330) 007-0198'), 
    ('Princess', '(145) 494-7777'), 
    ('Albert', '(202) 555-0162'), 
    ('Batman', '(202) 353-2930'), 
    ('Spiderman', '(202) 982-3274'), 
    ('Wonder Woman', '(202) 764-7923'),
    ('Ivy', '(202) 384-8928');