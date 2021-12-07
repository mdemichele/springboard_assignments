-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE countries 
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE cities 
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  country INTEGER REFERENCES countries ON DELETE SET NULL 
);

CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline TEXT NOT NULL,
  from_city INTEGER REFERENCES cities NOT NULL,
  to_city INTEGER REFERENCES cities NOT NULL
);

INSERT INTO countries (name)
VALUES 
  ('United States'),
  ('Japan'),
  ('Mexico'),
  ('France'),
  ('China'),
  ('Brazil'),
  ('UAE'),
  ('Chile'),
  ('Belgium'),
  ('United Kingdom');
  
INSERT INTO cities (name, country)
VALUES 
  ('Washington DC', 1),
  ('Tokyo', 2),
  ('Los Angeles', 1),
  ('Seattle', 1),
  ('Paris', 4),
  ('Dubai', 7),
  ('New York', 1),
  ('Cedar Rapids', 1),
  ('Sao Paolo', 6),
  ('Charlotte', 1),
  ('Beijing', 5),
  ('Santiago', 8),
  ('Casablanca', 9),
  ('Mexico City', 3),
  ('Las Vegas', 1),
  ('Chicago', 1),
  ('London', 10);

INSERT INTO tickets
  (first_name, last_name, seat, departure, arrival, airline, from_city, to_city)
VALUES
  ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 1, 4),
  ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 2, 10),
  ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 3, 15),
  ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 4, 14),
  ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 5, 13),
  ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 6, 11),
  ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 7, 8),
  ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 8, 15),
  ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 10, 1),
  ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 9, 12);