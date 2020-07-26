SELECT * FROM Books_Lent;
SELECT * FROM Books;

SELECT id, title FROM Books AS B
WHERE NOT EXISTS (
	SELECT * FROM Books_Lent WHERE B.Id = Books_Lent.book_id
);

SELECT id, title FROM Books AS B
WHERE EXISTS (
	SELECT * FROM Books_Lent 
    WHERE B.id = Books_Lent.book_id AND title LIKE '%lost%'
);

SELECT * FROM CarSales;
SELECT * FROM Customers;

SELECT Name FROM Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM CarSales WHERE C.CustomerID = CarSales.CustomerID
);

SELECT * FROM Cars;
SELECT * FROM CarSales;
SELECT * FROM Customers;

SELECT Customer.Name, Car.Name FROM CarSales AS Sales
INNER JOIN Cars AS Car
ON Car.id = Sales.CarID
INNER JOIN Customers AS Customer
ON Customer.CustomerID = Sales.CustomerID
WHERE EXISTS (
	SELECT * FROM CarSales WHERE Customer.CustomerId = CarSales.CustomerID
);







