# 📛 PneuaMax – Sistema de Gestão de Pneus

## 🧾 Descrição

**PneuaMax** é um sistema web responsivo para gerenciamento de estoque de pneus, permitindo cadastro, edição, exclusão e visualização de produtos. O sistema oferece autenticação de usuários, interface moderna e intuitiva, dashboard com gráficos interativos, registro de logs de ações e controle completo dos dados via `localStorage` do navegador. Ideal para uso acadêmico, demonstração de CRUD e conceitos de front-end.

---

## 🚀 Funcionalidades

- **Login e autenticação básica:** Usuários fixos, validados via `localStorage`.
- **Cadastro de pneus:** Formulário completo com especificações técnicas.
- **Edição e exclusão:** Alteração e remoção de produtos com confirmação.
- **Listagem de produtos:** Tabela dinâmica e responsiva com todas as informações.
- **Dashboard com gráficos:** Visualização de dados do estoque usando Chart.js.
- **Logs de ações:** Histórico detalhado de cadastros, edições e exclusões.
- **Responsividade:** Layout adaptável para desktop e dispositivos móveis.
- **Design moderno:** Interface clara, com header e footer fixos.

---

## 🧪 Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (puro/vanilla)**  
- **Chart.js** (para gráficos interativos)
- **Armazenamento local:** `localStorage` do navegador

---

## 📦 Organização do Projeto
Desenvolvimento Web/
│
├── assets/                # Imagens, ícones e logo do sistema
├── css/                   # Arquivos de estilos (um para cada tela)
│   ├── style_login.css
│   ├── style_header_footer.css
│   ├── style_cadastro.css
│   ├── style_estoque.css
│   ├── style_edicao.css
│   ├── style_exclusao.css
│   └── style_log.css
│
├── js/                    # Scripts JavaScript de cada funcionalidade
│   ├── script_login.js
│   ├── script_logout.js
│   ├── script_header_mobile.js
│   ├── script_cadastro.js
│   ├── script_estoque.js
│   ├── script_edicao.js
│   ├── script_exclusao.js
│   ├── script_dashboard.js
│   └── script_log.js
│
├── index_login.html       # Tela de login
├── index_home.html        # Tela principal (estoque)
├── index_cadastro.html    # Cadastro de pneus
├── index_edicao.html      # Edição de pneus
├── index_exclusao.html    # Confirmação de exclusão
├── index_dashboard.html   # Dashboard com gráficos
└── index_log.html         # Histórico de ações (log)

---

## 👥 Usuários Padrão para Login

- **Usuário 1:** `gabriel_hul` / `gabriel123`
- **Usuário 2:** `caio_gemin` / `caio123`

*(Esses usuários são inseridos automaticamente no `localStorage` caso não existam.)*

---

## 🔧 Como Executar o Projeto

1. **Abra o arquivo `index_login.html`** em seu navegador (basta dar duplo clique ou usar um servidor local).
2. **Faça login** usando um dos usuários padrão acima.
3. **Navegue** pelas funcionalidades do sistema normalmente.

> **Observação:**  
> O sistema é totalmente front-end e não requer instalação de dependências ou backend. Todos os dados são salvos no `localStorage` do navegador.

---

## 📊 Dados e Simulação

- **Todos os dados** (pneus, especificações, usuários, logs) são armazenados localmente no navegador.
- **Não há backend**: as informações persistem apenas no navegador do usuário.
- **Logs de ações**: Cada cadastro, edição ou exclusão de pneu é registrado e pode ser consultado na tela de log.

---

## 📱 Responsividade

- O sistema se adapta automaticamente para **mobile** e **desktop**.
- Utiliza **grid responsivo** para tabelas e gráficos.
- **Header e footer fixos** garantem navegação consistente em qualquer dispositivo.

---

## 🧠 Autores

- **Gabriel Beledeli Hul**
- **Caio Eduardo Gemin Guarienti**

Engenharia de Software 3A  
Centro Universitário Campo Real

> Projeto desenvolvido para fins acadêmicos e aprendizado em desenvolvimento web.

---

**Sinta-se à vontade para explorar, testar e adaptar o PneuaMax!** 🚗🛞
