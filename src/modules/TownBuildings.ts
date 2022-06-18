import { Building } from "./Building"
import { Town } from "./Town"

export class TownBuilding extends Building{
    constructor(posX: number, posY: number, texture: string , town: Town, level:number){
        super(posX, posY, texture, town)
        this.level = level
    }

    level: number;
}