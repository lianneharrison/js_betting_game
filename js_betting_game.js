// var funds = 100
// var bet = prompt("How much do you want to bet")
// var answer = prompt("Pick a number between 1 and 10")

// var random = Math.floor((Math.random() * 10) + 1);

// if answer === random
//   console.log("You win!");
//   funds += bet * 2

// else if answer === random + 1 || random - 1
//   console.log("Nearly!");
//   funds += bet

// else 
//   console.log("You lose!");
//   funds -= bet
  
  // var funds = 100;
  // var bet = prompt("How much do you want to bet");
  // var answer = prompt("Pick a number between 1 and 10");
  // var random = Math.floor((Math.random() * 10) + 1);
  // if (answer === random){
  //   alert("Well done!");
  //   funds += bet * 2
  // }
  // else if (answer === random + 1 || random - 1){
  //   alert("Nearly!");
  //   funds += bet
  // }
  // else {
  //   alert("You lose!");
  //   funds -= bet
  // }
  //psuedocode above


function bettingGame() {

  var funds = 100;

  while (funds > 0) {

    var bet = prompt("How much do you want to bet, $5 or $10?");
    var answer = parseInt(prompt("Pick a number between 1 and 10"));
    var random = Math.floor((Math.random() * 10) + 1);

    if (answer === random){
      console.log(random);
      alert("Well done!");
      funds += bet * 2;
      console.log(funds)
    }
    else if (answer === random + 1 || answer === random - 1){
      console.log(random);
      alert("Nearly!");
      alert(funds)
    }
    else {
      console.log(random);
      alert("You lose!");
      funds -= bet;
      alert(funds)
    }
  }
}




