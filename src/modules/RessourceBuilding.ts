import {Building} from "./Building"
import {Town} from "./Town"

export class RessourceBuilding extends Building{
    readonly capacity: {[level:number]: number} = {
        1: 1000,
        2: 2000,
        3: 3000,
        4: 5000,
        5: 10000,
        6: 20000,
        7: 30000,
        8: 50000,
        9: 75000,
        10: 100000,
        11: 150000,
        12: 300000,
        13: 500000,
        14: 1000000,
        15: 2000000
    };

    readonly prodPerLevel: {[level:number]: number} = {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 800,
        8: 1000,
        9: 1200,
        10: 1400,
        11: 1700,
        12: 2000,
        13: 2400,
        14: 2800,
        15: 3200
    };

    readonly buildcostPerLeveL: {[level:number]: number} = {
        1: 150,
        2: 300,
        3: 700,
        4: 1400,
        5: 3000,
        6: 7000,
        7: 14000,
        8: 28000,
        9: 56000,
        10: 75000,
        11: 100000,
        12: 200000,
        13: 400000,
        14: 800000,
        15: 1200000
    };

    readonly buildtimeInSeconds: {[level:number]: number} = {
        1: 10,
        2: 30,
        3: 120,
        4: 300,
        5: 1200,
        6: 3600,
        7: 7200,
        8: 10800,
        9: 18000,
        10: 28800,
        11: 43200,
        12: 61200,
        13: 82800,
        14: 108000,
        15: 136800
    };

    level:number;
    
    constructor(posx:number,posy:number,texture:string, level:number, town:Town){
        super(posx, posy, texture,town)
        this.level = level;
    }


}