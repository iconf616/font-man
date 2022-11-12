
noseX = 0;
noseY=0;
difference = 0;
rightwristX= 0;
leftwristX=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose"  , gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is innitialized");
   
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX + "noseY = " +noseY);
        leftwristX = results[0].pose.leftwrist.x;
        rightwristX = results[0].pose.rightwrist.x;
        difference = floor(leftwrist-rightwrist);
        console.log("leftwrist" + leftwrist + "rightwrist = " + rightwrist + "difference = " + difference);

    }
}
function draw()
{
    background("#FFFF00");
    document.getElementById("square_sides").innerHTML="width and height of a square will be " + difference + "px";
    fill("#F90093");
    stroke("#F90093");
    square(noseX,noseY,difference);

}

