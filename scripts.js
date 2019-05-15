function search(){
  var john = Math.floor(Math.random()*6)+1;
  return john;
}
function Gamer(){
  this.total = 0;
  this.sum = 0;
}
player1 = new Gamer();
player2 = new Gamer();


Gamer.prototype.rounds = function(){
  var guess = search();
  if (guess ===1){
    this.sum = 0;
    alert("You rolled a 1,Next player please!!!");
  }
  else {
    this.sum += guess;
  }
  return guess;
}

Gamer.prototype.wait = function(){
  this.total += this.sum;
  this.sum = 0;
  return this.total;
}

$(document).ready(function() {
  $(".btn").click(function() {
    var player1 = prompt("Enter Your Name...");
    $(".names").text(player1);
    var player2 = prompt("Enter Your Name...")
    $(".names2").text(player2);
      $(".Gameplay").show();
 });



  $(".roller").click(function() {
    $(".rounder").text(player1.rounds());
    $(".rs1").text(player1.sum);
  });

  $(".roller2").click(function() {
  $(".rounder2").text(player2.rounds());
    $(".rs2").text(player2.sum)
  });



  $("button.holder").click(function() {
    $(".ts1").text(player1.wait());
    alert("Next Player Turn please!!!");
  });
  $("button.holder2").click(function() {
    $(".ts2").text(player2.wait());
    alert("Next Player turn please!!!");
  });
});
