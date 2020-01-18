// Palavras PC
const words = [{
        category: 'animais',
        items: ['cao', 'macaco', 'rato']
    },
    {
        category: 'países',
        items: ['portugal', 'espanha']
    }
]

// Teclado
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
for (let i = 0; i < letters.length; i++) {
    document.getElementsByClassName('keyboard')[0].innerHTML += `<button class="bLetters" id="letter${letters[i]}" onclick="useLetter('${letters[i]}')">${letters[i]}</button>`
};

function useLetter(letter) {
    document.getElementById(`letter${letter}`).disabled = true;
    letterAttempt.push({
        letter
    });
    console.log(word);
    /*console.log(letterAttempt);*/

    
    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                wordVisual.push(letter)
                console.log(wordVisual)
                visualWordF()
                console.log(wordVisual)
            }
        }
    } else {
        contForca = contForca + 1
        document.querySelector(".forca").src = `img/f${contForca}.png`
    }

    /*for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            wordVisual.push(letter)
            console.log(letter);
            visualWord()
        } else {
            contForca = contForca + 1
            document.querySelector(".forca").src = `img/f${contForca}.png`
        }
    }*/

    if (contForca === 6) {
        alert("O jogo terminou")
    }
}

let word =[]

// Função para escolher a palavra
let wordVisual = []

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
console.log(word);

}

// Imagem da forca
let contForca = 0
document.querySelector(".forca").src = `img/f${contForca}.png`

// Função para tentativas de letras do utilizador
let letterAttempt = []

// Jogadores
let pName1
let pName2

document.querySelector(".leftP").innerHTML = pName1
document.querySelector(".rightP").innerHTML = pName2

// Chamar funções
randomWordAndCategory()

function wordVisualF() {
    for (let i = 0; i < wordVisual.length; i++) {
        document.getElementById("pcWord").innerHTML += wordVisual[i]
    }
}