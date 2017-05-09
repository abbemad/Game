/// <reference path="game.ts" />
/// <reference path="gameobjects.ts" />


class Snotspawn extends Gameobjects {
    
       // om te zien of objecten elkaar raken moeten ze een public x,y,width,height hebben
        private div:HTMLElement;
            
        private game:Game;
      
    constructor(g:Game) {
        super((Math.random() * window.innerHeight),(Math.random() * window.innerHeight),100,100);
        
        this.game = g;
        
        this.div = document.createElement("snotspawn");
        document.body.appendChild(this.div);
  
        // random positie

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        
        // random kleur
        let color:number = Math.random() * 360;
        
        this.div.style.webkitFilter = "hue-rotate("+color+"deg)";
        this.div.style.filter = "hue-rotate("+color+"deg)";
        
    }
        public showHit(hit:boolean) : void {
        if(hit){
            this.div.remove();
            this.game.createSnot();

            } else {
            
        }
    }
 }