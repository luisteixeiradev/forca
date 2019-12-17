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

let word = categoryObject.items[Math.floor(Math.random() * categoryObject.items.length)]

document.getElementById("category").innerHTML = categoryObject.category

for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `_ &nbsp`
    console.log(word[i]);
}




// Selecionar Objeto
/* let categoryObject = words[Math.floor(Math.random() * words.length)] */



/* for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `_ &nbsp`
    console.log(word[i]);

} */