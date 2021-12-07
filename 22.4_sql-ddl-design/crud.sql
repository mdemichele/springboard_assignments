SELECT 
  planets.name, COUNT(planets.name) as moon_count 
FROM planets 
JOIN moons ON planets.id = moons.orbits_around
GROUP BY planets.name
