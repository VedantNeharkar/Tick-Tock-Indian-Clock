function setup(){
createCanvas(420,420);
angleMode(DEGREES);
}
function draw(){

  background("Grey");


hr =  hour();
 mn = minute();
sec = second();


strokeWeight(9);
stroke("DarkOrange");
noFill();
var hand = map(sc,0,60,0,360)
arc(0,0,300,300,hand)

stroke("Green");
var hand2 = map(sc,0,60,0,360)
arc(0,0,280,280,hand2);
             


}function setup() {
  createCanvas(420,400);
  angleMode(DEGREES);
}

function draw() {

  background("grey");

  

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("green");
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("white");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(" darkorange");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("green");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("white");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("darkorange");
  line(0,0,50,0);
  pop();
  
  stroke("Blue")
  point (0,0);

  }
