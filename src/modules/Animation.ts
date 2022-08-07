import { GameObjects } from "phaser";

export enum Textures{
    house="house",
    tree="tree",
    town="town",
    emptySpot="emptySpot",
    window="window",
    xButton="xButton"
}
export var fileMapTexture:Map<string,any>=new Map<string,any>([
    ["house","assets/House.png"],
    ["tree","assets/Tree.png"],
    ["town","assets/Town.png"],
    ["emptySpot","assets/EmptySpot.png"],
    ["window","assets/Window.png"],
    ["xButton","assets/XButton.png"]
]);
export enum AnimationTextures{
    houseAnimation="HouseAnimation",
    treeAnimation="TreeAnimation",
    bombAnimation="BombAnimation"
}
export var fileMapAnimation:Map<AnimationTextures,string[]>=new Map<AnimationTextures,string[]>([
    [AnimationTextures.houseAnimation,["assets/HouseAnimation.png","assets/HouseAnimation.json"]],
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
        frames: 'HouseAnimation',
        frameRate: 20,
        repeat: 0
    };
    static animConfigTree = {
        key: 'leaves',
        frames: 'TreeAnimation',
        frameRate: 10,
        repeat: 0
    };
    static animConfigBomb={
        key: 'bomb',
        frames: 'BombAnimation',
        frameRate:20,
        repeat:0
    };
    private constructor(private readonly key: string, public readonly value: any){

    }
}
