USE hr;

DELIMITER $$
CREATE PROCEDURE exibir_historico_completo_por_funcionario (IN enteredEmail VARCHAR(50))
BEGIN
SELECT
CONCAT(E.first_name, ' ', E.last_name) AS 'Nome completo',
D.department_name AS 'Departamento',
J.job_title AS 'Cargo'
FROM hr.employees AS E
INNER JOIN hr.job_history AS JH
ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
INNER JOIN hr.jobs AS J
ON JH.job_id = J.job_id
INNER JOIN hr.departments AS D
ON JH.DEPARTMENT_ID = D.DEPARTMENT_ID
WHERE email = enteredEmail
ORDER BY `Cargo`;
END $$
DELIMITER ;

CALL exibir_historico_completo_por_funcionario('NKOCHHAR');
