import { Town } from "./Town";
import { TownBuilding } from "./TownBuildings";

export class Marketplace extends TownBuilding{
    constructor(posX: number, posY: number, texture: string, town: Town, level: number){
        super(posX, posY, texture, town, level)
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

    sellRates: {[level: number]: number[]} = {
        1: [1],
        2: [2],
        3: [3],
        4: [4],
        5: [5],
        6: [6],
        7: [7],
        8: [8],
        9: [9],
        10: [10],
        11: [11],
        12: [12],
        13: [13],
        14: [14],
        15: [15],
    }

    exchangeWood(amount: number){
        if (amount > this.town.wood || amount < 0){
            return
        }
        else{
            let exchangeRate: number = this.sellRates[this.level][0];
            this.town.wood *= exchangeRate;
            this.town.gold /= exchangeRate
        }
    }

    exchangeStone(amount: number){
        if (amount > this.town.stone || amount < 0){
            return
        }
        else{
            let exchangeRate: number = this.sellRates[this.level][1];
            this.town.stone *= exchangeRate;
            this.town.gold /= exchangeRate
        }
    }

    exchangeFood(amount: number){
        if (amount > this.town.food || amount < 0){
            return
        }
        else{
            let exchangeRate: number = this.sellRates[this.level][2];
            this.town.food *= exchangeRate;
            this.town.gold /= exchangeRate
        }
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