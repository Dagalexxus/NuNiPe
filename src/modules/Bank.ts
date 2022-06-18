import { TownBuilding } from "./TownBuildings";
import { Town } from "./Town";

export class Bank extends TownBuilding{
    constructor(posX: number, posY: number, texture: string, town: Town, level: number, deposit: number){
        super(posX, posY, texture, town, level);
        this.deposit = deposit;
        this.counter = 0;
    }

    deposit: number;
    counter: number;
    
    interestRate: {[level: number]:number} = {
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
    };

    depositCapacity: {[level: number]: number} = {
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
    };

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

    depositCash(cash: number): void{
        this.deposit += cash;
        this.town.gold -= cash;

        if (this.deposit > this.depositCapacity[this.level]){
            let holder = this.deposit - this.depositCapacity[this.level];
            this.deposit -= holder;
            this.town.gold += holder;
        }
    }

    withdrawCash(cash: number): void{
        if (this.deposit < cash){
            this.town.gold += this.deposit;
            this.deposit = 0;
        }
        else{
            this.deposit -= cash;
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

    update(time: number): void {
        if ( this.counter == 60 ){
            this.deposit = this.deposit * (1 + this.interestRate[this.level]);
            this.counter = 0;
        }
        else { 
            this.counter++;
        }
    }
}