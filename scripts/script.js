var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var mai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var especiais = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')']
var selecionados = []

function gerarSenha() {
    selecionados = []
    pNum();
    pMin();
    pMai();
    pCar();
    let qtdSenhas = document.getElementById("entrada1").value
    let qtdCaracteres = document.getElementById("entrada2").value
    let senha = ""
    let tabela = ""
    console.log(qtdSenhas)
    console.log(qtdCaracteres)
    if (qtdSenhas > 0 && qtdCaracteres > 0) {
        for (var i = 0; i < qtdSenhas; i++) {
            for (var j = 0; j < qtdCaracteres; j++) {
                var aleatorio = selecionados[Math.floor(Math.random() * selecionados.length)]
                senha += aleatorio
                console.log(aleatorio)
            }
            console.log(senha)
            let saida = document.getElementById("saida").value
            console.log(senha)

            tabela += senha + '\n'
            document.getElementById("saida").textContent = tabela
            senha = ""
        }
    } else {
        window.alert("Quantidade de senhas ou de caracteres inválidos")
    }
}

function pNum() {
    var chk = document.getElementById('numero').checked;
    if (chk == true) {
        selecionados = selecionados.concat(num)
        console.log(selecionados)
    }
}

function pMin() {
    var chk = document.getElementById('minusculos').checked;
    if (chk == true) {
        selecionados = selecionados.concat(min)
        console.log(selecionados)
    }
}

function pMai() {
    var chk = document.getElementById('maiusculos').checked;
    if (chk == true) {
        selecionados = selecionados.concat(mai)
        console.log(selecionados)
    }
}

function pCar() {
    var chk = document.getElementById('caracteres').checked;
    if (chk == true) {
        selecionados = selecionados.concat(especiais)
        console.log(selecionados)
    }
}