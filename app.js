import { countsAsAYes, resultStringFunc } from './utils.js';

const quizButton = document.getElementById('launch-quiz');

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

    resultStringFunc(correctAnswer, firstName, lastName);


});


