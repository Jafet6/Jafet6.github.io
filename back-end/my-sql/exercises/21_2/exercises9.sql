SELECT S.first_name, S.last_name, A.address, A.district, A.postal_code, A.city_id  FROM sakila.staff AS S
LEFT JOIN sakila.address AS A
ON S.address_id = A.address_id;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.payment;

SELECT S.first_name, S.last_name, SUM(P.amount) AS August_pay FROM sakila.payment AS P
INNER JOIN sakila.staff AS S
ON S.staff_id = P.staff_id
WHERE payment_date LIKE '%2005-08%'
GROUP BY P.staff_id;

