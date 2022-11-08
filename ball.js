class Ball 
{

    constructor() {
        this.speed = 2;
        this.direction = createVector();
        this.direction.x = 1;
        this.direction.y = 0;
        this.position = createVector();
        this.position.x = width / 2
        this.position.y = height / 2
    }

    reset() {

        this.speed = 2;
        this.direction = createVector();
        this.direction.x = -1;
        this.direction.y = 0;
        this.position = createVector();
        this.position.x = width / 2;
        this.position.y = height / 2;

    }


    draw() {

        let addpos = createVector(this.direction.x, this.direction.y);
        this.position.add(addpos.mult(this.speed));
        //this.position.x = mouseX;
        //this.position.y = mouseY;
        fill(255)
        circle(this.position.x, this.position.y, 6);
        // text(`(${Math.round(this.position.x)}, ${Math.round(this.position.y)})`, this.position.x + 20, this.position.y);

    }

    lineColCheck() {

        let colide = collideLineCircle(0, 0, width, 0, this.position.x, this.position.y, 6);
        let colide2 = collideLineCircle(0, height, width, height, this.position.x, this.position.y, 6);
        
        if (colide ||  colide2) {
            this.direction.y = -this.direction.y;
        }

    }

    collisionCheck(object) {

        let hit = collideRectCircle(object.position.x, object.position.y, 5, 40, this.position.x, this.position.y, 6)
        return hit;
    }
    
}