$(document).ready(function(){
  var newGame = new Game();

  newGame.array[0] = false;
  newGame.array[1] = false;
  newGame.array[2] = false;
  newGame.array[3] = false;
  newGame.array[4] = false;
  newGame.array[5] = false;
  newGame.array[6] = false;
  newGame.array[7] = false;
  newGame.array[8] = false;
  newGame.playerOrAi = false;
  var test = 0;

  $("#playerOneButton").click(function(){
    $("#startScreen").hide();
    $("#row").show();
  });

  $("#playerTwoButton").click(function(){
    $("#startScreen").hide();
    $("#row").show();
    newGame.playerOrAi = true;
  })

  $("#topLeft").click(function(){
    if(newGame.array[0] === false){
      test = 0;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
        winner(newGame);
    }
  });
  $("#topCenter").click(function(){
    if(newGame.array[1] === false){
      test = 1;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#topRight").click(function(){
    if(newGame.array[2] === false){
      test = 2;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#middleLeft").click(function(){
    if(newGame.array[3] === false){
      test = 3;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#middleCenter").click(function(){
    if(newGame.array[4] === false){
      test = 4;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#middleRight").click(function(){
    if(newGame.array[5] === false){
      test = 5;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
    winner(newGame);
    }
  });
  $("#bottomLeft").click(function(){
    if(newGame.array[6] === false){
      test = 6;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#bottomCenter").click(function(){
    if(newGame.array[7] === false){
      test = 7;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#bottomRight").click(function(){
    if(newGame.array[8] === false){
      test = 8;
      newGame = newGame.turnOrder(newGame, test);
      if(newGame.gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  return false;
});
var gameOver = function(newGame){
  $(".row").hide();
  $("#gameOver").append('<h1>' + "GAME OVER" + '</h1>');
  $("#gameOver").append("Play again?");
  // document.getElementById("#gameOver").click = function(){
  //   restart(newGame);
  // }
  $("#gameOver").append("<button type = 'btn' id = 'new' onclick='myFunction()'reload page</button>");
}

var restart = function(newGame){
  $("#gameOver").hide();
  this.board.forEach(function(){
    this.append('<img src="img/blank.jpg" alt="blankspace" />');
    this.show();
  });
}

Game.prototype.turnOrder = function(newGame, test){
  $(newGame.board[test]).empty();
  console.log(newGame.gameTime);
  if(newGame.gameTime === 0 || newGame.gameTime % 2 === 0){
    $(newGame.board[test]).append('<h1>' + newGame.player1 + '</h1>');
    newGame.array[test] = true;
    newGame.win[test] = "x";
    newGame.gameTime += 1;
    if(newGame.playerOrAi === false){
      newGame = aiChoose(newGame, test);
    }
  }
  else if(newGame.gameTime % 2 !== 0){
    $(newGame.board[test]).append('<h1>' + 'O' + '</h1>');
    newGame.array[test] = true;
    newGame.win[test] = "o";
    newGame.gameTime += 1;
  }
  return newGame;
}

var aiChoose = function(newGame){
  for(var i = 0; i < 30; i++){
    var random = ((Math.floor(Math.random() * 8) + 1));
    if(newGame.array[random] === false){
      //console.log("TEST IS " + test);
      var number = newGame.board[random];
      $(newGame.board[random]).empty();
      $(number).append('<h1>' + 'O' + '</h1>');
      $(newGame.array[random] = true);
      newGame.gameTime += 1;
      newGame.win[random] = "o";
      console.log(newGame.win);
      //winner(newGame);
      return newGame;
    }
  }
  if(newGame.gameTime > 8){
    gameOver(newGame);
  }
}
function Game (){
  this.player1 = "X";
  this.player2 = "O";
  this.board = ["#topLeft", "#topCenter", "#topRight", "#middleLeft", "#middleCenter", "#middleRight", "#bottomLeft", "#bottomCenter", "#bottomRight"]
  this.array = ["tlBool", "tcBool", "trBool", "mlBool", "mcBool", "mrBool", "blBool", "bcBool", "brBool"];
  this.win = ["", "", "", "", "", "", "", "", ""];
  this.playerOrAi;
  this.gameTime = 0;
}


function myFunction() {
    location.reload();
};

var winner = function(newGame) {
  if (newGame.win[0] === newGame.win[1] && newGame.win[0] === newGame.win[2]){
    if(newGame.win[0] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[0] === "o"){
      if(playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[3] === newGame.win[4] && newGame.win[3] === newGame.win[5]){
    if(newGame.win[3] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[3] === "o"){
      if(playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[6] === newGame.win[7] && newGame.win[6] === newGame.win[8]){
    if(newGame.win[6] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[6] === "o"){
      if(playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[0] === newGame.win[3] && newGame.win[0] === newGame.win[6]){
    if(newGame.win[0] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[0] === "o"){
      if(playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[1] === newGame.win[4] && newGame.win[1] === newGame.win[7]){
    if(newGame.win[1] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[1] === "o"){
      if(newGame.playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[2] === newGame.win[5] && newGame.win[2] === newGame.win[8]){
    if(newGame.win[2] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[2] === "o"){
      if(playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[0] === newGame.win[4] && newGame.win[0] === newGame.win[8]){
    if(newGame.win[0] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[0] === "o"){
      if(newGame.playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
  if (newGame.win[2] === newGame.win[4] && newGame.win[2] === newGame.win[6]){
    if(newGame.win[2] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
    else if(newGame.win[2] === "o"){
      if(newGame.playerOrAi === false){
        alert("COMPUTER WINS!!!!!");
      }
      else{
        alert("Player 2 Wins!!!!!");
      }
      gameOver(newGame);
    }
  }
};
