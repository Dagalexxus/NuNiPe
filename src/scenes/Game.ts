import { Animations } from "phaser";
import * as Animation from "../modules/Animation"
import { Player } from "../modules/Player";

export class GameScene extends Phaser.Scene{
    drawables:{positionX:number,positionY:number,texture:Animation.Animations|Animation.Textures}[]=[];
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
    createSprite(item:{positionX:number,positionY:number,texture:Animation.Animations|Animation.Textures}){
    
        console.log("creating sprite")
        var sprite=this.add.sprite(item.positionX,item.positionY,item.texture,0).setInteractive();
        Animation.spriteMap.set(item,sprite);
        console.log(item.texture);
        console.log(typeof(Animation.Animations));
        if(item.texture in Animation.Animations){
            sprite.play(item.texture)
        }
        sprite.on('pointerdown',()=>{
            switch(item.texture){
                case Animation.Animations.bomb:
                    item.texture=Animation.Animations.jump;
                    break;
                case Animation.Animations.jump:
                    item.texture=Animation.Animations.leaves;
                    break;
                case Animation.Animations.leaves:
                    item.texture=Animation.Animations.bomb;
                    break;
            };
            sprite.play(item.texture);
        });
        
    }
    addItemToScene(item:any){
        this.createSprite(item);
    }

    draw(){
        this.drawables.forEach((item)=>{
            let sprite=Animation.spriteMap.get(item);
            if(typeof sprite !=="undefined"){
                if(sprite.x!==item.positionX||sprite.y!==item.positionY){
                    sprite.setX(item.positionX);
                    sprite.setY(item.positionY);

                }
            }
        })
    }

}