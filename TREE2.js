class Box3{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            'friction':0.4,
        }

        this.body=Bodies.rectangle(x,y,20,10,options)
        this.width=2000
        this.height=50
        this.image=loadImage("IMAGES/tree.png")

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
       
        push();
        translate(pos.x,pos.y)
        fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();


    }
}