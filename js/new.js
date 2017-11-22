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
    },
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

// Score

var score = document.getElementsByClassName('score')
var points = 0

 // add to score
 var upScore = function() {
    points += 10
    score[0].innerHTML = points
}

// (unit 9) ONE FUNCTION TO CHECK LOGIC

var checkMatch = function() {

        // Check for length and match

        if (cardsInPlay.length === 2) {
            if (cardsInPlay[0] === cardsInPlay[1]) {
                upScore()
                alert('You found a match!')

            } 
            else {
                alert('Sorry, try again.')
            }
        // clear cardsInPlay
        cardsInPlay = []
        }
}

// (unit 9) ONE FUNCTION TO SELECT/FLIP CARDS

var flipcard = function() {
    // get data Id of flipped card
    var cardId = this.getAttribute('data-id');

    // flip face of card
    this.setAttribute('src', cards[cardId].cardImage)

    // Add flipped cards to cardsInPlay

    cardsInPlay.push(cards[cardId].rank)

    console.log('User flipped ' + cards[cardId].rank + ' of ' + cards[cardId].suit)
    

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

// RESET GAME BOARD

var reset = document.getElementsByTagName('button')[0]

reset.addEventListener('click', function() {
    // get board
    var board = document.getElementById('game-board')
    // clear board
    board.innerHTML = null
    // clear score
    points = 0
    score[0].innerHTML = points
    // run createBoard
    createBoard()

})
