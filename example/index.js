const { areWeMetaYet } = require('meta-scraper');

areWeMetaYet('https://reddit.com/r/worldnews')
  .then(({link, meta, title}) => [].concat(link, meta, title))
  .then((tags) => tags.sort().join('\n'))
  .then(console.log)
  .catch(console.error);
