import { Town } from "./Town";

export class Building{
    positionX:number
    positionY:number
    texture:string
    town:Town

    constructor(posx:number,posy:number,texture:string, town:Town){
        this.positionX=posx;
        this.positionY=posy;
        this.texture=texture
        this.town = town;
    }

    update(time:number){
        
    }
    
}