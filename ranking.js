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
orderScores()

function orderScores() {

    for (let i = 0; i < ranking.length; i++) {

        if (ranking[i].score === (ranking[i].score)) {
            document.querySelector("#tableRanking").innerHTML += `<tr><td class="orderRanking">${order += 1}º</td><td class="rankingNames">${ranking[i].name}</td><td class="rankingScores">${ranking[i].score}</td></tr>`
        } else if (ranking[i].score === (ranking[i].score - 1)) {
            document.querySelector("#tableRanking").innerHTML += `<tr><td class="orderRanking">${order += 0}º</td><td class="rankingNames">${ranking[i].name}</td><td class="rankingScores">${ranking[i].score}</td></tr>`
        }
    }
}