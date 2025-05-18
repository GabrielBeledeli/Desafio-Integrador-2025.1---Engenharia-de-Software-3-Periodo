// Função para carregar pneus do localStorage e popular a tabela HTML
function carregarPneus() {
  // Pega o array de pneus do localStorage, ou um array vazio caso não exista
  const pneus = JSON.parse(localStorage.getItem("pneus") || "[]");
  // Pega o array de especificações do localStorage, ou vazio
  const especificacoes = JSON.parse(localStorage.getItem("especificacoes") || "[]");
  // Referência ao tbody da tabela onde os pneus serão inseridos
  const tbody = document.getElementById("tbody-pneus");
  tbody.innerHTML = ""; // Limpa o conteúdo atual da tabela

  // Para cada pneu no array pneus, cria uma linha na tabela
  pneus.forEach(pneu => {
    // Procura a especificação correspondente ao pneu pelo id_especificacao
    const espec = especificacoes.find(e => e.id_especificacao === pneu.id_especificacao) || {};

    // Cria o elemento tr (linha)
    const tr = document.createElement("tr");

    // Define o conteúdo da linha usando template literals
    tr.innerHTML = `
      <td data-label="ID">${pneu.id_pneu}</td>
      <td data-label="Marca">${pneu.marca}</td>
      <td data-label="Modelo">${pneu.modelo}</td>
      <td data-label="Aro">${pneu.aro}</td>
      <td data-label="Medida">${pneu.medida}</td>
      <td data-label="Preço">R$ ${pneu.preco.toFixed(2)}</td>
      <td data-label="Estoque">${pneu.quantidade_estoque}</td>
      <td data-label="Largura">${espec.largura || '-'}</td>
      <td data-label="Perfil">${espec.perfil || '-'}</td>
      <td data-label="Índice de Peso">${espec.indice_peso || '-'}</td>
      <td data-label="Índice de Velocidade">${espec.indice_velocidade || '-'}</td>
      <td data-label="Tipo de Construção">${espec.tipo_construcao || '-'}</td>
      <td data-label="Tipo de Terreno">${espec.tipo_terreno || '-'}</td>
      <td data-label="Desenho">${espec.desenho || '-'}</td>
      <td class="acoes">
        <button onclick="editarProduto(${pneu.id_pneu})">Editar</button>
        <button onclick="excluirProduto(${pneu.id_pneu})">Excluir</button>
      </td>
    `;

    // Adiciona a linha criada no corpo da tabela
    tbody.appendChild(tr);
  });
}

// Função chamada ao clicar em "Editar" de um pneu
function editarProduto(id) {
  alert("Editar produto com ID: " + id);
  // Caso tenha página para edição, pode redirecionar assim:
  // window.location.href = `edicao.html?id=${id}`;
}

// Função chamada ao clicar em "Excluir" de um pneu
function excluirProduto(id) {
  alert("Excluir produto com ID: " + id);
  // Caso tenha página para exclusão, pode redirecionar assim:
  // window.location.href = `exclusao.html?id=${id}`;
}

// Função para fazer logout removendo o usuário logado do localStorage e redirecionando para o login
function logout() {
  localStorage.removeItem('usuario_logado');
  window.location.href = 'index_login.html';
}

// Quando o DOM estiver carregado, executa o seguinte:
document.addEventListener('DOMContentLoaded', () => {
  // Tenta obter o usuário logado do localStorage
  const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));

  if (usuarioLogado && usuarioLogado.usuario) {
    // Se tem usuário logado, atualiza o texto na interface com o nome do usuário
    document.getElementById('nomeUsuario').textContent = usuarioLogado.usuario;
  } else {
    // Se não há usuário logado, redireciona para a página de login
    window.location.href = 'index_login.html';
  }

  // Chama a função para carregar e mostrar os pneus na tabela
  carregarPneus();

  // Adiciona evento de clique ao botão de logout
  document.getElementById('btnLogout').addEventListener('click', logout);
});