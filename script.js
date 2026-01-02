const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Player
let player = { x: 180, y: 450, w: 40, h: 40 };

// Enemy block
let block = { x: Math.random() * 360, y: 0, size: 40 };

let score = 0;

// Controls
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft" && player.x > 0) player.x -= 20;
  if (e.key === "ArrowRight" && player.x < 360) player.x += 20;
});

// Game Loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Draw block
  ctx.fillStyle = "red";
  ctx.fillRect(block.x, block.y, block.size, block.size);

  // Move block
  block.y += 4;

  // Collision
  if (
    block.x < player.x + player.w &&
    block.x + block.size > player.x &&
    block.y < player.y + player.h &&
    block.y + block.size > player.y
  ) {
    alert("Game Over! Score: " + score);
    location.reload();
  }

  // Reset block
  if (block.y > canvas.height) {
    block.y = 0;
    block.x = Math.random() * 360;
    score++;
  }

  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10, 20);

  requestAnimationFrame(gameLoop);
}

gameLoop();

