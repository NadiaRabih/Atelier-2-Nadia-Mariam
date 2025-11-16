class Vecteur2D{
    x;
    y;
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    affichage(){
        console.log("x:"+this.x, "y:"+this.y);
    }

    add(v){
        return new Vecteur2D(v.x+this.x,v.y+this.y);
    }
}

let v=new Vecteur2D(1,3);
let v2=new Vecteur2D(1,2);
v.affichage();
v2.affichage();

console.log(v.add(v2));
//let v4=new Vecteur2D(undefined,1);
//v.affichage();






