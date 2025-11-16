//Question 3 part 2
import Voiture from "./Voiture.js";

export default function Ford(model, annee, type, carburant, options) {
  Voiture.call(this, model, "Ford", annee, type, carburant);
  this.options = options;
}

Ford.prototype = Object.create(Voiture.prototype);
Ford.prototype.constructor = Ford;

// import { Voiture } from "./Voiture.js";

// export class Ford extends Voiture {
//   constructor(model, annee, type, carburant, options) {
//     super(model, "Ford", annee, type, carburant);
//     this.options = options;
//   }
// }
