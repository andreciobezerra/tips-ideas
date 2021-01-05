import applyMixins from "../lib/apply-mixins";
import Carnivore from "./Carnivore";
import Fish from "./Fish";

class Shark {
  private name;

  constructor(name: string) {
    this.name = name
  }

  getName(): void {
    console.log(`I'm  a shark and my name is ${this.name}.`);
  }
}

interface Shark extends Fish, Carnivore { }

applyMixins(Shark, [Fish, Carnivore])

export default Shark