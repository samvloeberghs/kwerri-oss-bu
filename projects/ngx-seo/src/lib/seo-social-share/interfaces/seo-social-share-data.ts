export interface SeoSocialShareData {
  title?: string;
  keywords?: string;
  description?: string;
  image?: string;
  imageAuxData?: ImageAuxData;
  url?: string;
  type?: string;
  author?: string;
  section?: string;
  published?: string;
  modified?: string;
}

export interface ImageAuxData {
  width?: number;
  height?: number;
  secureUrl?: string;
  mimeType?: string;
  alt?: string;
}
