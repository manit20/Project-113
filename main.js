function setup(){
    canvas = createCanvas(640, 450);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot(){
    save("Image.png");
}

function draw(){
    image(video, 220, 150, 220, 200);

    fill(0, 0, 255)
    stroke(0, 0, 255);
    circle(180, 100, 60);
    circle(480, 100, 60);
    circle(180, 400, 60);
    circle(480, 400, 60);

    fill(0, 255, 255);
    stroke(0, 255, 255);
    rect(210, 90, 240, 20);
    rect(210, 390, 240, 20);
    rect(170, 130, 20, 240);
    rect(470, 130, 20, 240);
}

