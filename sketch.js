function setup() {
  createCanvas(640,360);
}

  

function draw() {
  background(0,255,0);
  // mouth 
  stroke(255,0,0);
  fill(0,0,255);
  rect(125,200,400,50);
  
  // left eye 
  stroke (0,255,0);
  fill(0,0,255)
  ellipse(250, 100, 55, 55);
  
  // right eye
  stroke (0,255,0);
  fill(0,0,255)
  ellipse(375, 100, 55, 55);
}
