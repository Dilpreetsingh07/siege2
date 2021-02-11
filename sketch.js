
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var hexagon;
function setup() {
  createCanvas(1500,800);

  
  engine = Engine.create();
	world = engine.world;




 hexagon = new Paper(200,250,40)
 ground1 = new Ground(600,500,350,20)
 b1 = new Block1(600,320,50,50)
 lower = new Block4(600,466,50,50)
 lower2 = new Block4(560,466,50,50)
 lower3 = new Block4(520,466,50,50)
 lower4 = new Block4(480,466,50,50)
 lower5 = new Block4(640,466,50,50)
 lower6 = new Block4(680,466,50,50)
 lower7 = new Block4(720,466,50,50)
 upper = new Block3(600,366,50,50)
 upper2 = new Block3(560,366,50,50)
 upper3 = new Block3(640,366,50,50)
center = new Block2(600,406,50,50)
center2 = new Block2(560,406,50,50)
center3 = new Block2(520,406,50,50)
center4 = new Block2(640,406,50,50)
center5 = new Block2(680,406,50,50)
ground2 = new Ground(1200,200,300,20)
n1 = new Block2(1200,160,50,50)
n2 = new Block2(1160,160,50,50)
n3 = new Block2(1120,160,50,50)
n4 = new Block2(1240,160,50,50)
n5 = new Block2(1280,160,50,50)
n6 = new Block4(1200,120,50,50);
n7 = new Block4(1160,120,50,50);
n8 = new Block4(1240,120,50,50);
n9 = new Block3(1200,80,50,50);
slingshot = new SlingShot(hexagon.body,{x:200, y:50});

 Engine.run(engine);
}

function draw() {
  background("black");  
 hexagon.display();
 ground1.display();
 b1.display();
 lower.display();
 lower2.display();
 lower3.display();
 lower4.display();
 lower5.display();
 lower6.display();
 lower7.display();
upper.display();
upper2.display();
upper3.display();
center.display();
center2.display();
center3.display();
center4.display();
center5.display();
ground2.display();
n1.display();
n2.display();
n3.display();
n4.display();
n5.display();
n6.display();
n7.display();
n8.display();
n9.display();
slingshot.display(); 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(hexagon.body);
  }
}