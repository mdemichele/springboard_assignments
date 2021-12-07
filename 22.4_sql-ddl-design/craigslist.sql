-- Craigslist Schema --

DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist 

CREATE TABLE regions
(
  id SERIAL PRIMARY KEY,
  region_name TEXT NOT NULL
);

CREATE TABLE users 
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  preferred_region INTEGER REFERENCES regions ON DELETE SET NULL
);

CREATE TABLE locations
(
  id SERIAL PRIMARY KEY,
  location_name TEXT NOT NULL,
  region_name INTEGER REFERENCES regions ON DELETE SET NULL
);

CREATE TABLE posts 
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  post_text TEXT NOT NULL,
  post_user INTEGER REFERENCES users ON DELETE SET NULL,
  post_location INTEGER REFERENCES locations ON DELETE SET NULL,
  post_region INTEGER REFERENCES regions ON DELETE SET NULL,
  categories TEXT NOT NULL
);

-- INSERT DATA --
INSERT INTO regions (region_name)
VALUES 
('Spokane'),
('San Fransisco'),
('Seattle');

INSERT INTO users (name, preferred_region)
VALUES 
('Matt', 1),
('Chloe', 2),
('Jim', 3);

INSERT INTO locations (location_name, region_name)
VALUES 
('Spokane Valley', 1),
('Bellevue', 2),
('Fremont', 3);

INSERT INTO posts (title, post_text, post_user, post_location, post_region, categories)
VALUES 
('Bike', 'For sale', 1, 1, 1, 'For Sale'),
('resturant slave', 'Come work for minimum wage', 2, 2, 3, 'jobs');

