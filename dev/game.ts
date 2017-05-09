/// <reference path="playerone.ts" />


class Game {
    
    private score:number = 0;   
   
    private playerone:Playerone;
    
    private snotspawn:Snotspawn;
    
    private utils:Utils;
    
    private timeid:number;
    private numelements:number;
    
    constructor() {
        
        this.numelements = 0;
        this.createElements();
       
        this.playerone = new Playerone(65, 68, 87, 83); // speler nummer 1 speeltoetsen
            
        this.utils = new Utils();
            
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    public updateScore(i:number){
        this.score += i; // score bijhouden
    }
    
         private createElements():void {
             
         console.log("test");

         this.snotspawn = new Snotspawn(this);
         
     }
    
    private gameLoop(){
        
        console.log(this.snotspawn.x);
        this.playerone.move();
        
        let hit:boolean = this.utils.objectsCollide(this.playerone, this.snotspawn); 
        // let hittwo:boolean = this.utils.objectsCollidetwee(this.playerone, this.snotspawn);
               
        this.playerone.showHit(hit);
        this.snotspawn.showHit(hit);
        //
               
        //gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
     }
     
     public createSnot(){
         console.log("UBERTEST");
         this.snotspawn = new Snotspawn(this);
         
     }
     
} 