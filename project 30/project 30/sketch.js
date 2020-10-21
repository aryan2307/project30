const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stand, box1, box2, box3, box4, box5, box6, box7, box8, box9, polygon, polygon_img, slingshot;

function preload(){
	polygon_img = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = Bodies.circle(200,200,20);
	World.add(world,polygon);
	slingshot = new Slingshot(this.polygon, {x:200,y:200});
	ground = new Ground(400,675,800,50);
	stand = new Ground(540,260,200,10);
	box1 = new Box(480,235,"lightblue");
	box2 = new Box(510,235,"lightblue");
	box3 = new Box(540,235,"lightblue");
	box4 = new Box(570,235,"lightblue");
	box5 = new Box(600,235,"lightblue");
	box6 = new Box(510,195,"lightgreen");
	box7 = new Box(540,195,"lightgreen");
	box8 = new Box(570,195,"lightgreen");
	box9 = new Box(540,155,"pink");

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  imageMode(CENTER);
  drawSprites();
  slingshot.display();
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  ground.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  stroke(255);
  text("Press space to get another chance!", 100, 400);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon, {x:200, y:200});
		slingshot.attach(this.polygon);
	}
}