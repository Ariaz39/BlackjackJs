/*
2C = Two of  Clubs (Treboles)
2D = Two of  Diamonds (Diamantes)
2H = Two of  Hearts (Corazones)
2S = Two of  Spades (Espadas)
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const especials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

const btnNew = document.querySelector('#btnNew');
const btnGet = document.querySelector('#btnGet');
const btnStop = document.querySelector('#btnStop');
const smallPoints = document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');

const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let esp of especials) {
            deck.push(esp + type);
        }
    }

    deck = _.shuffle(deck);

    return deck;
}

createDeck();

// Function to obtain card of the deck
const getCard = () => {
    if (deck.length === 0) {
        throw new Error('No deck found.');
    }

    return deck.pop();
}

// Function to obtain the card value
const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);

    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : value * 1;
}

// Computer turn
const computerTurn = (minPoints) => {
    do {
        const card = getCard();

        computerPoints = computerPoints + cardValue(card);
        smallPoints[1].innerText = computerPoints;

        const cardImg = document.createElement('img');
        cardImg.src = `assets/cartas/${card}.png`;
        cardImg.classList.add('cardImg');
        divComputerCards.append(cardImg);

        if (minPoints >= 21) {
            break;
        }
    } while ((computerPoints < minPoints) && (minPoints <= 21));


}

// Listener of button
btnGet.addEventListener('click', () => {
    const card = getCard();

    playerPoints = playerPoints + cardValue(card);
    smallPoints[0].innerText = playerPoints;

    const cardImg = document.createElement('img');
    cardImg.src = `assets/cartas/${card}.png`;
    cardImg.classList.add('cardImg');
    divPlayerCards.append(cardImg);

    if (playerPoints > 21) {
        console.warn('te pasaste perdiste');
        btnGet.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints);
    } else if (playerPoints === 21) {
        btnGet.disabled = true;
        btnStop.disabled = true;
        console.warn('ganaste');
        computerTurn(playerPoints);
    }
});

btnStop.addEventListener('click', () => {
    btnGet.disabled = true;
    btnStop.disabled = true;

    computerTurn(playerPoints);
})