import {
  IDataGifResponse,
  IGif,
  IGifResponse,
} from '../interfaces/giphy.interface';

export class GifMapper {
  static mapGiphyItemToGif(item: IDataGifResponse): IGif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(items: IDataGifResponse[]): IGif[] {
    return items.map((item) => this.mapGiphyItemToGif(item));
  }
}
