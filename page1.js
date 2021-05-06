img="";
status="";
function preload(){
    img=loadImage('bedroom.jpg');
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.position(475,275);

    cocossd=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status_button").innerHTML="Detection Objects";
}
function modalLoaded(){
    console.log("MODAL LOADED");
    status=true;
    cocossd.detect(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
}
function draw(){
    image(img,0,0,600,400);
}