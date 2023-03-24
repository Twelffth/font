leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(260,300);
    video.position(0,-60)

    canvas = createCanvas(550,400);
    canvas.position(870,100);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}


function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}

function draw(){
    background("#d8d3d0");
    document.getElementById("font_size").innerHTML = "Size of the heart is  ~  "+difference+"px";
    textSize(difference);
    fill("#3c3c3c");
    text('❤︎',50,400);
}
