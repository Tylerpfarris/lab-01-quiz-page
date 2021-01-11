// import functions and grab DOM elements
const quizButton = document.getElementById('launch-quiz');

const injectArea = document.getElementById('inject-area');

quizButton.addEventListener('click', () => {

    alert('Welcome!');

    const confirmation = confirm('So you wanna take a quiz?');
    
    if (confirmation === false) {
        return;
    }


    
    
    console.log('I Work');
});


// initialize state

// set event listeners to update state and DOM  