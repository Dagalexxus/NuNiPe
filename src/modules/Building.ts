import { Town } from "./Town";
import  {Animations,Textures} from "../modules/Animation"

export class Building{
    positionX:number
    positionY:number
    texture:Animations|Textures
    town:Town

    constructor(posx:number,posy:number,texture:Animations|Textures, town:Town){
        this.positionX=posx;
        this.positionY=posy;
        this.texture=texture
        this.town = town;
    }

    update(time:number){
        
    }
    
}