SELECT * FROM hr.employees;

SELECT COUNT(DISTINCT job_id) FROM hr.employees;

SELECT SUM(salary) FROM hr.employees;

SELECT MIN(salary) FROM hr.employees;

SELECT MAX(salary) FROM hr.employees
WHERE job_id = 'IT_PROG';

SELECT AVG(salary), COUNT(employee_id) FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID = 90;

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;

SELECT job_id, COUNT(employee_id) FROM hr.employees
GROUP BY job_id;

SELECT ROUND((MAX(salary) - MIN(salary)), 2) FROM hr.employees;

SELECT MANAGER_ID, MAX(salary), MIN(salary) FROM hr.employees
GROUP BY MANAGER_ID;

SELECT manager_id, MIN(salary) FROM employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id;

SELECT DEPARTMENT_ID, SUM(salary) FROM hr.employees
GROUP BY DEPARTMENT_ID;

SELECT job_id, AVG(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG';

SELECT job_id, AVG(salary) 
FROM employees 
WHERE job_id <> 'IT_PROG' 
GROUP BY job_id;

SELECT JOB_ID, SUM(salary), MAX(salary), MIN(salary), AVG(salary) FROM hr.employees
WHERE department_id = 90
GROUP BY job_id;

SELECT job_id, MAX(salary) AS max_salary FROM hr.employees
GROUP BY job_id
HAVING max_salary >= 4000;

SELECT DEPARTMENT_ID, AVG(salary), COUNT(EMPLOYEE_ID) FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(EMPLOYEE_ID) > 10;












