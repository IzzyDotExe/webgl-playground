
class Paddle 
{

    constructor(playerindex) {

        this.index = playerindex;
        this.position = createVector();

        this.score = 0;

        this.position.x = (width * this.index) + (this.index? -25 : 20)
        this.position.y = height/2 - 20;

        this.momentum = 0;

        this.prevballpos = createVector();

    }

    reset() {
        this.position.y = height/2 - 20;
    }


    draw() 
    {

        fill(225);
        rect(this.position.x, this.position.y, 5, 40);

        stroke(225)
        text(this.score, this.position.x + (this.index? -30 : 30), 20)

    }

    aiImpossible(ball) {

        let dballpos = createVector(ball.position.x, ball.position.y)
        let balldelta = this.prevballpos.sub(dballpos)
        clampvector(balldelta, -ball.speed, ball.speed);
        console.log(balldelta)
        this.prevballpos = createVector(dballpos.x, dballpos.y);
        this.move(-balldelta.y)
        
    }

    move(dir) 
    {
        this.position.y += dir;

        if (dir < 0) {
            this.momentum = -1;
        } else if (dir > 0) {
            this.momentum = 1;
        }
        
        //console.log(dir)
        //console.log(this.momentum);

        if (this.position.y < 5) {
            this.position.y = 5;
        }

        if (this.position.y > height - 40) {
            this.position.y = height - 45
        }
        
    }


}