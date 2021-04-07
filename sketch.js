const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4 , rubber5;
var bigRubber;
var iron1;
var stone1; 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(600,560, 25)
    rubber2 = new Rubber(625,560, 25)
    rubber3 = new Rubber(675,560, 25)
    rubber4 = new Rubber(575,560, 25)
    rubber5 = new Rubber(550,560, 25)
    iron1 = new iron(400, 560, 90, 90)
    stone1 = new stone(800, 560, 60, 90)
    bigRubber = new Rubber(950, 560, 90)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    iron1.display()
    rubber1.display()
    rubber2.display()
    rubber3.display()
    rubber4.display()
    rubber5.display()
    plane.display();
    hammer.display();
    stone1.display()
    bigRubber.display()
 
}