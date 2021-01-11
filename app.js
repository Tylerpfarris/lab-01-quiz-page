import { countsAsAYes } from './utils.js';

// import functions and grab DOM elements
const quizButton = document.getElementById('launch-quiz');

const injectArea = document.getElementById('inject-area');

quizButton.addEventListener('click', () => {

    alert('Welcome!');

    const confirmation = confirm('So you wanna take a quiz?');
    
    const firstName = prompt('Whats ur first name?');
    const lastName = prompt('Whats ur last name?');

    const firstQuestion = prompt('Is Mezcal made out of Bananas?');
    const secondQuestion = prompt('Can Mezcal be made from different types of agave?');
    const thirdQuestion = prompt('Does Mezcal make you hallucinate?');

    let correctAnswer = 0;
    if (!confirmation) return;

    if (!countsAsAYes(firstQuestion))++correctAnswer;

    // if (firstQuestion.charAt(0).toUpperCase() !== 'Y') ;
        
    if (secondQuestion.charAt(0).toUpperCase() === 'Y') ++correctAnswer;

    if (thirdQuestion.charAt(0).toUpperCase() !== 'Y') ++correctAnswer;

    const resultString = `Way to go ${firstName} ${lastName}!! You got ${correctAnswer} correct!`;

    injectArea.textContent = resultString;

    
    
});


// initialize state

// set event listeners to update state and DOM  