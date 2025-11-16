const professeur = {
  nom: "Karim",
  age: 45,
  cin: "AB12345",
  enseigner: function () {
    console.log("Je suis professeur " + this.nom);
  },
};

professeur.enseigner();
