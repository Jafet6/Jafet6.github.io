USE sakila;
SELECT * FROM sakila.payment;

DELIMITER $$
CREATE FUNCTION return_payments_by_customer_id (id INT)
	RETURNS INT READS SQL DATA
	BEGIN
		DECLARE payment_quantity INT;
        SELECT COUNT(*) FROM sakila.payment
        WHERE customer_id = id
        INTO payment_quantity;
        RETURN payment_quantity;
	END $$
DELIMITER ;

SELECT return_payments_by_customer_id (1);

DELIMITER $$
CREATE FUNCTION film_title_by_inventory_id (id INT)
	RETURNS VARCHAR(100) READS SQL DATA
	BEGIN
		DECLARE movie_title VARCHAR(100);
		SELECT 
			(SELECT title FROM sakila.film WHERE film_id = I.film_id)
		FROM sakila.inventory AS I
        WHERE inventory_id = id
        INTO movie_title;
	RETURN movie_title;
	END $$
DELIMITER ;
SELECT film_title_by_inventory_id(50);

DELIMITER $$
CREATE FUNCTION film_quantity_by_category (category_name VARCHAR(50))
	RETURNS INT READS SQL DATA
	BEGIN
		DECLARE film_quantity int;
        SELECT COUNT(*) FROM sakila.film
        WHERE film_id IN(SELECT film_id FROM sakila.film_category 
			WHERE category_id = (SELECT category_id FROM category WHERE name = category_name))
        INTO film_quantity;
        RETURN film_quantity;
	END $$
DELIMITER ;
SELECT film_quantity_by_category('Horror');



