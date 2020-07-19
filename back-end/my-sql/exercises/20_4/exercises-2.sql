SELECT * FROM sakila.actor
ORDER BY first_name;

UPDATE sakila.actor 
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.category;
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM sakila.film;
UPDATE sakila.film
SET rental_rate = 25
WHERE (length > 100 AND rating IN('G', 'PG', 'PG-13') AND replacement_cost > 20);

UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length < 100 THEN 10
        ELSE 20
	END);
    
