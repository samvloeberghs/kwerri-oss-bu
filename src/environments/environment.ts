// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  facebookAppId: '663623713804818',
  url: 'http://localhost:4200',
  seo: {
    title: 'Sam Vloeberghs - Freelance Webdeveloper & Software Engineer',
    description: 'I\'m a Belgium based freelance software engineer and Internet entrepreneur, building webapplications and trying to make the world wide web a better place for you to spend your days.',
    shareImg: 'assets/share/home.jpg',
    type: 'website',
    author: 'Sam Vloeberghs',
    section: 'Webdevelopment',
    twittersitecreator: '@samvloeberghs'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
