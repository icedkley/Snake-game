const game_display = document.querySelector(".game-display");
const snake = document.querySelector(".snake");
let scoreCount = document.querySelector(".score_count");
let snakeXposition = 0;
let snakeYPosition = 0;
let food = "";
let direction = "";
let foodXposition = "";
let foodYposition = "";
let fps = 60;
let foodOnBoard = 0;
let score = 0;

window.addEventListener("keydown", move);

function move(event) {
  if (event.key == "ArrowRight") {
    snakeXposition += 25;
    snake.style.left = snakeXposition + "px";
    direction = "right";
  } else if (event.key == "ArrowLeft") {
    snakeXposition -= 25;
    snake.style.left = snakeXposition + "px";
    direction = "left";
  } else if (event.key == "ArrowDown") {
    snakeYPosition += 25;
    snake.style.top = snakeYPosition + "px";
    direction = "down";
  } else if (event.key == "ArrowUp") {
    snakeYPosition -= 25;
    snake.style.top = snakeYPosition + "px";
    direction = "up";
  }
}

function checkOutOfBound() {
  if (snakeXposition > 450) {
    snakeXposition = 0;
    snake.style.left = snakeXposition + "px";
  } else if (snakeXposition < 0) {
    snakeXposition = 450;
    snake.style.left = snakeXposition + "px";
  }

  if (snakeYPosition > 450) {
    snakeYPosition = 0;
    snake.style.top = snakeYPosition + "px";
  } else if (snakeYPosition < 0) {
    snakeYPosition = 450;
    snake.style.top = snakeYPosition + "px";
  }
}

function movePerSecond() {
  if (direction == "right") {
    snakeXposition += 25;
    snake.style.left = snakeXposition + "px";
  } else if (direction == "left") {
    snakeXposition -= 25;
    snake.style.left = snakeXposition + "px";
  } else if (direction == "up") {
    snakeYPosition -= 25;
    snake.style.top = snakeYPosition + "px";
  } else if (direction == "down") {
    snakeYPosition += 25;
    snake.style.top = snakeYPosition + "px";
  }
}

function spawnFood() {
  let min = 25;
  let max = 500;

  let xPos = Math.floor(Math.random() * (max / min)) * min;
  let yPos = Math.floor(Math.random() * (max / min)) * min;

  foodXposition = xPos;
  foodYposition = yPos;

  console.log(xPos, yPos);

  let foodDiv = document.createElement("div");
  foodDiv.className = "food";
  foodDiv.style.left = xPos + "px";
  foodDiv.style.top = yPos + "px";

  food = foodDiv;
  game_display.append(food);
  foodOnBoard = 1;
}

function detectCollision() {
  if (snakeXposition == foodXposition && snakeYPosition == foodYposition) {
    food.remove();
    foodOnBoard = 0;
    score += 25;
    scoreCount.innerHTML = score;
  } else if (
    Math.abs(snakeXposition - foodXposition) == 25 &&
    snakeYPosition == foodYposition
  ) {
    food.remove();
    foodOnBoard = 0;
    score += 25;
    scoreCount.innerHTML = score;
  } else if (
    Math.abs(snakeYPosition - foodYposition) == 25 &&
    snakeXposition == foodXposition
  ) {
    food.remove();
    foodOnBoard = 0;
    score += 25;
    scoreCount.innerHTML = score;
  }
}
setInterval(() => {
  movePerSecond();
  checkOutOfBound();

  if (foodOnBoard == 0) {
    spawnFood();
  }

  // spawnFood();
  detectCollision();
  let scoreCount = document.querySelector(".score_count");
}, fps);

spawnFood();
