img="";
status="";
objects=[];

function preload(){
    img=loadImage('books.jpeg');
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.position(475,275);

    cocossd=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status_button").innerHTML="Detecting Objects";
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
    objects=result;
}
function draw(){
    image(img,0,0,600,400);
    if(status!=""){
        for(z=0;z<objects.length;z++){
            percentage=floor(objects[z].confidence*100);
            fill('#23968b');
            stroke('#23968b');
            rect(objects[z].x-50,objects[z].y-80,120,30,0,10,0,0);
            noFill();
            rect(objects[z].x-50,objects[z].y-50,objects[z].width,objects[z].height);
            fill('#ffffff');
            text(objects[z].label+"  "+percentage+"%",objects[z].x-45,objects[z].y-60);
            document.getElementById("detected").innerHTML="<b>"+objects.length+"</b> objects have been detected";  
            document.getElementById("status_button").innerHTML="Objects Detected";
        }
    }
}