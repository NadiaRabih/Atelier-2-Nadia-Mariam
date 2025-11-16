class Book {
  constructor(title) {
    this.title = title;
  }
}

class Library {
  constructor() {
    this.books = [
      new Book("Livre A"),
      new Book("Livre B"),
      new Book("Livre C"),
    ];
    this.categories = new Set(["Fiction", "Science", "Histoire"]);
    this.borrows = new Map();
  }

  addBookEnd(title) {
    this.books.push(new Book(title));
    this.showBooks();
  }

  addBookStart(title) {
    this.books.unshift(new Book(title));
    this.showBooks();
  }

  removeBookEnd() {
    var removed = this.books.pop();
    console.log("Supprimé du tableau : " + removed.title);
    this.showBooks();
  }

  removeBookStart() {
    var removed = this.books.shift();
    console.log("Supprimé du début : " + removed.title);
    this.showBooks();
  }

  showBooks() {
    var list = "";
    for (var i = 0; i < this.books.length; i++) {
      list += this.books[i].title;
      if (i < this.books.length - 1) list += ", ";
    }
    console.log("Livres actuels : " + list);
  }

  addCategory(name) {
    this.categories.add(name);
    this.showCategories();
  }

  removeCategory(name) {
    this.categories.delete(name);
    this.showCategories();
  }

  showCategories() {
    var list = "";
    for (var cat of this.categories) {
      if (list.length > 0) list += ", ";
      list += cat;
    }
    console.log("Catégories : " + list);
  }

  borrowBook(title, user) {
    this.borrows.set(title, user);
    this.showBorrows();
  }

  returnBook(title) {
    this.borrows.delete(title);
    this.showBorrows();
  }

  checkBorrow(title) {
    var found = false;
    for (var key of this.borrows.keys()) {
      if (key === title) found = true;
    }
    console.log(title + " est emprunté ? " + found);
  }

  showBorrows() {
    var list = "";
    for (var key of this.borrows.keys()) {
      if (list.length > 0) list += ", ";
      list += key + " → " + this.borrows.get(key);
    }
    console.log("Emprunts : " + list);
  }
}

const myLib = new Library();
myLib.showBooks();
myLib.addBookEnd("Livre X");
myLib.borrowBook("Livre A", "Mariam");
