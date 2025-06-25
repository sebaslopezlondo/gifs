import { Component, inject, OnInit, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { IGif } from '../../interfaces/giphy.interface';

@Component({
  selector: 'app-trending',
  imports: [GifListComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export default class TrendingComponent implements OnInit {
  gifsList = signal<IGif[]>([]);

  private _gifService = inject(GifsService);

  ngOnInit(): void {
    this._gifService.loadTrendingGifs().subscribe((response) => {
      this.gifsList.set(response);
    });
  }
}
