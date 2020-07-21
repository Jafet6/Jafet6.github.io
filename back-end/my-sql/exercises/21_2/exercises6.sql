SELECT * FROM praticando.Boxes;
SELECT * FROM praticando.Warehouses;

SELECT B.code, W.Location FROM praticando.Boxes AS B
INNER JOIN praticando.Warehouses AS W
ON B.Warehouse = W.code;

SELECT Code, Capacity FROM praticando.Warehouses;

SELECT Warehouse, COUNT(*) FROM praticando.Boxes
GROUP BY Warehouse;

SELECT W.Code FROM praticando.Warehouses AS W
INNER JOIN
	(SELECT Warehouse AS a, COUNT(*) AS quantity FROM praticando.Boxes GROUP BY Warehouse)
AS B
ON B.a = W.Code
WHERE W.Capacity < B.quantity;

SELECT Code FROM praticando.Boxes
WHERE Warehouse IN (
	SELECT code FROM praticando.Warehouses WHERE Location = 'Chicago'
);

SELECT B.Code FROM praticando.Boxes AS B
INNER JOIN (SELECT code, Location FROM praticando.Warehouses) AS W
ON W.code = B.Warehouse
WHERE W.Location = 'Chicago';
