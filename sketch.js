function setup() {
  createCanvas(400, 400);
}
let xjogador1 = 0;
let xjogador2 = 0;

function draw() {
    if(focused == true){
      background(220);
   } else {background("rgb(238,178,178)")

  }
  
  background(220);
  textSize(40);
  text("😶", xjogador1, 100);
  text("🥱", xjogador2, 300);
  rect(350, 0, 10, 400);
  xjogador1 = xjogador1 + random(15);
  xjogador2 = xjogador2 + random(20);
  if (xjogador1 > 350) {
    text("jogador 1 venceu!", 50, 200);
    noLoop()
  }
  if (xjogador2 > 350) {
    text("jogador 2 venceu!", 50, 200);
    noLoop()
  }
}
