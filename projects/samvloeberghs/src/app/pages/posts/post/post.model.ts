import { SafeHtml } from '@angular/platform-browser';

export interface Post {
  title: string;
  publishDatetime: string;
  updateDatetime: string;
  img?: string;
  imgShare?: string;
  slug?: string;
  short?: string;
  author?: string;
  section?: string;
  content?: string | SafeHtml;
  hidden?: boolean;
}
