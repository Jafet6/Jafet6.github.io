SELECT actor_id FROM sakila.actor
WHERE first_name = 'KARL';

SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

SELECT * FROM sakila.actor;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT actor_id FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_text;
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE  sakila.film_category;








