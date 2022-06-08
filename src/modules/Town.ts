import {Building} from "./Building"
export class Town{

    buildings:Building[];
    positionX:number=0
    positionY:number=0
    texture:string;
    gold:number
    wood:number
    stone:number
    food:number


    constructor(texture:string){
        this.buildings=[];
        this.gold=0;
        this.wood=0;
        this.stone=0;
        this.food=0;
        this.texture=texture;

    }

    update(time:number){
        this.buildings.forEach((building)=>building.update(time));
    }

    addBuilding(b:Building){
        this.buildings.push(b);
    }

    removeBuilding(b:Building){
        this.buildings.splice(this.buildings.indexOf(b),1);
    }
}