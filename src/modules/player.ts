import { Building } from "./building";
import { Town } from "./town"
export class Player{
    
    town:Town;

    constructor(towntexture:string){
        this.town=new Town(towntexture);
        this.town.add_building(new Building(200,200,"houseanimation"));
        this.town.add_building(new Building(150,250,"houseanimation"));
        this.town.add_building(new Building(260,270,"houseanimation"));
        this.town.add_building(new Building(480,350,"house"));
        this.town.add_building(new Building(370,300,"treeanimation"));
        this.town.add_building(new Building(240,210,"treeanimation"));
        this.town.add_building(new Building(290,200,"treeanimation"));
        this.town.add_building(new Building(490,250,"treeanimation"));
        this.town.add_building(new Building(490,120,"treeanimation"));
    }

    get_drawables(){
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