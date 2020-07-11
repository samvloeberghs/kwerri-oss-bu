# ngx-seo

`ngx-seo` is a library to help generate and inject proper JSON-LD objects, Meta and other tags in the head that allow for social sharing into server-side generated Angular applications using Universal.

**Important:**
In general you should only use these services when you are using Angular Universal. 
Generating meta tags and JSON-LD on the frontend is basically useless as not all crawlers are able to generate and render JS heavy applications.
The only exception is the 2-round indexing mechanism that Google Search / Index leverages.  

For more info about this topic, please see the 2 blogposts mentioned below.

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
    + [SeoSocialShareService](#seosocialshareservice)
      - [Available methods:](#available-methods-)
      - [Other available methods](#other-available-methods)
      - [Setting other `<meta>` tags](#setting-other---meta---tags)
      - [Setting other, not `<meta>` tags](#setting-other--not---meta---tags)
    + [JSON-LD modules and service](#json-ld-modules-and-service)
      - [Multiple JSON-LD objects](#multiple-json-ld-objects)
* [More information](#more-information)
* [Thanks to](#thanks-to)

## Installation

To install this library with `npm` run

```
$ npm install ngx-seo --save
```
or with `yarn`
```
$ yarn add ngx-seo
```

## Usage

The library contains multiple services. The `SeoSocialShareService` and the `JsonLdService`.

### SeoSocialShareService

The service `SeoSocialShareService` can be used to set the correct meta tags for enabling social-media sharing previews and adding vital information for SEO purposes.
The service is provided in the `root` module. So the only thing you need to do is inject it where you need it.

```angular2
import { SeoSocialShareService } from 'ngx-seo';

constructor(private readonly seoSocialShareService: SeoSocialShareService) {
  ...
}
``` 

#### Available methods:

After that you can use the provided interface `SeoSocialShareData` and the `setData` method to pass in your data.

```angular2
const seoData: SeoSocialShareData = {
    title: ''
    description: ''
    image: '',
    ...
};
this.seoSocialShareService.setData(seoData);
```

**Important**: 
Using the `setData` method will reset all other data provided before. If you use the `setData` method, ensure that all the values that you want serialized as `<meta>` tags are provided:

```ts
export interface SeoSocialShareData {
  title?: string;
  keywords?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  section?: string;
  published?: string;
  modified?: string;
}
```

Or you can set the specific values value-by-value as explained below.

#### Other available methods

The other available methods are in line with the key-value pairs available in the `SeoSocialShareData` interface. 
Using a specific setter methods allows you to update/remove a specific set of meta tags.

For example, using the `setDescription(description?: string)` method will set the following meta tags
with the given description. If you want to unset them leave the parameter undefined:

- `name='twitter:description'`
- `property='og:description'`
- `name='description'`

The following methods are available, setting the listed meta & other tags:

- `setTitle(title?: string)`
    - `title`
    - `meta[name='twitter:title']`
    - `meta[name='twitter:image:alt']`
    - `meta[property='og:image:alt']`
    - `meta[property='og:title']`
    - `meta[name='title']`
    
    
- `setKeywords(keywords?: string)`
    - `meta[name='keywords']`
    
- `setDescription`
    - `meta[name='twitter:description']`
    - `meta[property='og:description']`
    - `meta[name='description']`
 
- `setUrl`
    - `meta[property='og:url']`
    
- `setImage`
    - `meta[name='twitter:image']`
    - `meta[property='og:image']`
    - `meta[property='og:image:height']`
    
- `setPublished`
    - `meta[name='article:published_time']`
    - `meta[name='publication_date']`
    
- `setModified`
    - `meta[name='article:modified_time']`
    - `meta[name='og:updated_time']`
    
- `setAuthor`
    - `meta[name='article:author']`
    - `meta[name='author']`
    
- `setSection`
    - `meta[name='article:section']`
    
- `setType`
    - `meta[property='og:type']`
    
- `setTwitterSiteCreator`
    - `meta[name='twitter:site']`
    - `meta[name='twitter:creator']`
    
- `setTwitterCard`
    - `meta[name='twitter:card']`
    
- `setFbAppId`
    - `meta[property='fb:app_id']`

#### Setting other `<meta>` tags

If you want to set, update or remove other meta tags, you can use the `setMetaTag` and `setMetaTags` methods.
These methods accept a value of type `NgxSeoMetaTag`:

```angular2
export enum NgxSeoMetaTagAttr {
  name = 'name',
  property = 'property'
}

export interface NgxSeoMetaTag {
  attr: NgxSeoMetaTagAttr;
  attrValue: string;
  value?: string;
}
```
> If you have specific meta tag or set of meta tags you want added to this library, let me know or submit a pull request!

#### Setting other, not `<meta>` tags

Some other tags in the `<head>`, like for example the `canonical link` can be relevant to SEO as well. 
These are not injected by the provided `MetaService` of Angular but can be set using the `SeoSocialShareService`.

- `setCanonicalUrl(url?: string) `
    - `link[rel='canonical']`

### JSON-LD modules and service

The `JsonLdService` is a little bit more tricky compared to the `SeoSocialShareService`. For this to work properly you need to take advantage of some DI magic.

We are starting from a typical Universal setup, where you have an `app.module.ts`, that is the root module for your browser bundle. 
In this module you have to import the `BrowserJsonLdModule`.

```angular2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserJsonLdModule } from 'ngx-seo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'your-app'}),
    BrowserTransferStateModule,
    BrowserJsonLdModule,           // <--
    CommonModule,
    ...
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
```

In the server module, `app.server.module.ts`, where you typically import the `app.module.ts`, you have to import the `ServerJsonLdModule`.
This will tell the server to inject the static version of your JSON-ld data object into the static HTML.

```angular2
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ServerJsonLdModule } from 'ngx-seo';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ServerJsonLdModule,   // <--
    ...
  ],
  bootstrap: [AppComponent],
})
export class OldAppServerModule {
}
```

Now, just as the `SeoSocialShareService`, you can inject the `JsonLdService`, to set your data. For more details about the structure of the JSON-LD data, please see below.

```angular2
constructor(private readonly jsonLdService: JsonLdService) {
  const jsonLdObject = this.jsonLdService.getObject('Website', {
    name: '',
    url: '',
  };
  this.jsonLdService.setData(jsonLdObject);
}
```

#### Multiple JSON-LD objects

It is possible to provide one or more JSON-LD objects. Just create multiple objects and pass them as an array to the service:

```angular2
const jsonLdObjectOne = this.jsonLdService.getObject('Website', { .. });
const jsonLdObjectTwo = this.jsonLdService.getObject('Person', { .. });
this.jsonLdService.setData([jsonLdObjectOne, jsonLdObjectTwo]);
```

Background info: https://stackoverflow.com/a/32954313/288606

## More information

Getting SEO, social-media sharing-previews and JSON-LD right can be tricky with Angular (and other SPA frameworks).
Please see the blogposts for more detailed explanations:

- https://samvloeberghs.be/posts/outputting-json-ld-with-angular-universal
- https://samvloeberghs.be/posts/better-sharing-on-social-media-platforms-with-angular-universal

## Thanks to

[Zama Khan Mohammed](https://medium.com/@zamamohammed) for giving feedback and thinking about improvements.
