import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from  '../image.service'
import { ImageFilterPipe } from  '../filter.pipe'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  title = "Recent Photos"
  visibleImages = []
  @Input() filterBy? : string = "all"

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
