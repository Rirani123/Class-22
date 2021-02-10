const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,350,800,50,options);
  World.add(world,ground);

  var ballOptions={
    restitution:1
  }
  ball=Bodies.circle(200,100,25,ballOptions);
  World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  drawSprites();
}
