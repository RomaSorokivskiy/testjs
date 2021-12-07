let lineW = document.getElementById('lineW').value;
let lineC = document.getElementById('lineC').value;

const canvas = document.getElementById('canvas');
const mirror = document.getElementById('mirror');


let ctx = canvas.getContext('2d');
let ctxM = mirror.getContext('2d');
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
    ctx.closePath();
    ctxM.beginPath();
      ctxM.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    ctxM.closePath();
  }
  
  function Up(e) {
    paint = false;
    ctx.closePath();
  }

  function Move(e) {
    if (!paint) {
      return;
    }
    ctx.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    ctx.stroke();

    ctxM.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    ctxM.stroke();
  }
}

let myColor;
let myColorM;
document.getElementById('lineC').oninput = function() {
  myColor = this.value;
  myColorM = this.value;
};

document.querySelector('form.canvas-attrs').addEventListener('change', setStyle);
function setStyle() {
  ctx.strokeStyle = myColor;
  ctx.lineWidth = this.lineW.value;
  ctxM.strokeStyle = myColorM;
  ctxM.lineWidth = this.lineW.value;
}

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctxM.clearRect(0, 0, canvas.width, canvas.height);
}
init();