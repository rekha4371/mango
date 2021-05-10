class mango{
    constructor(x,y,r){
     var options = {
         restitution:0,
         friction:0.5,
         density:1,
         isStatic:true
     }

      this.x = x
      this.y = y  
      this.r = r
      this.image = loadImage("mango.png")
      this.body = Bodies.circle(this.x,this.y,this,r,options)
      World.add(world,this.body)

    }

    display(){
        var mangoA = this.body.position
        push ();
        translate (mangoA.x,mangoA.y);
        rotate (this.body.angle)
       fill (255,0,255)
       imageMode (CENTER)
       ellipseMode (CENTER)
       this.image(this.image,0,0,this.r*2,this.r*2)
       pop ();
    }
    
    
}
