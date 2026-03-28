// 1. SELEÇÃO: Capturamos os elementos do HTML que queremos manipular
const botaoTema = document.querySelector('#btn-tema');
const corpoDaPagina = document.body; // O body já tem um atalho direto no DOM

// 2. EVENTO: Adicionamos um "escutador" que espera pelo clique no botão
botaoTema.addEventListener('click', () => {
    
    // 3. AÇÃO: O método toggle adiciona a classe se ela não existir, ou remove se ela já existir.
    corpoDaPagina.classList.toggle('modo-escuro');

    // 4. LÓGICA: Atualizamos o texto do botão dependendo do estado atual
    if (corpoDaPagina.classList.contains('modo-escuro')) {
        botaoTema.textContent = 'Modo Claro';
    } else {
        botaoTema.textContent = 'Modo Escuro';
    }
});