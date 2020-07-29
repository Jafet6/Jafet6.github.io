USE BeeMovies;
SELECT * FROM movies;
SELECT * FROM movies_logs;

DELIMITER $$
CREATE TRIGGER release_year_insert
	BEFORE INSERT ON movies
	FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END; $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER movies_insert_log
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, action, log_date)
    VALUES ((SELECT movie_id FROM movies ORDER BY movie_id DESC LIMIT 1), 'INSERT', NOW());
END; $$
DELIMITER ;

INSERT INTO movies (ticket_price, ticket_price_estimation)
VALUES (10, 12);