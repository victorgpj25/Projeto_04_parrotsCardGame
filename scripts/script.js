function randomizer() { 
    return Math.random() - 0.5; 
}
function startGame () {
    const numCards = prompt("Insira o número de cartas (4 ~ 14)")

    if (numCards % 2 == 0 && numCards >= 4 && numCards <= 14) {
        const cards = [`<card id="bobross" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/bobrossparrot.gif" ></face></card>`, `<card id="explody" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/explodyparrot.gif" ></face></card>`, `<card id="fiesta" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/fiestaparrot.gif" ></face></card>`, `<card id="metal" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/metalparrot.gif" ></face></card>`, `<card id="revertit" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/revertitparrot.gif" ></face></card>`, `<card id="triplets" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/tripletsparrot.gif" ></face></card>`, `<card id="unicorn" onclick="selectCard(this)"><face class="back-face"><img src="content/front.png"></face><face class="front-face"><img src="content/unicornparrot.gif" ></face></card>`]
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

function selectCard (card) {
    if (card.classList.contains("correct") || card.classList.contains("selected")) {
    
    } 
    else {
        let previousCard = document.querySelector(".selected")
        card.classList.add("selected")
        if (card.id == previousCard.id) {
            function rightPair () {
                document.querySelector(".selected").classList.remove("selected")
                document.querySelector(".selected").classList.remove("selected")
                card.classList.add("correct")
                previousCard.classList.add("correct")
            }
            rightPair ()
        } 
        else {
            function wrongPair () {
                document.querySelector(".selected").classList.remove("selected")
                document.querySelector(".selected").classList.remove("selected")
                
            }
            setTimeout(wrongPair, 1000)
        }
    }
}

