// Palavras PC
const words = [
    {
        category: 'animais',
        items: ['cao', 'macaco', 'rato']
    },
    {
        category: 'paises',
        items: ['portugal', 'espanha']
    }
]

let categoryObject = words[Math.floor(Math.random() * words.length)]

console.log(categoryObject);

let word = categoryObject.items[Math.floor(Math.random() * categoryObject.items.length)].toUpperCase()

document.getElementById("category").innerHTML = categoryObject.category

for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `&nbsp_&nbsp`
    console.log(word[i]);
}

/*imagem forca*/

let contForca = 0

document.querySelector(".forca").src=`img/f${contForca}.png`



//teclado
const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for (let i = 0; i < letters.length; i++) {
    document.getElementsByClassName('keyboard')[0].innerHTML += `<button class="bLetters" id="letter${letters[i]}">${letters[i]}</button>`
    console.log(letters[i]);
};




// Selecionar Objeto
/* let categoryObject = words[Math.floor(Math.random() * words.length)] */



/* for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `_ &nbsp`
    console.log(word[i]);

} */