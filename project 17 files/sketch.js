
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  var survivalTime=0;
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  FoodGroup=new Group();
  obstacleGroup=new Group();
  score=0;
  monkey.collide(ground)
}


function draw() {
background("white");
  if(ground.x=0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
  spawnFood();
  spawnobstacles();
  
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,500);
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
}
function spawnFood(){
  if(frameCount % 80 === 0){
  var   banana =createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    monkey.depth=banana.depth+1;
    banana.scale = 0.05;
    banana.velocityX= -3;
    banana.lifetime=200;
  FoodGroup.add(banana)
  }
}
function spawnobstacles(){
  if(frameCount % 300 === 0){
    var obstacle =createSprite(800,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle)
    obstacle.scale=0.15;
  }
}




