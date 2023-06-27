// Initialize variables
let userClickedPattern = [];
let gamePattern = [];
let color = ['red', 'blue', 'green', 'yellow'];
let level = 0;
let gameNotOver = true;

const genSeq = () => {
  level++;
  $('#level-title').text("Level " + level);
  userClickedPattern = [];

  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = color[randomNumber];
  gamePattern.push(randomColor);

  console.log("Game Pattern: " + gamePattern);
  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
};

const playSound = (name) => {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

const userPlay = () => {
  console.log(level);
  console.log('Entered user play');
  $('.btn').click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("User clicked pattern: " + userClickedPattern);
    $("#" + userChosenColour).addClass('pressed');
    setTimeout(() => {
      $("#" + userChosenColour).removeClass('pressed');
    }, 100);

    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
};

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false; // Arrays have different lengths, they are not equal
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Found a difference in values, arrays are not equal
    }
  }

  return true; // All elements are equal, arrays are equal
};

const startOver = () => {
  userClickedPattern = [];
  level = 0;
  gamePattern = [];
  gameNotOver = true;

};

const checkAnswer = (currentLevel) => {

  console.log(currentLevel)
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        genSeq();
      }, 1000);
    }
  } else {
    playSound("wrong");
    gameNotOver = false;
    level = 0;
    $('#level-title').text("Game over, Press Any Key to start again!");
    startOver();
    // gameStart();
  }
};
$(document).keypress((event) => {
  if (!gameNotOver) {
    return;
  }

  if (event.key === 'a' || event.key === 'A') {

    genSeq();
    userPlay();
  }
});
