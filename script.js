const game_display = document.querySelector(".game-display");
const snake = document.querySelector(".snake");
let snakeXposition = 0;
let snakeYPosition = 0;
let food = "";
let direction = "";
let foodXposition = "";
let foodYposition = "";
let foodCount = 0;
let fps = 60;

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

function spawnFood() {
  let foodSpawn = document.createElement("div");
  foodSpawn.className = "food";
  food = foodSpawn;

  foodX = Math.round(Math.random() * (500 - 1));
  foodY = Math.round(Math.random() * (500 - 1));
  food.style.left = foodXposition + "px";
  food.style.top = foodYposition + "px";

  foodXposition = foodX;
  foodYposition = foodY;

  foodCount++;
  document.querySelector(".game-display").append(foodSpawn);
}

function checkCollision() {
  if (
    Math.abs(snakeXposition - foodXposition) < 50 &&
    Math.abs(snakeYPosition - foodYposition) < 50
  ) {
    console.log("touched");
    food.remove();
    foodCount = 0;
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

setInterval(() => {
  .3. 
  if (foodCount == 0) {
    spawnFood();
  }
  movePerSecond();
  checkCollision();
  checkOutOfBound();

  console.clear();
  console.log(`snake X pos: ${snakeXposition} food X pos: ${foodXposition}`);
  // console.log(foodCount);
}, fps);
