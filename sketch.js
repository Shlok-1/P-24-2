const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hot_c;

function preload()
{
	hot_c=loadImage("image/milk.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  

	Engine.run(engine);
  

}


function draw() {
  background(0);
    Engine.update(engine);
	image(boy ,200,340,200,300);

    drawSprites()
}


