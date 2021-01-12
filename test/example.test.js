// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('It should return true if argument begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('yeti');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return false if argument does not begin with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('nettle');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});