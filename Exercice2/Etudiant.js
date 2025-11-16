
const etudiant1 = {
  nom: "Taha",
  prenom: "Chairi",
  age: 31,
  cne: 1333333333,
  étudier: function() {
    console.log("Je suis étudiant " + this.nom);
  }
};
const etudiant2 = {
  nom: "Sohaib",
  prenom: "Chairi",
  age: 35,
  cne: 14444444,
  étudier: function() {
    console.log("Je suis étudiant " + this.nom);
  }
};


const etudiants = [etudiant1, etudiant2];

etudiants[0].étudier();  

etudiants.sort((a, b) =>
  a.nom.localeCompare(b.nom) ||
  a.prenom.localeCompare(b.prenom) ||
  a.age - b.age
);
console.log(etudiants);


