SELECT * FROM sakila.film;
SELECT a.film_id, a.replacement_cost, b.film_id, b.replacement_cost
FROM sakila.film AS a, sakila.film AS b
WHERE a.replacement_cost = b.replacement_cost;

SELECT a.title, a.rental_duration, b.title, b.rental_duration
FROM sakila.film AS a, sakila.film AS b
WHERE a.rental_duration = b.rental_duration AND a.rental_duration BETWEEN 2 AND 4;