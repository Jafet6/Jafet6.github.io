SELECT * FROM hr.employees;

SET SQL_SAFE_UPDATES=0;

SELECT job_id, GROUP_CONCAT(employee_id, ' ') FROM hr.employees
GROUP BY job_id;

UPDATE hr.employees 
SET phone_number = REPLACE(phone_number, '124', '999') 
WHERE phone_number LIKE '%124%';

SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;

UPDATE hr.employees
SET email = CONCAT(email, '@example.com');

SELECT employee_id, first_name, MONTH(hire_date) from hr.employees;

SELECT employee_id, REVERSE(SUBSTRING(REVERSE(email), 4)) FROM hr.employees;

SELECT RIGHT(phone_number, 4) FROM hr.employees







