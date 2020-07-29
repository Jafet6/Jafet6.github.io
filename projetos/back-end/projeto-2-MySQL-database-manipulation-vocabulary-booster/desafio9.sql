SELECT
(SELECT CONCAT(FirstName, ' ', LastName) FROM w3schools.employees WHERE employeeID = O.employeeID) AS `Nome completo`,
COUNT(*) AS `Total de pedidos`
FROM w3schools.orders AS O
GROUP BY O.employeeID
ORDER BY `Total de pedidos` ASC;
