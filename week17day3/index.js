const number = parseInt(prompt('Enter an integer: '));
const limit = parseInt(prompt('Enter the limit : '));

 if (limit) {
    for(let i = 1; i <= limit; i++) {
        let result = i * number;

        console.log(`${number} * ${i} = ${result}`);  
    }
 } else {
    for(let i = 1; i <= 10; i++) {
        let result = i * number;
    
        console.log(`${number} * ${i} = ${result}`);
    }
 }
