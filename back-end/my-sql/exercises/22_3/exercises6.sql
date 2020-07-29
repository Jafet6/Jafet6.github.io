USE BeeMovies;

SELECT * FROM movies;
SELECT * FROM movies_logs;

DELIMITER $$
CREATE TRIGGER update_movies
AFTER UPDATE ON movies
FOR EACH ROW
BEGIN
	IF (NEW.ticket_price > OLD.ticket_price, SET NEW.ticket_price_estimation = 'increasing', ticket_price_estimation = 'decreasing');
END; $$
DELIMITER ;

UPDATE movies
SET ticket_price = 221
WHERE movie_id = 1;