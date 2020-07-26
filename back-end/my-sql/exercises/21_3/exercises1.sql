SELECT * FROM sakila.film;
SELECT * FROM sakila.language;
SELECT 
	films.title,
    films.language_id,
    (
		SELECT name FROM sakila.language
        WHERE language_id = films.language_id
	) AS idioma
FROM sakila.film AS films;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT 
	first_name,
    last_name,
    address_id,
    (
		SELECT address FROM sakila.address
        WHERE address_id = staff.address_id
    ) AS endereco
FROM sakila.staff AS staff;

SELECT F.title, F.language_id, L.name FROM sakila.film AS F
INNER JOIN sakila.language AS L
ON F.language_id = L.language_id;

SELECT S.first_name, S.last_name, S.address_id, A.address FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT first_name FROM sakila.actor
WHERE actor_id IN 
	(
		SELECT actor_id FROM sakila.film_actor
        GROUP BY actor_id
        HAVING COUNT(*) > 40
	);













