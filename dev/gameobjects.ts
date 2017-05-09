class Gameobjects {
    //protected ivp private omdat je met protected wel kan gebruiken anders niet
        // protected gemaakt ipv public alleen gebruiken in gameobjects
    
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;

    constructor(x:number,y:number,width:number,height:number) {


        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}
