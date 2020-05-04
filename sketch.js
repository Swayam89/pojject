var wall1,wall2,wall3,wall4,wall5,wall6,wall7;

function setup() {
  createCanvas(400,400);
  wall1 = createSprite(400,200,10,400)
  wall2 = createSprite(1,200,10,400)
  wall3 = createSprite(27,250,40,300)
  wall4 = createSprite(93,250,100,350)
  wall5 = createSprite(210,270,130,290)
  wall6 = createSprite(340,270,130,370)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}