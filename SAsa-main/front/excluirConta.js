  // Função que será chamada ao clicar no botão
  function excluirConta() {
    // Confirmar se o usuário deseja realmente excluir a conta
    const confirmacao = confirm("Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.");

    if (confirmacao) {
        // Simulando uma chamada para o backend (substitua com a sua API real)
        // Aqui você pode fazer uma requisição para o servidor, por exemplo, usando fetch() ou XMLHttpRequest.

        // Exemplo de uma requisição fictícia com fetch (deve ser configurada com seu backend):
        fetch('/api/excluir-conta', {
            method: 'DELETE',  // O método DELETE indica a exclusão
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')  // Token de autenticação (se necessário)
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Sua conta foi excluída com sucesso.");
                // Redireciona o usuário para a página inicial ou de login
                window.location.href = '/login';
            } else {
                alert("Houve um erro ao tentar excluir sua conta. Tente novamente.");
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Ocorreu um erro. Tente novamente.");
        });
    } else {
        console.log("Exclusão cancelada.");
    }
}