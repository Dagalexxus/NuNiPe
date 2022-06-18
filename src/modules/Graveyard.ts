import { TownBuilding } from "./TownBuildings";
import { Town } from "./Town"

export class Graveyard extends TownBuilding{
    constructor(posX: number, posY: number, texture: string, town: Town, level: number, listOfFallenHeroes: string[]){
        super(posX, posY, texture, town, level);
        this.listOfFallenHeroes = listOfFallenHeroes;

    }

    listOfFallenHeroes: string[];

    buildcostPerLevel: {[level: number]: number} = {
        1: 1,
    }

    oneMoreDoomed(){
        
    }//define input as a hero from the current hero list and add some details to the graveyard

    levelUp(): void {
        if (this.town.wood >= (this.buildcostPerLevel[this.level+1]) && this.town.stone >= (this.buildcostPerLevel[this.level+1]) && this.town.gold >= this.buildcostPerLevel[this.level+1] && this.level < 1){
            this.town.wood -= this.buildcostPerLevel[this.level+1];
            this.town.stone -= this.buildcostPerLevel[this.level+1];
            this.town.gold -= this.buildcostPerLevel[this.level+1]
            this.level++;
        }
    }
}