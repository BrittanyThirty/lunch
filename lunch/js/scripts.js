
$(document).ready(function(){
  //Default palyer's turn to X
  var turn="X"
  //Array stores values to check for a winner
  var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  //Default computer turn
  var computerTurn="O";
  //Keep track if it is the computerturn
  var gameOn= false;

  //Change player's turn to X and computer's to 0
  $('turn X').click(function(){
    turn = "0";
    computersTurn="X";
    $("turnX").removeClass("btn-primary");
      $("turnO").addClass("btn-primary");
  });
  function Playerturn(turn, id){
    var spotTaken= $$('#'+id).text();
    if(spotTaken==="#"){
      turns[id]= turn;
      $("#"+id).text(turn);
    }
  }

  //when you tic on the tic class
  $(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
   }
});
