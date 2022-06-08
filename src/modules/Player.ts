import { Building } from "./Building";
import { Town } from "./Town"
export class Player{
    
    town:Town;

    constructor(townTexture:string){
        this.town=new Town(townTexture);
        this.town.addBuilding(new Building(200,200,"houseAnimation"));
        this.town.addBuilding(new Building(150,250,"houseAnimation"));
        this.town.addBuilding(new Building(260,270,"houseAnimation"));
        this.town.addBuilding(new Building(480,350,"house"));
        this.town.addBuilding(new Building(370,300,"treeAnimation"));
        this.town.addBuilding(new Building(240,210,"treeAnimation"));
        this.town.addBuilding(new Building(290,200,"treeAnimation"));
        this.town.addBuilding(new Building(490,250,"treeAnimation"));
        this.town.addBuilding(new Building(490,120,"treeAnimation"));
    }

    getDrawables(){
        let result:Building[]=[];
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