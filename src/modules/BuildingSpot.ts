import { Building } from "./Building";
import { Town } from "./Town";
import  {Animations,Textures,spriteMap} from "./Animation"
import { Window } from "./Window";
import { GameScene } from "../scenes/Game";

export class BuildingSpot{
    positionX: number
    positionY: number
    building: Building | null
    town: Town
    scene: GameScene
    window: Window | null = null

    constructor(scene:GameScene, posX: number, posY: number, town: Town){
        this.positionX = posX;
        this.positionY = posY;
        this.building = null;
        this.town = town;
        this.scene = scene;
    }

    onClick():void{
        console.log(this.building);
        if(this.building){
            console.log("Clearing building spot");
            this.clearBuildingSpot();
        }
        else
        {
            console.log("clicked empty building spot");
            this.window =new Window(this.scene,this.positionX,this.positionY - 20,this.windowClosingHandler,this.buildingHandler,this);

            //let building = new Building(Textures.house,this.town)
            //building.animation=Animations.jump;
            //this.setBuildingOnSpot(building);
            
        }
    }

    windowClosingHandler(){
        if (this.window){
            this.window = null;
        }
    }

    buildingHandler(numberOfBuilding:number, caller:BuildingSpot){
        if (numberOfBuilding === 0){
            console.log("building house")
            let building =  new Building(Textures.house,this.town)
            caller.setBuildingOnSpot(building);
        }
        else if (numberOfBuilding === 1){
            console.log("building tree")
            let building = new Building(Textures.tree,this.town)
            caller.setBuildingOnSpot(building);
        }
    }

    setBuildingOnSpot(building:Building):void{
        this.building = building;
        let sprite = spriteMap.get(this); 
        sprite?.setTexture(this.building.texture);
        
    }

    clearBuildingSpot():void{
        this.building = null;
        let sprite = spriteMap.get(this)
        sprite?.stop();
        sprite?.setTexture(Textures.emptySpot);
        
    }
}