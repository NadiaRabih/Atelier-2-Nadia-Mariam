//Question 3 part 1
import Voiture from "./Voiture.js";
export default function Hyundai(model, annee, type, carburant, serie, hybride) {
  Voiture.call(this, model, "Hyundai", annee, type, carburant);

  this.serie = serie;
  this.hybride = hybride;
}

Hyundai.prototype = Object.create(Voiture.prototype);
Hyundai.prototype.constructor = Hyundai;

Hyundai.prototype.alarmer = function () {
  console.log("Hyundai en alarme !");
};
