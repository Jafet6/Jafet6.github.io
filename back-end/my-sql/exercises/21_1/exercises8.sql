SELECT * FROM sakila.film;

SELECT rating, AVG(length) AS duração_media FROM sakila.film
GROUP BY rating
HAVING duração_media BETWEEN 115 AND 121.5
ORDER BY duração_media DESC;

SELECT rating, SUM(replacement_cost) AS custo_de_substituição FROM sakila.film
GROUP by rating
HAVING custo_de_substituição > 3950.5
ORDER BY custo_de_substituição ASC;
