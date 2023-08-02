// Import the native node library to use the terminal as input and output!
import { createInterface } from 'readline';

// Import functions!
import { calculateAverage, calculateInterest, calculator, factorial, isPalindrome, isPrime, table, vowelCounter } from './functions.mjs';

// Create an input and output data interface for readline!
const rd = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create constants to style the console!
const styleHeader = '\x1b[1m\x1b[30m\x1b[47m%s\x1b[0m';
const styleOption = '\x1b[37m\x1b[44m%s\x1b[0m';
const styleError = '\x1b[31m%s\x1b[0m';
const styleResult = '\x1b[32m%s\x1b[0m';

// Function to display a header when starting the program!
function displayHeader() {
  console.log('==================================================');
  console.log(styleHeader, '================== Welcome ==================');
  console.log('==================================================');
}

// Function to display the options and get user input!
function displayOptions() {
  rd.question(`Enter the function you want to execute:
      1 - Calculator
      2 - Prime number check
      3 - Calculate factorial of a number
      4 - Check if a word is a palindrome
      5 - Calculate the multiplication table of a number
      6 - Calculate the number of vowels in a word
      7 - Calculate the average of a student's grades
      8 - Calculate the final value of an investment
      0 - Exit
Option: `, (value) => {
    // Switch to check the selected option!
    switch (value) {
      case '1':
        executeCalculator();
        break;

      case '2':
        executeIsPrime();
        break;

      case '3':
        executeFactorial();
        break;

      case '4':
        executeIsPalindrome();
        break;

      case '5':
        executeTable();
        break;

      case '6':
        executeVowelCounter();
        break;

      case '7':
        executeCalculateAverage();
        break;

      case '8':
        executeCalculateInterest();
        break;

      case '0':
        // Close the program!
        rd.close();
        break;

      default:
        // In case of an invalid option, display an error message and call the function for a new input!
        console.log(styleError, 'Invalid option! Try again.\n');
        displayOptions();
        break;
    }
  });
}

// Function to get data and execute the calculator function!
function executeCalculator() {
  console.log('\n');
  console.log(styleOption, '================== Calculator ===================');
  rd.question('Enter the operator (+, -, *, or /): ', (operator) => {
    rd.question('Enter the first number: ', (number1) => {
      rd.question('Enter the second number: ', (number2) => {
        const num1 = parseFloat(number1.replace(',', '.'));
        const num2 = parseFloat(number2.replace(',', '.'));
        // Check if the provided data is valid!
        if (['-', '+', '*', '/'].includes(operator) && !isNaN(num1) && !isNaN(num2)) {
          // Call the function to perform the operation!
          const result = calculator(operator, parseFloat(num1), parseFloat(num2));
          console.log(styleResult, `The result of the operation: ${num1} ${operator} ${num2} is ${result}`);
          console.log('__________________________________________________\n');
          // Call the options function to return to the main menu!
          displayOptions();
        } else {
          // If the data is invalid, call the same function for new input!
          console.log(styleError, 'Invalid data! Try again.\n');
          executeCalculator();
        }
      });
    });
  });
}

// Function to get data and execute the prime number check function!
function executeIsPrime() {
  console.log('\n');
  console.log(styleOption, '================= Prime Numbers =================');
  rd.question('Enter a number to check if it is prime: ', (number) => {
    const num = parseFloat(number.replace(',', '.'));
    // Check if the input is a number!
    if (!isNaN(num)) {
      // Call the function to perform the check!
      const result = isPrime(parseInt(num));
      console.log(styleResult, result);
      console.log('__________________________________________________\n');
      // Call the options function to return to the main menu!
      displayOptions();
    } else {
      // If the data is invalid, call the same function for new input!
      console.log(styleError, 'Invalid number! Try again.\n');
      executeIsPrime();
    }
  });
}

// Function to get data and execute the factorial function!
function executeFactorial() {
  console.log('\n');
  console.log(styleOption, '==================== Factorial ====================');
  rd.question('Enter a number to calculate the factorial: ', (number) => {
    const num = parseFloat(number.replace(',', '.'));
    // Check if the input is a number!
    if (!isNaN(num)) {
      // Call the function to perform the calculation!
      const result = factorial(parseInt(num));
      console.log(styleResult, `The factorial of ${num} is: ${result}`);
      console.log('__________________________________________________\n');
      displayOptions();
    } else {
      // If the data is invalid, call the same function for new input!
      console.log(styleError, 'Invalid number! Try again.\n');
      executeFactorial();
    }
  });
}

// Function to get data and execute the palindrome check function!
function executeIsPalindrome() {
  console.log('\n');
  console.log(styleOption, '================== Palindromes ===================');
  rd.question('Enter a word to check if it is a palindrome: ', (word) => {
    // Check if the string is not empty!
    if (word.trim() !== '') {
      // Call the function to perform the check!
      const result = isPalindrome(word);
      console.log(styleResult, result);
      console.log('__________________________________________________\n');
      displayOptions();
    } else {
      // If the data is invalid, call the same function for new input!
      console.log(styleError, 'Invalid word! Try again.\n');
      executeIsPalindrome();
    }
  });
}

// Function to get data and execute the multiplication table function!
function executeTable() {
  console.log('\n');
  console.log(styleOption, '============== Multiplication Table ==============');
  rd.question('Enter a number to calculate the multiplication table: ', (number) => {
    const num = parseFloat(number.replace(',', '.'));
    // Check if the input is a number!
    if (!isNaN(num)) {
      // Call the function to perform the calculation!
      const result = table(parseInt(num));
      console.log(styleResult, result.join('\n'));
      console.log('__________________________________________________\n');
      displayOptions();
    } else {
      // If the data is invalid, call the same function for new input!
      console.log(styleError, 'Invalid number! Try again.\n');
      executeTable();
    }
  });
}

// Function to get data and execute the vowel count function!
function executeVowelCounter() {
  console.log('\n');
  console.log(styleOption, '============== Vowel Counter ================');
  rd.question('Enter a word to count the vowels: ', (word) => {
    // Check if the word is not empty!
    if (word.trim() !== '') {
      // Call the function to perform the count!
      const result = vowelCounter(word);
      console.log(styleResult, `The word "${word}" has ${result > 1 ? result + ' vowels' : result + ' vowel'}.`);
      console.log('__________________________________________________\n');
      displayOptions();
    } else {
      // If the data is invalid, call the same function for new input!
      console.log(styleError, 'Invalid word! Try again.\n');
      executeVowelCounter();
    }
  });
}

// Function to get data and execute the average calculation function!
function executeCalculateAverage() {
  console.log('\n');
  console.log(styleOption, '================ Calculate Average ==================');
  rd.question('Enter the first grade: ', (grade1) => {
    rd.question('Enter the second grade: ', (grade2) => {
      rd.question('Enter the third grade: ', (grade3) => {
        // Check if the provided data is valid!
        const normalizedGrade1 = parseFloat(grade1.replace(',', '.'));
        const normalizedGrade2= parseFloat(grade2.replace(',', '.'));
        const normalizedGrade3 = parseFloat(grade3.replace(',', '.'));
        if (!isNaN(normalizedGrade1) && !isNaN(normalizedGrade2) && !isNaN(normalizedGrade3)) {
          // Call the function to perform the calculation!
          const average = calculateAverage(parseFloat(normalizedGrade1), parseFloat(normalizedGrade2), parseFloat(normalizedGrade3));
          console.log(styleResult, `The average of the grades ${normalizedGrade1}, ${normalizedGrade2}, ${normalizedGrade3} is: ${average.toFixed(2)}`);
          console.log('__________________________________________________\n');
          displayOptions();
        } else {
          // If the data is invalid, call the same function for new input!
          console.log(styleError, 'Invalid grades! Try again.\n');
          executeCalculateAverage();
        }
      });
    });
  });
}

// Function to get data and execute the investment calculation function!
function executeCalculateInterest() {
  console.log('\n');
  console.log(styleOption, '============= Calculate Investment ==============');
  rd.question('Enter the initial capital: ', (capital) => {
    rd.question('Enter the interest rate (in %): ', (rate) => {
      rd.question('Enter the investment time (in months): ', (months) => {
        const normalizedCapital = parseFloat(capital.replace(',', '.'));
        const normalizedRate = parseFloat(rate.replace(',', '.'));
        // Check if the provided data is valid!
        if (!isNaN(normalizedCapital) && !isNaN(normalizedRate) && !isNaN(months)) {
          // Call the function to perform the calculation!
          const result = calculateInterest(parseFloat(normalizedCapital), parseFloat(normalizedRate), parseInt(months));
          console.log(styleResult, `The final value of the investment is: ${result.toFixed(2)}`);
          console.log('__________________________________________________\n');
          displayOptions();
        } else {
          // If the data is invalid, call the same function for new input!
          console.log(styleError, 'Invalid data! Try again.\n');
          executeCalculateInterest();
        }
      });
    });
  });
}

displayHeader();
displayOptions();
