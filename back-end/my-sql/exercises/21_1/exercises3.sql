SET @number = 15;
SELECT @number AS number, IF (@number MOD 2 = 0, 'Par', 'Ímpar') AS par_ou_ímpar;
SET @number = 20;
SELECT @number AS number, IF (@number MOD 2 = 0, 'Par', 'Ímpar') AS par_ou_ímpar;
SELECT 200 DIV 12 AS grupos_completos_12;
SELECT 200 MOD 12 AS lugares_sobrando;