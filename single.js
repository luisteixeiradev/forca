// Variáveis globais
// Máximo tentativas de letra
const MAX_FORCA = 6
// Palavra escolhida
let word = []
// Palavra escolhida convertida em "_ _"
let wordVisual = []
// Contador da forca
let countForca = 0
// Botão ajuda letra
let helpAddLetter = document.querySelector(".helpAddLetter")
// Botão ajuda forca
let helpRemoveForca = document.querySelector(".helpRemoveForca")
// Border verde à volta do jogador
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

        // Altera forca
    } else {
        countForca = countForca + 1
        document.querySelector(".forca").src = `img/f${countForca}.png`
    }

    // Ativa modal do game over
    if (countForca === MAX_FORCA) {
        document.querySelector("#pcWordGameOver").innerHTML = word.join("")
        document.querySelector("#modalGameOver").style.display = "block"
        document.querySelector(".left").style = "none"
    }

    // Ativa modal da vitória em caso das letras estarem todas selecionadas
    if (word.join("") === wordVisual.join("")) {

        document.querySelector("#winnerDif").innerHTML = "Ganhaste!"
        document.querySelector("#pcWordGameOverDif").innerHTML = word.join("")
        document.querySelector(".left").style = "none"
        document.querySelector("#modalWin").style.display = "block"
    }

    // Altera conteúdo da modal conforme o vencedor
    if (countForca === MAX_FORCA) {
        document.querySelector("#winner").innerHTML = "Perdeste..."
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

// Funções reiniciar jogo
document.querySelector("#playAgain").addEventListener("click", function () {
    location.reload()
});
document.querySelector("#playAgainDif").addEventListener("click", function () {
    location.reload()
});

// Função ajuda de adicionar uma letra à palavra
helpAddLetter.addEventListener("click", function () {
    helpAddLetter.disabled = true;
    let randomLetter = word[Math.floor(Math.random() * word.length)]
    if (word.includes(randomLetter)) {
        for (let i = 0; i < word.length; i++) {
            if (randomLetter === word[i]) {
                wordVisual[i] = randomLetter
                changeLetterVisual()
                useLetter(randomLetter)
            }
        }
    }
})

// Função ajuda de remover um elemento à forca
helpRemoveForca.addEventListener("click", function () {
    helpRemoveForca.disabled = true;
    if (countForca >= 1) {
        document.querySelector(".forca").src = `img/f${countForca = countForca -1}.png`
    } else if (countForca < 1) {
        helpRemoveForca.disabled = false
    }
})

// Funções para botão voltar ao menu principal
let mainMenuButton = document.getElementById("mainMenuButton")
mainMenuButton.addEventListener("click", function () {
    location.href = "index.html"
})
let mainMenuButtonDif = document.getElementById("mainMenuButtonDif")
mainMenuButtonDif.addEventListener("click", function () {
    location.href = "index.html"
})