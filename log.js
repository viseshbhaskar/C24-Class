class Log {
    constructor(x,y,height,angle) {
        var Option = {
            restitution:0.8,
            friction:0.3,
            density:1
        }

        this.body = Bodies.rectangle(x,y,20,height,Option);

        this.width = 20;

        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(myWorld,this.body);
    }
    display() {
        var pos = this.body.position;

        var angle = this.body.angle;

        angleMode(RADIANS);

        push();
        strokeWeight(3);
        stroke("green");
        translate(pos.x,pos.y)
        rotate(angle);


        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    pop();
    }
}