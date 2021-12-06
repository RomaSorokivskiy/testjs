let lineW = document.getElementById('lineW').value;
let lineC = document.getElementById('lineC').value;

const canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
let paint = false;


function init() {

  canvas.addEventListener("mousedown", Down);
  canvas.addEventListener("mouseup", Up);
  canvas.addEventListener("mousemove", Move);

  function Down(e) {
    paint = true;
    ctx.beginPath();
    ctx.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  }

  function Up(e) {
    paint = false;
    ctx.closePath();
  }

  function Move(e) {
    if (!paint) return;
    ctx.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    ctx.stroke();
  }
}

let myColor;

document.getElementById('lineC').oninput = function() {
  myColor = this.value;
};

document.querySelector('form.canvas-attrs').addEventListener('change', setStyle);
function setStyle() {
  ctx.strokeStyle = myColor;
  ctx.lineWidth = this.lineW.value;
}

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
init();