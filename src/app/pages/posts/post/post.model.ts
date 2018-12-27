import { SafeHtml } from '@angular/platform-browser';

export interface Post {
  title: string;
  publishDatetime: string;
  updateDatetime: string;
  img?: string;
  imgFull?: string;
  imgShare?: string;
  slug?: string;
  short?: string;
  content?: string | SafeHtml;
}
