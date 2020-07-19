SELECT * FROM HR.countries;
INSERT INTO HR.countries (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES ('JHGF', 'Jafet', 91);

INSERT INTO HR.countries (COUNTRY_ID, COUNTRY_NAME)
VALUES ('MI', 'Maria Izabel');

CREATE TABLE IF NOT EXISTS HR.country_new
SELECT * FROM HR.countries;

SELECT * FROM HR.country_new;
INSERT INTO HR.country_new (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES ('AF', 'Afranio', NULL);

INSERT INTO HR.country_new (COUNTRY_ID, COUNTRY_NAME, REGION_ID)
VALUES 
('LE', 'Luis Eduardo', 91),
('ISA', 'Isabella', 351),
('EU', 'EU', NULL);

INSERT IGNORE INTO HR.countries
SELECT * FROM HR.country_new;

SELECT * FROM HR.jobs;
SELECT * FROM HR.locations;

CREATE TABLE IF NOT EXISTS HR.new_jobs (
	JOB_ID integer NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    JOB_TITLE varchar(30) NOT NULL,
    MIN_SALARY decimal(6, 0) DEFAULT 0
);

SELECT * FROM HR.new_jobs;

INSERT INTO HR.new_jobs (JOB_TITLE, MIN_SALARY)
VALUES ('junior programmer', 5600);

INSERT INTO HR.new_jobs (JOB_TITLE, MIN_SALARY)
VALUES ('senior programmer', 12000);

INSERT INTO HR.new_jobs (JOB_TITLE, MIN_SALARY)
VALUES ('product manager', 12000);

INSERT INTO HR.new_jobs (JOB_TITLE)
VALUES ('CEO');











