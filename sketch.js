var box1,box2,box3;
var box4,box5,box6;
var box7,box8;
var box9,box10;
var box11,box12,box13;
var box14,box15;




function setup() {
  createCanvas(800,400);
  box1=createSprite(400,250,50,250);
  box2=createSprite(400,385,440,20);
  box3=createSprite(600,320,50,150);
  box4=createSprite(205,320,50,150);
  box5=createSprite(295,315,50,142);
  box6=createSprite(500,315,50,142);
  box7=createSprite(400,315,400,20);
  box8=createSprite(400,255,400,20);
  box9=createSprite(275,225,70,40);
  box10=createSprite(520,225,70,40);
  box11=createSprite(400,125,440,20);
  box12=createSprite(345,185,20,120);
  box13=createSprite(455,185,20,120);
  box14=createSprite(190,185,20,120);
  box15=createSprite(610,185,20,120);
}

function draw() {
  background(255,255,255);  

  box1.shapeColor=color("black");
  box2.shapeColor=color("black");
  box3.shapeColor=color("black");
  box4.shapeColor=color("black");
  box5.shapeColor=color("black");
  box6.shapeColor=color("black");
  box7.shapeColor=color("black");
  box8.shapeColor=color("black");
  box9.shapeColor=color("black");
  box10.shapeColor=color("black");
  box11.shapeColor=color("black");
  box12.shapeColor=color("black");
  box13.shapeColor=color("black");
  box14.shapeColor=color("black");
  box15.shapeColor=color("black");
  drawSprites();
}