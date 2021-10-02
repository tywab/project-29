const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground1,wall1,wall2;
var jp;
var bridge;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground1=new Base(width/2,height-10,width,25);
  wall1=new Base(70,height/2,150,200);
  wall2=new Base(width-70,height/2,150,200);

  jp = new Base(width-100,height/2+25,40,20);
   bridge = new Bridge(10,{x:70,y:height/2})

}

function draw() {
  background(51);
  Engine.update(engine);
  ground1.display();
  wall1.display();
  wall2.display();
  jp.display();
  bridge.show();
}
