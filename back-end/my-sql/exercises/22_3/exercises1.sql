SELECT * FROM betrybe_automoveis.carros;
SELECT * FROM betrybe_automoveis.log_operacoes;
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER cars_insert
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END; $$
DELIMITER ;

INSERT INTO carros(preco) VALUE(50000);
INSERT INTO carros(preco) VALUE(60000);

DELIMITER $$
CREATE TRIGGER cars_update
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
			NEW.acao = 'ATUALIZAÇÃO';
END; $$
DELIMITER ;

UPDATE carros
SET preco = 55000
WHERE id_carro = 1;

DELIMITER $$
CREATE TRIGGER cars_delete
BEFORE DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
END; $$
DELIMITER ;

DELETE FROM carros WHERE id_carro = 2;







