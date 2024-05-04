const game_display = document.querySelector(".game-display");
const snake = document.querySelector(".snake");
const food = document.querySelector(".food");
let snakeXposition = 0;
let snakeYPosition = 0;
let direction = "";
let foodXposition = Math.round(Math.random() * (500 - 1));
let foodYposition = Math.round(Math.random() * (500 - 1));
let foodSpawned = 0;

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

setInterval(() => {
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

  if (foodSpawned == 0) {
    spawnFood();
  }

  checkOutOfBound();
  checkCollision();
}, 500);

function spawnFood() {
  food.style.left = foodXposition + "px";
  food.style.top = foodYposition + "px";
  foodSpawned = 1;
  console.log(foodSpawned);
}

function checkCollision() {
  if (
    Math.abs(snakeXposition - foodXposition) < 25 &&
    Math.abs(snakeYPosition - foodYposition) < 25
  ) {
    food.remove();
    foodSpawned = 0;
    console.log(foodSpawned);
  }
}
