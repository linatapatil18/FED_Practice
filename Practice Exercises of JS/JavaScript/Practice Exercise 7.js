// Question 1
function doGreeting(personName = 'Dear') {
  let date = new Date();
  let hours = date.getHours();
  let heading = document.querySelector("#greeting");
  if (hours >= 5 && hours < 12) {
    heading.innerText = `Good Morning, ${personName}!`;
  } else if (hours >= 12 && hours < 17) {
    heading.innerText = `Good Afternoon, ${personName}!`;
  } else if (hours >= 17 && hours < 21) {
    heading.innerText = `Good Evening, ${personName}!`;
  } else if (hours >= 21 && hours < 5) {
    heading.innerText = `Good Night, ${personName}!`;
  } else {
    heading.innerText = "Hello!";
  }
}
// Question 2
doGreeting('Linata');

// Question 3
let noOfTimesClicked = localStorage.getItem('noOfTimesClicked') || 0;

function buttonPressed() {
  noOfTimesClicked++;
  localStorage.setItem('noOfTimesClicked', noOfTimesClicked);
  updateButton();
}

function updateButton() {
  let button = document.querySelector('#my-button');
  if (noOfTimesClicked % 2  === 0) {
    button.classList.remove('js-odd');
    button.classList.add('js-even');
  } else {
    button.classList.remove('js-even');
    button.classList.add('js-odd');
  }
  button.innerText = noOfTimesClicked;
}
updateButton();