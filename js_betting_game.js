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

$(document).ready(function () {

  $('#reset').hide();

  $('#btn').click(bettingGame);

  var funds = 100;

  function bettingGame() {

    var bet = $('#amount').val();
    var answer = parseInt($('#guess').val());
    var random = Math.floor((Math.random() * 10) + 1);
    var feedback = $('#feedback')
    var totalFunds = $('#totalFunds')

    if (answer === random) {
      console.log(random);
      feedback.text("Well done!");
      funds += bet * 2;
      totalFunds.text(funds)
    }
    else if (answer === random + 1 || answer === random - 1) {
      console.log(random);
      feedback.text("Nearly!");
      totalFunds.text(funds)
    }
    else {
      console.log(random);

      feedback.text("You lose!");
      funds -= bet;
      totalFunds.text(funds)

      if (funds <= 0) {
        funds = 0;
        totalFunds.text(funds);
        $('#btn').hide();
        $('#reset').show();
        alert("You have run out of funds! You can't place any bets.");
      }
    }
  }

  function resetCode(){
    funds = 100;
    $('#totalFunds').text(funds);
    $('#btn').show();
    $('#reset').hide();
  }

  $("#reset").click(resetCode);

});



