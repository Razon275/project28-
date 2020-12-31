
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree1,slingshot,treeImage;
var gameState,stoneImage;
function preload()
{
	boyImage=loadImage("sprites/boy.png");
    treeImage=loadImage("sprites/tree.png");
    stoneImage=loadImage("sprites/stone.png");
}

function setup() {
	createCanvas(1200, 800);
	
    boy=createSprite(300,600,1,1)
	boy.addImage(boyImage)
	boy.scale=0.2
	engine = Engine.create();
	world = engine.world;
    slingshot=new Chain(boy,{x:300,y:600})
	//Create the Bodies Here.
	var options={
		isStatic:true,
		
	}
	
	tree=Bodies.rectangle(500,10,10,10,options)
	World.add(world,tree)
	var options={
		isStatic:false,
		restitution:0,
		friction:1,
		density:1.2
		}
        
        stone=Bodies.rectangle(200,520,50,50,options)
         World.add(world,stone)

         var options={
            isStatic:true
        }
        ground=Bodies.rectangle(1200,750,2500,20,options)
         World.add(world,ground)

	mango1=new Mango(400,10,50,80)
	mango2=new Mango(300,80,50,80)
	mango3=new Mango(350,120,50,80)
	mango4=new Mango(400,90,50,80)
	mango5=new Mango(330,10,50,80)
	mango6=new Mango(250,130,50,80)
	
	
	Engine.run(engine);
  
}


function draw() {
  //Engine.update(engine)
  rectMode(CENTER);
  background(255);
  

  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,2500,20)
 
  image(treeImage,tree.position.x,tree.position.y,500,750)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  image(stoneImage,stone.position.x,stone.position.y,50,50)
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  drawSprites();
 
}
function detectCollision(stone,mango){
    mangoPos=mango.body.position
    stonePos=stone.position
    
    var distance=dist(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y)
    console.log(distance)
    if(distance<70){
            //console.log("if")
        Body.setStatic(mango.body,false)
    }
    }
function mouseDragged(){
   
        Body.setPosition(stone.body, {x:mouseX , y:mouseY});
    }


function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
	if(keyCode===32){
		Body.setPosition(stone,{x:120,y:500})
		slingshot.attach(stone)
	}
}

