export class Hero {
    texture: string;
    rarity: string;
    level: number;
    costPerQuest: number;
    survivability: number;
    sex: number;
    //abilities: string[];
    name: string = "";
    namesList: any;
    constructor(texture: string) {
        this.texture = texture;
        this.rarity = this.setRarity(1); //town level nutzen
        this.level = 1;
        this.costPerQuest = this.setCost(1); //tavern level nutzen
        this.survivability = this.setSurvivability();
        this.sex = this.setSex();
        console.log(this.sex);
        //this.abilities = this.setAbilities(); //
        let loadNamesJSON = this.loadNames(); //
        loadNamesJSON.then(() => this.setName(this.sex));
        console.log("finished");
    }

    async loadNames(): Promise<boolean> {
        this.namesList = await (await fetch("../../assets/JSON/HeroNames.json")).json();
        return true;
    }
    setSurvivability(): number {
        let survivability: number;
        switch (this.rarity) {
            case "common": {
                survivability = 50;
                break;
            }
            case "uncommon": {
                survivability = 25;
                break;
            }
            case "rare": {
                survivability = 10;
                break;
            }
            case "epic": {
                survivability = 5;
                break;
            }
            default: {
                survivability = 2;
                break;
            }

        }
        return survivability;
    }
    setCost(tavernLevel: number): number {
        let cost: number;
        let rarityNumber: number;
        switch (this.rarity) {
            case "common": {
                rarityNumber = 1;
                break;
            }
            case "uncommon": {
                rarityNumber = 2;
                break;
            }
            case "rare": {
                rarityNumber = 3;
                break;
            }
            case "epic": {
                rarityNumber = 4;
                break;
            }
            default: {
                rarityNumber = 5;
                break;
            }

        }
        cost = tavernLevel * rarityNumber * 100;
        return cost;
    }
    setRarity(tavernLevel: number): string {
        let rnd: number = Math.ceil(Math.random() * 100);
        let rarityString: string;
        switch (true) {
            case (rnd < 1 * tavernLevel): {
                rarityString = "legendary";
                break;
            }
            case (rnd < 7 * tavernLevel): {
                rarityString = "epic";
                break;
            }
            case (rnd < 21 * tavernLevel): {
                rarityString = "rare";
                break;
            }
            case (rnd < 51 * tavernLevel): {
                rarityString = "uncommon";
                break;
            }
            default: {
                rarityString = "common";
                break;
            }
        }
        return rarityString;

    }

    setSex(): number {
        let rndSex: number = Math.floor(Math.random() * 2);

        return rndSex;
    }

    setName(sex: number): void {
        console.log("start meth");
        let firstNameArray: string[];
        if (sex == 0) {
            firstNameArray = this.namesList.maleNames;
            console.log(firstNameArray);
        } else {
            firstNameArray = this.namesList.femaleNames;
            console.log(firstNameArray);
        }
        let lastNameArray: string[];
        lastNameArray = this.namesList.lastNames;
        let nameOutput: string = "";
        let pickedFirstName: number = Math.floor(Math.random() * firstNameArray.length);
        let pickedLastName: number = Math.floor(Math.random() * lastNameArray.length);
        nameOutput = firstNameArray[pickedFirstName] + " " + lastNameArray[pickedLastName];
        this.name = nameOutput;

        this.namesList = null;
        console.log(this);
    }

}