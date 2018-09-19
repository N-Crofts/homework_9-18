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
    start(){
        console.log("Starting " + this.name);
        var self = this;
        this.hungerTimer = setInterval(function() {
          self.cry();
        }, 6000);
        this.yawnTimer = setInterval(function() {
          self.yawn();
        }, 10000);
        this.pukeTimer = setInterval(function() {
          self.puke();
        }, 25000);
      };
      stop(){
        console.log("Stopping " + this.name);
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.pukeTimer);
      }
}

//create new Tamagotchis

let Quesadillo = new Tamagotchi('Quesadillo', '')
// Quesadillo.start()

let TheKingAdRock = new Tamagotchi('TheKingAdRock', '')
// TheKingAdRock.start()

let WilfredBrimly = new Tamagotchi('WilfredBrimly', '')
// WilfredBrimly.start()

let NinetiesKid = new Tamagotchi('NinetiesKid', '')
// NinetiesKid.start()


//test out your Tamagotchies below via console.logs

// console.log(Quesadillo.cry)
// console.log(TheKingAdRock.yawn)
 
