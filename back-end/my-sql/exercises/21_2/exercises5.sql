SELECT * FROM praticando.Departments;
SELECT * FROM praticando.Employees;

SELECT * FROM praticando.Departments AS D
INNER JOIN praticando.Employees AS E
ON D.Code = E.Department;

SELECT E.Name, E.LastName, D.Name AS Departament_Name, D.Budget FROM praticando.Employees AS E
INNER JOIN praticando.Departments AS D
ON E.Department = D.Code;

SELECT Name, LastName FROM praticando.Employees
WHERE Department IN (
SELECT code FROM praticando.Departments WHERE Budget > 60000
);

SELECT E.Name, E.LastName FROM praticando.Employees AS E
INNER JOIN praticando.Departments AS D
ON D.Code = E.Department
WHERE D.Budget > 60000;

SELECT Name FROM praticando.Departments
WHERE code IN (
SELECT department FROM praticando.Employees 
GROUP BY Department
HAVING COUNT(*) > 2
);

SELECT D.Name FROM praticando.Departments AS D
INNER JOIN praticando.Employees AS E
ON D.code = E.Department
GROUP BY code
HAVING COUNT(*) > 2;


























