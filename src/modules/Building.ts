import { Town } from "./Town";
import  {Animations,Textures} from "./Animation"

export class Building{
    
    texture:Textures
    animation:Animations | null
    town:Town

    constructor(texture:Textures, town:Town){
        
        this.texture=texture;
        this.animation=null;
        this.town = town;
    }

    update(time:number){
        
    }
    
}