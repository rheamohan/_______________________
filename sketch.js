
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground;
var paper;

var dustbin1,dustbin2,dustbin3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);
	
	paper = new Paper(70,500,20);

	dustbin1 = new Dustbin (630,600,200,20);
	dustbin2 = new Dustbin (740,500,20,100);
	dustbin3 = new Dustbin (520,500,20,100);


	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);

	ground.display();
	 
	paper.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	keyPressed();
  
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:85})
    //paper.body.velocityY = 2;
	}
}



