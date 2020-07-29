SELECT P.ProductName AS 'Produto', P.Price AS 'Preço'
FROM w3schools.products AS P
INNER JOIN w3schools.order_details AS OD
ON P.ProductID = OD.ProductId
WHERE OD.quantity > 80
ORDER BY `Produto`;
