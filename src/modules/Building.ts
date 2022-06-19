import { Town } from "./Town";
import  {Animations,Textures} from "./Animation"

export class Building{
    positionX:number
    positionY:number
    texture:Textures
    animation:Animations|undefined
    town:Town

    constructor(posx:number,posy:number,texture:Textures, town:Town){
        this.positionX=posx;
        this.positionY=posy;
        this.texture=texture;
        this.animation=undefined;
        this.town = town;
    }

    update(time:number){
        
    }
    
}