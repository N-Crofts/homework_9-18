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

//create new Tamagotchis
let Quesadillo = new Tamagotchi()
let TheKingAdRock = new Tamagotchi()

//test out your Tamagotchies below via console.logs
 
