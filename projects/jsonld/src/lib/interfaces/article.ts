import { Base } from './base';

export interface TechArticle extends Base {
  dateCreated: string;
  datePublished: string;
  dateModified: string;
  author: Base;
  proficiencyLevel: string;
  headline: any;
  image: any;
  publisher: any;
}
