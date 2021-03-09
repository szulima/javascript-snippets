// select elements
const canvas = document.querySelector("canvas");
const shakeButton = document.querySelector(".znikopis__shake");

// setup canvas for drawing
// see all ctx settings with console.log(ctx)
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 3;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

const step = 10;
let x = Math.round(canvas.width / 2);
let y = Math.round(canvas.height / 2);

// draw function
function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(x, y);
  if (key === "ArrowDown") {
    if (y + step > canvas.height) return;
    y += step;
  }
  if (key === "ArrowRight") {
    if (x + step > canvas.width) return;
    x += step;
  }
  if (key === "ArrowUp") {
    if (y - step < 0) return;
    y -= step;
  }
  if (key === "ArrowLeft") {
    if (x - step < 0) return;
    x -= step;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// keys handler
function handleKeyPress(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear/shake canvas
function clearCanvas(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// listen for events
window.addEventListener("keydown", handleKeyPress);
shakeButton.addEventListener("click", clearCanvas);
