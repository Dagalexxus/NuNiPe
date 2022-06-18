export class Hero {
    texture: string;
    rarity: string;
    level: number;
    cost: number;
    lethality: number;
    sex: number;
    abilities: string[];
    name: string;
    namesList:any;
    constructor(texture: string) {
        this.texture = texture;
        this.rarity = this.setRarity(1); //town level nutzen
        this.level = 1;
        this.cost = this.setCost();
        this.lethality = this.setLethality();
        this.sex = this.setSex();
        this.abilities = this.setAbilities(); //
        let loadNamesJSON = this.loadNames(); //
        loadNamesJSON.then(this.setName);
    }
    async loadNames(): Promise<boolean> {
        this.namesList  = await (await fetch("../../assets/JSON/HeroNames.json")).json();
        return true;
    }
    setRarity(townLevel: number): string {
        let rnd:number = Math.ceil(Math.random()*100);
        let rarity: string = "";
        switch(true) {
            case (rnd < 1*townLevel): {
                this.rarity = "legendary";
                break;
            }
            case (rnd < 7*townLevel): {
                this.rarity = "epic";
                break;
            }
            case (rnd < 21*townLevel): {
                this.rarity = "rare";
                break;
            }
            case (rnd < 51*townLevel): {
                this.rarity = "uncommon";
                break;
            }
            default: {
                this.rarity = "common";
                break;
            }
        }
        return rarity;
    }
    setName():void {
        this.namesList.
        this.name = "steve";
    }
    
}