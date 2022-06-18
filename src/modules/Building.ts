export class Building {
    positionX: number
    positionY: number
    texture: string
    constructor(posx: number, posy: number, texture: string) {
        this.positionX = posx;
        this.positionY = posy;
        this.texture = texture
    }

    update(time: number) {

    }

}