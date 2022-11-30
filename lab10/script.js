
/* Create an application that generates an array of 5 random numbers 1-10. The user should then guess a number and the app will tell them how many time that number exists within the array. */

const button = document.getElementById("button");
button.addEventListener("click", play);

function play() {
  /* hide the button */
  button.hidden = true;

  /* create array */
  let arr=[];
  for (i = 0; i<5; i++) {
    arr[i] = Math.floor(Math.random() * 10) + 1; /* 10 times as Math.random returns 0 to 1. Math.floor is used to discard decimal portion */
  }

  var playerChoice = prompt("Pick one number between 1 - 10:");
  
  /* counts how many times the number is in the array */
  var count=0; 
  for (i = 0; i<5; i++) {
    if (arr[i] == playerChoice) {
      count++;
    }
  }

  /* returns the results on the page */
  var arrayMsg = "[ " + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ', ' + arr[3] + ', ' + arr[4] + ' ]';
  var resultMsg = "Your number " + playerChoice + " occurs " + count + " times in the array.";
  arrayDisplay = document.getElementById("array");
  arrayDisplay.hidden = false;
  arrayDisplay.textContent = arrayMsg;
  resultDisplay = document.getElementById("results");
  resultDisplay.hidden = false;
  resultDisplay.textContent = resultMsg;
}