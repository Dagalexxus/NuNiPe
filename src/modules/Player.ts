import { Building } from "./Building";
import { Town } from "./Town"
import  {Animations,Textures} from "./Animation"
import { BuildingSpot } from "./BuildingSpot";
import { RessourceBuilding } from "./RessourceBuilding";
import { GameScene } from "../scenes/Game";
export class Player{
    
    town:Town;

    constructor(towntexture:string, scene:GameScene){
        this.town = new Town(towntexture, scene);
        let tree = new RessourceBuilding( Textures.tree, 1,this.town);
        tree.animation = Animations.leaves;
        let house1 =  new Building(Textures.house,this.town);
        
        this.town.addBuildingSpot(350,150);
        this.town.buildingSpots[0].setBuildingOnSpot(tree);

        this.town.addBuildingSpot(140,150);
        this.town.buildingSpots[1].setBuildingOnSpot(house1);

        this.town.addBuildingSpot(250,150);
        this.town.addBuildingSpot(300,250);
        this.town.addBuildingSpot(430,250);
        
    }

    getBuildingSpots(){
        let result:any[]=[];
        this.town.buildingSpots.forEach(buildingSpot => {
            result.push(buildingSpot);  
        });
        return result;
    }

    update(time:number){
        this.town.update(time);
    }
}