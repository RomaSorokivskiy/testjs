var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let lineW = document.getElementById('lineW').value;
let lineC = document.getElementById('lineC').value;

lineW = 2;

var myColor;
document.getElementById('lineC').oninput = function() {
  myColor = this.value;
};

canvas.onmousedown = function(event) {
  canvas.onmousemove = function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.fillStyle = myColor;
    ctx.fillRect(x - lineW, y -lineW, lineW,lineW);
    ctx.fill();
  };

  canvas.onmouseup = function() {
    canvas.onmousemove = null;
  };
};
    function done(){
      lineW = document.getElementById('lineW').value;
      lineC = document.getElementById('lineC').value;
    }
    function clearCanvas(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }