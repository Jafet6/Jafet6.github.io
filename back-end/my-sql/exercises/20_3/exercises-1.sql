SELECT * FROM sakila.customer 
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active IS TRUE AND (store_id = 2 AND first_name NOT LIKE 'ALEXANDER%')
ORDER BY CONCAT(first_name, ' ', last_name) ASC;

SELECT * FROM sakila.film;
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE replacement_cost > 29 AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
ORDER BY replacement_cost DESC
LIMIT 100;

SELECT COUNT(customer_id) FROM sakila.customer 
WHERE active IS TRUE AND store_id = 1;

SELECT * FROM sakila.customer 
WHERE active IS FALSE AND store_id = 1;

SELECT * FROM sakila.film
WHERE rating = 'R' OR rating = 'NC-17'
ORDER BY rental_rate ASC
LIMIT 50;



