$(document).ready(function(){
  var player1 = new Player();
  var player2 = new Player();
  var newGame = new Game(player1, player2);

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
      $("#topLeft").append('<h1>' + player1.mark + '</h1>');
      newGame.array[0] = true;
      if()
      aiChoose(newGame);
    }

  });
  $("#topCenter").click(function(){
    if(newGame.array[1] === false){
      $("#topCenter").empty();
      $("#topCenter").append('<h1>' + player1.mark + '</h1>');
      newGame.array[1] = true;
      aiChoose(newGame);
    }
  });
  $("#topRight").click(function(){
    if(newGame.array[2] === false){
      $("#topRight").empty();
      $("#topRight").append('<h1>' + player1.mark + '</h1>');
      newGame.array[2] = true;
      aiChoose(newGame);
    }
  });
  $("#middleLeft").click(function(){
    if(newGame.array[3] === false){
      $("#middleLeft").empty();
      $("#middleLeft").append('<h1>' + player1.mark + '</h1>');
      newGame.array[3] = true;
      aiChoose(newGame);
    }
  });
  $("#middleCenter").click(function(){
    if(newGame.array[4] === false){
      $("#middleCenter").empty();
      $("#middleCenter").append('<h1>' + player1.mark + '</h1>');
      newGame.array[4] = true;
      aiChoose(newGame);
    }
  });
  $("#middleRight").click(function(){
    if(newGame.array[5] === false){
      $("#middleRight").empty();
      $("#middleRight").append('<h1>' + player1.mark + '</h1>');
      newGame.array[5] = true;
      aiChoose(newGame);
    }
  });
  $("#bottomLeft").click(function(){
    if(newGame.array[6] === false){
      $("#bottomLeft").empty();
      $("#bottomLeft").append('<h1>' + player1.mark + '</h1>');
      newGame.array[6] = true;
      aiChoose(newGame);
    }
  });
  $("#bottomCenter").click(function(){
    if(newGame.array[7] === false){
      $("#bottomCenter").empty();
      $("#bottomCenter").append('<h1>' + player1.mark + '</h1>');
      newGame.array[7] = true;
      aiChoose(newGame);
    }

  });
  $("#bottomRight").click(function(){
    if(newGame.array[8] === false){
      $("#bottomRight").empty();
      $("#bottomRight").append('<h1>' + player1.mark + '</h1>');
      newGame.array[8] = true;
      var test = aiChoose(newGame);
    }

  });
  return false;
});

function Player (){
  this.mark = "X";

}

var aiChoose = function(newGame){
  for(var i = 0; i < 30; i++){
    var random = ((Math.floor(Math.random() * 8) + 1));
    console.log(random);
    if(newGame.array[random] === false){
      var number = newGame.board[random];
      $(newGame.board[random]).empty();
      $(number).append('<h1>' + 'O' + '</h1>');
      $(newGame.array[random] = true);
      return 0;
    }
  }
}
function Game (player1, player2){
  this.player1 = "X";
  this.player2 = "O";
  this.board = ["#topLeft", "#topCenter", "#topRight", "#middleLeft", "#middleCenter", "#middleRight", "#bottomLeft", "#bottomCenter", "#bottomRight"]
  this.array = ["tlBool", "tcBool", "trBool", "mlBool", "mcBool", "mrBool", "blBool", "bcBool", "brBool"]







}
