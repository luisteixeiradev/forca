// Palavras PC
const words = [{
        category: 'frameworks',
        items: ['ionic', 'angular', 'react']
    },
    {
        category: 'linguagens',
        items: ['javascript', 'swift', 'perl', 'sql', 'java', 'python', 'actionscript', 'pascal', 'php', 'typescript', 'euphoria', 'lua', 'asp', 'matlab', 'rubi']
    }
]

// Teclado
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
for (let i = 0; i < letters.length; i++) {
    document.getElementsByClassName('keyboard')[0].innerHTML += `<button class="bLetters" id="letter${letters[i]}" onclick="useLetter('${letters[i]}')">${letters[i]}</button>`
};

let word = []
let wordVisual = []

// Função para escolher a palavra
function randomWordAndCategory() {

    let categoryObject = words[Math.floor(Math.random() * words.length)]
    word = categoryObject.items[Math.floor(Math.random() * categoryObject.items.length)].toUpperCase().split("")
    document.getElementById("category").innerHTML = categoryObject.category.toUpperCase()
    console.log(typeof word);

    for (let i = 0; i < word.length; i++) {
        wordVisual.push(`&nbsp_&nbsp`)
    }

    for (let i = 0; i < wordVisual.length; i++) {
        document.getElementById("pcWord").innerHTML += wordVisual[i]
    }
}
randomWordAndCategory()

// Tentativa de letra; Troca letra(_ _) por letra(A.ex) ou adiciona parte da forca
function useLetter(letter) {
    document.getElementById(`letter${letter}`).disabled = true;

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                wordVisual[i] = letter
                wordVisualF()
            }
        }
        document.getElementById(`letter${letter}`).style = "background: green;"
    } else {
        contForca = contForca + 1
        document.querySelector(".forca").src = `img/f${contForca}.png`
    }

    if (contForca === 6) {
        document.querySelector("#modalGameOver").style.display = "block"
    }

    if (JSON.stringify(word)==JSON.stringify(wordVisual)) {
        document.location.reload(true)
    }
}

// Substitui letra tentada por visualWord
function wordVisualF() {
    console.log(wordVisual);
    for (let i = 0; i < 1; i++) {
        document.getElementById("pcWord").innerHTML = wordVisual[i]
    }
    for (let i = 1; i < wordVisual.length; i++) {
        document.getElementById("pcWord").innerHTML += wordVisual[i]
    }
}

// Imagem da forca
let contForca = 0
document.querySelector(".forca").src = `img/f${contForca}.png`

// Função escolher nomes dos jogadores
function jogar() {
    if (document.querySelector('#inputName1').value === "" || document.querySelector('#inputName2').value === "") {
        alert("Por Favor Escolhe o Teu Nome!")
    } else {
        document.querySelector("#modalNomes").style.display = "none"
        pName1 = document.querySelector("#inputName1").value
        pName2 = document.querySelector("#inputName2").value
        document.querySelector(".leftP").innerHTML = pName1
        document.querySelector(".rightP").innerHTML = pName2
    }
}
document.querySelector(".btnInputNames").addEventListener("click", jogar);

// Jogadores
let pName1
let pName2