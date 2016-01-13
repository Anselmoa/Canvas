function GrafCircular () {
  data = [cv_vitorias,cazul_vitorias,cverde_vitorias,camrl_vitorias];
  myColor = ['#FF0000','#0019EC','#33FF00', 'yellow'];
  var canvas = document.getElementById("myCanvasGraf");
  var ctx = canvas.getContext("2d");
  lastend = 0;
  myTotal = 0;
  y = 30;
  ctx.clearRect(190,5,canvas.width, 155);

  /* ================== Imagens ============================= */

  cavaloVermelho = new Image ();
  cavaloVermelho.src = "imagens/cavalovermelho1.png";

  cavaloAzul = new Image ();
  cavaloAzul.src = "imagens/cavaloazul1.png";

  cavaloVerde = new Image ();
  cavaloVerde.src = "imagens/cavaloverde1.png";

  cavaloAmarelo = new Image ();
  cavaloAmarelo.src = "imagens/cavaloamarelo1.png";


  //calcular o total
  for(var e = 0; e < data.length; e++)
  {
      myTotal += data[e];
  }


  for (i = 0; i < data.length; i++) {
      ctx.fillStyle = myColor[i];
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;

      //Criar grafico circular----------------------------------------------------
      ctx.beginPath();
      ctx.moveTo(100,200);
      ctx.arc(100,200,80,lastend,lastend+(Math.PI*2*(data[i]/myTotal)),false);
      ctx.lineTo(100,200);
      ctx.fill();
      ctx.stroke();
      lastend += Math.PI*2*(data[i]/myTotal);
      ctx.closePath();

      //Texto
      ctx.font = "13px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("Número de vitórias: " + data[i], 235, y );
      y += 40;
  }

  //Function que cria a Tabela de resultados
  function drawTable () {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;


      //Cavalo Vermelho
      ctx.beginPath();
      ctx.strokeRect(190,5,40,40);
      ctx.stroke();
      ctx.closePath();
      ctx.drawImage(cavaloVermelho,190,6,40,39);

      ctx.beginPath();
      ctx.strokeRect(230,5,155,40);
      ctx.stroke();
      ctx.closePath();



      //Cavalo Azul
      ctx.beginPath();
      ctx.strokeRect(190,45,40,40);
      ctx.stroke();
      ctx.closePath();
      ctx.drawImage(cavaloAzul,190,46,40,39);

      ctx.beginPath();
      ctx.strokeRect(230,45,155,40);
      ctx.stroke();
      ctx.closePath();

      //Cavalo Verde
      ctx.beginPath();
      ctx.strokeRect(190,85,40,40);
      ctx.stroke();
      ctx.closePath();
      ctx.drawImage(cavaloVerde,190,86,40,39);

      ctx.beginPath();
      ctx.strokeRect(230,85,155,40);
      ctx.stroke();
      ctx.closePath();

      //Cavalo Amarelo
      ctx.beginPath();
      ctx.strokeRect(190,125,40,40);
      ctx.stroke();
      ctx.closePath();
      ctx.drawImage(cavaloAmarelo,190,126,40,39);

      ctx.beginPath();
      ctx.strokeRect(230,125,155,40);
      ctx.stroke();
      ctx.closePath();
  }
  //Fim Grafico circular----------------------------------------------------------

  drawTable();
}