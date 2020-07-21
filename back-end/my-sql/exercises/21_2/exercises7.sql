SELECT * FROM praticando.MovieTheaters;
SELECT * FROM praticando.Movies;

SELECT * FROM praticando.MovieTheaters AS MT
LEFT JOIN praticando.Movies AS M
ON MT.movie = M.code;

SELECT * FROM praticando.MovieTheaters AS MT
RIGHT JOIN  praticando.Movies AS M
ON M.code = MT.Movie;

SELECT * FROM praticando.Movies AS M
INNER JOIN praticando.MovieTheaters AS MT
ON MT.Movie = M.code;

SELECT Title FROM praticando.Movies
WHERE Code NOT IN (
	SELECT Movie FROM praticando.MovieTheaters WHERE Movie IS NOT NULL
);

SELECT M.Title FROM praticando.Movies AS M
LEFT JOIN (SELECT Movie FROM praticando.MovieTheaters WHERE Movie Is NOT NULL) AS MT
ON M.Code = MT.Movie
WHERE MT.Movie IS NULL;
