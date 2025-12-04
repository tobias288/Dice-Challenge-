// The first dice code
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var selectingImage1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImage1);

// The second dice code
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var selectingImage2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImage2);

if (randomImage1 > randomImage2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomImage2 > randomImage1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
