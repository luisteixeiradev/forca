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
for (const entry of ranking) {
    document.querySelector("#tableRanking").innerHTML += `<tr><td>${entry.name}</td><td>${entry.score}</td></tr>`
}