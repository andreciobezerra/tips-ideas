import Bat from "./classes/Bat";
import Lion from "./classes/Lion";
import Shark from "./classes/Shark";

const simba = new Lion("Simba");
simba.getName();
simba.eat();
simba.locomove();

console.log("\n");

const shacko = new Shark("Sharko");
shacko.getName();
shacko.eat();
shacko.locomove();

console.log("\n");

const vlad = new Bat("Vlad");
vlad.getName();
vlad.eat();
vlad.locomove();