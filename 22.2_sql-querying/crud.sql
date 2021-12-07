SELECT app_name, reviews, min_installs, (min_installs / reviews) as proportion 
FROM analytics 
ORDER BY (min_installs / reviews) DESC
LIMIT 1
