import { Component, Input, signal } from '@angular/core';
import { GifItemComponent } from '../gif-item/gif-item.component';
import { IGif } from '../../interfaces/giphy.interface';

@Component({
  selector: 'app-gif-list',
  imports: [GifItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class GifListComponent {
  @Input() gifsList: IGif[] = [];
}
