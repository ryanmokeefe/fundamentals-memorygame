// CARDS:

var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }
]

// User's cards that are Flipped

var cardsInPlay = []

// (unit 9) ONE FUNCTION TO CHECK LOGIC

var checkMatch = function() {

        // Check for length and match

        if (cardsInPlay.length === 2) {
            if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
                alert('You found a match!')
            } 
            else {
                alert('Sorry, try again.')
            }
        }
}

// (unit 9) ONE FUNCTION TO SELECT/FLIP CARDS

var flipcard = function(cardId) {

    console.log('User flipped ' + cards[cardId].rank + ' of ' + cards[cardId].suit)

    // Add flipped cards to cardsInPlay

    cardsInPlay.push(cards[cardId])

// new if statement:
    if (cardsInPlay.length === 2) {
        checkMatch()
    }
}

flipcard(3)
flipcard(2)

// ALERT USER OF RESULTS:

// alert('User flipped ' + cardOne)
