// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }

// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
var buttonColours = ["blue", "green", "red", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
document.addEventListener("keypress", function (event) {
  document.querySelector("#level-title").innerHTML = "Level " + level;
  var started = false;
  if (!started) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.querySelector("#level-title").innerHTML = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}
document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function () {
    userClickedPattern.push(this.id.toString());
    animatePress(this);
    playSound(this.id.toString());
    checkAnswer(userClickedPattern.length - 1);
  });
});
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function(){
        nextSequence();
      },1000)
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    document.querySelector("#level-title").innerHTML = "Game Over, Press Any Key to Restart";
    startOver();
    setTimeout(function(){
      document.body.classList.remove("game-over");
    },200)
  }
}

function playSound(name) {
  audio = new Audio("/sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  currentColor.classList.add("pressed");
  setTimeout(function () {
    currentColor.classList.remove("pressed");
  }, 100);
}
function startOver(){
  level=0;
  gamePattern=[];
  started=false;

}

