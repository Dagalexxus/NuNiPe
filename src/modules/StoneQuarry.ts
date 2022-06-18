import {RessourceBuilding} from "./RessourceBuilding";
import { Town } from "./Town";

export class LumberCamp extends RessourceBuilding{
    constructor(posX:number, posY:number, texture:string, level:number, town:Town){
        super(posX, posY, texture, level, town)
    }

    update(time: number): void {
        this.town.stone += ((this.prodPerLevel[this.level])/60);
        if (this.town.stone > this.capacity[this.level]){
            this.town.stone = this.capacity[this.level]
        }
    }

    levelUp(): void {
        if (this.town.wood >= (this.buildcostPerLeveL[this.level+1]) && this.town.stone >= (this.buildcostPerLeveL[this.level+1]) && this.town.gold >= this.buildcostPerLeveL[this.level+1] && this.level < 15){
            this.town.wood -= this.buildcostPerLeveL[this.level+1];
            this.town.stone -= this.buildcostPerLeveL[this.level+1];
            this.town.gold -= this.buildcostPerLeveL[this.level+1]
            this.level++;
        }
    }
}