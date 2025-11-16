import Point from "./Point.js";

export default class Segment {
  orig;
  extrem;

  constructor(x1, y1, x2, y2) {
    this.orig = new Point(x1, y1);
    this.extrem = new Point(x2, y2);
  }

  affichage() {
    return (
      "Origine: (" +
      this.orig.affichage() +
      "), Extremite: (" +
      this.extrem.affichage() +
      ")"
    );
  }
}
