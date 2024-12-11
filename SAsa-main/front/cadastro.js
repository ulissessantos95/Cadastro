const campoNome = document.getElementById("nome");
const campoTelefone = document.getElementById("telefone");
const campoCidade = document.getElementById("cidade");
const campoNovoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

function login(){
    let login = campoNome.value;
    let senha = campoTelefone.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); 
    //jsonparse converte BD, local para (localStorage.getItem(pegar o BD))Browsier "internet", 
    if (bancoDeDados == null){
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usauario of bancoDeDados){
            //para cada dados de bancos de dados
            if (usauario.login == login && usauario.senha == senha){
                //se login desse usuario para cada usuario é igual o login esta escrito no input 
                // se a senha for igual e o login for igual
                mensagem = "Parabéns, você logou";
                localStorage.setItem("logado", JSON.stringify(usauario));
                //localstorage analise usuario, stringify converter e puxa usuario na linha do for (let****--*****);
                //********sistema para outra pagina */
                window.location.href = "home.html";
                break;
            }
        }
    }
    alert(mensagem)
}
function cadastra(){
    if (campoNovoEmail.value = campoSenha.value){
        const usuario = {
            login: campoCidade.value,
            senha: campoNovoEmail.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        
    } else {  alert("As senhas são diferentes!");
    }
}
function deslogar(){
    localStorage.setItem("logado", JSON.stringify(null));
    window.location.href = "index.html";
}
function carrega(){
    let usuarioLogado = JSON.parse(localStorage.getItem("logado"));
    let nome = usuarioLogado.login;
    document.getElementById("nome").innerHTML = nome;
}