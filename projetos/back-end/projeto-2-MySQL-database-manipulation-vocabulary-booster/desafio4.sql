SELECT
(SELECT job_title FROM hr.jobs WHERE job_id = employee.job_id) AS Cargo,
ROUND(AVG(salary), 2) AS 'Média salarial',
CASE
WHEN ROUND(AVG(salary), 2) BETWEEN 2000 AND 5800 THEN 'Júnior'
WHEN ROUND(AVG(salary), 2) BETWEEN 5801 AND 7500 THEN 'Pleno'
WHEN ROUND(AVG(salary), 2) BETWEEN 7501 AND 10500 THEN 'Sênior'
WHEN ROUND(AVG(salary), 2) > 10500 THEN 'CEO'
END AS 'Senioridade'
FROM hr.employees AS employee
GROUP BY job_id
ORDER BY
ROUND(AVG(salary), 2) ASC,
Cargo ASC;
