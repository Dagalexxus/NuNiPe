import { Animations } from "phaser";
import * as Animation from "../modules/Animation"
import { BuildingSpot } from "../modules/BuildingSpot";
import { Player } from "../modules/Player";
import { RessourceBuilding } from "../modules/RessourceBuilding";
import { Town } from "../modules/Town";

export class GameScene extends Phaser.Scene{
    player:Player;
    lastTick:number=0;
    constructor(){
        super('GameScene');
        this.player=new Player(Animation.Textures.town,this);
        
    }
    preload ()
    {
        Animation.fileMapTexture.forEach((path,item)=>{
            this.load.image(item,path);
        });
        Animation.fileMapAnimation.forEach((path,item)=>{
            this.load.atlas(item,path[0],path[1]);
        });
    }

    create ()
    {
        this.anims.create(Animation.AnimationConfigs.animConfigHouse);
        this.anims.create(Animation.AnimationConfigs.animConfigTree);
        this.anims.create(Animation.AnimationConfigs.animConfigBomb);

        let town= this.add.sprite(300,200,Animation.Textures.town);
        
        
        this.player.getBuildingSpots().forEach((item)=>{this.createSprite(item)});

    }

    update(time: number, delta: number): void {
        if(time>this.lastTick+1){
            this.player.update(time);
            this.lastTick=time;
        }
        this.draw();
        
        
    }
    testcounter=0;
    createSprite(spot:BuildingSpot){
        var sprite = null;
        if(spot.building){
            console.log("Creating sprite for spot with building")
            sprite=this.add.sprite(spot.positionX,spot.positionY,spot.building?.texture,0).setInteractive();
            Animation.spriteMap.set(spot,sprite);
            
            
        }
        else{
            console.log("Creating sprite for spot without building")
            sprite=this.add.sprite(spot.positionX,spot.positionY,Animation.Textures.emptySpot,0).setInteractive();
            Animation.spriteMap.set(spot,sprite);
            
        }
        sprite.on('pointerdown',()=>{spot.onClick();});
    }
    
    draw(){
        
        this.player.getBuildingSpots().forEach((spot)=>{
            let sprite=Animation.spriteMap.get(spot);
            if(typeof sprite !=="undefined"){
                if(sprite.x!==spot.positionX||sprite.y!==spot.positionY){
                    console.log(spot.positionX);
                    sprite.setX(spot.positionX);
                    sprite.setY(spot.positionY);
                }
                if(spot.building?.animation && spot.building?.animation in Animation.Animations&&!sprite.anims.isPlaying){
                    sprite.play(spot.building.animation);
                }
            }
            else {
                console.log("sprite is undefined")
            }
        })
    }

}