const changeArabToRom = digit => {
    if (digit < 1 || digit > 3999) {
        return 'Not a valid number'
    } else {
        let resultRoman = '';
        const romanDictionary = {
            I: '1',
            V: '5',
            X: '10',
            L: '50',
            C: '100',
            D: '500',
            M: '1000'
        };


        let i;
        for (i in romanDictionary) {
            while (i >= romanDictionary[i]) {
                resultRoman += i;
                digit -= romanDictionary[i];
            }
        }
        return resultRoman;
    }
}
console.log(changeArabToRom('1199'))