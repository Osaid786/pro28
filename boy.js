class Boy{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true
        }

        this.body=Bodies.rectangle(x,y,80,10,options)
        this.width=4
        this.height=150
        
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