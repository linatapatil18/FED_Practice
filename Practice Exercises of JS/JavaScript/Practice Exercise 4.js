let age = 70; 
let gender = 'female'; // possible values are 'male' and 'female'
let finalDiscount;
if (age <= 5) {
    finalDiscount = 100;
} else if (age > 65) {
    finalDiscount = 70;
} else if (gender === 'female' || age <= 8) {
    finalDiscount = 50;
}  else {
    finalDiscount = 0;
}
console.log(`Your final discount is ${finalDiscount}%`);