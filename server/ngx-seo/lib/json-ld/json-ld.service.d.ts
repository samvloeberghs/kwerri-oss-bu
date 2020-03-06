export interface JsonLd {
    [param: string]: string | Object;
}
export declare class JsonLdService {
    private readonly platformId;
    private readonly doc;
    private jsonLd;
    constructor(platformId: Object, doc: any);
    setData(data: JsonLd | JsonLd[]): void;
    getObject(type: string, rawData?: JsonLd, context?: string): JsonLd;
    toJson(): string;
    private injectBrowser;
}
