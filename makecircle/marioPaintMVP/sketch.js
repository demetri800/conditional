function setup(){
    createCanvas(500, 500)
};

function mouseDragged({clientX, clientY}){
    makeellipse(clientX, clientY);
}
function draw(){
    makeellipse(30, 75, 58, 20, 85);
}
function makeellipse(x,y){
    ellipse(x,y,50,50)

}
ellipse(x,y)

function setup(){
 createCanvas(700,700)
};

function mouseDragged({ClientX, ClientY}){
    triangle(30, 75, 58, 20, 86, 75)
}



