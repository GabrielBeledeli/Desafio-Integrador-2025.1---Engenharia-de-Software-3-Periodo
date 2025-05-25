document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    const pneus = JSON.parse(localStorage.getItem('pneus') || '[]');
    const especificacoes = JSON.parse(localStorage.getItem('especificacoes') || '[]');

    const pneu = pneus.find(p => p.id_pneu === id);
    const espec = especificacoes.find(e => e.id_especificacao === pneu?.id_especificacao) || {};

    const tbody = document.getElementById('linha-pneu');

    if (!pneu) {
        tbody.innerHTML = `<tr><td colspan="14">Produto não encontrado.</td></tr>`;
        return;
    }

    tbody.innerHTML = `
        <tr>
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
        </tr>
  `;
});

function confirmarExclusao() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    let pneus = JSON.parse(localStorage.getItem('pneus') || '[]');
    let especificacoes = JSON.parse(localStorage.getItem('especificacoes') || '[]');
    let logs = JSON.parse(localStorage.getItem('log_acoes') || '[]');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));

    const pneu = pneus.find(p => p.id_pneu === id);
    if (!pneu) {
        alert('Produto não encontrado.');
        return;
    }

    pneus = pneus.filter(p => p.id_pneu !== id);
    especificacoes = especificacoes.filter(e => e.id_especificacao !== pneu.id_especificacao);

    const novoIdLog = logs.length ? Math.max(...logs.map(l => l.id_log)) + 1 : 1;
    const novoLog = {
        id_log: novoIdLog,
        id_pneu: pneu.id_pneu,
        marca: pneu.marca,
        id_usuario: usuarioLogado?.id_usuario || null,
        acao: 'Exclusão',
        data_hora: new Date().toISOString()
    };
    logs.push(novoLog);

    localStorage.setItem('pneus', JSON.stringify(pneus));
    localStorage.setItem('especificacoes', JSON.stringify(especificacoes));
    localStorage.setItem('log_acoes', JSON.stringify(logs));

    alert('Produto excluído com sucesso!');
    window.location.href = 'index_home.html';
}
