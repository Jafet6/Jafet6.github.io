SELECT * FROM sakila.rental;

SELECT COUNT(rental_id) FROM sakila.rental
WHERE DATE(return_date) =  '2005-08-29';

SELECT COUNT(rental_id) FROM sakila.rental
WHERE return_date LIKE ('%2005-08-29%');

SELECT COUNT(rental_id) FROM sakila.rental
WHERE rental_date BETWEEN '2005/07/01 00:00:00' AND '1005/08/22 23:59:59';

SELECT DATE(rental_id), YEAR(rental_id), MONTH(rental_id), DAY(rental_id), HOUR(rental_id), MINUTE(rental_id)
FROM sakila.rental
WHERE rental_id = 10330;

SELECT rental_id, DATE(rental_date) FROM sakila.rental
WHERE rental_date = '2005/08/18 00:14:03';
