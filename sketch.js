const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;  
//prim.
var myEngine;
var myWorld;
//sec.
var ground,ground_op;
var ball,ball_op;



function setup() {
  createCanvas(800,800);
  
  //mains
  myEngine = Engine.create()
  myWorld = myEngine.world;
  
  //ground
  ground_op = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,600,800,10,ground_op);
   
  console.log(ground);

  World.add(myWorld,ground);

  //ball
  ball_op = {
    isStatic : false,
    restitution : 1.0
  }


  ball = Bodies.circle(400,400,10,ball_op);

  console.log(ball);

  World.add(myWorld,ball);

}

function draw() {
          // R   G   B
  background(2,15,3);  
          // R   G   B
//starting the engine
Engine.update(myEngine);
//



  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  //ground mains
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
}