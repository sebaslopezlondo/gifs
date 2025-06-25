export interface IGif {
  id: string;
  title: string;
  url: string;
}

export interface IGifResponse {
  data: IDataGifResponse[];
  meta: IMetaGifResponse;
  pagination: IPaginationGifResponse;
}

export interface IMetaGifResponse {
  msg: string;
  responde_id: string;
  status: number;
}

export interface IPaginationGifResponse {
  count: number;
  offset: number;
  total_count: number;
}

export interface IDataGifResponse {
  id: string;
  alt_text: string;
  bitly_url: string;
  bitly_gif_url: string;
  content_url: string;
  embed_url: string;
  images: {
    original: IImageGif;
  };
  url: string;
  title: string;
}

interface IImageGif {
  frames: string;
  hash: string;
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}
