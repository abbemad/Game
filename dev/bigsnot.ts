/// <reference path="gameobjects.ts" />

class Bigsnot extends Gameobjects{
    
    constructor(l:Level) {
        //string met quotes typen om de skin aan te vragen
        super(l,-10,30,200,200,"snot");
        this.level = l;
    }
    
    public update() : void {
        this.x++;
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}