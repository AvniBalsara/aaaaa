const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls = [];
var balls2 = [];
var rand;

var maxBalls=50;
var ground,ground2,ground3;

var score=100;

function preload(){

}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(400,750,800,20)
  ground2= new Ground(0,400,20,800)
  ground3= new Ground(800,400,20,800)
  
  
  

if(frameCount % 1000 === 0){

    for(var i=0; i<maxBalls; i++){
        balls.push(new Ball(random(0,800), random(0,800)));
    }

}



}

function draw() {
  background(0); 
  
  Engine.update(engine);
  background(0); 

  

  //displaying rain drops
  for(var i = 0; i<maxBalls; i++){
      balls[i].Display();
      balls[i].update()

      ground.display();
      ground2.display();
      ground3.display();
      
      
      

      

      
      
  }
  drawSprites();
}