function setup() {
    var canvas = createCanvas(400, 400);
    canvas.position(570, 320);
    camera = createCapture(VIDEO);
}

//function draw() {
    //elipse(400, 400, 20);
//}

function takePicture() {
    save("picture.png");
}