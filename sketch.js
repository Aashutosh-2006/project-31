const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinko1,plinko2,plinko3,plinko4;
var particle;

var particles=[]
var plinkos=[]
var division=[]


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);

  division1=new Divisions(0,150,10,300);
  division2=new Divisions(80,150,10,300);
  division3=new Divisions(160,150,10,300);
  division4=new Divisions(240,150,10,300);
  division5=new Divisions(320,150,10,300);
  division6=new Divisions(340,150,10,300);
  division7=new Divisions(480,150,10,300);

  plinko1=new Plinko(240,50,10);
  plinko2=new Plinko(240,150,10);
  plinko3=new Plinko(240,250,10);
  plinko4=new Plinko(240,350,10);

  particle=new Particle(240,400,10);
  
}

function draw() {
  background(255,255,255);  

ground.display();

division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();

particle.display();

  drawSprites();
}