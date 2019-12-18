const replaceNumbers = number => {
    let meaning = '';
    if (number % 3 === 0) {
        meaning += 'Foo';
    }
    if (number % 5 === 0) {
        meaning += 'Bar';
    }
    if (number % 7 === 0) {
        meaning += 'Quix';
    }
    let numberMeaning = number.split('');

    numberMeaning.forEach(elements => {
        switch (elements) {
            case '3':
                meaning += 'Foo';
                break;
            case '5':
                meaning += 'Bar';
                break;
            case '7':
                meaning += 'Quix';
                break;
        }
    });
    return meaning;
}

console.log(replaceNumbers('35'))