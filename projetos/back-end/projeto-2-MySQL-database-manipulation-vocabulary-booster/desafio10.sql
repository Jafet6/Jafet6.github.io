SELECT *
FROM
(
SELECT
(SELECT ProductName FROM w3schools.products WHERE ProductId = OD.ProductID) AS Produto,
MIN(Quantity) AS 'Mínima',
MAX(Quantity) AS 'Máxima',
ROUND(AVG(Quantity), 2) AS Média
FROM w3schools.order_details AS OD
GROUP BY OD.ProductID
) AS X
WHERE X.Média > 20
ORDER BY
Média ASC,
Produto ASC;
