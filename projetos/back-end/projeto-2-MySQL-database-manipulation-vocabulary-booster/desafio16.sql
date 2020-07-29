USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(enteredEmail VARCHAR(30))
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantity INT;
SELECT COUNT(*) FROM hr.job_history
WHERE employee_id = (SELECT employee_id FROM hr.employees WHERE email = enteredEmail)
INTO quantity;
RETURN quantity;
END $$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR');
