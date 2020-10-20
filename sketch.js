
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball, ground, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperball = new Paper(400, 300, 20);
ground = new Ground(400, 600, 800, 10);
box1 = new Dustbin(400, 600, 100, 20);
box2 = new Dustbin(500, 600, 100, 20);
box3 = new Dustbin(400, 600, 20, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paperball.display();
ground.display();
box1.display();
box2.display();
box3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperball.body, paperball.body.position, {x:85, y:-85});
}

}