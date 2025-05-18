document.getElementById('loginForm').addEventListener('submit', function (e) {
  // Impede o comportamento padrão do formulário (recarregar a página)
  e.preventDefault();

  // Pega o valor digitado no campo usuário, removendo espaços em branco no início e no fim
  const usuarioDigitado = document.getElementById('usuario').value.trim();
  // Pega o valor digitado no campo senha, removendo espaços em branco no início e no fim
  const senhaDigitada = document.getElementById('senha').value.trim();
  // Referência ao elemento onde serão exibidas mensagens de erro
  const erroMsg = document.getElementById('erro-login');

  // Busca a lista de usuários armazenada no localStorage (ou retorna array vazio se não existir)
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Procura na lista de usuários um que tenha usuário e senha iguais aos digitados
  const usuarioValido = usuarios.find(u => u.usuario === usuarioDigitado && u.senha === senhaDigitada);

  if (usuarioValido) {
    // Se encontrou usuário válido, salva as credenciais no localStorage (pode ser para controle de sessão)
    localStorage.setItem('usuario_logado', JSON.stringify({
      usuario: usuarioValido.usuario,
      senha: usuarioValido.senha
    }));
    // Redireciona para a página principal do sistema
    window.location.href = 'index_home.html';
  } else {
    // Se não encontrou usuário válido, exibe mensagem de erro na tela
    erroMsg.textContent = "Usuário ou senha inválidos.";
  }
});
