let numSecreto = [];

function modPvp() {
    window.location = "pvp.html";
}

function modPve() {
    window.location = "pve.html"
}

function pgInicial() {
    window.location = "modalidade.html";
}

function pvp() {
    let numSecreto = Number(prompt("Digite o numero o numero secreto"));
    let advNum = Number(prompt("Tente adivinhar o numero secreto"));
    let msg = "Voce Perdeu!"
    let dica;
    let operação = Math.ceil(Math.random() * 2);
    let calc = Math.ceil(Math.random() * 5);

    for (let tent = 1; tent <= 3; tent++) {
        if (advNum < numSecreto) {
            advNum = Number(prompt("Digite um numero maior"));
        } else if (advNum > numSecreto) {
            advNum = Number(prompt("Digite um numero menor"));
        } else if (advNum == numSecreto) {
            msg = "Parabens vocé acertou!";
            break
        }

        if (i == 1) {
            if (operação == 1) {
                dica = numSecreto[0] - calc
                alert("O numero esta proximo de " + dica)
            } else {
                dica = numSecreto[0] + calc
                alert("O numero esta proximo de " + dica)
            }
        }

    }
    alert(msg);
}

function facil() {
    numSecreto.splice(null);
    numSecreto.push(Math.ceil(Math.random() * 10))
}

function medio() {
    numSecreto.splice(null);
    numSecreto.push(Math.ceil(Math.random() * 50))

}

function dificil() {
    numSecreto.splice(null);
    numSecreto.push(Math.ceil(Math.random() * 100))

}

function pve() {
    let num = Number(prompt("Digite um numero"));
    let msg = "Voce perdeu!!!";
    let dica;
    let operação = Math.ceil(Math.random() * 2);
    let calc = Math.ceil(Math.random() * 5);

    for (let i = 0; i < 3; i++) {
        if (num < numSecreto) {
            num = Number(prompt("Digite um numero maior"));

        } else if (num > numSecreto) {
            num = Number(prompt("Digite um numero menor"));

        } else if (num == numSecreto) {
            msg = "Parabens Voce Acertou!!!"
        }

        if (i == 1) {
            if (operação == 1) {
                dica = numSecreto[0] - calc
                alert("O numero esta proximo de " + dica)
            } else {
                dica = numSecreto[0] + calc
                alert("O numero esta proximo de " + dica)
            }
        }

    }

    alert(msg)
}