const baraja = [];
let player1 = [];
let player2 = [];

const points = {
    highCard: 0,
    pair: 1,
    twoPair: 2,
    threeOfAKind: 3,
    straight: 4,
    flush: 5,
    fullHouse: 6,
    poker: 7,
    straightFlush: 8,
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
        case 12:
            val = 'Q'
            break;
        case 13:
            val = 'K'
            break;
        case 14:
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
    return card[0];
}


for (let i = 2; i <= 14; i++) {
    addCard(i, 'S');
    addCard(i, 'H');
    addCard(i, 'C');
    addCard(i, 'D');
}


for (let i = 0; i < 5; i++) {
    player1.push(removeRandomCard());
    player2.push(removeRandomCard());
}

let handPlayer1 = player1.map(obj => {
    let rObj = {};
    rObj[obj.value] = obj.suit;
    return rObj;
});
let handPlayer2 = player2.map(obj => {
    let rObj = {};
    rObj[obj.value] = obj.suit;
    return rObj;
});



//console.log('baraja', baraja);
console.log('player 1', handPlayer1);
console.log('player 2', handPlayer2)
