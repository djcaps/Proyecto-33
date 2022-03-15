const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var messi;
var ball;
var porteria;
var background;
var ground;
var rope;
var Score = 0;

function preload() {
  bg = loadImage("fondo_0.png")
}

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1500, 20);

  messi = new Messi(200,400,250);
  rope = new Rope(messi.body, { x: 200, y: 50 });
  ball = new Ball(370,450,50);
  porteria = new Porteria(1200,450,300);


}

function draw() {
  background(bg); 
  textSize(35)
  fill("white")
  text("Score : "+Score,1200,50);
  
 
  if(ball.body.position.x > 1000) {
    Score = Score + 100;
    textSize(100)
    fill("black")
    text("GooooL !!",600,350);
    
  }

  Engine.update(engine);
  messi.display(); 
  rope.display(); 
  ball.display();
  porteria.display();
}

function mouseDragged() {
  Matter.Body.setPosition(messi.body, { x: mouseX, y: mouseY});
}