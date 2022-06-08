import { Player } from "../modules/Player";

export class GameScene extends Phaser.Scene{
    drawables:{positionX:number,positionY:number,texture:string}[]=[];
    spriteMap:Map<any,Phaser.GameObjects.Sprite>=new Map<any,Phaser.GameObjects.Sprite>();
    player:Player;
    lastTick:number=0;
    animConfigHouse = {
        key: 'jump',
        frames: 'houseAnimation',
        frameRate: 20,
        repeat: -1
    };
    animConfigTree = {
        key: 'leaves',
        frames: 'treeAnimation',
        frameRate: 10,
        repeat: -1
    };
    
    constructor(){
        super('GameScene');
        this.player=new Player("town");
        this.drawables=(this.player.getDrawables());
    }
    preload ()
    {
      this.load.image("house","assets/House.png");
      this.load.image("tree","assets/Tree.png");
      this.load.image("town","assets/Town.png");
      this.load.atlas("houseAnimation","assets/Animation.png","assets/Animation.json");
      this.load.atlas("treeAnimation","assets/TreeAnimation.png","assets/TreeAnimation.json");

    }

    create ()
    {
        this.anims.create(this.animConfigHouse);
        this.anims.create(this.animConfigTree);

        this.drawables.forEach((item)=>{this.createSprite(item)});
        this.spriteMap.get(this.player.town)?.setScale(20,10);

    }

    update(time: number, delta: number): void {
        if(time>this.lastTick+1){
            this.player.update(time);
            this.lastTick=time;
        }
        this.draw();
        
        
    }
    createSprite(item:{positionX:number,positionY:number,texture:string}){
    
        console.log("creating sprite")
        var sprite=this.add.sprite(item.positionX,item.positionY,item.texture,0);
        this.spriteMap.set(item,sprite);
        if(item.texture==="houseAnimation"){
            sprite.play("jump");
        }
        else if (item.texture==="treeAnimation"){
            sprite.play("leaves");
            console.log(this.spriteMap);
        }
        
    }
    addItemToScene(item:any){
        this.createSprite(item);
    }

    draw(){
        this.drawables.forEach((item)=>{
            let sprite=this.spriteMap.get(item);
            if(typeof sprite !=="undefined"){
                if(sprite.x!==item.positionX||sprite.y!==item.positionY){
                    sprite.setX(item.positionX);
                    sprite.setY(item.positionY);

                }
            }
        })
    }

}