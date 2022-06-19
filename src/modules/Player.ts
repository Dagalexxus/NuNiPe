import { Building } from "./Building";
import { Town } from "./Town"
import  {Animations,Textures} from "./Animation"
import { EmptyBuildingSpot } from "./EmptyBuildingSpot";
import { RessourceBuilding } from "./RessourceBuilding";
export class Player{
    
    town:Town;

    constructor(towntexture:string){
        this.town=new Town(towntexture);
        this.town.addBuilding(new EmptyBuildingSpot(50,50,Textures.emptySpot, this.town));
        this.town.addBuilding(new RessourceBuilding(150,250,Textures.tree, 1,this.town));
        this.town.addBuilding(new Building(260,270,Textures.tree,this.town));
        this.town.addBuilding(new Building(480,350,Textures.tree,this.town));
        this.town.addBuilding(new Building(370,300,Textures.house,this.town));
        this.town.addBuilding(new Building(240,210,Textures.house,this.town));
        this.town.addBuilding(new Building(290,200,Textures.house,this.town));
        this.town.addBuilding(new Building(490,250,Textures.house,this.town));
        this.town.addBuilding(new Building(490,120,Textures.house,this.town));
        this.town.buildings[1].animation=Animations.bomb;
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