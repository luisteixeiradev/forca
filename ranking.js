// Obter o ranking do LS e ordenar o array pelo score
let ranking = JSON.parse(localStorage.getItem("ranking")) || []

ranking.sort(
    (s1, s2) => {
        if (s1.score > s2.score) return -1
        if (s1.score < s2.score) return 1
        else return 0
    }
)


// Iterar sobre array ranking ordenado
let order = 0


    for (let i = 0; i < ranking.length; i++) {

        document.querySelector("#tableRanking").innerHTML += `<tr id="line${i}"><td class="orderRanking" id="order${i}">${order += 1}º</td><td class="rankingNames" id="name${i}">${ranking[i].name}</td><td class="rankingScores" id="score${i}">${ranking[i].score}</td></tr>`

    }

    for (let i = 1; i < ranking.length; i++) {
        if (document.querySelector(`#score${i}`).textContent === document.querySelector(`#score${i-1}`).textContent) {
            document.querySelector(`#order${i}`).innerHTML = ""
            document.querySelector(`#order${i-1}`).classList.add("sameScore")
        }
        
    }