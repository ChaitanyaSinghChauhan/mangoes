
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var rock,mann, stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2 = new Mango(1000,100,30,30);
	mango3 = new Mango(950,160,30,30);
	mango4 = new Mango(1150,170,30,30);
	mango5 = new Mango(1000,230,30,30);
	treeObj=new tree(1050,580);
	rock = new Stone(230,400,50,50);
	groundObject=new ground(width/2,600,width,20);
  mann = new SlingShot(rock.body,{x:230, y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
  rock.display();
  mann.display();
}


function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  mann.fly();
}



