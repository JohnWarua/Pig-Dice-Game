var throwdice = function () {
  return Math.floor(6*Math.random ()) + 1;
}

function Player (turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn =0;
}

Player.prototype.rollone = function () {
  if (this.roll===1) {
    this.tempscore = 0;
    this.changeturn ();
  }
  else {
    this.tempscore += this.roll
  }
}

Player.prototype.hold = function (){
  this.totalscore += this.tempscore;
  this.tempscore =o;
  this.changeturn ();
}

Player.prototype.changeturn = function (){
  if(this.roll===1) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
}

Player.prototype.winnerCheck = function () {
  if(this.totalscore>=100) {
    alert(" You are the winner!!");
  }
}
$(document).ready(function() {
  $(".btn").click(function() {
    var player1 = prompt("Enter Your Name...");
    $(".names").text(player1);
    var player2 = prompt("Enter Your Name...")
    $(".names2").text(player2);
      $(".Gameplay").show();
 });
  $(".Reset").click(function() {
    $(".Gameplay").hide();
  });

  $("button.roller").click(function(event) {
    rbtn1 = throwdice() ;
    $(".rounder").text(rbtn1);
    player1.rollone ()
    $(".rs1").text(player1.tempscore);
  });

  $("button.roller2").click(function(event) {
    rbtn2 = throwdice() ;
    $(".rounder2").text(rbtn2);
    player2.rollone ()
    $(".rs2").text(player2.tempscore);
  });
  $("button.holder").click(function(event) {
    player1.hold();
    $(".ts1").text(player1.totalscore);
    $(".rs1").empty();
    $(".rounder").empty();
    player.winnerCheck();
  });
});
