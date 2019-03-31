# ngx-seo

`ngx-seo` is a library to help generate and inject proper JSON-LD objects and Meta tags that allow for social sharing into server-side generated Angular applications using Universal.

**Important:**
In general you should only use these services when you are using Angular Universal. 
Generating meta tags and JSON-LD on the frontend is basically useless as crawlers are not able to generate and render JS heavy applications.
The only exception is the 2 round indexing mechanism that Google Search / Index leverages.  

For more info about this topic, please see the 2 blogposts mentioned below.

## Installation

To install this library run

```
$ npm install ngx-seo --save
```

## Usage

The library contains multiple services. 

### SeoSocialShareService

The service `SeoSocialShareService` can be used to set the correct meta tags for enabling social-media sharing previews.

The service is provided in the `root` module. So the only thing you need to do is inject it where you need it. 
After that you can use the provided interface `SeoSocialShareData` and the `setData` method to pass in your data.

```angular2
constructor(
    private readonly seoSocialShareService: SeoSocialShareService,
) {
  const seoData: SeoSocialShareData = {
    title: ''
    description: ''
    image: '',
    ...
  };
  this.seoSocialShareService.setData(seoData);
}
```

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

In the server module `app.server.module.ts`, where you typically import the `app.module.ts`, you have to import the `ServerJsonLdModule`.
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
export class AppServerModule {
}
```

Now, just as the `SeoSocialShareService`, you can inject the `JsonLdService`, to set your data. For more details about the structure of the JSON-LD data, please see below.

```angular2
constructor(
    private readonly jsonLdService: JsonLdService,
) {
  const jsonLd = {
    name: '',
    url: '',
  };
  this.jsonLdService.setData('Website', jsonLd);
}
```

## More information

Getting SEO, social-media sharing-previews and JSON-LD right can be tricky with Angular (and other SPA frameworks).
Please see the blogposts for more detailed explanations:

- https://samvloeberghs.be/posts/outputting-json-ld-with-angular-universal
- https://samvloeberghs.be/posts/better-sharing-on-social-media-platforms-with-angular-universal

