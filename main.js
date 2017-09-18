//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/
// Dog Constructor & Prototype
function Dog(name, status, hungry) {
  this.name = name
  this.status = status
  this.hungry = hungry
}
// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog('sadie', 'normal', false)
sadie.owner = "mason"
sadie.color = "black"

const moonshine = new Dog('moonshine', 'normal', true)
const atticus = new Dog('atticus')
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(name, pet, feed, cool) {
  this.name = name
  this.pet = function(dogName) {
    return dogName.status = "happy"
  }
  this.feed = function(dogName) {
    return dogName.hungry = false
  }
  this.cool = true
}

// Instances of Human
// Needed: mason, julia
const mason = new Human("mason")
const julia = new Human("julia")
mason.cool = false
