const readline = require('readline-sync');
const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function printWelcomeMessage(){
    console.log('Welcome to the TechSwitch JavaScript Introduction calculator!');
    console.log('_____________________________________________________________');
}

function getCalculationMode(){
    console.log(`Which calculator mode do you want?
                1 - Arithmetic
                2 - Vowel Counting`);
    inputMode = readline.prompt();
    return inputMode;
}

function getInputString(message){
    let response;
    console.log(message);
    response = readline.prompt();
    return response;
};

function getInputNum(message){
    let response;
    do {
        console.log(message);
        response = readline.prompt();
        message = 'Not a valid number, please try again: '
    } while (isNaN(response));
    return +response;
}

function performOneCalculation(operator, numbers){
    let answer = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if(operator === '+') {
            answer += numbers[i];
        } else if (operator === '-') {
            answer -= numbers[i];
        } else if (operator === '*') {
            answer *= numbers[i];
        } else if (operator === '/') {
            answer /= numbers[i];
        }
    }
    return answer;
}

function numberCalculator(){
    // User input  - the operator to use for calculations
    let operator = getInputString('Please enter the operator: ');
    // The amount of numbers to be inputted for calculation
    let totNumInput = getInputNum(`How many numbers would you like to ${operator} ? `)
    let numArray = new Array(totNumInput);
    // User input each value to be calculated
    for(let i = 0; i < totNumInput; i++){
        let argument = getInputNum(`Please enter number ${i+1} : `);
        numArray[i] = +argument;
    }
    // perform the calculation
    let result = performOneCalculation(operator, numArray);
    console.log(`The answer is: ${result}`);
}

function vowelCalculator(inString){
    const obj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    for(let i=0; i<inString.length; i++){
        if(inString[i] === 'a' || inString[i] ==='A'){
            obj.a++;
        } else if (inString[i] === 'e' || inString[i] === 'E'){
            obj.e++;
        } else if (inString[i] === 'i' || inString[i] === 'I'){
            obj.i++;            
        } else if (inString[i] === 'o' || inString[i] === 'O'){
            obj.o++;
        } else if (inString[i] === 'u' || inString[i] === 'U'){
            obj.u++;
        }
    }
    console.log(`The Vowel counts are:
                A: ${obj.a}
                E: ${obj.e}
                I: ${obj.i}
                O: ${obj.o}
                U: ${obj.u} \n`);
}

printWelcomeMessage();
while (true) {
    let calculation_Mode = getCalculationMode();
    if (calculation_Mode === ARITHMETIC_MODE){
        //Call Number Calculator
        numberCalculator();
    } else if (calculation_Mode === VOWEL_COUNTING_MODE){
        //Call Vowel Counter
        let inputString = getInputString('Please enter a sentence:\n');
        vowelCalculator(inputString);       
    } else {
        console.log('Invalid Mode entered, please try again: \n')
    }    
}