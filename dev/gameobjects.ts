class Gameobjects {
    //protected ivp private omdat je met protected wel kan gebruiken anders niet
    protected div: HTMLElement;
    
    // protected gemaakt ipv public alleen gebruiken in gameobjects
    
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;
    

    constructor(l:Game,x:number,y:number,width:number,height:number,div:string) {

        this.div = document.createElement(div);
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    public update() : void {
        this.x+=2;
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}

       // Overerving
       // Van de objecten in de game