
let movement;
let position;
let camera;

function setup() {

    createCanvas(860, 520, WEBGL);
    movement = createVector();
    position = createVector();
    camera = createCamera();

}

function handleInput() {

    if (keyIsDown(65)) {
        movement.x += 0.1;
    } else if (keyIsDown(68)) {
        movement.x -= 0.1;
    } else {
        movement.x = 0;
    }

    if (keyIsDown(87)) {
        movement.y += 0.1;
    } else if (keyIsDown(83)) {
        movement.y -= 0.1;
    } else {
        movement.y = 0;
    }

    clampvector(movement, -1, 1);

}

function clampvector(vec, min, max) {
    if (vec.y > max) {
        vec.y = max;
    } 

    if (vec.y < min) {
        vec.y = min;
    }

    if (vec.x > max) {
        vec.x = max;
    } 

    if (vec.x < min) {
        vec.x = min;
    }

    if (vec.z > max) {
        vec.z = max;
    }

    if (vec.z < min) {
        vec.z = min;
    }

}

function handleMovement() {

    position.x += movement.x;
    position.y += movement.y;

    camera.move(-movement.x, movement.z, -movement.y)

    camera.tilt(movedY * 0.001)
    camera.pan(-movedX * 0.001 )
    
}

function keyPressed() {
    console.log(keyCode);
    if (keyCode == 70) {
        requestPointerLock();
    } 
}

function draw() {

    //orbitControl();

    handleInput();
    handleMovement();

    background(117);

    box(100)



    //console.log(prevmouse); 
    //console.log(mouse);



}