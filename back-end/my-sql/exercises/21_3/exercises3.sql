USE sakila;

DELIMITER $$
	CREATE PROCEDURE atoresPopulares() 
	BEGIN
		SELECT actor_id, COUNT(*) AS film_quantity FROM sakila.film_actor
		GROUP BY actor_id
        ORDER BY COUNT(*) DESC
        LIMIT 10;
	END $$
DELIMITER ;
CALL atoresPopulares();


DELIMITER $$
	CREATE PROCEDURE filtrar_filme_por_categoria(IN categoryName VARCHAR(50)) 
	BEGIN
		SELECT 
			(SELECT film_id FROM sakila.film WHERE film_id = FC.film_id) AS film_id,
			(SELECT title FROM sakila.film WHERE film_id = FC.film_id) AS film_title,
			(SELECT category_id FROM category WHERE name = categoryName) AS film_category,
			(SELECT name FROM category WHERE name = categoryName) AS category_name
		FROM sakila.film_category AS FC;
	END $$
DELIMITER ;
CALL filtrar_filme_por_categoria('Action');

SELECT * FROM customer;

DELIMITER $$
	CREATE PROCEDURE verifica_se_cliente_esta_ativo(IN enteredEmail VARCHAR(50), OUT ativo BOOL) 
	BEGIN
		SELECT active INTO ativo
        FROM sakila.customer
        WHERE email = enteredEmail;
	END $$
DELIMITER ;
CALL verifica_se_cliente_esta_ativo('SANDRA.MARTIN@sakilacustomer.org', @ativo);
SELECT @ativo;
