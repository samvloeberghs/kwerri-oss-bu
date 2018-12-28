import { Base } from './base';

export interface Article extends Base {
  dateCreated: string;
  datePublished: string;
  dateModified: string;
  author: Base;
  headline: any;
  image: any;
  publisher: any;
}
