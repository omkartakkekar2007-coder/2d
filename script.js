const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const answerInput = document.getElementById("answer");

let lives = 3;
let score = 0;
let speed = 1.5;
let running = false;
let equation = null;

// START GAME
function startGame() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameOverScreen").classList.add("hidden");

  lives = 3;
  score = 0;
  speed = 1.5;
  running = true;

  document.getElementById("lives").innerText = lives;
  document.getElementById("score").innerText = score;

  answerInput.disabled = false;
  answerInput.value = "";
  answerInput.focus();

  newEquation();
  requestAnimationFrame(gameLoop);
}

// RESTART GAME
function restartGame() {
  startGame();
}

// CREATE NEW EQUATION
function newEquation() {
  let ops = ["+", "-", "*", "/"];
  let op = ops[Math.floor(Math.random() * ops.length)];

  let a, b, ans;

  if (op === "/") {
    ans = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    a = ans * b;
  } else {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    if (op === "+") ans = a + b;
    if (op === "-") ans = a - b;
    if (op === "*") ans = a * b;
  }

  equation = {
    text: `${a} ${op} ${b}`,
    answer: ans,
    x: Math.random() * 260 + 80,
    y: 0
  };
}

// GAME LOOP
function gameLoop() {
  if (!running) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff66";
  ctx.font = "26px Courier New";
  ctx.shadowColor = "#00ff66";
  ctx.shadowBlur = 8;

  ctx.fillText(equation.text, equation.x, equation.y);
  equation.y += speed;

  if (equation.y > canvas.height) {
    lives--;
    document.getElementById("lives").innerText = lives;
    newEquation();
  }

  if (lives <= 0) {
    running = false;
    answerInput.disabled = true;
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameOverScreen").classList.remove("hidden");
    return;
  }

  requestAnimationFrame(gameLoop);
}

// INPUT
answerInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && running) {
    if (parseInt(answerInput.value) === equation.answer) {
      score++;
      speed += 0.15;
      document.getElementById("score").innerText = score;
      newEquation();
    }
    answerInput.value = "";
  }
});
