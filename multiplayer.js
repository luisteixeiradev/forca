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



let categoryObject = words[Math.floor(Math.random() * words.length)]

console.log(categoryObject);

let word = categoryObject.items[Math.floor(Math.random() * categoryObject.items.length)].toUpperCase()

document.getElementById("category").innerHTML = categoryObject.category.toUpperCase()

for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `&nbsp_&nbsp`
    console.log(word[i]);
}

let letterAttempt = []


/*imagem forca*/

let contForca = 0

document.querySelector(".forca").src=`img/f${contForca}.png`

/*fim imagem forca*/

//teclado
const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for (let i = 0; i < letters.length; i++) {
    document.getElementsByClassName('keyboard')[0].innerHTML += `<button class="bLetters" id="letter${letters[i]}">${letters[i]}</button>`
    console.log(letters[i]);
};

for (let i = 0; i < letterAttempt.length; i++) {
    document.querySelector(`#letter${letterAttempt[i].toUpperCase()}`).disabled = 'true'
    
}

/*player names*/

let pName1
let pName2

document.querySelector(".leftP").innerHTML= pName1
document.querySelector(".rightP").innerHTML= pName1

/*fim player names*/