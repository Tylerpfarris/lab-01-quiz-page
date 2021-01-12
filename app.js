import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('launch-quiz');
const injectArea = document.getElementById('inject-area');

quizButton.addEventListener('click', () => {
   
    //welcome
    alert('Lets see what you learned!');
   
    //confirmation prompt
    const confirmation = confirm('Mezcal is pretty interesting aye? Do you wanna put your knowledge to the test');
   
    //Users name
    const firstName = prompt('Whats ur first name?');
    const lastName = prompt('Whats ur last name?');
   
    //questions
    const firstQuestion = prompt('Is Mezcal made out of Bananas?');
    const secondQuestion = prompt('Can Mezcal be made from different types of agave?');
    const thirdQuestion = prompt('Does Mezcal make you hallucinate?');

    //robot talk
    let correctAnswer = 0;
    if (!confirmation) return;

    if (!countsAsAYes(firstQuestion))++correctAnswer;
    if (countsAsAYes(secondQuestion))++correctAnswer;
    if (!countsAsAYes(thirdQuestion))++correctAnswer;

   
//result strings with if/else conditionals

    const resultStringPerfect =< `Way to go ${firstName} ${lastName}!! You got ${correctAnswer} correct!`;
    const resultStringSoSo = `Hey  ${firstName} ${lastName} not bad! You got ${correctAnswer} correct!`;
    const resultStringEhh = `Sooooo...${firstName} ${lastName} did you even try? You got ${correctAnswer} correct!`;
    const resultStringYouSuck = `Way to go ${firstName} ${lastName} YOU SUCK!!! You got ${correctAnswer} correct!`;
  
    
    
    if (correctAnswer === 3) {
        return injectArea.textContent = resultStringPerfect;

    } else if (correctAnswer === 2) {
        return injectArea.textContent = resultStringSoSo;

    } else if (correctAnswer === 1) {
        return injectArea.textContent = resultStringEhh;

    } else {
        return injectArea.textContent = resultStringYouSuck;
    }

   
});


