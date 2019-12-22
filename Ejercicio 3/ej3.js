const baraja = [];
let player1 = [];
let player2 = [];

const points = {
    highCard: 0,
    poker: 7,
}

const addCard = (value, suit) => {
    let val = null;
    switch (value) {
        case 10:
            val = 'T';
            break;
        case 11:
            val = 'J'
            break;
        case 1:
            val = 'A'
            break;
        default:
            val = String(value);
    }

    baraja.push({
        value: val,
        suit
    });
}

const removeRandomCard = () => {
    const rand = (Math.random(new Date().getMilliseconds()) * 100) % baraja.length;
    const card = baraja.splice(rand, 1);
    return card;
}

for (let i = 1; i <= 13; i++) {
    addCard(i, 'S');
    addCard(i, 'H');
}

for (let i = 0; i < 5; i++) {
    player1.push(removeRandomCard());
    player2.push(removeRandomCard());
}

console.log('baraja', baraja);
console.log('player 1', player1);
console.log('player 2', player2)