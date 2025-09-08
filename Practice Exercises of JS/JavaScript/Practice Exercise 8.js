// Question 1
let arr = [5, 6];
arr.push(7);
arr.unshift(4);
console.log(arr);

// Question 2
function getElement(arr2, position) {
    return arr2[position - 1];
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getElement(arr2, 8));

// Question 3
function arrCopy(arr3) {
    return arr3.slice(0, arr3.length);
}
let arr3 = [4, 5, 6, 7];
let copy = arrCopy(arr3);
copy[0] = null;
console.log(arr3);
console.log(copy);

// Question 4 & 5
function isPrime(num) {
    for (let i = 2; i < num; i ++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
} 
let num = 2;
let i = 0;
while (true) {
    if (isPrime(num)) {
        console.log(num);
        i ++; 
        if (i >= 5) {
            break;
        }
    }
    num ++;
}

// Question 6
for (let i = 10; i > 0; i--) {
    console.log(i)
}

// Question 7
let nums = [1, -6, 5, 7, -98];
for (let i = 0; i < nums.length; i ++) {
    if (nums[i] < 0) continue;
    console.log(nums[i]);
}

// Question 8
let arr4 = ['KG', 'Coding', 'JS', 'Course'];
let result = '';
for (let i = 0; i < arr4.length; i ++) {
    result += arr4[i] + ' ';
}
console.log(result);

