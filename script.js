 
let offset = 0;
x = 0
y = 200
let speed=2
let rand=0
function drawframes() {
  const ecgPoints = [
    [0, 100, 'flat'],
    [20, 100, 'flat'],
    [30, 80, 'curve'],
    [40, 100, 'flat'],
    [50, 100, 'flat'],
    [55, 150, 'spike'],
    [60, 50, 'spike'],
    [65, 120, 'spike'],
    [70, 100, 'flat'],
    [90, 100, 'flat'],
    [100, 90, 'curve'],
    [110, 100, 'flat'],
    [150, 100, 'flat']
  ];

 const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');

  // Always update canvas size to match screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.6;

  // Get latest speed from input on each frame
  const speedInput = document.getElementById("speed");
  const randInput=document.getElementById("rand");
  const newRand=parseFloat(randInput.value);
  const newSpeed = parseFloat(speedInput.value);
  if (!isNaN(newSpeed)) {
    speed = newSpeed;
  }
  if (!isNaN(newRand)){
    rand=newRand;
  }
  // Drawing logic ...
  // (Your drawing code remains the same)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(x - offset, y);

  ctx.shadowColor = "lime";
  ctx.shadowBlur = 10;
  ctx.strokeStyle = "lime";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";

  for (let i = -1; i < 50; i++) {
    for (const point of ecgPoints) {
      const x = point[0] * 2 + i * 300 + Math.floor(Math.random()*rand);
      const y = point[1] * 2  + Math.floor(Math.random()*rand);
      ctx.lineTo(x - offset, y);
    }
  }

  ctx.stroke();

  offset += speed;

  requestAnimationFrame(drawframes);
}
drawframes();
