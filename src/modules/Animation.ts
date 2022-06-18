import { GameObjects } from "phaser";

export enum Textures{
    house="house",
    tree="tree",
    town="town"
}
export var fileMapTexture:Map<string,any>=new Map<string,any>([
    ["house","assets/House.png"],
    ["tree","assets/Tree.png"],
    ["town","assets/Town.png"],
]);
export enum AnimationTextures{
    houseAnimation="houseAnimation",
    treeAnimation="treeAnimation",
    bombAnimation="bombAnimation"
}
export var fileMapAnimation:Map<AnimationTextures,string[]>=new Map<AnimationTextures,string[]>([
    [AnimationTextures.houseAnimation,["assets/Animation.png","assets/Animation.json"]],
    [AnimationTextures.treeAnimation,["assets/TreeAnimation.png","assets/TreeAnimation.json"]],
    [AnimationTextures.bombAnimation,["assets/BombAnimation.png","assets/BombAnimation.json"]]
])
export var spriteMap:Map<any,Phaser.GameObjects.Sprite> = new Map<any,Phaser.GameObjects.Sprite>();
export var animationMap:Map<GameObjects.Sprite,string> = new Map<GameObjects.Sprite,string>();


export enum Animations{
    jump="jump",
    leaves="leaves",
    bomb="bomb"
}

export class AnimationConfigs{
    static animConfigHouse ={
        key: 'jump',
        frames: 'houseAnimation',
        frameRate: 20,
        repeat: -1
    };
    static animConfigTree = {
        key: 'leaves',
        frames: 'treeAnimation',
        frameRate: 10,
        repeat: -1
    };
    static animConfigBomb={
        key: 'bomb',
        frames: 'bombAnimation',
        frameRate:20,
        repeat:-1
    };
    private constructor(private readonly key: string, public readonly value: any){

    }
}
