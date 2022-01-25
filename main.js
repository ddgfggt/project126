song="";
function preload() {
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
leftwristX=0;
rightwristX=0;
leftwristY=0
rightwristY=0;
function modelLoaded(){
    console.log("poseNetisloaded")
}
function gotposes(result){
        console.log(result);
        rightwristX=result[0].pose.rightWrist.x;
        rightwristY=result[0].pose.rightWrist.y;
        leftwristX=result[0].pose.leftWrist.x;
        leftwristY=result[0].pose.leftWrist.y;
        console.log("rightWristX="+rightwristX+"rightwristY="+rightwristY+"leftWristX="+leftwristX+"leftwristY"+leftwristY);
        
}