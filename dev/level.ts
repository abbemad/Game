/// <reference path="snot.ts" />
/// <reference path="bigsnot.ts" />
/// <reference path="playerone.ts" />
/// <reference path="playertwo.ts" />

class Level {
    
    public div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private game:Game;
    private snot:Snot;
    private bigsnot:Bigsnot;
    
    constructor(g:Game) {
        this.game = g;
                
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        
        this.snot = new Snot(this);
        this.bigsnot = new Bigsnot(this);
    }
    
    
    public update() : void {
        this.snot.update();
        this.bigsnot.update();
    }
    
    public draw() : void {
        this.snot.draw();
        this.bigsnot.draw();
    }
}

    // Overercing van spelers en snot etc
   