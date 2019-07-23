function setup(){
    createCanvas(600,1200) 
    background(0, 255, 0);
};

function mouseClicked({clientX, clientY}){
    //console.log('X: ', clientX, "and Y: ", clientY);
    if(clientX <= 100 && clientY <= 100){
        console.log("Are you serious!");
    }
}
function draw(){
circle(50, 50, 100);
}
//console.log("Good morning is two words, good night is one")//
