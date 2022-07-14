song ="";


function preload() {
    song = loadSound("MERA BHAI TU OFFICIAL SONG.mp3");
    song = loadSound("O MEHNDI PYAR WALI.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function SongName() {
    song.play();
}