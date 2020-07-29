SELECT
(SELECT CONCAT(first_name, ' ', last_name) FROM hr.employees WHERE employee_id = JH.employee_id) AS 'Nome completo',
(SELECT job_title FROM hr.jobs WHERE job_id = JH.job_id) AS Cargo,
start_date AS 'Data de início do cargo',
(SELECT department_name FROM hr.departments WHERE department_id = JH.department_id) AS Departamento
FROM hr.job_history AS JH
WHERE start_date <> 0000-00-00
ORDER BY
`Nome completo` DESC,
Cargo ASC;
