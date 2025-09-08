// Q1;
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 8));

// Q2:
let printGreeting = () => console.log('Hello!');
let runTwice = (inputFunction) => {
  inputFunction();
  inputFunction();
};
runTwice(printGreeting);

// Q3:
function doubleTheSize() {
  let buttonElement = document.querySelector('.btn-subscribe');
  buttonElement.classList.add('js-size-double');
}

// Q4:
let buttonElement = document.querySelector('.btn-subscribe');
buttonElement.addEventListener('click', (event) => {
  setTimeout(doubleTheSize, 2000);
});

// Q5:
let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
arr.forEach((num) => (sum += num));
console.log(sum);

// Q6:
let squares = arr.map((num) => num * num);
console.log(squares);
