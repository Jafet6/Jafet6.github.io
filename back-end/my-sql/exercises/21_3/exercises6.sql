SELECT * FROM betrybe.Products;
SELECT * FROM betrybe.Manufacturers;

SELECT name FROM betrybe.Products;

SELECT name, price FROM betrybe.Products;

SELECT name, price FROM betrybe.Products
WHERE price <= 200;

SELECT * FROM betrybe.Products
WHERE price BETWEEN 60 AND 120;

SELECT name, price * 100 AS cents FROM betrybe.Products;

SELECT AVG(price) FROM betrybe.Products;

SELECT AVG(price) FROM betrybe.Products
WHERE manufacturer = 2;

SELECT COUNT(*) FROM betrybe.Products
WHERE price >= 180;

SELECT name, price FROM betrybe.Products
WHERE price >= 180
ORDER BY 
price DESC,
name ASC;

SELECT * FROM betrybe.Products AS P
INNER JOIN betrybe.Manufacturers AS M
ON M.code = P.Manufacturer;

SELECT 
	name,
    price,
    (SELECT name FROM betrybe.Manufacturers WHERE code = P.Manufacturer) AS manufacturer_name
FROM betrybe.Products AS P;

SELECT 
	(SELECT name FROM betrybe.Manufacturers WHERE code = P.Manufacturer) AS manufacturer_name,
	name,
    AVG(price)
FROM betrybe.Products AS P
GROUP BY code;

SELECT 
	manufacturer,
	name,
    AVG(price)
FROM betrybe.Products AS P
GROUP BY code;

SELECT M.name FROM betrybe.Manufacturers AS M
INNER JOIN betrybe.Products AS P
ON P.manufacturer = M.code
GROUP BY P.Manufacturer
HAVING AVG(P.price) >= 150;

SELECT name, price FROM betrybe.Products
ORDER BY price ASC
LIMIT 1;

SELECT M.name, P.name, P.price FROM betrybe.Products AS P
INNER JOIN betrybe.Manufacturers AS M
ON M.code = P.manufacturer
WHERE M.code = P.manufacturer AND P.price = (SELECT MAX(price) FROM betrybe.Products WHERE M.code = manufacturer);

INSERT INTO betrybe.Products (Code, Name, Price, Manufacturer)
VALUES (11, 'Loudspeakers', 70, 2);

UPDATE betrybe.Products
SET Name = 'Laser Printer'
WHERE Code = 8;

SET SQL_SAFE_UPDATES = 0;

UPDATE betrybe.Products
SET price = price * 0.9;

UPDATE betrybe.Products
SET price = price * 0.9
WHERE price > 120;
