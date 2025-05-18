document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erroMsg = document.getElementById('erro-login');

    // Usuário e senha padrão para testes
    const usuarioPadrao = "admin";
    const senhaPadrao = "1234";

    if (usuario === usuarioPadrao && senha === senhaPadrao) {
        // Login bem-sucedido — redireciona
        window.location.href = "index.html";
    } else {
        erroMsg.textContent = "Usuário ou senha inválidos.";
    }
});
