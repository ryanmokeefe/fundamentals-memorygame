// CARDS:

var cards = [
    'queen', 'queen', 'king', 'king'
]

// User's cards that are Flipped

var cardsInPlay = [ ]

// (unit 9) ONE FUNCTION TO CHECK LOGIC

var checkMatch = function() {

        // Check for length and match

        if (cardsInPlay.length === 2) {
            if (cardsInPlay[0] === cardsInPlay[1]) {
                alert('You found a match!')
            } 
            else {
                alert('Sorry, try again.')
            }
        }
}

// (unit 9) ONE FUNCTION TO SELECT/FLIP CARDS

var flipcard = function(cardId) {

    console.log('User flipped ' + cards[cardId])

    // Add flipped cards to cardsInPlay

    cardsInPlay.push(cards[cardId])

    checkMatch()
    
}

flipcard(0)
flipcard(3)

// ALERT USER OF RESULTS:

// alert('User flipped ' + cardOne)