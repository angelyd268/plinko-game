
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,600,800,20)
	dustbin1 = new Dustbin(400,540,20,100)
	dustbin2 = new Dustbin(600,540,20,100)
    paper = new Paper(500,50,30,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  
 
}



