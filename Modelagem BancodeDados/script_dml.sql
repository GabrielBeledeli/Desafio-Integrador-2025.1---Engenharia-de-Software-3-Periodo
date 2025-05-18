USE di_pneumax;

-- Usuários
INSERT INTO usuario (nome, senha) VALUES
('gabriel_hul', 'gabriel123'),
('caio_gemin', 'caio123'),
('sistema', 'sistema123');

-- Especificações
INSERT INTO especificacao (largura, perfil, indice_peso, indice_velocidade, tipo_construcao, tipo_terreno, desenho) VALUES
(235, '60%', '100 - 800 kg', 'H - 210 km/h', 'Radial', 'HT', 'Assimétrico'),
(195, '55%', "87 - 545 kg", 'V - 240 km/h', 'Radial', 'HT', 'Simétrico'),
(235, '60%', '100 - 800 Kg', 'V - 240 km/h', 'Radial', 'HT', 'Assimétrico'),
(195, '75%', '107 - 975 kg', 'R - 170 km/h', 'Radial', 'Não Especificado', 'Não Especificado'),
(185, '60%', '82 - 475 kg', 'H - 210 km/h', 'Radial', 'HT', 'Assimétrico'),
(185, '65%', '88 - 560 kg', 'H - 210 km/h', 'Radial', 'HT', 'Assimétrico'),
(215, '60%', '96 - 710 kg', 'H - 210 km/h', 'Radial', 'HT', 'Simétrico'),
(235, '60%', '100 - 800 kg', 'H - 210 km/h', 'Radial', 'HT', 'Simétrico'),
(205, '65%', '94 - 670 kg', 'H - 210 km/h', 'Radial', 'HT', 'Simétrico'),
(255, '50%', '103 - 875 kg', 'Y - 300 km/h', 'Radial', 'HT', 'Assimétrico'),
(205, '55%', '91 - 615 kg', 'V - 240 km/h', 'Radial', 'HT', 'Assimétrico'),
(285, '75%', '126 - 1700 kg', 'Q - 160 km/h', 'Radial', 'MT', 'Simétrico'),
(245, '35%', '92 - 630 kg', 'Y - 300 km/h', 'Radial', 'HT', 'Assimétrico'),
(225, '55%', '98 - 750 kg', 'V - 240 km/h', 'Radial', 'HT', 'Simétrico'),
(185, '60%', '88 - 560 kg', 'H - 210 km/h', 'Radial', 'HT', 'Assimétrico'),
(225, '45%', '94 - 670 kg', 'W - 270 km/h', 'Radial', 'HT', 'Assimétrico');

select * from especificacao;
-- Pneus
INSERT INTO pneu (marca, modelo, aro, medida, preco, quantidade_estoque, id_especificacao) VALUES
('Pirelli', 'Scorpion Verde All Season', 16, '235/60R16', 699.90, 10, 1),
('Bridgestone', 'Ecopia EP150', 16, '195/55R16', 689.90, 20, 2),
('Firestone', 'Destination LE2', 16, '235/60R16', 829.90, 15, 3),
('Pirelli', 'Chrono (MO)', 16, '195/75R16', 1119.90, 17, 4),
('Itaro', 'IT203', 14, '185/60R14', 269.90, 30, 5),
('Itaro', 'IT203', 15, '185/65R15', 299.90, 12, 6),
('Itaro', 'IT101', 17, '215/60R17', 439.90, 21, 7),
('Goodyear', 'Wrangler Fortitude HT', 16, '235/60R16', 824.90, 18, 8),
('Goodyear', 'Wrangler Fortitude HT', 15, '205/65R15', 679.90, 32, 9),
('Goodyear', 'Eagle F1 Asymmetric 2 SUV', 19, '255/50R19', 1974.90, 31, 10),
('Goodyear', 'Efficientgrip Performance', 16, '205/55R16', 579.90, 9, 11),
('Goodyear', 'Wrangler Duratrac', 16, '285/75R16', 2274.90, 6, 12),
('Continental', 'ContiSportContact 5', 18, '245/35R18', 1699.90, 10, 13),
('Continental', 'ContiCrossContact LX2', 18, '225/55R18', 839.90, 8, 14),
('Continental', 'EcoContact 6', 15, '185/60R15', 499.90, 15, 15),
('Barum', 'Bravuris 5HM', 17, '225/45R17', 419.90, 12, 16);

-- Logs de ações de cadastro pelos usuários gabriel_hul (id_usuario=1) e caio_gemin (id_usuario=2)
INSERT INTO log_acao (id_pneu, id_usuario, acao) VALUES
(1, 1, 'cadastro'),
(2, 1, 'cadastro'),
(3, 1, 'cadastro'),
(4, 1, 'cadastro'),
(5, 1, 'cadastro'),
(6, 1, 'cadastro'),
(7, 1, 'cadastro'),
(8, 1, 'cadastro'),
(9, 2, 'cadastro'),
(10, 2, 'cadastro'),
(11, 2, 'cadastro'),
(12, 2, 'cadastro'),
(13, 2, 'cadastro'),
(14, 2, 'cadastro'),
(15, 2, 'cadastro'),
(16, 2, 'cadastro');

