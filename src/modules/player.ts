import { Building } from "./building";
import { Town } from "./town"
export class Player{
    
    town:Town;

    constructor(towntexture:string){
        this.town=new Town(towntexture);
        this.town.add_building(new Building(200,200,"house"));
        this.town.add_building(new Building(150,250,"house"));
        this.town.add_building(new Building(260,270,"house"));
        this.town.add_building(new Building(370,300,"tree"));
        this.town.add_building(new Building(480,350,"house"));
        this.town.add_building(new Building(290,450,"tree"));
    }

    get_drawables(){
        let result:Building[]=[];
        result.push(this.town);
        this.town.buildings.forEach(building => {
            result.push(building);
        });
        return result;
    }
}