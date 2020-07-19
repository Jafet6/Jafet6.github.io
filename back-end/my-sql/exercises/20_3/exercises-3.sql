SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

SELECT * FROM sakila.customer;

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY first_name;

SELECT * FROM sakila.payment;

SELECT COUNT(payment_id) FROM sakila.payment
WHERE payment_date BETWEEN '01/05/2005' AND '01/08/2005';

SELECT * FROM sakila.film;
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC;

SELECT * FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY (
	CASE rating
		WHEN 'G' THEN 1
        WHEN 'PG' THEN 2
        WHEN 'PG-13' THEN 3
	END 
)
LIMIT 500;

