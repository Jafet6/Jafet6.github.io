SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Jafet', 'Fagundes', '3', '1', '1', 'JafetGuerra');

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username) VALUES
('Luis', 'Fagundes', '3', '1', '0', 'LuisFagundes'),
('Maria', 'Fagundes', '3', '1', '1', 'MariaIzabel'),
('Afranio', 'Fagundes', '3', '1', '1', 'AfranioNaves');

SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
WHERE customer_id BETWEEN 1 AND 6;

SELECT * FROM sakila.category;
INSERT INTO sakila.category (name) VALUES
('Idols'),
('X-Factor'),
('Got Talent');

SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
('3', '3');
