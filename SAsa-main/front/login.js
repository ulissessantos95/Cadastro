/* function logar(){ //funçao de validar os valores digitados pelo usuário e validar para ir para a home

    let usuario = document.getElementById('identidade').value;
    let senha = document.getElementById('senha').value;

    // Recuperar usuários cadastrados do Local Storage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se o email e senha estão corretos
    let usuarioValido = usuarios.find(
        usuario => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
        alert(`Bem-vindo, ${usuarioValido.nome}!`);
        window.location.href = 'home.html'; // Redireciona para outra página
    } else {
        alert('Email ou senha incorretos.');

}
} */
// Função que executa o login
function logar() {
    // Captura os valores inseridos pelo usuário
    let identidade = document.getElementById('identidade').value;
    let senha = document.getElementById('senha').value;

    // Limpa mensagens de erro anteriores
    let mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = '';

    // Obtém os usuários cadastrados do localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Valida o login comparando os dados inseridos com os cadastrados
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === identidade && usuario.senha === senha);

    // Verifica se o login foi bem-sucedido
    if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        window.location.href = 'home.html';  // Redireciona para a página principal
    } else {
        mensagemErro.textContent = "Email ou senha inválidos."; // Exibe a mensagem de erro
    }
}
