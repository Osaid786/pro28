class Box2{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            
        }
        this.x=x
        this.y=y 
        this.width=450
        this.height=600
        this.thickness=10
        this.image=loadImage("IMAGES/tree.png")
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options)
        this.body1=Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,{isStatic:false})
        this.body2=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:false})

       
        

        World.add(world,this.body)
        World.add(world,this.body1)  
        World.add(world,this.body2)         
    }

    display(){
        var pos = this.body.position
       
        push()
        translate(pos.x,pos.y)
        fill("green")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop()


    }
}