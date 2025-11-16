
import Rectangle from "./Rectangle.js";
import Carre from "./Carre.js";
import Segment from "./Segment.js";

let r = new Rectangle(5, 2);
let c = new Carre(4);
let s = new Segment(0, 0, 5, 3);

console.log(r.affichage());
console.log("Surface Rectangle:", r.surface());

console.log(c.affichage());
console.log("Surface Carré:", c.surface());

console.log(s.affichage());
