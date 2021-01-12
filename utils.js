

export function countsAsAYes(answerString) {
    return answerString.charAt(0).toUpperCase() === 'Y';
}

const injectArea = document.getElementById('inject-area');

//result function

export function resultStringFunc(correctAnswer, firstName, lastName) {
    
//result strings 

    const resultStringPerfect = `Way to go ${firstName} ${lastName}!! You got ${correctAnswer} correct!`;
    const resultStringSoSo = `Hey  ${firstName} ${lastName} not bad! You got ${correctAnswer} correct!`;
    const resultStringEhh = `Sooooo...${firstName} ${lastName} did you even try? You got ${correctAnswer} correct!`;
    const resultStringYouSuck = `Way to go ${firstName} ${lastName} YOU SUCK!!! You got ${correctAnswer} correct!`;

    //  if/else conditionals  

    if (correctAnswer === 3) {
        return injectArea.textContent = resultStringPerfect;
    } else if (correctAnswer === 2) {
        return injectArea.textContent = resultStringSoSo;

    } else if (correctAnswer === 1) {
        return injectArea.textContent = resultStringEhh;

    } else {
        return injectArea.textContent = resultStringYouSuck;
    }}