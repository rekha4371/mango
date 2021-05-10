class stone{
    constructor(x,y,r){
     var options = {
         restitution:0,
         friction:0.5,
         density:1,
         isStatic:false
     }

      this.x = x
      this.y = y  
      this.r = r
      this.image = loadImage("stone.png")
      this.body = Bodies.circle(this.x,this.y,this,r,options)
      World.add(world,this.body)

    }

    display(){
        var treeA = this.body.position
        push ();
        translate (stoneA.x,stoneA.y);
       fill (255,0,255)
       imageMode (CENTER)
        ellipseMode (CENTER)
        image(this.image,0,0,this.r*2,this.r*2)
        pop ();
    }
    
    
}
