export class Book {
  public title: string;
  public imagePath: string;
  public author: string;
  public wishlist?: boolean;

  constructor(title: string, imagePath: string, author: string, wishlist?: boolean) {
    this.title = title;
    this.imagePath = imagePath;
    this.author = author;
    this.wishlist = wishlist;
  }

}
