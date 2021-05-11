class Box {
    constructor(x,y,width,height) {
        var Option = {
            restitution:0.8,
            friction:1,
            density:1
        }

        this.body = Bodies.rectangle(x,y,width,height,Option);

        this.width = width;

        this.height = height;

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