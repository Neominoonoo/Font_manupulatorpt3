noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 100);

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log("Model has loaded,");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Wrist X = "+rightWristX+" Wrist Y = "+leftWristX);

    }
}
function draw(){
    background('cream');
    textSize(difference);
    fill('coral');
    text('Neomi', 50, 400);

}