let romanToArab = romanNumber => {
    let romanDictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const textSplit = romanNumber.toUpperCase().split('');
    let result = 0;
    let arrayRunner = 0;
    while (textSplit.length) {
        arrayRunner = romanDictionary[textSplit.shift()];
        result += arrayRunner * (arrayRunner < romanDictionary[textSplit[0]] ? -1 : 1);
    }
    return result;
}
console.log(romanToArab('mcmxcix'))