const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){

  backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,400,2000,5);

  superhero = new Superhero(170,3,220,120);

  attach = new Throw(superhero.body,{x:200, y:200});

    box1 =new Block(370,50,50,50)
    box2 =new Block(370,50,50,50)
    box3 =new Block(370,50,50,50)
    box4 =new Block(370,50,50,50)
    box5 =new Block(370,50,50,50)
    box6 =new Block(370,50,50,50)
    box7 =new Block(420,50,50,50)
    box8 =new Block(420,50,50,50)
    box9 =new Block(420,50,50,50)
    box10=new Block(420,50,50,50)
    box11=new Block(420,50,50,50)
    box12= new Block(420,50,50,50)
    box13= new Block(470,50,50,50)
    box14= new Block(470,50,50,50)
    box15= new Block(470,50,50,50)
    box16= new Block(470,50,50,50)
    box17= new Block(470,50,50,50)
    box18= new Block(470,50,50,50)
    box19= new Block(470,50,50,50)
    box20= new Block(470,50,50,50)
    box21= new Block(520,50,50,50)
    box22= new Block(520,50,50,50)
    box23= new Block(520,50,50,50)
    box24= new Block(520,50,50,50)
    box25= new Block(520,50,50,50)
    box26= new Block(520,50,50,50)
  monster = new Monster(720,50,200,200);

  Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(backgroundImg);

  superhero.display();

  ground.display();

  stroke(15);
  fill("red");

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
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

  monster.display();
}
function mouseDragged(){

  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
  attach.fly();
}