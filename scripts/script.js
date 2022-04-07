function randomizer() { 
    return Math.random() - 0.5; 
}
function startGame () {
    const numCards = prompt("Insira o número de cartas (4 ~ 14)")

    if (numCards % 2 == 0 && numCards >= 4 && numCards <= 14) {
        const cards = [`<card class = "bobross"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/bobrossparrot.gif" ></face></card>`, `<card class = "explody"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/explodyparrot.gif" ></face></card>`, `<card class = "fiesta"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/fiestaparrot.gif" ></face></card>`, `<card class = "metal"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/metalparrot.gif" ></face></card>`, `<card class = "revertit"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/revertitparrot.gif" ></face></card>`, `<card class = "triplets"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/tripletsparrot.gif" ></face></card>`, `<card class = "unicorn"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/unicornparrot.gif" ></face></card>`]
        let differentCards = cards.sort(randomizer); 
        let selection1Cards = differentCards.slice(0, numCards / 2)
        let selection2Cards = selection1Cards.concat(selection1Cards)
        let randomizedCards = selection2Cards.sort(randomizer)
        const numSelectedCards = randomizedCards.length

        for (let i = 0; i < numSelectedCards; i++) {
            let cardTable = document.querySelector("table")
            cardTable.innerHTML += randomizedCards[i]
        }
        
    } else {
        alert("Só é possível jogar com um número par de cartas, com um mínimo de 4 e um máximo de 14")
        startGame()
    }
}
startGame()
