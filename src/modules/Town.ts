import { GameScene } from "../scenes/Game";
import {Building} from "./Building"
import { BuildingSpot } from "./BuildingSpot";
export class Town{
    scene:GameScene;
    buildingSpots:BuildingSpot[];
    positionX:number=0
    positionY:number=0
    texture:string;
    gold:number
    wood:number
    stone:number
    food:number


    constructor(texture:string,scene:GameScene){
        this.scene =scene
        this.buildingSpots=[];
        this.gold=0;
        this.wood=0;
        this.stone=0;
        this.food=0;
        this.texture=texture;

    }

    update(time:number){
        this.buildingSpots.forEach((buildingSpot)=>buildingSpot.building?.update(time));
    }

    addBuildingSpot(posX: number, posY: number){
        this.buildingSpots.push(new BuildingSpot(this.scene,posX, posY, this));
    }

    removeBuildingSpot(b:BuildingSpot){
        this.buildingSpots.splice(this.buildingSpots.indexOf(b),1);
    }
}