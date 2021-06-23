var garden,rabbit, orange, apple;
var gardenImg, rabbitImg, appleImg, orangeImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("unnamed.jpg");
  orange = loadImage("orange.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX=-1

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


apple = createSprite(100,500);
apple.addImage()
}


function draw() {
  background(0);
    if(garden.x>= 0){
    garden.x = width/2;
   
    }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}