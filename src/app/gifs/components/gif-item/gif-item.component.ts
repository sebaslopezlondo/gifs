import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif-item',
  imports: [],
  templateUrl: './gif-item.component.html',
  styleUrl: './gif-item.component.css',
})
export class GifItemComponent {
  @Input() gifUrl: string = '';
}
