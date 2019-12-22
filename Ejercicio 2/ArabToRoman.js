const changeArabToRoman = digit => {
    let romanDictionary = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    if (digit < 1) {
        return '';
    } else if (digit > 3999) {
        return ''
    }
    else {
        for (let i = 0; i < romanDictionary.length; i++) {
            if (digit >= romanDictionary[i][0]) {
                return romanDictionary[i][1] + changeArabToRoman(digit - romanDictionary[i][0]);
            }  
        }
    }
}
console.log(changeArabToRoman('1199'))