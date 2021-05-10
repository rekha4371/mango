class Tree{
    constructor(x,y){
     var options = {
         isStatic:true
     }

      this.x = x
      this.y = y  
      this.treeWidth = 300;
      this.treeHeight = 500;
      this.image = loadImage("tree.png")
      this.body = Bodies.rectangle(this.x,this.y,this,treeWidth,this.treeHeight,options)
      World.add(world,this.body)

    }

    display(){
        var treeA = this.body.position
        push ();
        translate (treeA.x,treeA.y);
        rotate (this.body.angle)
       fill (255,0,255)
       imageMode (CENTER)
       image(this.image,0,this.treeHeight/2,this.treeWidth,this.treeHeight)
       pop ();
    }
    
    
}
