CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE department (
department_id INT PRIMARY KEY auto_increment,
name VARCHAR(25) UNIQUE NOT NULL
)engine=InnoDB;

CREATE TABLE employees (
employee_id INT PRIMARY KEY auto_increment,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
phone VARCHAR(10) NOT NULL,
hire_date INT NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(department_id)
)engine=InnoDB;

INSERT INTO normalization.department (name)
VALUES ('Sales'),
('Administration'),
('Marketing'),
('TI'),
('Engeneering');

INSERT INTO normalization.employees (first_name, last_name, email, phone, hire_date, department_id)
VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '9999-9999', 2020-05-05, 1),
('Joseph', 'Rodrigues', 'jo@gmail.com', '9999-9999', 2020-05-05, 2),
('André', 'Freeman', 'andre1990@gmail.com', '8888-8888', 2020-06-05, 3),
('Cíntia', 'Duval', 'cindy@outlook.com', '7777-7777', 2020-05-21, 4),
('Cíntia', 'Duval', 'cindy@outlook.com', '7777-7777', 2020-05-21, 5),
('Fernanda', 'Mendes', 'fernanda@hotmail.com', '6666-6666', 2020-09-15, 1);
