const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const answerInput = document.getElementById("answer");

let lives, score, speed, equation, running = false;

function startGame() {
  document.getElementById("startScreen").classList.add("hidden");
  answerInput.disabled = false;
  resetGame();
  running = true;
  gameLoop();
}

function resetGame() {
  lives = 3;
  score = 0;
  speed = 1.5;
  document.getElementById("lives").innerText = lives;
  document.getElementById("score").innerText = score;
  newEquation();
}

function restartGame() {
  document.getElementById("gameOverScreen").classList.add("hidden");
  startGame();
}

function newEquation() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let ops = ["+", "-", "*", "/"];
  let op = ops[Math.floor(Math.random() * ops.length)];

  let ans;
  if (op === "+") ans = a + b;
  if (op === "-") ans = a - b;
  if (op === "*") ans = a * b;
  if (op === "/") {
    ans = a;
    b = 1 + Math.floor(Math.random() * 9);
    a = ans * b;
  }

  equation = {
    text: `${a} ${op} ${b}`,
    answer: ans,
    x: Math.random() * 250 + 80,
    y: 0
  };
}

function gameLoop() {
  if (!running) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff66";
  ctx.font = "26px Courier New";
  ctx.shadowColor = "#00ff66";
  ctx.shadowBlur = 10;

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
