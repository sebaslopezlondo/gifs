import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { IGif } from '../../interfaces/giphy.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  imports: [GifListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export default class SearchComponent {
  public gifsList = signal<IGif[]>([]);

  private _gifService = inject(GifsService);

  searchGifs(value: string) {
    console.log(value);
    this._gifService.searchGifs(value).subscribe((response) => {
      this.gifsList.set(response);
    });
  }
}
