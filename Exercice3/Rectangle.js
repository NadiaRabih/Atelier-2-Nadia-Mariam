export default class Rectangle{
    longueur;
    largeur;

    constructor(longueur,largeur,nom = "rectangle"){
        this.largeur=largeur;
        this.longueur=longueur;
        this.nom=nom;
    }

    affichage(){
        return "nom: "+ this.nom+" largeur: "+this.largeur+ " longueur: "+this.longueur;
    }

    surface(){
        return this.longueur*this.largeur;
    }
}




