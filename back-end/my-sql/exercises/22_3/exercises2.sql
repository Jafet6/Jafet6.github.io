USE sakila;
SELECT * FROM category;
SELECT * FROM film_category;

CREATE VIEW film_with_categories AS
SELECT F.title, C.category_id, C.name
FROM film_category AS FC
INNER JOIN film AS F
ON F.film_id = FC.film_id
INNER JOIN category AS C
ON C.category_id = FC.category_id
ORDER BY title;

SELECT * FROM film_with_categories;

CREATE VIEW film_info AS
SELECT 
	A.actor_id,
    CONCAT(A.first_name, ' ', A.last_name) AS actor,
    F.title
FROM film_actor AS FA
INNER JOIN film AS F
ON F.film_id = FA.film_id
INNER JOIN actor AS A
ON A.actor_id = FA.actor_id
ORDER BY actor;

SELECT * FROM film_info;


CREATE VIEW address_info AS
SELECT Ad.address_id, Ad.address, Ad.district, C.city_id, C.city
FROM city AS C
INNER JOIN address AS Ad
ON Ad.city_id = C.city_id
ORDER BY C.city;

SELECT * FROM address_info;

CREATE VIEW movies_language AS
SELECT F.title, F.language_id, L.name FROM film AS F
INNER JOIN language AS L
ON F.language_id = L.language_id;

SELECT * FROM movies_language;





