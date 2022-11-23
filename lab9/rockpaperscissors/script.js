
const button = document.getElementById("button");
button.addEventListener("click", play);

function play() {
  button.hidden = true;
  for (i=0; i<3; i++) {
    var choice = prompt("1 - Rock; 2 - Paper; 3 - Scissors?")
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
    else {
      continue;
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
    var message = "Player choice: " + playerChoiceStr + ". Our choice: " + myChoiceStr + ". " + result;
    gameStr = "game" + i;
    game = document.getElementById(gameStr);
    game.hidden = false;
    game.textContent = message;
    if (result == "You Won!")
      break;
  }
}