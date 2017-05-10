$(document).ready(function(){
  var newGame = new Game();
  var gameTime = 0;

  newGame.array[0] = false;
  newGame.array[1] = false;
  newGame.array[2] = false;
  newGame.array[3] = false;
  newGame.array[4] = false;
  newGame.array[5] = false;
  newGame.array[6] = false;
  newGame.array[7] = false;
  newGame.array[8] = false;

  $("#topLeft").click(function(){
    if(newGame.array[0] === false){
      $("#topLeft").empty();
      //if(playerone turn)
      $("#topLeft").append('<h1>' + newGame.player1 + '</h1>');

      gameTime += 1;
      newGame.array[0] = true;
      newGame.win[0] = "x";
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
        winner(newGame);

    }

  });
  $("#topCenter").click(function(){
    if(newGame.array[1] === false){
      $("#topCenter").empty();
      $("#topCenter").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[1] = true;
      newGame.win[1] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#topRight").click(function(){
    if(newGame.array[2] === false){
      $("#topRight").empty();
      $("#topRight").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[2] = true;
      newGame.win[2] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#middleLeft").click(function(){
    if(newGame.array[3] === false){
      $("#middleLeft").empty();
      $("#middleLeft").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[3] = true;
      newGame.win[3] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#middleCenter").click(function(){
    if(newGame.array[4] === false){
      $("#middleCenter").empty();
      $("#middleCenter").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[4] = true;
      newGame.win[4] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#middleRight").click(function(){
    if(newGame.array[5] === false){
      $("#middleRight").empty();
      $("#middleRight").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[5] = true;
      newGame.win[5] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    winner(newGame);
    }
  });
  $("#bottomLeft").click(function(){
    if(newGame.array[6] === false){
      $("#bottomLeft").empty();
      $("#bottomLeft").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[6] = true;
      newGame.win[6] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });
  $("#bottomCenter").click(function(){
    if(newGame.array[7] === false){
      $("#bottomCenter").empty();
      $("#bottomCenter").append('<h1>' + newGame.player1 + '</h1>');

      newGame.array[7] = true;
      newGame.win[7] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }

  });
  $("#bottomRight").click(function(){
    if(newGame.array[8] === false){
      $("#bottomRight").empty();
      $("#bottomRight").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[8] = true;
      newGame.win[8] = "x";
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
      winner(newGame);
    }
  });

  return false;
});

var aiChoose = function(newGame, gameTime){
  for(var i = 0; i < 30; i++){
    var random = ((Math.floor(Math.random() * 8) + 1));
    if(newGame.array[random] === false){
      var number = newGame.board[random];
      $(newGame.board[random]).empty();
      $(number).append('<h1>' + 'O' + '</h1>');
      $(newGame.array[random] = true);
      console.log(gameTime);

      return gameTime + 1;
    }
  }
  if(gameTime > 8){
    gameOver(newGame);
  }
}
function Game (){
  this.player1 = "X";
  this.player2 = "O";
  this.board = ["#topLeft", "#topCenter", "#topRight", "#middleLeft", "#middleCenter", "#middleRight", "#bottomLeft", "#bottomCenter", "#bottomRight"]
  this.array = ["tlBool", "tcBool", "trBool", "mlBool", "mcBool", "mrBool", "blBool", "bcBool", "brBool"];
  this.win = ["", "", "", "", "", "", "", "", ""];
}

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

function myFunction() {
    location.reload();
};

var winner = function(newGame) {
  if (newGame.win[0] === newGame.win[1] && newGame.win[0] === newGame.win[2]){
    if(newGame.win[0] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[3] === newGame.win[4] && newGame.win[3] === newGame.win[5]){
    if(newGame.win[3] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[6] === newGame.win[7] && newGame.win[6] === newGame.win[8]){
    if(newGame.win[6] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[0] === newGame.win[3] && newGame.win[0] === newGame.win[6]){
    if(newGame.win[0] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[1] === newGame.win[4] && newGame.win[1] === newGame.win[7]){
    if(newGame.win[1] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[2] === newGame.win[5] && newGame.win[2] === newGame.win[8]){
    if(newGame.win[2] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[0] === newGame.win[4] && newGame.win[0] === newGame.win[8]){
    if(newGame.win[0] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
  if (newGame.win[2] === newGame.win[4] && newGame.win[2] === newGame.win[6]){
    if(newGame.win[2] === "x"){
      alert("Player 1 Wins!!!!!");
      gameOver(newGame);
    }
  }
};
