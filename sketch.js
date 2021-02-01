
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=1;

	//Create the Bodies Here.
	bob1=new Bob(300, 300, 50);
	bob2=new Bob(350, 300, 50);
	bob3=new Bob(400, 300, 50);
	bob4=new Bob(450, 300, 50);
	bob5=new Bob(500, 300, 50);
	

	roof1=new Roof(300, 100, 100, 50);
	roof2=new Roof(350, 100, 100, 50);
	roof3=new Roof(400, 100, 100, 50);
	roof4=new Roof(450, 100, 100, 50);
	roof5=new Roof(500, 100, 100, 50);

	rope1=new Rope(bob1.body, roof1.body, -bobDiameter, 0);
	rope2=new Rope(bob2.body, roof2.body, -bobDiameter, 0);
	rope3=new Rope(bob3.body, roof3.body, -bobDiameter, 0);
	rope4=new Rope(bob4.body, roof4.body, -bobDiameter, 0);
	rope5=new Rope(bob5.body, roof5.body, -bobDiameter, 5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-45})
}
}

