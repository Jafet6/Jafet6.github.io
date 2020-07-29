SELECT *
FROM (
SELECT 
C1.ContactName AS Nome,
C1.Country AS País,
(SELECT COUNT(*) - 1 FROM w3schools.customers AS C2 WHERE C2.Country = C1.Country) AS `Número de compatriotas`
FROM w3schools.customers AS C1
) AS F
WHERE `Número de compatriotas` <> 0
ORDER BY Nome ASC;
