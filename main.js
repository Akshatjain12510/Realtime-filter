noseX = 0;
noseY = 0;
mustacheX = 0;
mustacheY = 0;
hatX= 0;
hatY= 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    hat= loadImage('https://i.postimg.cc/Dzh8P5b4/Purple-Hat-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);  
    video.hide() ;

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('PoseNet is initialized')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-8;
        noseY=results[0].pose.nose.y-15;
        mustacheX=results[0].pose.nose.x-15;
        mustacheY=results[0].pose.nose.y-3;
        hatX=results[0].pose.nose.x-45;
        hatY=results[0].pose.nose.y-120;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,20,20);
    image(mustache,mustacheX,mustacheY,40,30);
    image(hat,hatX,hatY,100,100);
}

function take_snapshot(){
    save('myFilterImage.png');
}