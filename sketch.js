var monkey,monkey_run,ground,ground_img,invisible_area,banana_img,
    rock_img;
 var rockGroup;
var banGroup;
var score;

function preload(){
  monkey_run=loadAnimation("Monkey_01.png","Monkey_02.png",
 "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png",
 "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  ground_img=loadImage("jungle.jpg")
  banana_img=loadImage("banana.png")
  rock_img=loadImage("stone.png")
}
function setup() {

  createCanvas(700, 500);
  //ground
  ground=createSprite(200,200);
  ground.addImage("jungle",ground_img)
 
  ground.velocityX=-6;
 //monkey
  monkey=createSprite(90,400,30,10);
  monkey.addAnimation("run",monkey_run);
  monkey.scale=0.18;

  invisible_area=createSprite(90,420,700,10)
  invisible_area.visible=false

  score=0;
  banGroup=new Group();
    rockGroup=new Group();
}

function draw() {
  background(220);
   
switch(score){
     case 10: monkey.scale=0.18;   
     break;
     case 20: monkey.scale=0.2;   
     break;
     case 30: monkey.scale=0.22;   
     break;
     case 40: monkey.scale=0.24;   
     break;
    default:break;
}

  console.log(monkey.y)
  
  if(keyDown("space")&&monkey.y>340){
    monkey.velocityY = -15;
  }
  
   if (ground.x <190){
    ground.x = ground.width/2;
  }
   if(banGroup.isTouching(monkey)){
     monkey.scale=0.2; 
     score=score+2
     banGroup.destroyEach();
   }
    monkey.velocityY = monkey.velocityY + 0.8
  if(rockGroup.isTouching(monkey)){
   monkey.scale=0.18
  }
  monkey.collide(invisible_area)
  bananas();  
  rocks();
  drawSprites();
  
     stroke("white");
  textSize(20)
  fill("white")
  text("score:"+score,500,50)
}
  

function bananas(){
if (frameCount % 80 === 0) {
var banana=createSprite(700,320,40,10)
banana.y=Math.round(random(200,250))
banana.addImage(banana_img)
banana.scale=0.1
 banana.velocityX = -9;
    
banana.lifetime=110
    banana.depth = banana.depth;
    monkey.depth = monkey.depth + 1;

 banGroup.add(banana);
}
}
function rocks(){
  if (frameCount % 80===0){
  var rock =createSprite(700,400,10,40)
  rock.velocityX=-6;
  rock.addImage(rock_img)
    rock.scale=0.2;
    rock.lifetime=150
    rockGroup.add(rock)
}
}

