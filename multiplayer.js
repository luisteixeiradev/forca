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

for (const cat of words) {
    if (cat.category) {
        let categoryObject = words[Math.floor(Math.random() * words.length)]
        console.log([cat]);
    }
}



// Selecionar Objeto
/* let categoryObject = words[Math.floor(Math.random() * words.length)] */



/* for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `_ &nbsp`
    console.log(word[i]);

} */