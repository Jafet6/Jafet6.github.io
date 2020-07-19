SET SQL_SAFE_UPDATES = 0;

SELECT * FROM HR.employees;

UPDATE HR.employees
SET email = 'not available';

UPDATE HR.employees
SET email = 'not available', commission_pct = 0.1;

UPDATE HR.employees
SET email = 'not available'
WHERE DEPARTMENT_ID = 80 AND commission_pct < 0.2;

UPDATE HR.employees
SET email = 'not available'
WHERE department_id = (
	SELECT department_id FROM HR.departments
    WHERE department_name = 'Accounting'
);

UPDATE HR.employees
SET salary = 8000
WHERE employee_id = 105 AND salary < 5000
ORDER BY employee_id ASC;

SELECT * FROM HR.employees
ORDER BY employee_id DESC;

SELECT * FROM HR.employees;

UPDATE HR.employees
SET job_id = 'SH_CLERK'
WHERE employee_id = 118 AND DEPARTMENT_ID = 30 AND NOT job_id LIKE 'SH%';

UPDATE HR.employees
SET salary = (
	CASE 
		WHEN department_id = 40 THEN salary * 1.25
        WHEN department_id = 90 THEN salary * 1.15
        WHEN department_id = 110 THEN salary * 1.10
	END
);

SELECT * FROM HR.employees;
SELECT * FROM HR.jobs;

UPDATE HR.jobs, HR.employees
SET 
	jobs.min_salary = jobs.min_salary + 2000,
	jobs.max_salary=jobs.max_salary+2000,
	employees.salary=employees.salary+(employees.salary*.20),
	employees.commission_pct=employees.commission_pct+.10
WHERE jobs.job_id='PU_CLERK' AND employees.job_id='PU_CLERK';












