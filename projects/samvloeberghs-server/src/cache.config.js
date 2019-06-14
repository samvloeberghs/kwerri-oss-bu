const allowedBlogPaths = [
  'posts/whats-with-the-subjects-in-rxjs5',
  'posts/better-sharing-on-social-media-platforms-with-angular-universal',
  'posts/outputting-json-ld-with-angular-universal',
  'posts/scroll-to-top-on-angular-router-navigation',
  'posts/selecting-subtitles-in-vimeo-using-javascript',
  'posts/lessons-learned-on-offline-capabilities-with-service-workers-using-workbox',
  'posts/creating-a-simple-memory-cache-for-your-angular-universal-website-or-application'
];

module.exports = {
  allowedPaths: [
    '',
    'posts',
    'kwerri',
    'talks-workshops',
    'projects',
    'about',
    ...allowedBlogPaths,
  ],
  folder: 'cache',
  type: 'memory'
};

