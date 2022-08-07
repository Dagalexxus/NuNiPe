import { GameScene } from "../scenes/Game";
import { Animations, Textures } from "./Animation";
import { BuildingSpot } from "./BuildingSpot";

export class Window{

    texture: Textures
    scene: GameScene
    posX: number
    posY: number
    basicWidth: number = 100
    basicHeight: number = 50
    scalingWidth:number = 2
    scalingHeight:number = 1
    windowSprite: any
    xButtonSprite: any
    closingHandler:Function
    otherHandler: Function
    caller:BuildingSpot
    items:any[] = []

    constructor(scene: GameScene, posX: number, posY: number, closingHandler: Function, otherHandler: Function,caller:BuildingSpot){
        this.texture = Textures.window;
        this.scene = scene;
        this.posX = posX;
        this.posY = posY;
        this.windowSprite = this.scene.add.sprite(this.posX,this.posY,this.texture,0).setInteractive();
        this.windowSprite.setScale(this.scalingWidth,this.scalingHeight);
        this.xButtonSprite = this.scene.add.sprite(this.posX+0.4*this.basicWidth*this.scalingWidth,this.posY - 0.2*this.basicHeight*this.scalingHeight,Textures.xButton,0).setInteractive();
        this.xButtonSprite.on('pointerdown',()=>{this.onClickXButton();});
        this.closingHandler = closingHandler;
        this.otherHandler = otherHandler;
        let houseSprite = this.scene.add.sprite(this.posX-0.4*this.basicWidth*this.scalingWidth,this.posY,Textures.house,0).setInteractive();
        houseSprite.setScale(0.5,0.5);
        let treeSprite = this.scene.add.sprite(this.posX-0.2*this.basicWidth*this.scalingWidth,this.posY,Textures.tree,0).setInteractive();
        treeSprite.setScale(0.5,0.5)
        this.items.push(houseSprite);
        this.items.push(treeSprite);
        this.items.forEach(item=>item.on('pointerdown',()=>{this.onClickItem(this.items.indexOf(item));}));
        this.caller=caller;
    }

    onClickXButton(){
        console.log("clicked in window");
        this.xButtonSprite.destroy();
        this.windowSprite.destroy();
        this.items.forEach(item=>item.destroy());
        this.closingHandler();
    }

    onClickItem(num:number){
        this.otherHandler(num,this.caller);
    }
}