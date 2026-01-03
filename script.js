* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, #001a0f, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", monospace;
  color: #00ff66;
}

/* Main Card */
.game-container {
  background: rgba(0, 0, 0, 0.85);
  border: 2px solid #00ff66;
  box-shadow: 0 0 25px #00ff66;
  padding: 20px 25px;
  width: 460px;
  text-align: center;
  border-radius: 12px;
}

/* Title */
h1 {
  margin: 0;
  font-size: 32px;
  letter-spacing: 2px;
  text-shadow: 0 0 12px #00ff66;
}

.subtitle {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 12px;
}

/* HUD */
.hud {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 18px;
}

/* Canvas */
canvas {
  background: #000;
  border: 2px solid #00ff66;
  border-radius: 6px;
  box-shadow: inset 0 0 15px #00ff66;
}

/* Input */
input {
  margin-top: 15px;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  text-align: center;
  background: #000;
  color: #00ff66;
  border: 2px solid #00ff66;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 0 10px #00ff66;
}

input::placeholder {
  color: #00aa44;
}

input:focus {
  box-shadow: 0 0 20px #00ff66;
}
