document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado
    function carregarTabela() {
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        let veiculos = JSON.parse(localStorage.getItem('garagem')) || [];
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let veiculo of veiculos) {
            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaMarca = linha.insertCell(1);
            let celulaAno = linha.insertCell(2);
            let celulaPlaca = linha.insertCell(3);
            let celulaId = linha.insertCell(4);
            let celulaAcoes = linha.insertCell(5);
            // Preencher as células com os dados do usuário
            celulaNome.innerHTML = veiculo.nome;
            celulaMarca.innerHTML = veiculo.marca;
            celulaAno.innerHTML = veiculo.ano;
            celulaPlaca.innerHTML = veiculo.placa;
            celulaId.innerHTML = veiculo.id;
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="excluirBtn" data-id="${veiculo.id}" data-nome="${veiculo.nome}">Excluir</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.excluirBtn');
        	for(let button of botoes){
            button.addEventListener('click', function() {
                let nomeVe = this.getAttribute('data-nome');
                let idVe = this.getAttribute('data-id');
                mostrarModal(nomeVe, idVe); // Chamar função para exibir o modal de confirmação
            });
        }
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalExcluir");
    let span = document.getElementsByClassName("close")[0];
    let confirmarExcluir = document.getElementById("confirmarExcluir");
    let cancelarExcluir = document.getElementById("cancelarExcluir");
    let veiculoNomeElemento = document.getElementById("usuarioNome");
    let veiculoParaExcluirId = '';
    // Função para exibir o modal de confirmação
    function mostrarModal(nomeVe, idVe) {
        veiculoParaExcluirId = idVe;
        veiculoNomeElemento.textContent = nomeVe;
        modal.style.display = "block";
    }
    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    cancelarExcluir.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    confirmarExcluir.onclick = function() {
   	 // Obter os usuários do LocalStorage ou um array vazio se não houver dados
    	let veiculos = JSON.parse(localStorage.getItem('garagem')) || [];
    	// Filtrar o usuário a ser excluído pelo ID
    	veiculos = veiculos.filter(veiculo => veiculo.id != veiculoParaExcluirId);
    	// Atualizar o LocalStorage sem o usuário excluído
    	localStorage.setItem('garagem', JSON.stringify(veiculos));
    	// Fechar o modal após a exclusão e recarregar a tabela
    	modal.style.display = "none";
    	carregarTabela(); // Recarregar a tabela após exclusão
    }
    // Ouvinte de evento para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});