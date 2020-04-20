var drops1= [];
var drops2 = [];

function setup(){
    createCanvas(400,400);
    for (var i=0; i<1000; i++){
    drops.push(new Drop1());
    }
    for (var i=0; i<1000; i++){
    drops2.push(new Drop2());
    }

}

function draw(){
    background(100);
    for (var i=0; i<1000; i++){
    drops1[i].show();
    drops1[i].update();
    }

    for (var i=0; i<1000; i++){
    drops2[i].show();
    drops2[i].update();
    }
   
}