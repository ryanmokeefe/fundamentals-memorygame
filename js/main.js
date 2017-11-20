
// global variables

var cards = [ "queen", "queen", "king", "king"]

// var cardOne = cards[0]

// var cardTwo = cards[1]

var cardsInPlay = [ ]
////////

function flipcard(cardId) {
// add cards to cardsInPlay

    cardsInPlay.push(cards[cardId])

    // check if 2 cards were flipped

    if ( cardsInPlay.length === 2 ) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!")

        } else {
            alert("Sorry, try again.")

        }

    }

    // alert user

    // console.log("user flipped " + cardOne + " and " + cardTwo) 

    console.log("user flipped " + cardId)

}

flipcard(cards[0])
flipcard(cards[2])