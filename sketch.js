
// gui params
var myAngle = 30;
var myColor = '#eeee00';
var myTemp = 10;
var myOppTemp = 10;
var myReliability = 9;
var myNewtonForce = 25000;

function customSim (){
  //Write custom sim code here
}

var gui;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Create the GUI
  sliderRange(0, 90, 1);
  gui = createGui('Simulation Window');
  gui.addGlobals('myNewtonForce');
  gui.addGlobals('myOppTemp');

  sliderRange(0, 80, 1);
  gui.addGlobals('myTemp');
  
  // Only call draw when then gui is changed
  noLoop();
  img = loadImage('yeetofiguhogdf-removebg-preview.png');
}


function draw() {
    
  // this is a piece of cake
  background(0);
  fill(myColor);
  angleMode(DEGREES);
  arc(width/2, height/2, 100, 100, myAngle/2, 360 - myAngle/2, PIE);
  image(img, 0, 6);
  var Sim = new customSim();
  Sim.draw();
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}