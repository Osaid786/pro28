class Box{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            'restitution':0.3,
            'friction':10,
            'density': 0.9
        }

        this.body=Bodies.rectangle(x,y,1800,10,options)
        this.width=9800
        this.height=40
        
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
        pop();


    }
}