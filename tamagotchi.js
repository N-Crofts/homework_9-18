console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name
        this.creatureType = creatureType
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }



//create new Tamagotchis


//test out your Tamagotchies below via console.logs
    cry() {
        this.foodInTummy--
        console.log('WAAAH!!!')
        console.log(this.name + ' has current food in tummy = ' + this.foodInTummy)
    }
    puke() {
        this.health--
        console.log('Blech! Barf!!!')
        console.log(this.name + ' has current health = ' + this.health)
    }
    yawn() {
        this.restedness--
        console.log('Yaawwnn! So tired ..ZZZzzzzz..')
        console.log(this.name + ' has current restedness = ' + this.restedness)
    }
}
