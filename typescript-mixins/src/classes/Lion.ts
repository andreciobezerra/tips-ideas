import applyMixins from "../lib/apply-mixins";
import Animal from "./Animal";
import Carnivore from "./Carnivore";
import Mammal from "./Mammal";

class Lion extends Animal {
  private name

  constructor(name: string) {
    super()
    this.name = name
  }

  getName(): void {
    console.log(`I'm  a lion and my name is ${this.name}.`);
  }

  locomove(): void {
    console.log("I ruuning!")
  }
}

interface Lion extends Carnivore, Mammal { }

applyMixins(Lion, [Carnivore, Mammal]);

export default Lion;