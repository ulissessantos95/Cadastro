document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado
    function carregarTabela() {
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('corpoTabela');
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        let enderecos = JSON.parse(localStorage.getItem('enderecos')) || [];
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let endereco of enderecos) {
            let linha = tabela.insertRow();
            let celulaId = linha.insertCell(0);
            let celulaPais= linha.insertCell(1);
            let celulaEstado = linha.insertCell(2);
            let celulaCidade = linha.insertCell(3);
            let celulaBairro = linha.insertCell(4);
            let celulaAcoes = linha.insertCell(5);
            // Preencher as células com os dados do usuário
            celulaId.innerHTML = endereco.id;
            celulaPais.innerHTML = endereco.pais;
            celulaEstado.innerHTML = endereco.estado;
            celulaCidade.innerHTML = endereco.cidade;
            celulaBairro.innerHTML = endereco.bairro;
            
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="acoesBtn" data-id="${endereco.id}">Opções</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.acoesBtn');
        	for(let button of botoes){
            button.addEventListener('click', function() {
                let id = this.getAttribute('data-id');
                mostrarModal(id); // Chamar função para exibir o modal de confirmação
            });
        }
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalExcluir");
    let span = document.getElementsByClassName("close")[0];
    let btnExcluir = document.getElementById("btnExcluir");
    let btnEditar = document.getElementById("btnEditar");
    let enderecoId = document.getElementById("enderecoId");
    let enderecoSelecionadoId = '';
    
    // Função para exibir o modal de confirmação
    function mostrarModal(id) {
        enderecoSelecionadoId = id;
        enderecoId.textContent = id;
        modal.style.display = "block";
    }
    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    btnEditar.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    btnExcluir.onclick = function() {
   	 // Obter os usuários do LocalStorage ou um array vazio se não houver dados
    	let enderecos = JSON.parse(localStorage.getItem('enderecos')) || [];
    	// Filtrar o usuário a ser excluído pelo ID
    	enderecos = enderecos.filter(endereco => endereco.id != enderecoSelecionadoId);
    	// Atualizar o LocalStorage sem o usuário excluído
    	localStorage.setItem('enderecos', JSON.stringify(enderecos));
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
