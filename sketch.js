

let player1;
let player2;
let ball;

function setup() {

    createCanvas(400, 400);
    player1 = new Paddle(0);
    player2 = new Paddle(1);
    ball = new Ball();

}

function handleInput() {
    
    if (keyIsDown(39)) {
        player2.move(-3);
    }

    

    if (keyIsDown(37)) {
        player2.move(3);
    }

    if (keyIsDown(38)) {
        player1.move(-3);
    }

    if (keyIsDown(40)) {
        player1.move(3);
    }
}

function keyPressed() {
    console.log(keyCode);
}

function draw() {

    background(0)

    handleInput();

    player1.draw();
    player1.aiImpossible(ball);

    player2.draw();
    stroke(225)
    let top = line(0, 0, width, 0);
    let botton = line(0, height, width, height);
    ball.draw();

    let hitp1 = ball.collisionCheck(player1)
    let hitp2 = ball.collisionCheck(player2)

    if (hitp1 || hitp2) {
        
        ball.direction.x = -ball.direction.x;

        if (hitp1)
            ball.direction.y = player1.momentum;
        
        if (hitp2)
            ball.direction.y = player2.momentum;

    }


    ball.lineColCheck()

    if (ball.position.x > width) {
        ball.reset();
        player1.score++;
        player1.reset()
        player2.reset()
    }
    if (ball.position.x < 0) {
        ball.reset()
        player2.score++;
        player1.reset()
        player2.reset()
    } 

    line(width/2, 0, width/2, height)



}