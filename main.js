function preload() {

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modeload);
  poseNet.on('pose',gotposes);
}

function draw() {
image(video,0,0,300,300);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

function modeload(){
    console.log("modelo cargado");
}

function gotposes(results){

}