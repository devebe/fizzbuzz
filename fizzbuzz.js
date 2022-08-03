let answer = parseInt(prompt('Enter a number'));

for (let i = 1; i <= answer; i++) {
    let result = 
    (i % 3 === 0 && i % 5 ===0) ? console.log('FizzBuzz'):
    (i % 3 === 0) ? console.log('Fizz'):
    (i % 5 === 0) ? console.log('Buzz'):
    console.log(i);
}