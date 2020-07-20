SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT actor.actor_id, actor.first_name, f_actor.film_id FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS f_actor
ON actor.actor_id = f_actor.actor_id;

SELECT * FROM sakila.address;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, a.address FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON a.address_id = s.address_id;

SELECT * FROM sakila.customer;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name
LIMIT 100;

SELECT c.first_name, c.address_id, a.address, a.district FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(*) AS Qnt_enderecos FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name, c.last_name
ORDER BY c.first_name DESC;

SELECT * FROM sakila.staff;

SELECT * FROM sakila.payment;

SELECT s.first_name, s.last_name, ROUND(AVG(p.amount), 2) FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT a.actor_id, a.first_name, f.film_id, f.title FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f
ON f.film_id = fa.film_id;


