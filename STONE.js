class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            
        }
        
        this.body=Bodies.circle(x,y,20)
        this.radius=20
        this.image=loadImage("IMAGES/stone.png")
        World.add(world,this.body)

    }

    display(){
        var pos=this.body.position

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("black")
        imageMode(CENTER)
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}