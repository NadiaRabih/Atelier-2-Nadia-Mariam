//Question 1
export default function Voiture(model, marque, annee, type, carburant) {
  this.model = model;
  this.marque = marque;
  this.annee = annee;
  this.type = type;
  this.carburant = carburant;
}

//Question 2

export const listeVoitures = [
  new Voiture("LaFerrari", "Ferrari", 2015, "hypercars", "essence"),
  new Voiture("Chiron", "Bugatti", 2019, "hypercars", "essence"),
  new Voiture("Aventador", "Lamborghini", 2021, "supercar", "essence"),
  new Voiture("Urus", "Lamborghini", 2021, "SUV", "essence"),
  new Voiture("SF90 Stradale", "Ferrari", 2022, "supercar", "hybride"),
  new Voiture("Centodieci", "Bugatti", 2015, "hypercars", "essence"),
];
