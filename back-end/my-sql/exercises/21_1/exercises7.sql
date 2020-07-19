SELECT * FROM sakila.customer;

SELECT active, COUNT(*) AS quantidade FROM sakila.customer
GROUP BY active;

SELECT active, store_id, COUNT(active) FROM sakila.customer
GROUP BY store_id, active;

SELECT * FROM sakila.film;

SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating
ORDER BY AVG(length) DESC;

SELECT * FROM sakila.address;

SELECT district, COUNT(DISTINCT address) AS 'Endereços por distrito' FROM sakila.address
GROUP BY district;
