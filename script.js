const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let lives = 3;
let score = 0;
let speed = 1.5;

let equation = {};

function newEquation() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let op = ["+", "-", "*"][Math.floor(Math.random() * 3)];

  let ans;
  if (op === "+") ans = a + b;
  if (op === "-") ans = a - b;
  if (op === "*") ans = a * b;

  equation = {
    text: `${a} ${op} ${b}`,
    answer: ans,
    x: Math.random() * 300 + 40,
    y: 0
  };
}

newEquation();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff66";
  ctx.font = "24px monospace";
  ctx.fillText(equation.text, equation.x, equation.y);

  equation.y += speed;

  if (equation.y > canvas.height) {
    lives--;
    document.getElementById("lives").innerText = lives;
    newEquation();
  }

  if (lives <= 0) {
    alert("GAME OVER\nScore: " + score);
    location.reload();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

document.getElementById("answer").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let userAns = parseInt(this.value);

    if (userAns === equation.answer) {
      score++;
      speed += 0.1;
      document.getElementById("score").innerText = score;
      newEquation();
    }

    this.value = "";
  }
});
