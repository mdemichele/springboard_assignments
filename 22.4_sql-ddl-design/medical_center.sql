-- Medical Center Schema --

DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE doctors
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE patients 
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE diseases 
(
  id SERIAL PRIMARY KEY,
  disease_name TEXT NOT NULL
);

CREATE TABLE doctors_patients
(
  doctor_id INTEGER REFERENCES doctors ON DELETE SET NULL,
  patient_id INTEGER REFERENCES patients ON DELETE SET NULL
);

CREATE TABLE patients_diseases 
(
  patient_id INTEGER REFERENCES patients ON DELETE SET NULL,
  disease_id INTEGER REFERENCES diseases ON DELETE SET NULL
);

INSERT INTO doctors (first_name, last_name)
VALUES 
('Matt', 'DeMichele'),
('Chloe', 'Magers'),
('Doctor', 'Guy MD');

INSERT INTO patients (first_name, last_name)
VALUES 
('Rando', 'dude'),
('Another', 'Person'),
('Stipe', 'Miocic');

INSERT INTO diseases (disease_name)
VALUES 
('polio'),
('covid-19'),
('cancer');

INSERT INTO doctors_patients (doctor_id, patient_id)
VALUES 
(1, 1),
(2, 1),
(1, 3);

INSERT INTO patients_diseases (patient_id, disease_id)
VALUES 
(1, 1),
(3, 1),
(1, 2);
