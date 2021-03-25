
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var box1,tree1,tree2,tree3,boy,stone,sling;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world;
var launchingForce = 100



function setup() {
	createCanvas(2000,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
    tree1=new Box2(500,160);
	tree2=new Box3(500,240)
	
	stone=new Stone(130,170);
	boy= new Boy(150,200);
	
	mango1=new mango(550,80);
    mango2=new mango(500,100);
	mango3=new mango(450,50);
	mango4=new mango(450,100);
	mango5=new mango();
	mango6=new mango();

	sling = new launcher(stone.body,{x:130,y:170});
	
	

	Engine.run(engine);
   
  
}


function draw() {
 background(220);
 Engine.update(engine)

 
 tree1.display();
 boy.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
  tree2.display();


detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly();
}

function keyPressed(){
  if (keyCode === 32) {

    
	Matter.Body.setPosition(stone.body,{x:200,y:740})
   sling.attach(stone.body)

	
	 }
}
 function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.radius+lstone.radius)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
	 
    }

  }





