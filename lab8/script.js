
choicePara = document.getElementById("choicePara");
const choiceInput = document.getElementById("choice");


const button = document.getElementById("button");

button.addEventListener("click", play);

function play() {
  var choice = choiceInput.value;
  if (choice == "") {
    choicePara.style.color = "red";
    return;
  }
  else {
    choicePara.style.color = "black";
  }

  var playerChoiceStr = "";
  if (choice == 1) {
    playerChoiceStr = "Rock";
  }
  else if (choice == 2) {
    playerChoiceStr = "Paper";
  }
  else if (choice == 3) {
    playerChoiceStr = "Scissors";
  }
  
  var myChoice = Math.floor(Math.random() * 3) + 1;
  var myChoiceStr = "";
  var result = "";
  if (myChoice == 1) {
    myChoiceStr = "Rock";
    if (choice == 1) {
      result = "Draw";
    } else if (choice == 2) {
      result = "You Won!";
    } else if (choice == 3) {
      result = "You Lost!";
    }
  }
  else if (myChoice == 2) {
    myChoiceStr = "Paper";
    if (choice == 1) {
      result = "You Lost!";
    } else if (choice == 2) {
      result = "Draw";
    } else if (choice == 3) {
      result = "You Won!";
    }
  }
  else if (myChoice == 3) {
    myChoiceStr = "Scissors";
    if (choice == 1) {
      result = "You Won!";
    } else if (choice == 2) {
      result = "You Lost!";
    } else if (choice == 3) {
      result = "Draw";
    }
  }

  var message = "Player choice: " + playerChoiceStr + "<br>Our choice: " + myChoiceStr + "<br>" + result;
  document.body.innerHTML = message;
}