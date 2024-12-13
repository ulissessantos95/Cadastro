let numeros = [];
let numeros2 = [];

let n1;
let n2;

function atv83() {
    let num;

    for (let i = 0; i < 25; i++) {
        num = Math.ceil(Math.random() * 25);
        numeros.push(num)
    }

    /*while (numeros.length < 25) {
        num = Math.ceil(Math.random() * 25);
        numeros.push(num)
    }*/

    document.getElementById("resultado").innerHTML = "Array gerada com sucesso <br>"

    console.log(numeros)
}

function atv83b() {
    do {
        n1 = Number(prompt("Digite um numero maior que 0:"));

    } while (n1 < 0 || n1 > 24 || !n1)

    do {
        n2 = Number(prompt("Digite outro numero maior que 0:"));

    } while (n2 < 0 || n2 > 24 || !n2)

    soma = numeros[n1] + numeros[n2]

    console.log(soma)
    document.getElementById("resultado").innerHTML += "Soma de " + numeros[n1] + " + " + numeros[n2] + " = " + soma
}

function mostrarArray() {

    document.getElementById("resultado").innerHTML = '<h2>Lançamentos dos dados:</h2>'
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById("resultado").innerHTML += "Dados: " + numeros[i] + "<br>"
    }

}



function pesquisar() {
    n1 = Number(prompt("Digite um numero:"))
    let posicao = numeros.indexOf(n1)

    if (posicao == -1) {
        document.getElementById("resultado").innerHTML = "Este Numero não esta presente na array"
    } else {
        document.getElementById("resultado").innerHTML = "Numero encontrado na posição: " + posicao
    }
}

function atv85() {
    let num;
    document.getElementById("resultado").innerHTML = "Array gerada com sucesso <br>"

    for (let i = 0; i < 50; i++) {
        num = Math.ceil(Math.random() * 200 - 100)
        numeros2.push(num)
    }
    console.log(numeros2);
}

function mostrarArray2() {
    document.getElementById("resultado").innerHTML = '<h2>Lançamentos dos dados:</h2>'
    for (let i = 0; i < numeros2.length; i++) {
        document.getElementById("resultado").innerHTML += "Dados: " + numeros2[i] + "<br>"
    }
}

function transformArr() {
    for (let i = 0; i < numeros2.length; i++)
        if (numeros2[i] < 0) {
            numeros2[i] = 0
        }

    document.getElementById("resultado").innerHTML = '<h2>Lançamentos dos dados:</h2>';
    for (let i = 0; i < numeros2.length; i++) {
        document.getElementById("resultado").innerHTML += "Dados: " + numeros2[i] + "<br>"; // Exibir todos os números
    }

}

let pai = [];
let mae = [];
let filho = [];

function atv87() {
    let num;
    document.getElementById("resultado").innerHTML = "<h2>Lançamentos dos dados:</h2>"

    document.getElementById("marc").innerHTML += "<h3>" + "i" + "</h3>"
    document.getElementById("pai").innerHTML += "<h3>" + "Pai" + "</h3>"
    for (let i = 0; i < 50; i++) {
        num = Math.ceil(Math.random() * 100)
        pai.push(num);
        document.getElementById("marc").innerHTML += "<li>" + i + "</li>"
        document.getElementById("pai").innerHTML += "<li style='background-color: greenyellow;'>" + pai[i] + "</li>"
    }

}

function geMae() {
    document.getElementById("mae").innerHTML += "<h4>" + "Mãe" + "</h4>"
    for (let i = 0; i < 50; i++) {
        num = Math.ceil(Math.random() * 100)
        mae.push(num);
        document.getElementById("mae").innerHTML += "<li style='background-color: blueviolet; color:white' >" + mae[i] + "</li>"
    }
}

function geFilho() {
    document.getElementById("filho").innerHTML += "<h4>" + "Pai" + "</h4>"
    for (let i = 0; i < 50; i++) {
        if (pai[i] % 2 == 0) {
            filho.push(pai[i])
            document.getElementById("filho").innerHTML += "<li style='background-color: greenyellow;''>" + pai[i] + "</li>"

        } else if (mae[i] % 2 != 0) {
            filho.push(mae[i]);
            document.getElementById("filho").innerHTML += "<li style='background-color: blueviolet; color:white'>" + mae[i] + "</li>"

        }
        
    }
    console.log(filho)
    for (let i = 0; i < 50; i++) {
        if (filho[i] == undefined) {
            document.getElementById("filho").innerHTML += ""

        }
    }
}








/*
23.9 >> 23 floor
23.9 >> 24 ceil
23.9 >> 24 round

23.2 >> 23 floor
23.2 >> 24 ceil
23.2 >> 23 round

*/