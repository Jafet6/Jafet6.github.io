SELECT 
CONCAT(E.first_name, ' ', E.last_name) AS 'Nome completo',
CONCAT(SUBSTRING(JH.start_date, 9, 2), '/', SUBSTRING(JH.start_date, 6, 2), '/', YEAR(JH.start_date)) AS 'Data de início',
CONCAT(SUBSTRING(JH.end_date, 9, 2), '/', SUBSTRING(JH.end_date, 6, 2), '/', YEAR(JH.end_date)) AS 'Data de rescisão',
ROUND(DATEDIFF(JH.end_date, JH.start_date) / 365, 2) AS 'Anos trabalhados'
FROM hr.job_history AS JH
INNER JOIN hr.employees AS E
ON JH.EMPLOYEE_ID = E.EMPLOYEE_ID
ORDER BY 
`Nome completo` ASC,
`Anos trabalhados` ASC;

SELECT * FROM hr.employees;
SELECT * FROM hr.job_history;
