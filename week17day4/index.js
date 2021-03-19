// Question one
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${number} is a prime number`);
    } else {
        alert(`${number} is a not prime number`);
    }
}

else {
    alert("The number is not a prime number.");
}


//Question two 
const string = prompt('Enter a string: ');

function checkPalindrome(string) {

    const ar = string.split(''); 

    const reverseAr = ar.reverse();

    const reverseString = reverseAr.join('');

    if(string == reverseString) {
        alert('It is a palindrome');
    }
    else {
        alert('It is not a palindrome');
    }
}

checkPalindrome(string);



//question 3

let sum = 0;
const number = parseInt(prompt('Enter a three-digit positive integer: '));

let temp = number;
 
while (temp > 0) {

    let remainder = temp % 10;  

    sum += remainder * remainder * remainder; 
    

    temp = parseInt(temp / 10);  
}

if (sum == number) {
    alert(`${number} is an Armstrong number`);
}
else {
    alert(`${number} is not an Armstrong number.`);
}


