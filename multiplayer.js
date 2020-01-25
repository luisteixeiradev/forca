// Variáveis globais
// Máximo tentativas de letra
const MAX_FORCA = 6
// Jogadores
let playerName1
let playerName2
// Palavra escolhida
let word = []
// Palavra escolhida convertida em "_ _"
let wordVisual = []
// Contador da forca
let countForca = 0
// Contador de turno e indicação visual dos turnos
let turn = 1
document.querySelector(".left").style = "border: solid green 5px; border-radius: 5px";

// Palavras PC
const words = [{
        category: 'frameworks',
        items: ['ionic', 'angular', 'react']
    },
    {
        category: 'linguagens de programação',
        items: ['javascript', 'swift', 'perl', 'sql', 'java', 'python', 'actionscript', 'pascal', 'php', 'euphoria', 'lua', 'matlab', 'rubi']
    }
]

// Teclado
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
for (let i = 0; i < letters.length; i++) {
    document.getElementsByClassName('keyboard')[0].innerHTML += `<button class="bLetters" id="letter${letters[i]}" onclick="useLetter('${letters[i]}')">${letters[i]}</button>`
};

// Função para escolher e representar a palavra e categoria da mesma em HTML
function randomWordAndCategory() {

    let categoryObject = words[Math.floor(Math.random() * words.length)]
    word = categoryObject.items[Math.floor(Math.random() * categoryObject.items.length)].toUpperCase().split("")
    document.getElementById("category").innerHTML = categoryObject.category.toUpperCase()

    for (let i = 0; i < word.length; i++) {
        wordVisual.push(`&nbsp_&nbsp`)
    }

    for (let i = 0; i < wordVisual.length; i++) {
        document.getElementById("pcWord").innerHTML += wordVisual[i]
    }
}
randomWordAndCategory()

// Lójica da parte jogável
function useLetter(letter) {

    // Quando user clica numa letra, desativa essa letra
    document.getElementById(`letter${letter}`).disabled = true;

    // Troca visualmente conjunto (_ _) pela letra quando user acerta
    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                wordVisual[i] = letter
                changeLetterVisual()
            }
        }
        // Mostra visualmente que a letra estava correta com fundo verde no botão
        document.getElementById(`letter${letter}`).style = "background: green;"

        // Altera turno; altera visual da forca e do turno
    } else {
        countForca = countForca + 1
        document.querySelector(".forca").src = `img/f${countForca}.png`
        turn = turn * -1
        changeTurnVisual()
    }

    // Ativa modal do game over
    if (countForca === MAX_FORCA) {
        document.querySelector("#pcWordGameOver").innerHTML = word.join("")
        document.querySelector("#modalGameOver").style.display = "block"
    }

    // Ativa modal da vitória em caso das letras estarem todas selecionadas
    if (word.join("") === wordVisual.join("")) {
        if (turn === 1) {
            document.querySelector("#winnerDif").innerHTML = playerName1
            document.querySelector("#pcWordGameOverDif").innerHTML = word.join("")
        } else {
            document.querySelector("#winnerDif").innerHTML = playerName2
            document.querySelector("#pcWordGameOverDif").innerHTML = word.join("")
        }
        document.querySelector("#modalWin").style.display = "block"
    }

    // Altera conteúdo da modal conforme o vencedor
    if (countForca === MAX_FORCA && turn === 1) {
        document.querySelector("#winner").innerHTML = playerName1
    } else {
        document.querySelector("#winner").innerHTML = playerName2
    }
}

// Substitui letra tentada por visualWord
function changeLetterVisual() {
    document.getElementById("pcWord").innerHTML = ""

    for (let i = 0; i < wordVisual.length; i++) {
        document.getElementById("pcWord").innerHTML += wordVisual[i]
    }
}

// Mudar imagem da forca
document.querySelector(".forca").src = `img/f${countForca}.png`

// Função escolher nomes dos jogadores
function startGame() {
    if (document.querySelector('#inputName1').value === "" || document.querySelector('#inputName2').value === "") {
        alert("Por Favor Escolhe o Teu Nome!")
    } else {
        document.querySelector("#modalNames").style.display = "none"
        playerName1 = document.querySelector("#inputName1").value
        playerName2 = document.querySelector("#inputName2").value
        document.querySelector(".leftP").innerHTML = playerName1
        document.querySelector(".rightP").innerHTML = playerName2
    }
}
document.querySelector(".btnInputNames").addEventListener("click", startGame);

// Função para trocar visual dos turnos
function changeTurnVisual() {
    if (turn === -1) {
        document.querySelector(".right").style = "border: solid green 5px; border-radius: 5px";
        document.querySelector(".left").style = "";
    } else if (turn === 1) {
        document.querySelector(".left").style = "border: solid green 5px; border-radius: 5px";
        document.querySelector(".right").style = "";
    }
}

// Funções reiniciar jogo
document.querySelector("#playAgain").addEventListener("click", function () {
    location.reload()
});
document.querySelector("#playAgainDif").addEventListener("click", function () {
    location.reload()
});