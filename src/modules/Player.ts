import { Building } from "./Building";
import { Town } from "./Town"
import  {Animations,Textures} from "../modules/Animation"
export class Player{
    
    town:Town;

    constructor(towntexture:string){
        this.town=new Town(towntexture);
        this.town.addBuilding(new Building(200,200,Animations.bomb, this.town));
        this.town.addBuilding(new Building(150,250,Animations.jump, this.town));
        this.town.addBuilding(new Building(260,270,Animations.jump,this.town));
        this.town.addBuilding(new Building(480,350,Animations.jump,this.town));
        this.town.addBuilding(new Building(370,300,Animations.leaves,this.town));
        this.town.addBuilding(new Building(240,210,Animations.leaves,this.town));
        this.town.addBuilding(new Building(290,200,Animations.leaves,this.town));
        this.town.addBuilding(new Building(490,250,Animations.leaves,this.town));
        this.town.addBuilding(new Building(490,120,Animations.leaves,this.town));
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