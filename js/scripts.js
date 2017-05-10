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

  $("#restart").click(function(){

  });




  $("#topLeft").click(function(){
    if(newGame.array[0] === false){
      $("#topLeft").empty();
      //if(playerone turn)
      $("#topLeft").append('<h1>' + newGame.player1 + '</h1>');

      //if(playertwo turn
      // $("#topLeft").append('<h1>' + player2.mark + '</h1>');
      gameTime += 1;
      newGame.array[0] = true;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }

  });
  $("#topCenter").click(function(){
    if(newGame.array[1] === false){
      $("#topCenter").empty();
      $("#topCenter").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[1] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }
  });
  $("#topRight").click(function(){
    if(newGame.array[2] === false){
      $("#topRight").empty();
      $("#topRight").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[2] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }
  });
  $("#middleLeft").click(function(){
    if(newGame.array[3] === false){
      $("#middleLeft").empty();
      $("#middleLeft").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[3] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }
  });
  $("#middleCenter").click(function(){
    if(newGame.array[4] === false){
      $("#middleCenter").empty();
      $("#middleCenter").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[4] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }
  });
  $("#middleRight").click(function(){
    if(newGame.array[5] === false){
      $("#middleRight").empty();
      $("#middleRight").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[5] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }
  });
  $("#bottomLeft").click(function(){
    if(newGame.array[6] === false){
      $("#bottomLeft").empty();
      $("#bottomLeft").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[6] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }
  });
  $("#bottomCenter").click(function(){
    if(newGame.array[7] === false){
      $("#bottomCenter").empty();
      $("#bottomCenter").append('<h1>' + newGame.player1 + '</h1>');

      newGame.array[7] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
    }

  });
  $("#bottomRight").click(function(){
    if(newGame.array[8] === false){
      $("#bottomRight").empty();
      $("#bottomRight").append('<h1>' + newGame.player1 + '</h1>');
      newGame.array[8] = true;
      gameTime += 1;
      gameTime = aiChoose(newGame, gameTime);
      if(gameTime > 8){
        gameOver();
      }
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
    gameOver();
  }
}
function Game (){
  this.player1 = "X";
  this.player2 = "O";
  this.board = ["#topLeft", "#topCenter", "#topRight", "#middleLeft", "#middleCenter", "#middleRight", "#bottomLeft", "#bottomCenter", "#bottomRight"]
  this.array = ["tlBool", "tcBool", "trBool", "mlBool", "mcBool", "mrBool", "blBool", "bcBool", "brBool"];
  //this.gameTime = 0;
}

var gameOver = function(){
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
