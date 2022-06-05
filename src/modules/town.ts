import {Building} from ".\\building"
export class Town{

    buildings:Building[];
    position_x:number=0
    position_y:number=0
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

    update(){
        this.buildings.forEach((building)=>building.update());
    }

    add_building(b:Building){
        this.buildings.push(b);
    }

    remove_building(b:Building){
        this.buildings.splice(this.buildings.indexOf(b),1);
    }
}