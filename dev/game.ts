/// <reference path="level.ts"/>
/// <reference path="playerone.ts" />
/// <reference path="playertwo.ts" />


class Game {
    
    private score:number = 0;   
    private level:Level;
    
    private playerone:Playerone;
    private playertwo:Playertwo;
    
    private utils:Utils;
    
    private timeid:number;
    private numelements:number;
    
    constructor() {
        
        this.numelements = 0;
        this.timeid = setInterval(this.createElements.bind(this),1000); // de interval van het spammen snotwezens
        
        this.level = new Level(this); 
        
        this.playerone = new Playerone(65, 68, 87, 83); // speler nummer 1 speeltoetsen
        this.playertwo = new Playertwo(37, 39, 38, 40); // speler nummer 2 speeltoetsen
            
        this.utils = new Utils();
            
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    public updateScore(i:number){
        this.score += i; // score bijhouden
    }
    
    private gameLoop(){
        this.playerone.move();
        this.playertwo.move();
        
        this.level.update();
        this.level.draw();
        
        let hit:boolean = this.utils.objectsCollide(this.playerone, this.playertwo); //als de spelers elkaar aanraken veranderd hun blokje
               
        this.playerone.showHit(hit);
        this.playertwo.showHit(hit);
               
        //gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
     }
     
     private createElements():void {
         
         let snotspawn:Snotspawn = new Snotspawn(); //element gemaakt van snotwezens
         
         this.numelements++;
         
         // hieronder het aantal snotwezens dat gespamt gaat worden      
         if(this.numelements > 40){
             clearInterval(this.timeid);
         }
     }
} 

