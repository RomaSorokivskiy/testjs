
    const canvas = document.getElementById('canvas');

    const ctx = canvas.getContext('2d');
    const image = new Image(60, 45);   
    image.onload = drawImageActualSize; 
    
    image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    function drawImageActualSize() {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
      
        ctx.drawImage(this, 0, 0);
      }
    function done(){
        let lineW = document.getElementById('lineW').value;
        let lineC = document.getElementById('lineC').value;

        canvas.style.borderStyle = 'solid';
        canvas.style.borderWidth = lineW + 'px';
        canvas.style.borderColor = lineC;
    }
    function clearCanvas(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.borderStyle = '';
      canvas.style.borderWidth = '';
      canvas.style.borderColor = '';
    }