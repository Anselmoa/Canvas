
var cverde_vitorias=0;   //contador de vitorias cavalo verde
var cazul_vitorias =0;   //contador de vitorias cavalo azul
var cv_vitorias=0;      //contador de vitorias cavalo vermelho
var camrl_vitorias=0;   //contador de vitorias cavalo amarelo

//---- Variaveis Jogadores
var jogador1_montante = 25;
var jogador1_aposta = 0;

var jogador2_montante = 25;
var jogador2_aposta = 0;

var jogador3_montante = 25;
var jogador3_aposta = 0;

var jogador4_montante = 25;
var jogador4_aposta = 0;
//---- Fim variaveis Jogadores

//---- Grafico de Barras

var can, ctx, minVal, maxVal, xScalar, yScalar, numSamples, y;
var dataName = [ "Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4" ];

    var vermGanhou = false;
    var verdeGanhou = false;
    var azulGanhou = false;
    var amareloGanhou = false;

        var canvas, ctx;
    var i,k,j,h;
    var cv_v = 0, cverde_v= 0, cazul_v= 0, cp_v= 0; //variaveis da velocidade dos cavalos
    var xVerm, yVerm, dxVerm;
    var xAzul, yAzul, dxAzul;
    var xVerde, yVerde, dxVerde;
    var xAmarelo, yAmarelo, dxAmarelo;
    var loop;
    var loop2;
    var loop3;
    var loop4;
    var lastend;
    var mycolor;
    var myTotal;
    var y ;

//---- Fim grafico de Barras

function init ()
{
    canvas = document.getElementById('myCanvas');
    ctx    = canvas.getContext('2d');
    a      = 0;
    k      = 0;
    j      = 0;
    h      = 0;

// Codigo que irá fazer random ao array dos cavalos

    var ArrayCavalos = new Array( "Cavalo Vermelho", "Cavalo Azul", "Cavalo Verde", "Cavalo Amarelo");
    ArrayCavalos = (ArrayCavalos.sort(PosicaoCavalos));

    jogadores_premios();

    function PosicaoCavalos() {
      return (Math.round(Math.random())-0.5);
    }

    for (i=0; i < ArrayCavalos.length; i++)
    {
        if (ArrayCavalos[i] == "Cavalo Vermelho")
        {
          if(i       === 0)
          {
            cv_v = 50;
            cv_vitorias += 1;
            vermGanhou = true;
          }
          else if (i == 1) {cv_v = 60;}
          else if (i == 2) {cv_v = 70;}
          else if (i == 3) {cv_v = 80;}
        }
        else if (ArrayCavalos[i] == "Cavalo Azul")
        {
          if(i      === 0)
          {
            cazul_v = 50;
            cazul_vitorias+= 1;
            azulGanhou = true;
          }
          else if (i == 1) {cazul_v = 60;}
          else if (i == 2) {cazul_v = 70;}
          else if (i == 3) {cazul_v = 80;}
        }
        else if (ArrayCavalos[i] == "Cavalo Verde")
        {

          if(i       === 0)
          {
            cverde_v = 50;
            cverde_vitorias+=1;
            verdeGanhou = true;
          }
          else if (i == 1) {cverde_v = 60;}
          else if (i == 2) {cverde_v = 70;}
          else if (i == 3) {cverde_v = 80;}
        }
        else if (ArrayCavalos[i] == "Cavalo Amarelo")
        {
          if(i      === 0)
          {
            camrl_v = 50;
            camrl_vitorias += 1;
            amareloGanhou = true;
          }
          else if (i == 1) {camrl_v = 60;}
          else if (i == 2) {camrl_v = 70;}
          else if (i == 3) {camrl_v = 80;}
        }//comparacao dos cavalos com o array corredor
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // ---------------- Codigo para atribuir premios aos jogadores
    // Jogador 1 --------------------------------------------
function jogadores_premios()
{
      if (jogador1_cavalo == ArrayCavalos[0])
      {
        jogador1_montante += (jogador1_aposta*2);
      }
      else {jogador1_montante -= jogador1_aposta;}
    // Jogador 2 --------------------------------------------
      if (jogador2_cavalo == ArrayCavalos[0])
      {
        jogador2_montante += (jogador2_aposta*2);
      }
      else {jogador2_montante -= jogador2_aposta;}
    // Jogador 3 --------------------------------------------

      if (jogador3_cavalo == ArrayCavalos[0])
      {
        jogador3_montante += (jogador3_aposta*2);
      }
      else {jogador3_montante -= jogador3_aposta;}
    // Jogador 4 --------------------------------------------
      if (jogador4_cavalo == ArrayCavalos[0])
      {
        jogador4_montante += (jogador4_aposta*2);
      }
      else {jogador4_montante -= jogador4_aposta;}
}
      //---------- Fim de Codigo para atribuir premios aos jogadores

    animate();

  }
/*
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


// Grafico circular
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
/*
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
}*/


    //Function to move Cavalos

    function animate(){
      loop = setInterval(Cavalo_Vermelho, cv_v); //quanto menor for o valor maior
      loop2 = setInterval(Cavalo_Azul, cazul_v);
      loop3= setInterval(Cavalo_Verde, cverde_v);
      loop4 = setInterval(Cavalo_Amarelo, camrl_v);

    }


//Function para criar cavalos
 /* ============================== Function para criar os cavalos =================================*/
      var arrayCavaloVermelho    = [];
      arrayCavaloVermelho[0]     = new Image();
      arrayCavaloVermelho[0].src = "imagens/cavalovermelho1.png";
      arrayCavaloVermelho[1]     = new Image();
      arrayCavaloVermelho[1].src = "imagens/cavalovermelho2.png";

      //Cavalo Azul
      var arrayCavaloAzul        = [];
      arrayCavaloAzul[0]         = new Image();
      arrayCavaloAzul[0].src     = "imagens/cavaloazul1.png";
      arrayCavaloAzul[1]         = new Image();
      arrayCavaloAzul[1].src     = "imagens/cavaloazul2.png";

      //Cavalo Verde
      var arrayCavaloVerde       = [];
      arrayCavaloVerde[0]        = new Image();
      arrayCavaloVerde[0].src    = "imagens/cavaloverde1.png";
      arrayCavaloVerde[1]        = new Image();
      arrayCavaloVerde[1].src    = "imagens/cavaloverde2.png";

      //Cavalo Amarelo
      var arrayCavaloAmarelo     = [];
      arrayCavaloAmarelo[0]      = new Image();
      arrayCavaloAmarelo[0].src  = "imagens/cavaloamarelo1.png";
      arrayCavaloAmarelo[1]      = new Image();
      arrayCavaloAmarelo[1].src  = "imagens/cavaloamarelo2.png";

      xVerm     = 0;
      yVerm     = 10;
      dxVerm    = 5;//incrementa 5px ao x

      //Cavalo Azul
      xAzul     = 0;
      yAzul     = 85;
      dxAzul    = 5;//incrementa 5px ao x

      //Cavalo Verde
      xVerde    = 0;
      yVerde    = 160;
      dxVerde   = 5;//incrementa 5px ao x

      //Cavalo Preto
      xAmarelo  = 0;
      yAmarelo  = 235;
      dxAmarelo = 5;//incrementa 5px ao x



    function Cavalo_Vermelho() {


        var img = arrayCavaloVermelho[a];
        ctx.clearRect(0,10, canvas.width, 50);
        ctx.drawImage(img,xVerm,10);
        a++
        if(a    ==arrayCavaloVermelho.length){
        a       =0;
        }
        xVerm += dxVerm;

       if (xVerm > 400) {xVerm = 0;
          clearInterval(loop);
                                  }
    }

    function Cavalo_Azul() {

      var img1 = arrayCavaloAzul[k];
      ctx.clearRect(0,85, canvas.width, 50);
      ctx.drawImage(img1,xAzul,yAzul);
      k++
      if(k     ==arrayCavaloAzul.length){
      k        =0;
      }
      xAzul    += dxAzul;
       if (xAzul > 400) {xAzul = 0;
          clearInterval(loop2);
                          }
    }

    function Cavalo_Verde() {

      var img2 = arrayCavaloVerde[j];
      ctx.clearRect(0,160, canvas.width, 50);
      ctx.drawImage(img2,xVerde,yVerde);
      j++
      if(j     ==arrayCavaloVerde.length){
      j        =0;
      }
      xVerde   += dxVerde;
       if (xVerde > 400) {xVerde = 0;
          clearInterval(loop3);
                          }
    }

    function Cavalo_Amarelo() {

      var img3 = arrayCavaloAmarelo[h];
      ctx.clearRect(0,235, canvas.width, 50);
      ctx.drawImage(img3,xAmarelo,yAmarelo);
      h++
      if(h     ==arrayCavaloAmarelo.length){
      h        =0;
      }
      xAmarelo += dxAmarelo;
      if (xAmarelo > 400) {xAmarelo = 0;
        clearInterval(loop4);
                          }
    }

      function WinScreen(){

      var x;

      function change() {
        if (x===1) {
          color = "#696969";
          x= 2;
        }
        else{
          color="white";
          x=1;
        }
        canvas = document.getElementById('myCanvas');
        ctx    = canvas.getContext('2d');
        ctx.rect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.fill();
      }


      if (vermGanhou === true) {

          var imgCavaloVerm = arrayCavaloVermelho[0];
          var drawWinVerm = function(){
            ctx.drawImage(imgCavaloVerm,150,120,100,100);
            ctx.fillStyle="black";
            ctx.font="50px Georgia";
            ctx.fillText("Ganhou",120,50);
          };

            x=1;
          var changeLoopVerm = setInterval(change, 1000);
          var drawLoopVerm =  setInterval(drawWinVerm, 1010);
          setTimeout(function( ) { clearInterval( changeLoopVerm ); }, 6100);
          setTimeout(function( ) { clearInterval( drawLoopVerm ); }, 6100);
      }
       if (azulGanhou === true) {

          var imgCavaloAzul = arrayCavaloAzul[0];
          var drawWinAzul = function(){
            ctx.drawImage(imgCavaloAzul,150,120,100,100);
            ctx.fillStyle="black";
            ctx.font="50px Georgia";
            ctx.fillText("Ganhou",120,50);
          };
          x=1;
        var changeLoopAzul =   setInterval(change, 1000);
        var drawLoopAzul = setInterval(drawWinAzul, 1010);
        setTimeout(function( ) { clearInterval( changeLoopAzul ); }, 6100);
        setTimeout(function( ) { clearInterval( drawLoopAzul ); }, 6100);

      }
       if (verdeGanhou === true) {

          var imgCavaloVerde = arrayCavaloVerde[0];
          var drawWinVerde= function(){
            ctx.drawImage(imgCavaloVerde,150,120,100,100);
            ctx.fillStyle="black";
            ctx.font="50px Georgia";
            ctx.fillText("Ganhou",120,50);
          };
          x=1;
         var changeLoopVerde =  setInterval(change, 1000);
         var drawLoopVerde = setInterval(drawWinVerde, 1010);
         setTimeout(function( ) { clearInterval( changeLoopVerde ); }, 6100);
         setTimeout(function( ) { clearInterval( drawLoopVerde ); }, 6100);

        }
       if (amareloGanhou === true) {

          var imgCavaloAmarelo = arrayCavaloAmarelo[0];
          var drawWinAmarelo = function(){
            ctx.drawImage(imgCavaloAmarelo,150,120,100,100);
            ctx.fillStyle="black";
            ctx.font="50px Georgia";
            ctx.fillText("Ganhou",120,50);
          };

          x=1;
         var changeLoopAmarelo =  setInterval(change, 1000);
         var drawLoopAmarelo =  setInterval(drawWinAmarelo, 1010);
         setTimeout(function( ) { clearInterval( changeLoopAmarelo ); }, 6100);
         setTimeout(function( ) { clearInterval( drawLoopAmarelo ); }, 6100);
      }
      ctx.clearRect(0,0,canvas.width,canvas.height);

    }

    function RestoreValues()
    {
      xVerm = 0;
      xAmarelo = 0;
      xVerde = 0;
      xAzul = 0;

      dxVerm= 5;
      dxVerde =5;
      dxAzul= 5;
      dxAmarelo = 5;

      vermGanhou= false;
      verdeGanhou = false;
      azulGanhou=false;
      amareloGanhou =false;
    }



    function Aposta () {
      //----------- Vai procurar os elementos a pagina index atravez do seu id

    jogador1_aposta = document.getElementById("jogador1aposta").value;
    jogador2_aposta = document.getElementById("jogador2aposta").value;
    jogador3_aposta = document.getElementById("jogador3aposta").value;
    jogador4_aposta = document.getElementById("jogador4aposta").value;

    jogador1_cavalo = document.getElementById("jogador1cavalo").value;
    jogador2_cavalo = document.getElementById("jogador2cavalo").value;
    jogador3_cavalo = document.getElementById("jogador3cavalo").value;
    jogador4_cavalo = document.getElementById("jogador4cavalo").value;
//----------- Fim de vai procurar os elementos a pagina index atravez do seu id

    }


    function OnClick()
    {
      Aposta();
      if (jogador1_aposta>=0 && jogador1_aposta <= jogador1_montante)
    	{
    		if (jogador2_aposta>=0 && jogador2_aposta <= jogador2_montante)
    		{
    			if (jogador3_aposta>=0 && jogador3_aposta <= jogador3_montante)
    			{
    				if (jogador4_aposta>=0 && jogador4_aposta <= jogador4_montante)
    				{
    					// FUNCOES A EXECUTAR
              init();

              setTimeout(WinScreen, 5700);
              setTimeout(GrafCircular,6500);
              setTimeout(GrafBarras,6500);
              setTimeout(RestoreValues, 6600);

              setTimeout(function() {
                document.getElementById('btnDraw').disabled = false;}, 12500);
    				}
            else { alert("Aposta do Jogador 4 Invalida."); document.getElementById('btnDraw').disabled = false;}
    			}
          else { alert("Aposta do Jogador 3 Invalida."); document.getElementById('btnDraw').disabled = false;}
    		}
        else { alert("Aposta do Jogador 2 Invalida."); document.getElementById('btnDraw').disabled = false;}
    	}
    	else { alert("Aposta do Jogador 1 Invalida."); document.getElementById('btnDraw').disabled = false;}
    }
