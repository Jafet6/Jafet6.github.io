SELECT first_name, last_name FROM sakila.actor
UNION
SELECT UCASE(first_name), UCASE(last_name) FROM sakila.staff;

SELECT first_name, last_name FROM sakila.customer
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name, last_name FROM sakila.actor
WHERE first_name LIKE '%je%';

(SELECT first_name FROM sakila.actor
ORDER BY actor_id DESC
LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff
ORDER BY staff_id ASC
LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer
ORDER BY customer_id ASC
LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;

(SELECT first_name, last_name FROM sakila.customer LIMIT 15 OFFSET 45)
UNION
(SELECT first_name, last_name FROM sakila.actor LIMIT 15 OFFSET 45)
ORDER BY first_name ASC, last_name DESC;







