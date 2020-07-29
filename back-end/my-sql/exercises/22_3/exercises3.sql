CREATE FULLTEXT INDEX nome_index ON tabela(coluna);
DROP INDEX nome_do_indice ON tabela;

CREATE FULLTEXT INDEX category_name_index ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
DROP INDEX category_name_index ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

CREATE INDEX postal_code_index ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON sakila.address;