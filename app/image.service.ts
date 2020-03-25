import { Injectable } from '@angular/core'

@Injectable()

export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = images.slice(0)
  }

  getImage(id: number) {
    return images.slice(0).find(image => image.id == id)
  }
}

const images = [
  {"id": 1, "category":"all", "caption":"asdas", "url":"assets/img/book1.jpg"},
  {"id": 2, "category":"boat", "caption":"wewe", "url":"assets/img/book2.jpg"},
  {"id": 3, "category":"campaign", "caption":"erwer", "url":"assets/img/book3.jpg"},
  {"id": 4, "category":"library", "caption":"etrt", "url":"assets/img/book4.jpg"},
  {"id": 5, "category":"all", "caption":"gtyt", "url":"assets/img/book5.jpg"},
  {"id": 6, "category":"boat", "caption":"htryt", "url":"assets/img/book6.jpg"},
  {"id": 7, "category":"campaign", "caption":"wer", "url":"assets/img/book7.jpg"},
  {"id": 8, "category":"library", "caption":"yytt", "url":"assets/img/book8.jpg"},
  {"id": 9, "category":"boat", "caption":"hjgjh", "url":"assets/img/book9.jpg"},
  {"id": 10, "category":"boat", "caption":"qwewqe", "url":"assets/img/book10.jpg"}
]
