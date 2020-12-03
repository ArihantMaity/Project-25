
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
    ground = new Ground(400,height,width,20)
    ball=new Balls(100,695);
    box1=new Boxes(560,650,30,100);
    box2= new Boxes(605,650,100,100);
   box3=new Boxes(650,650,30,100);
	 Engine.run(engine);
  
}


function draw() {
  background("cyan");
  Engine.update(engine)
  ball.display();
  ground.display();
  box1.display();
  box3.display();
  box2.display();
  
  

 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:320,y:-455});
  }
}
