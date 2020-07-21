SELECT * FROM praticando.Products AS P
INNER JOIN praticando.Manufacturers AS M
ON P.Manufacturer = M.code;

SELECT P.name, P.price, M.name FROM praticando.Products AS P
INNER JOIN praticando.Manufacturers AS M
ON P.Manufacturer = M.code;

SELECT AVG(Price), code FROM praticando.Products
GROUP BY code;

SELECT AVG(P.Price), M.Name FROM praticando.Products AS P
INNER JOIN praticando.Manufacturers AS M
ON P.Manufacturer = M.Code
GROUP BY M.Name;

SELECT M.Name FROM praticando.Manufacturers AS M
INNER JOIN praticando.Products AS P
ON P.Manufacturer = M.code
GROUP BY M.Name
HAVING AVG(P.Price) >= 150;














