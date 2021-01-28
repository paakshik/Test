const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine = Engine.create();
var world = engine.world;
function preload() {
bgI = loadImage('Images/bg.png');
}
function setup() {  

  createCanvas(1200, 400);

  bird = new Bird(200, 200)

ground = new Ground(600,height,1200,20);  
ground2 =new Ground(180,305,300,170); 
  
box1 = new Blocks(700,320,70,70);
box2 = new Blocks(920,320,70,70);
box3 = new Blocks(700,240,70,70);
box4 = new Blocks(920,240,70,70);
box5 = new Blocks(810,180,70,70);

log1 = new Logs(810,260,20,300,PI/2)
log2 = new Logs(810,180,20,300,PI/2)
log3 = new Logs(760,120,20,150,(PI/7));
log4 = new Logs(870,120,20,150,-(PI/5));

pig1 = new Pig(810,350);
pig2 = new Pig(810,220);
  Engine.run(engine)

}
function draw() {


  background(bgI)
  bird.show();
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
 
  log1.show();
  log2.show();
  log3.show();
  log4.show();

pig1.show();
pig2.show();
 ground.show();
 ground2.show();
  // // for (i = 0; i < block.length; i++){
  // block[i].show();
  // }  
}