const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
   polygon = loadImage("polygon.png")
}

function setup(){
 var canvas = createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;


    platform1 = new Ground (250,400, 250,20);
    platform2 = new Ground (1000,400, 250,20);


    //platform1
    
    //leve. 1
    block1 = new Box(235,380,30,40);
    block2 = new Box(240,380,30,40);
    block3 = new Box(245,380,30,40);
    block4 = new Box(250,380,30,40);
    block5 = new Box(255,380,30,40);
    block6 = new Box(265,380,30,40);
    block7 = new Box(270,380,30,40);
    //leve. 2
    block8 = new Box(245,355,30,40);
    block9 = new Box(250,355,30,40);
    block10 = new Box(255,355,30,40);
    block11 = new Box(260,355,30,40);
    block12 = new Box(265,355,30,40);
    //leve3 3
    block13 = new Box(255,330,30,40);
    block14 = new Box(260,330,30,40);
    block15 = new Box(265,330,30,40);

    //platform2
    //leve. 1
    block16 = new Box(1000,380,30,40);
    block17 = new Box(1000,380,30,40);
    block18 = new Box(1000,380,30,40);
    block19 = new Box(1000,380,30,40);
    block20 = new Box(1000,380,30,40);
    block21 = new Box(1000,380,30,40);
    block22 = new Box(1000,380,30,40);
    //leve. 2
    block23 = new Box(1000,355,30,40);
    block24 = new Box(1000,355,30,40);
    block25 = new Box(1000,355,30,40);
    block26 = new Box(1000,355,30,40);
    block27 = new Box(1000,355,30,40);
    //leve3 3
    block28 = new Box(1000,330,30,40);
    block29 = new Box(1000,330,30,40);
    block30 = new Box(1000,330,30,40);

    ball = Bodies.circle(530,300,30);
    World.add(world,ball)

   slingshot = new Slingshot(this.ball,{x:550, y:280});
}

function draw(){
 background(60);
 Engine.update(engine)

 platform1.display();
 platform2.display();
 fill("lightblue")
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill("purple")
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill("red")
 block13.display();
 block14.display();
 block15.display();
 fill("lightblue")
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 fill("purple")
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 fill("red")
 block28.display();
 block29.display();
 block30.display();


 slingshot.display();
 imageMode(CENTER)
 image(polygon,ball.position.x,ball.position.y, 50,50)


 drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(this.ball,{x: mouseX,y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}