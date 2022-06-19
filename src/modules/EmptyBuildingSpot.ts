import { Building } from "./Building";
import { Town } from "./Town";
import  {Animations,Textures,spriteMap} from "./Animation"

export class EmptyBuildingSpot extends Building{
    constructor(posX:number, posY:number, texture:Textures,town:Town){
        super(posX, posY, texture, town)
    }

    onClick():void{
        console.log("clicked empty building spot")
        let newBuilding=new Building(this.positionX,this.positionY,Textures.house,this.town);
        spriteMap.set(newBuilding,spriteMap.get(this)!);
        spriteMap.delete(this);
        this.town.addBuilding(newBuilding);
        this.town.removeBuilding(this);
        spriteMap.get(newBuilding)?.setTexture(newBuilding.texture);
    }
}