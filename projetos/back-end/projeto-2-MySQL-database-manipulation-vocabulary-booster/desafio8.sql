SELECT
C.ContactName AS `Nome de contato`,
S.shipperName AS `Empresa que fez o envio`,
O.OrderDate AS `Data do pedido`
FROM w3schools.orders AS O
INNER JOIN w3schools.customers AS C
ON O.CustomerID = C.CustomerId
INNER JOIN w3schools.shippers AS S
ON S.ShipperID = O.ShipperID
WHERE S.shipperName IN ('Speedy Express', 'United Package')
ORDER BY 
`Nome de contato` ASC,
`Empresa que fez o envio` ASC,
`Data do pedido` ASC;
