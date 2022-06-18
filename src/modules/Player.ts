import { Building } from "./Building";
import { Town } from "./Town"
export class Player{
    
    town:Town;

    constructor(towntexture:string){
        this.town=new Town(towntexture);
        this.town.addBuilding(new Building(200,200,"houseanimation", this.town));
        this.town.addBuilding(new Building(150,250,"houseanimation", this.town));
        this.town.addBuilding(new Building(260,270,"houseanimation",this.town));
        this.town.addBuilding(new Building(480,350,"house",this.town));
        this.town.addBuilding(new Building(370,300,"treeanimation",this.town));
        this.town.addBuilding(new Building(240,210,"treeanimation",this.town));
        this.town.addBuilding(new Building(290,200,"treeanimation",this.town));
        this.town.addBuilding(new Building(490,250,"treeanimation",this.town));
        this.town.addBuilding(new Building(490,120,"treeanimation",this.town));
    }

    getDrawables(){
        let result:any[]=[];
        result.push(this.town);
        this.town.buildings.forEach(building => {
            result.push(building);
        });
        return result;
    }

    update(time:number){
        this.town.update(time);
    }
}