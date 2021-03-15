var backdrop,b_img

var jet,jet_img

var misile

var enemy,enemy_img

var enemyGroup

var misilegroup

var score=0

function preload(){
  b_img=loadImage("space.jpg")
  
  enemy_img=loadImage("e.png")
  
  jet_img=loadImage("jet2-1.jpg")
  
}



function setup() {
  createCanvas(400, 400);
  
  backdrop = createSprite(200,200,400,400)
  backdrop.addImage(b_img)
  backdrop.scale=2.5
  backdrop.velocityY=1
  
  jet=createSprite(200,380,20,20)
  jet.shapeColor="blue"
  jet.addImage(jet_img)
  jet.scale=0.1
  
  enemyGroup=new Group();
  misilegroup=new Group();
  
}

function draw() {
  background(220);
  
  
  
   if(backdrop.y>225){
    backdrop.y=200
  }
  
  
  if(keyDown("right")){
    jet.velocityX=5
  }
    if(keyWentUp("right")){
    jet.velocityX=0
  }
  
  
  if(keyDown("left")){
    jet.velocityX=-5
  }
  
   if(keyWentUp("left")){
    jet.velocityX=0
  }
  
  if(misilegroup.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    misilegroup.destroyEach();
    score=score+10
  }

  if(score===100){
    background(0)
    enemyGroup=null
    jet=null
    fill("red")
    textSize(20)
    text("YOU WIN",200,200)
  }
  
  createEnemy();
  createmisile();
  
  drawSprites();
  
  
  strokeWeight(5)
    stroke("red")
    fill("blue")
    textSize(20)
    text("SCORE="+score,270,50)
    
  
}

function createmisile(){
  if(keyDown("space")){
    misile=createSprite(jet.x,jet.y,5,20)
 misile.velocityY=-5
 misile.shapeColor="red"
    misile.lifetime=80
    misilegroup.add(misile)
    
  
  }
  
  
}


function createEnemy(){
  
  if(frameCount%150===0){
  enemy=createSprite(random(100,400),0)
    enemy.velocityY=5
    enemy.addImage(enemy_img)
    enemy.scale=0.2
    enemy.lifetime=80
    enemyGroup.add(enemy)
    
  }
}

