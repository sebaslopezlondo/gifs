import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GifMapper } from '../utils/gif.mapper';
import { IGif, IGifResponse } from '../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _http = inject(HttpClient);

  loadTrendingGifs(): Observable<IGif[]> {
    return this._http
      .get<IGifResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .pipe(
        map((response) => {
          return GifMapper.mapGiphyItemsToGifArray(response.data);
        })
      );
  }

  searchGifs(query: string): Observable<IGif[]> {
    return this._http
      .get<IGifResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map((response) => {
          return GifMapper.mapGiphyItemsToGifArray(response.data);
        })
      );
  }
}
