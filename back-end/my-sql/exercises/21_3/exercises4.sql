USE sakila;

DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    
END $$

DELIMITER ;

SELECT MoviesWithActor(1);