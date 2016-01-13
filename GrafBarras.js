function GrafBarras ()
  {
    numSamples   = 4;
    maxVal       = 200;
    var stepSize = 20;
    var colHead  = 50;
    var rowHead  = 20;
    var margin   = 0;
    var header   = "Montante";

    can = document.getElementById("myCanvasApostas");
    ctx = can.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    ctx.fillStyle = "black";
    yScalar = (can.height - 0 - colHead - margin) / (maxVal);
    xScalar = (can.width - rowHead) / (numSamples + 1);
    ctx.strokeStyle = "rgba(128,128,255, 0.5)"; // light blue line
    ctx.beginPath();

    var dataValue = [ jogador1_montante, jogador2_montante, jogador3_montante, jogador4_montante];//-----------> local onde são alterados os valores do graficos

    // print row header and draw horizontal grid lines
    ctx.font = "12pt Helvetica";
    var count =  0;

    for (scale = maxVal; scale >= 0; scale -= stepSize) {
        y = colHead + (yScalar * count * stepSize);
        ctx.strokeText(scale, margin,y + margin);
        ctx.moveTo(rowHead, y);
        ctx.lineTo(can.width, y);
        count++;
    }
    ctx.stroke();

    // label samples
    ctx.strokeStyle = "black";
    ctx.font = "10pt Helvetica";
    ctx.textBaseline = "bottom";
    for (i = 0; i < 4; i++) {
        calcY(dataValue[i]);
        ctx.strokeText(dataName[i], xScalar * (i + 1), y - 15);
        ctx.strokeText(dataValue[i] + " euros", xScalar * (i + 1), y - 0);

    }

    ctx.fillStyle = "green";
    // translate to bottom of graph and scale x,y to match data
    ctx.translate(0, can.height - margin);
    ctx.scale(xScalar, -1 * yScalar);

    // draw bars
    for (i = 0; i < 4; i++) {
        ctx.fillRect(i + 1, 0, 0.5, dataValue[i]);
    }
    function calcY(value) {
        y = can.height - value * yScalar;
    }
  }