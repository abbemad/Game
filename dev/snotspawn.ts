class Snotspawn {
    
        // om te zien of objecten elkaar raken moeten ze een public x,y,width,height hebben
        public x : number;
        public y : number;
        public width: number;
        public height: number;
            
    constructor() {
        let div:HTMLElement = document.createElement("snotspawn");
        document.body.appendChild(div);
  
        // random positie
        
        let startx:number = (Math.random() * window.innerWidth);
        let starty:number = (Math.random() * window.innerHeight);      
        
        div.style.left = startx + "px";
        div.style.top = starty + "px";
        
        // random kleur
        let color:number = Math.random() * 360;
        
        div.style.webkitFilter = "hue-rotate("+color+"deg)";
        div.style.filter = "hue-rotate("+color+"deg)";
        
    }
        public showHit(hit:boolean) : void {
        if(hit){
            console.log ("Hallo");
        } else {
            
        }
    }
 }