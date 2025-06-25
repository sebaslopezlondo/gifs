import { Component } from '@angular/core';
import { GifItemComponent } from '../gif-item/gif-item.component';
import { IMAGE_URLS } from '../../constants/imageUrls.contants';

@Component({
  selector: 'app-gif-list',
  imports: [GifItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent {
  public imageUrls = IMAGE_URLS;
}
