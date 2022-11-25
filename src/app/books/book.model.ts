export class Book {



  public title: string;
  public imagePath: string;
  public author: string;
  public wishlist?: boolean;
  public category? : [];

  constructor(title: string, imagePath: string, author: string, wishlist?: boolean, category?: []) {
    this.title = title;
    this.imagePath = imagePath;
    this.author = author;
    this.wishlist = wishlist;
    this.category = category;
  }

}
