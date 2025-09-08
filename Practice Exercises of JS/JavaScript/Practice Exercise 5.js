// Question 1
function isOdd(number) {
  let rem = number % 2;
  let isOdd = rem == 1;
  return isOdd;
}
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(0));
console.log(isOdd(9999));

// Question 2
function larger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return 'Both are equal';
  }
}
console.log(larger(4, 5));
console.log(larger(4, 4));
console.log(larger(3, 4));
console.log(larger(7, 4));

// Question 3
function toFahrenheit(celsiusValue) {
  return (9 / 5) * celsiusValue + 32;
}
console.log(toFahrenheit(38));
console.log(toFahrenheit(0));
console.log(toFahrenheit(100));
