import { Meta, Title } from '@angular/platform-browser';
import { SeoSocialShareData } from './interfaces/seo-social-share-data';
export declare enum NgxSeoMetaTagAttr {
    name = "name",
    property = "property"
}
export interface NgxSeoMetaTag {
    attr: NgxSeoMetaTagAttr;
    attrValue: string;
    value?: string;
}
export declare class SeoSocialShareService {
    private readonly metaService;
    private readonly titleService;
    private readonly document;
    constructor(metaService: Meta, titleService: Title, document: any);
    setData(data: SeoSocialShareData): void;
    setKeywords(keywords: string): void;
    setSection(section?: string): void;
    setTitle(title?: string): void;
    setType(type?: string): void;
    setDescription(description?: string): void;
    setImage(image?: string): void;
    setUrl(url?: string): void;
    setPublished(publishedDateString?: string): void;
    setModified(modifiedDateString?: string): void;
    setAuthor(author?: string): void;
    setTwitterSiteCreator(site?: string): void;
    setTwitterCard(card?: string): void;
    setFbAppId(appId?: string): void;
    setMetaTag(metaTag: NgxSeoMetaTag): void;
    setMetaTags(metaTags: NgxSeoMetaTag[]): void;
    setCanonicalUrl(url?: string): void;
}
