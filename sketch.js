const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var ground,ball,rope;

function preload(){

}

function setup(){
    createCanvas(1000,500);
    
    engine=Engine.create();
    world=engine.world;

    ground = new Ground(width/2,480,1000,20);
    ball = new Ball(300,350);
    rope = new Rope(ball.body,{x:300,y:150});
    box1 = new Box(420,425,60,90);
    box2 = new Box(480,425,60,90);
    box3 = new Box(540,425,60,90);
    box4 = new Box(420,335,60,90);
    box5 = new Box(480,335,60,90);
    box6 = new Box(540,335,60,90);
    box7 = new Box(420,245,60,90);
    box8 = new Box(480,245,60,90);
    box9 = new Box(540,245,60,90);
    box10 = new Box(420,155,60,90);
    box11 = new Box(480,155,60,90);
    box12 = new Box(540,155,60,90);
   
    console.log(box1 );
    console.log(box4);

}


function draw(){
    background("black");
    
    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

