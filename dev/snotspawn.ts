class Snotspawn {
    
        // om te zien of objecten elkaar raken moeten ze een public x,y,width,height hebben
        public x : number;
        public y : number;
        public width: number;
        public height: number;
            
        private div:HTMLElement;
      
    constructor() {
        this.div = document.createElement("snotspawn");
        document.body.appendChild(this.div);
  
        // random positie
        
        this.x = (Math.random() * window.innerHeight);
        this.y = (Math.random() * window.innerHeight);
        this.width = 100;
        this.height = 100;
        
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
        } else {
            
        }
    }
 }