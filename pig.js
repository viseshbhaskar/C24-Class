class Pig {
    constructor(x,y) {
        var Option = {
            restitution:0.8,
            friction:1,
            density:1
        }

        this.body = Bodies.rectangle(x,y,50,50,Option);

        this.width = 50;

        
        this.height = 50; 
        World.add(myWorld,this.body);
    }
    display() {
        var pos = this.body.position;

        var angle = this.body.angle;

        angleMode(RADIANS);

        push();
        strokeWeight(3);
        stroke("green");
        fill("white");
        translate(pos.x,pos.y)
        rotate(angle);


        rectMode(CENTER);
        rect(0,0,50,50);
    pop();
    }
}