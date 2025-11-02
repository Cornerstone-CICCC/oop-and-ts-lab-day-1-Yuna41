class Animal {
  static remainingAnimals = 0

  #name
  #species
  #energy = 100
  #isAlive = true
  
  constructor(name, species){
    this.#name = name;
    this.#species = species;
    Animal.remainingAnimals ++; // When new animal is born, count plus one
  }

  get name(){
    return this.#name
  }
  set name(newName){
    this.#name = newName
  }
  get species(){
    return this.#species
  }
  set species(newSpecies){
    this.#species = newSpecies
  }
  get energy(){
    return this.#energy
  }
  set energy(newEnergy){
    this.#energy = newEnergy
  }
  get isAlive(){
    return this.#isAlive
  }
  set isAlive(value){
    this.#isAlive = value
  }

  attack(target){
    if(!this.#isAlive || !target.#isAlive){
      console.log("One of the animals has no energy left.")
      return
    }

    console.log(`${this.#name} attacks ${target.#name}!`)
    this.#energy -= 10
    target.#energy -= 10
    console.log(`${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`)

    const thisDead = this.#energy <= 0
    const targetDead = target.#energy <= 0

    if(thisDead){
      this.#isAlive = false
      Animal.remainingAnimals --;
      console.log(`${this.#name} ran out of energy!`)
    }
    if(targetDead){
      target.#isAlive = false
      Animal.remainingAnimals --;
      console.log(`${target.#name} ran out of energy!`)
    }
    if(thisDead && !targetDead){
      console.log(`${target.#name} wins! ${this.#name} loses.`)
    } else if(!thisDead && targetDead){
      console.log(`${this.#name} wins! ${target.#name} loses.`)
    } else if(thisDead && targetDead){
      console.log(`Both ${this.#name} and ${target.#name} have no energy. Nobody wins.`)
    }
  }
  eat(){
    if(!this.#isAlive){
      console.log(`${this.#name} cannot eat because it has no energy.`)
      return
    }
    this.#energy += 10
    console.log(`${this.#name} eats and gains energy!\n${this.#name}'s energy: ${this.#energy}`)
  }
}

class Bird extends Animal {
  #canFly
  constructor(name, species, canFly){
    super(name, species)
    this.#canFly = canFly
  }
  get canFly(){
    return this.#canFly
  }

  attack(target){
    if(!this.isAlive || !target.isAlive){
      console.log("One of the animals has no energy left.")
      return
    }

    console.log(`${this.name} swoops in to attack ${target.name}!`)
    this.energy -= 20
    target.energy -= 20
    console.log(`${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`)

    const thisDead = this.energy <= 0
    const targetDead = target.energy <= 0

    if(thisDead){
      this.isAlive = false
      Animal.remainingAnimals --;
      console.log(`${this.name} ran out of energy!`)
    }
    if(targetDead){
      target.isAlive = false
      Animal.remainingAnimals --;
      console.log(`${target.name} ran out of energy!`)
    }
    if(thisDead && !targetDead){
      console.log(`${target.name} wins! ${this.name} loses.`)
    } else if(!thisDead && targetDead){
      console.log(`${this.name} wins! ${target.name} loses.`)
    } else if(thisDead && targetDead){
      console.log(`Both ${this.name} and ${target.name} have no energy. Nobody wins.`)
    }
  }
}

class Mammal extends Animal {
  #furColor
  constructor(name, species, furColor){
    super(name, species)
    this.#furColor = furColor
    this.energy = 200
  }
  get furColor(){
    return this.#furColor
  }

  attack(target){
    if(!this.isAlive || !target.isAlive){
      console.log("One of the animals has no energy left.")
      return
    }

    console.log(`${this.name} lunges to attack ${target.name}!`)
    this.energy -= 50
    target.energy -= 50
    console.log(`${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`)
   
    const thisDead = this.energy <= 0
    const targetDead = target.energy <= 0

    if(thisDead){
      this.isAlive = false
      Animal.remainingAnimals --;
      console.log(`${this.name} ran out of energy!`)
    }
    if(targetDead){
      target.isAlive = false
      Animal.remainingAnimals --;
      console.log(`${target.name} ran out of energy!`)
    }
    if(thisDead && !targetDead){
      console.log(`${target.name} wins! ${this.name} loses.`)
    } else if(!thisDead && targetDead){
      console.log(`${this.name} wins! ${target.name} loses.`)
    } else if(thisDead && targetDead){
      console.log(`Both ${this.name} and ${target.name} have no energy. Nobody wins.`)
    }
  }

  eat(){
    if(!this.isAlive){
      console.log(`${this.name} cannot eat because it has no energy.`)
      return
    }
    this.energy += 20
    console.log(`${this.name} eats and gains energy!\n${this.name}'s energy: ${this.energy}`)
  }
}

class Reptile extends Animal {
  #coldBlooded
  constructor(name, species, coldBlooded){
    super(name, species)
    this.#coldBlooded = coldBlooded
  }
  get coldBlooded(){
    return this.#coldBlooded
  }

  attack(target){
    if(!this.isAlive || !target.isAlive){
      console.log("One of the animals has no energy left.")
      return
    }

    console.log(`${this.name} attacks ${target.name}!`)
    this.energy -= 30
    target.energy -= 30
    console.log(`${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`)

    const thisDead = this.energy <= 0
    const targetDead = target.energy <= 0

    if(thisDead){
      this.isAlive = false
      Animal.remainingAnimals --;
      console.log(`${this.name} ran out of energy!`)
    }
    if(targetDead){
      target.isAlive = false
      Animal.remainingAnimals --;
      console.log(`${target.name} ran out of energy!`)
    }
    if(thisDead && !targetDead){
      console.log(`${target.name} wins! ${this.name} loses.`)
    } else if(!thisDead && targetDead){
      console.log(`${this.name} wins! ${target.name} loses.`)
    } else if(thisDead && targetDead){
      console.log(`Both ${this.name} and ${target.name} have no energy. Nobody wins.`)
    }
  }

  eat(){
    if(!this.isAlive){
      console.log(`${this.name} cannot eat because it has no energy.`)
      return
    }
    this.energy += 15
    console.log(`${this.name} eats and gains energy!\n${this.name}'s energy: ${this.energy}`)
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

lion.attack(snake);
eagle.attack(snake);
