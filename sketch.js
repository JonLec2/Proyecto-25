
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papel1;
var papel2;


function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,600,width,20);
	dustbinObj=new dustbin(1200,590);
	papel1=new papel(300,300,40)
	papel2=new papeldos(200,300,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(25)
  text("Presiona flecha arriba para tirar el papel", 200, 100)
  text("presiona flecha abajo para tirar la bolsa", 200, 130)
 

  groundObject.display();
  dustbinObj.display();
  papel1.display();
  papel2.display();

  if(keyDown("up_arrow")){
	Matter.Body.applyForce(papel1.body, papel1.body.position, {x:100, y:-195})
  }

  if(keyDown("down_arrow")){
	Matter.Body.applyForce(papel2.body, papel2.body.position, {x:100, y:-195})
  }

}

