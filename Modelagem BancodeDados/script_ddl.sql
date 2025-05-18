create database if not exists di_pneumax;

use di_pneumax;
-- Criado com base no Diagrama Lógico_1 BrModelo:

-- Lógico_1:

CREATE TABLE pneu (
    id_pneu INTEGER PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    aro INTEGER NOT NULL,
    medida VARCHAR(20) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    id_especificacao INTEGER
);

CREATE TABLE especificacao (
    id_especificacao INTEGER PRIMARY KEY AUTO_INCREMENT,
    largura INTEGER NOT NULL,
    perfil VARCHAR(10) NOT NULL,
    indice_peso VARCHAR(20) DEFAULT 'Não Especificado',
    indice_velocidade VARCHAR(20) DEFAULT 'Não Especificado',
    tipo_construcao VARCHAR(20) NOT NULL,
    tipo_terreno VARCHAR(20) DEFAULT 'Não Especificado',
    desenho VARCHAR(20) NOT NULL
);

CREATE TABLE usuario (
    id_usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    senha VARCHAR(25) NOT NULL
);

CREATE TABLE log_acao (
    id_log INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_pneu INTEGER,
    id_usuario INTEGER,
    acao VARCHAR(20) NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE pneu ADD CONSTRAINT FK_pneu_2
    FOREIGN KEY (id_especificacao)
    REFERENCES especificacao (id_especificacao);
 
ALTER TABLE log_acao ADD CONSTRAINT FK_log_acao_2
    FOREIGN KEY (id_usuario)
    REFERENCES usuario (id_usuario)
    ON DELETE RESTRICT;
 
ALTER TABLE log_acao ADD CONSTRAINT FK_log_acao_3
    FOREIGN KEY (id_pneu)
    REFERENCES pneu (id_pneu)
    ON DELETE RESTRICT;
    
SHOW TABLES;

SELECT * FROM pneu;
SELECT * FROM especificacao;
SELECT * FROM usuario;
SELECT * FROM log_acao;