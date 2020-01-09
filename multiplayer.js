// Palavras PC
const words = [
    {
        category: 'animais',
        items: ['cao', 'macaco', 'rato']
    },
    {
        category: 'países',
        items: ['portugal', 'espanha']
    }
]

// Teclado
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for (let i = 0; i < letters.length; i++) {
    document.getElementsByClassName('keyboard')[0].innerHTML += `<button class="bLetters" id="letter${letters[i]}" onclick="letter${letters[i]}()">${letters[i]}</button>`
};

// Função para escolher a palavra
function randomWordAndCategory () {

let categoryObject = words[Math.floor(Math.random() * words.length)]
let word = categoryObject.items[Math.floor(Math.random() * categoryObject.items.length)].toUpperCase()
document.getElementById("category").innerHTML = categoryObject.category.toUpperCase()

for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `&nbsp_&nbsp`
}
};

// Imagem da forca
let contForca = 0
document.querySelector(".forca").src=`img/f${contForca}.png`

// Função para tentativas de letras do utilizador
let letterAttempt = []

/*function letterAttemptDisabled () {

for (let i = 0; i < letterAttempt.length; i++) {
    document.querySelector(`#letter${letterAttempt[i].toUpperCase()}`).disabled = 'true'
}
}*/

// Jogadores
let pName1
let pName2

document.querySelector(".leftP").innerHTML= pName1
document.querySelector(".rightP").innerHTML= pName2

// Chamar funções
randomWordAndCategory();
letterAttemptDisabled();

