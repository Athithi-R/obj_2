status="";
img="";

function mainpg(){
   window.location="index.html";
}

function preload(){
  img=loadImage('kitchen.jpg');
  
}

function setup(){
   canvas=createCanvas(640,420);
   canvas.center();
   canvas.position(450,220);
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}
function draw(){
   image(img,0,0,640,420);
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}


function draw() {
  image(img, 0, 0, 640, 420);
  

  fill("#FF0000");
  text("iron kadai", 190, 95);
  noFill();
  stroke("#FF0000");
  rect(50, 100, 250, 240 );
}




