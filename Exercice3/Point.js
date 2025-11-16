export default class Point {
    x;
    y;

    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }

    affichage() {
        return this.x+","+this.y;
    }
}
