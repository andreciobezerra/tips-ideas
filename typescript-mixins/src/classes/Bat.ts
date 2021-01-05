import applyMixins from "../lib/apply-mixins";
import Animal from "./Animal";
import Carnivore from "./Carnivore";
import Mammal from "./Mammal";

class Bat extends Animal {
  private name

  constructor(name: string) {
    super()
    this.name = name
  }

  getName(): void {
    console.log(`I'm  a bat and my name is ${this.name}.`);
  }

  locomove(): void {
    console.log("I fying!")
  }
}

interface Bat extends Carnivore, Mammal { }

applyMixins(Bat, [Carnivore, Mammal]);

export default Bat;