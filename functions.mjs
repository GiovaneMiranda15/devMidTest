const accents = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u',
    'â': 'a',
    'ê': 'e',
    'ô': 'o',
    'û': 'u',
    'ã': 'a',
    'õ': 'o',
}

// Function to perform basic calculations between two numbers.
export function calculator(operator, number1, number2) {
    // Using a switch to check which operation to perform.
    switch (operator) {
        case '+':
            return (number1 + number2);
        case '-':
            return (number1 - number2);
        case '*':
            return (number1 * number2);
        case '/':
            return (number1 / number2);
        default:
            return ('Invalid operator!');
    };
}

// Function to check if a number is prime.
export function isPrime(number) {
    // Negative numbers, 0, and 1 are considered non-prime.
    if (number <= 1) {
        return `Number ${number} is not prime!`;
    }
    // Loop to calculate the remainder of the number divided by 2 up to its square root, avoiding unnecessary repetition.
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return `Number ${number} is not prime!`;
    }
    return `Number ${number} is prime!`;
}

// Function to calculate the factorial of a number.
export function factorial(number) {
    if (number == 0 || number == 1) {
        return 1;
    } else {
        // Recursive call of the function, an alternative way to calculate the factorial.
        return number * factorial(number - 1);
    }
}

// Function to check if a word or phrase is a palindrome.
export function isPalindrome(word) {
    let normalizedWord = word.replace(/\s/g, '').toLowerCase();
    // Remove whitespaces and convert all characters to lowercase.
    return word.replace(/\s/g, '').toLowerCase() === normalizedWord.split('').reverse().join('')
        ? `The word ${word} is a palindrome!`
        : `The word ${word} is not a palindrome!`;
}

// Function to generate the multiplication table of a number.
export function table(number) {
    let newTable = new Array();
    for (let i = 1; i <= 10; i++) {
        let value = number * i;
        newTable.push(`${number} x ${i} = ${value}`);
    }
    return newTable;
}

// Function to count the vowels in a word.
export function vowelCounter(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Replace special characters (vowels with accents)!
    const normalizedWord = word.toLowerCase().replace(/[áéíóúâêôûãõ]/gi, (match) => accents[match]);
    let count = 0;
    for (let i = 0; i < normalizedWord.length; i++) {
        const char = normalizedWord.charAt(i);
        // Iterate through the characters of the word and check if each one is a vowel.
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Function to calculate the average of three grades.
export function calculateAverage(grade1, grade2, grade3) {
    const value = (grade1 + grade2 + grade3) / 3;
    return value;
}

// Function to calculate the final value of an investment.
export function calculateInterest(capital, rate, months) {
    // The calculation is done in the standard way where interest is calculated based on the number of months.
    const interest = capital * Math.pow((1 + (rate / 100)), months);
    return interest;
}
