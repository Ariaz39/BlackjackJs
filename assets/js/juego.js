/*
2C = Two of  Clubs (Treboles)
2D = Two of  Diamonds (Diamantes)
2H = Two of  Hearts (Corazones)
2S = Two of  Spades (Espadas)
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const especials = ['A', 'J', 'Q', 'K'];

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

    // console.log(deck);
    deck = _.shuffle(deck);

    // console.log(deck);
    return deck;
}

createDeck();

// Function to obtain card of the deck
const getCard = () => {
    if (deck.length === 0) {
        throw new Error('No deck found.');
    }

    // console.log(deck);
    // console.log(card);

    return deck.pop();
}

// Function to obtain the card value
const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);

    return ( isNaN( value ) ) ?
        ( value === 'A' ) ? 11 : 10
        : value * 1;
}

const valueOfCard = cardValue(getCard());
// console.log({valueOfCard});