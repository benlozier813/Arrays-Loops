var answers = ["Yes", "Maybe", "No", "Bury your head in the sand instead", "You suck", "Try again later"]

var userInput = prompt("Ask me a question");

while (number != userInput && counter <= 1) {
  if (counter===4) {alert("Goodbye");
  }

  else if (number > userInput) {userInput = prompt("Your guess is too low. Guess again.");}

  else (number < userInput) {userInput = prompt("Your guess is too high. Guess again.");}

  counter++;
};

//need alert message if the counter reaches its limit

alert("That is correct");
function(question){
 Math.floor(Math.random()*answers.length)
 }
