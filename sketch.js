const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,550,50);
	bob2=new Bob(220,550,50);
	bob3=new Bob(240,550,50);
	bob4=new Bob(260,550,50);
	bob5=new Bob(280,550,50);

	roof= new Roof(400,350,200,10)

	string1=new Rope(bob1.body,roof.body,-60,0);
	string2=new Rope(bob2.body,roof.body,-30,0);
	string3=new Rope(bob3.body,roof.body,0,0);
	string4=new Rope(bob4.body,roof.body,30,0);
	string5=new Rope(bob5.body,roof.body,60,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(161);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  roof.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var options ={
			isStatic:false}
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-100,y:-150});
	}
}

