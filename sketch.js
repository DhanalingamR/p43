var h,m,s

function setup() {
  createCanvas(800,600);
 
}

function draw() {
  background(0); 
  translate(390,300)
  h=hour();
  m=minute();
  s=second();
  angleMode(DEGREES)
  sa=map(s,0,60,0,360)
  ma=map(m,0,60,0,360)
  ha=map(h%12,0,60,0,360)

  push()
  rotate(sa)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop() 

  push()
  rotate(ma)
  stroke("green")
  strokeWeight(7)
  line(0,0,5,-100)
  pop() 

  push()
  rotate(ha)
  stroke("orange")
  strokeWeight(7)
  line(0,0,-60,70)
  pop() 

  push()
  noFill()
  rotate(sa)
  stroke("red")
  strokeWeight(7)
  arc(10,5,300,300,0,sa)
  pop() 

  push()
  noFill()
  rotate(sa)
  stroke("green")
  strokeWeight(7)
  arc(10,5,280,280,0,ma)
  pop() 

  push()
  noFill()
  rotate(sa)
  stroke("orange")
  strokeWeight(7)
  arc(10,-7,260,260,0,ha)
  pop() 

  drawSprites();
}