import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GifMapper } from '../utils/gif.mapper';
import { IGif, IGifResponse } from '../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _http = inject(HttpClient);
  searchHistory = signal<Record<string, IGif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

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
        }),
        tap((gif) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: gif,
          }));
        })
      );
  }

  getHistoryGifs(query: string): IGif[] {
    return this.searchHistory()[query.toLowerCase()] || [];
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  });

  loadGifsFromLocalStorage = () => {
    const historyString = localStorage.getItem('gifs');
    if (historyString) {
      console.log(historyString);
      this.searchHistory.set(JSON.parse(historyString));
    }
  };
}
