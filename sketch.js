
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	dobj = new Dustbin(1200,610)
	pobj = new Paper(200,450,40)
	gobj = new Ground(800,670,1600,20)

	Engine.run(engine);

  
}




function draw() {
  rectMode(CENTER);
  background("white");
  pobj.display()
  dobj.display()
  gobj.display()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(pobj.body,pobj.body.position,{x:85,y:-85});
	
	}
}


