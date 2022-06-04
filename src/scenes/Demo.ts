export class Demo extends Phaser.Scene{
    constructor(){
        super('GameScene')
    }
    preload ()
    {
      this.load.image("house","assets/house.png")
    }

    create ()
    {
        
        var house = this.physics.add.image(600, 200, 'house');
        house.setVelocity(100, 200);
        house.setBounce(1, 1);
        house.setCollideWorldBounds(true);

    }

    update(time: number, delta: number): void {
        
    }

}