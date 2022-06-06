import { Player } from "../modules/player";

export class GameScene extends Phaser.Scene{
    drawables:{position_x:number,position_y:number,texture:string}[]=[];
    spritemap:Map<any,Phaser.GameObjects.Sprite>=new Map<any,Phaser.GameObjects.Sprite>();
    player:Player;
    lasttick:number=0;
    animConfigHouse = {
        key: 'jump',
        frames: 'houseanimation',
        frameRate: 20,
        repeat: -1
    };
    animConfigTree = {
        key: 'leaves',
        frames: 'treeanimation',
        frameRate: 10,
        repeat: -1
    };
    
    constructor(){
        super('GameScene');
        this.player=new Player("town");
        this.drawables=(this.player.get_drawables());
    }
    preload ()
    {
      this.load.image("house","assets/house.png");
      this.load.image("tree","assets/tree.png");
      this.load.image("town","assets/town.png");
      this.load.atlas("houseanimation","assets/animation.png","assets/animation.json");
      this.load.atlas("treeanimation","assets/treeanimation.png","assets/treeanimation.json");

    }

    create ()
    {
        this.anims.create(this.animConfigHouse);
        this.anims.create(this.animConfigTree);

        this.drawables.forEach((item)=>{this.create_sprite(item)});
        this.spritemap.get(this.player.town)?.setScale(20,10);

    }

    update(time: number, delta: number): void {
        if(time>this.lasttick+1){
            this.player.update(time);
            this.lasttick=time;
        }
        this.draw();
        
        
    }
    create_sprite(item:{position_x:number,position_y:number,texture:string}){
    
        console.log("creating sprite")
        var sprite=this.add.sprite(item.position_x,item.position_y,item.texture,0);
        this.spritemap.set(item,sprite);
        if(item.texture==="houseanimation"){
            sprite.play("jump");
        }
        else if (item.texture==="treeanimation"){
            sprite.play("leaves");
            console.log(this.spritemap);
        }
        
    }
    add_item_to_scene(item:any){
        this.create_sprite(item);
    }

    draw(){
        this.drawables.forEach((item)=>{
            let sprite=this.spritemap.get(item);
            if(typeof sprite !=="undefined"){
                if(sprite.x!==item.position_x||sprite.y!==item.position_y){
                    sprite.setX(item.position_x);
                    sprite.setY(item.position_y);

                }
            }
        })
    }

}