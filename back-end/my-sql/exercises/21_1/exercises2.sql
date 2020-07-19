SELECT * FROM sakila.film;
SELECT 
	film_id,
	title,
	IF (title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Não conheço o filme') AS 'conheço_o_filme?'
FROM sakila.film;

SELECT title, rating,
	CASE rating
		WHEN 'G' THEN 'Livre para todos'
        WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS publico_alvo
FROM sakila.film;
