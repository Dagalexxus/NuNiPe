import { Town } from "./Town";
import { TownBuilding } from "./TownBuildings";

export class Tavern extends TownBuilding{
    constructor(posX: number, posY: number, texture: string, town: Town, level: number){
        super(posX, posY, texture, town, level)
    }

    heroCapacity: {[level: number]: number} = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
    }

    buildcostPerLevel: {[level: number]: number} = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
    }

    levelUp(): void {
        if (this.town.wood >= (this.buildcostPerLevel[this.level+1]) && this.town.stone >= (this.buildcostPerLevel[this.level+1]) && this.town.gold >= this.buildcostPerLevel[this.level+1] && this.level < 15){
            this.town.wood -= this.buildcostPerLevel[this.level+1];
            this.town.stone -= this.buildcostPerLevel[this.level+1];
            this.town.gold -= this.buildcostPerLevel[this.level+1]
            this.level++;
        }
    }
}