-- Soccer League Schema --

DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league 

CREATE TABLE teams 
(
  id SERIAL PRIMARY KEY,
  team_name TEXT NOT NULL,
  ranking INTEGER NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);

CREATE TABLE players 
(
  id SERIAL PRIMARY KEY,
  player_name TEXT NOT NULL,
  team INTEGER REFERENCES teams ON DELETE SET NULL
);

CREATE TABLE referees 
(
  id SERIAL PRIMARY KEY,
  referee_name TEXT NOT NULL
);

CREATE TABLE matches 
(
  id SERIAL PRIMARY KEY,
  home_team INTEGER REFERENCES teams ON DELETE SET NULL,
  away_team INTEGER REFERENCES teams ON DELETE SET NULL,
  match_date DATE NOT NULL
);

CREATE TABLE referees_matches
(
  id SERIAL PRIMARY KEY,
  referee_id INTEGER REFERENCES referees ON DELETE SET NULL,
  match_id INTEGER REFERENCES matches ON DELETE SET NULL
);

CREATE TABLE goals 
(
  id SERIAL PRIMARY KEY,
  player INTEGER REFERENCES players ON DELETE SET NULL,
  match INTEGER REFERENCES matches ON DELETE SET NULL
);

-- INSERT DATA -
INSERT INTO teams (team_name, ranking, start_date, end_date)
VALUES 
('team 1', 1, '2018-09-02', '2019-10-04'),
('team 2', 2, '2018-09-03', '2019-10-05');

INSERT INTO players (player_name, team)
VALUES 
('player dude', 1),
('player 2', 2);

INSERT INTO referees (referee_name) 
VALUES 
('referee man');

INSERT INTO matches (home_team, away_team, match_date)
VALUES (1, 2, '2018-12-01');

INSERT INTO referees_matches (referee_id, match_id)
VALUES (1, 1);

INSERT INTO goals (player, match)
VALUES 
(1, 1),
(1, 1);