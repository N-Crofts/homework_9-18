console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' HP in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' received a health potion and now has: ' + tamagotchi.health + ' HP');
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness + ' HP');
  }
}; //end player
// player.feedTamagotchi(Quesadillo)
// player.medicateTamagotchi(TheKingAdRock)
// player.knockOutTamagotchi(NinetiesKid)
// player.feedTamagotchi(WilfredBrimly)
