// import functions and grab DOM elements
const quizButton = document.getElementById('launch-quiz');

const injectArea = document.getElementById('inject-area');

quizButton.addEventListener('click', () => {

    alert('Welcome!');

    const confirmation = confirm('So you wanna take a quiz?');
    
    if (!confirmation) return;

    const firstName = prompt('Whats ur first name?');
    const lastName = prompt('Whats ur last name?');

    const firstQuestion = prompt('Is Mezcal made out of Bananas?');
    const secondQuestion = prompt('Can Mezcal be made from different types of agave?');
    const thirdQuestion = prompt('Does Mezcal make you hallucinate?');

    let correctAnswer = 0;

    if (firstQuestion.charAt(0).toUpperCase() !== 'Y') ++correctAnswer;
        
    if (secondQuestion.charAt(0).toUpperCase() === 'Y') ++correctAnswer;

    if (thirdQuestion.charAt(0).toUpperCase() !== 'Y') ++correctAnswer;

    

    
    console.log('I Work');
});


// initialize state

// set event listeners to update state and DOM  