// CARDS:

var cards = [
    'queen', 'queen', 'king', 'king'
]

// User's cards that are Flipped

var cardsInPlay = [ ]

var cardOne = cards[2]

var cardTwo = cards[3]

// Add flipped cards to cardsInPlay

cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)

console.log('User flipped ' + cardsInPlay)

// Check for length and match

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You found a match!')
    } else {
        alert('Sorry, try again.')
    }
}


// ALERT USER OF RESULTS:

// alert('User flipped ' + cardOne)
