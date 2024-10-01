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

    console.log(deck);
    deck = _.shuffle(deck);

    console.log(deck);
}

createDeck();