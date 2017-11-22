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
            if (cardsInPlay[0] === cardsInPlay[1]) {
                alert('You found a match!')
            } 
            else {
                alert('Sorry, try again.')
            }
        }
}

// (unit 9) ONE FUNCTION TO SELECT/FLIP CARDS

var flipcard = function() {
    // get data Id of flipped card
    var cardId = this.getAttribute('data-id');

    console.log('User flipped ' + cards[cardId].rank + ' of ' + cards[cardId].suit)

    // Add flipped cards to cardsInPlay

    cardsInPlay.push(cards[cardId].rank)

    // flip face of card
    this.setAttribute('src', cards[cardId].cardImage)
    // new if statement:
    if (cardsInPlay.length === 2) {
        checkMatch()
    }
}

// create game board

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var newCard = document.createElement('img')
        newCard.setAttribute('src', 'images/back.png')
        newCard.setAttribute('data-id', i)
        // add event listener and tie flipcard() function
        newCard.addEventListener('click', flipcard)
        // grab board
        var board = document.getElementById('game-board')
        // add card to board
        board.appendChild(newCard)

    }

}


createBoard()



// flipcard(3)
// flipcard(2)

// ALERT USER OF RESULTS:

// alert('User flipped ' + cardOne)
