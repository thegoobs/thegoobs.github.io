function canvasDraw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var w = ctx.canvas.width;
  var h = ctx.canvas.height;

  var MAX_LINES = 4;
  var amplitude = 75;
  var freq = 0.025;
  var rate = 0;

  var ctr = 0;
  function draw() {
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = $(".hero").height() - $(".tabs").height();
    ctx.moveTo(0, h/2); //start at left center
    ctr++;
    for (var i = 1; i < MAX_LINES; i++) {
      ctr++;
      rate = ctr/2250;
      ctx.beginPath();
      for (var x = 0; x < w; x++) {
        y = Math.sin(x * freq * (i/4) + rate) * amplitude / i;
        ctx.lineTo(x, y + h/2);
      }//for
      ctx.strokeStyle = "white";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }//for
    
  }

  setInterval(draw, 1);
}