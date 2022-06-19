import { Animations } from "phaser";
import * as Animation from "../modules/Animation"
import { EmptyBuildingSpot } from "../modules/EmptyBuildingSpot";
import { Player } from "../modules/Player";
import { RessourceBuilding } from "../modules/RessourceBuilding";
import { Town } from "../modules/Town";

export class GameScene extends Phaser.Scene{
    drawables:{positionX:number,positionY:number,texture:Animation.Textures,animation:Animation.Animations}[]=[];
    player:Player;
    lastTick:number=0;
    constructor(){
        super('GameScene');
        this.player=new Player(Animation.Textures.town);
        this.drawables=(this.player.getDrawables());
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

        this.drawables.forEach((item)=>{this.createSprite(item)});
        Animation.spriteMap.get(this.player.town)?.setScale(20,10);

    }

    update(time: number, delta: number): void {
        if(time>this.lastTick+1){
            this.player.update(time);
            this.lastTick=time;
        }
        this.draw();
        
        
    }
    testcounter=0;
    createSprite(item:{positionX:number,positionY:number,texture:Animation.Textures,animation:Animation.Animations}){
        console.log(this.testcounter);
        this.testcounter++;
        var sprite=this.add.sprite(item.positionX,item.positionY,item.texture,0).setInteractive();
        Animation.spriteMap.set(item,sprite);


        if(item instanceof EmptyBuildingSpot){
            console.log("Adding event listener to empybuildingspot")
            sprite.on('pointerdown',()=>{item.onClick();});
        }
        else if(item instanceof Town){

        }
        else if(item instanceof RessourceBuilding){
            console.log("Adding event listener")
            sprite.on('pointerdown',()=>{
                switch(item.animation){
                    case Animation.Animations.bomb:
                        item.animation=Animation.Animations.jump;
                        break;
                    case Animation.Animations.jump:
                        item.animation=Animation.Animations.leaves;
                        break;
                    case Animation.Animations.leaves:
                        item.animation=Animation.Animations.bomb;
                        break;
                    default:
                };
            });
        }
        else{
            sprite.on('pointerdown',()=>{console.log("clicked")});
        }

        
    }
    
    draw(){
        this.drawables=this.player.getDrawables();
        this.drawables.forEach((item)=>{
            let sprite=Animation.spriteMap.get(item);
            if(typeof sprite !=="undefined"){
                if(sprite.x!==item.positionX||sprite.y!==item.positionY){
                    sprite.setX(item.positionX);
                    sprite.setY(item.positionY);
                }
                if(item.animation in Animation.Animations&&!sprite.anims.isPlaying){
                    sprite.play(item.animation);
                }
            }
        })
    }

}