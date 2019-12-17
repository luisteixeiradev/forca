const words = [
    "cao", "gato", "macaco"
]

//document.getElementById("pcWord").innerHTML = words[Math.floor(Math.random() * words.length)]

let word = words[Math.floor(Math.random() * words.length)].split("")

for (let i = 0; i < word.length; i++) {
    document.getElementById("pcWord").innerHTML += `_ &nbsp`
    console.log(word[i]);
    
}