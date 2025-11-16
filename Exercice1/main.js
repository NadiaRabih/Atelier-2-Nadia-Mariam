import Voiture from "./Voiture.js";
import { listeVoitures } from "./Voiture.js";
import Hyundai from "./Hyundai.js";
import Ford from "./Ford.js";

listeVoitures.push(
  new Hyundai("Tucson", 2018, "SUV", "essence", " Premium", false),
  new Hyundai("Ioniq 5", 2022, "electrique", "hybride", "Limited", true)
);

listeVoitures.push(
  new Ford("Mustang", 2016, "coupe", "essence", ["GPS", "clim"]),
  new Ford("Explorer", 2020, "SUV", "essence", ["clim", "camera"])
);

listeVoitures.sort((a, b) => a.annee - b.annee);

console.log("Liste des voitures triées par année :");

listeVoitures.forEach((voiture) => {
  console.log(`${voiture.marque} ${voiture.model} - ${voiture.annee}`);
});
