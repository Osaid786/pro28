class mango{
    constructor(x,y,radius){
        var options = {
            'isStatic': true,
            'friction': 0.4,
            'density': 1.2
           
        }
        this.image = loadImage("IMAGES/mango.png");
        this.body = Bodies.circle(x,y,30,options)
        this.radius = 50
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("orange")
        circle(pos.x,pos.y,this.radius)
        pop()
    }
}