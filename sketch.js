var movingRect,fixedRect;

function setup() {
  createCanvas(1200,400);
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityX = 5;

  fixedRect = createSprite(1000,200,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -5;
}

function draw() {
  background(0,0,0); 

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

    fixedRect.velocityX = -1 * fixedRect.velocityX;
    movingRect.velocityX = -1 * movingRect.velocityX;
  }

  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}